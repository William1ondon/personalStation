<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';
// 画图用到的变量不能用ref，否则会很卡
import * as dat from 'dat.gui';

// let animate = true;
let animationFrameId;
let ctx;
let ctx_2;

const guiParams = {
    radius: 3,
    fade: 5,
    discrete: false,
    droplets: true,
};
//dat.gui library controls
// var gui = new dat.GUI();

var droplets = true;
// gui.add(guiParams, 'radius').min(1.0).max(10.0).step(1.0);
// gui.add(guiParams, 'fade').min(1.0).max(10.0).step(1.0);
// gui.add(guiParams, 'discrete');
// gui.add(guiParams, 'droplets');
// gui.close();

let i_ = 0;
let mapind;
let a;
let b;
let data;
let frame = 0;
let new_pixel;
let cur_pixel;
//Two height maps are used to store the current and previous states of the water
//Use single array with offset
let ripplemap = [];

//Displayed image of ripples on background
let ripple;

//Dimensions of image
let width;
let height;
width = 1300;
height = 600;

//Half width and half height for displaying image centrally
let hwidth = width / 2;
let hheight = height / 2;

let oldind = width;
let newind = width * (height + 2);
//Twice the pixel count in image with 2 additional buffer rows
let size = width * (height + 2) * 2;
//Background image data
let texture;
//Wave crest highlight data
let highlights;
//Width and height of background checkerboard pattern
let rx = 50;
let ry = 50;

let x_old = -1;
let y_old = -1;

//Lemiscate variable
let t = 0;
let x_new;
let y_new;
let TWO_PI = 2 * Math.PI;

const screen_width = ref(0);
const screen_height = ref(0);

//Increase height within a radius of a specified location
function disturb(x, y, strength) {
    for (let j = y - guiParams['radius']; j < y + guiParams['radius']; j++) {
        for (let k = x - guiParams['radius']; k < x + guiParams['radius']; k++) {
            if ((j > guiParams['radius']) && (j < height - guiParams['radius']) && (k > guiParams['radius']) && (k < width - guiParams['radius'])) {
                ripplemap[oldind + (j * width) + k] += strength;
            }
        }
    }
}

//When mouse leaves window, animate a lemiscate
function animate_() {
    // animate = true;
    x_old = -1;
    y_old = -1;
}

function mouse_enter() {
    x_old = -1;
    y_old = -1;
}

function mouse_down(event) {
    let x = Math.round(event.offsetX - (canvas.width / 2 - hwidth));
    let y = Math.round(event.offsetY - (canvas.height / 2 - hheight));
    disturb(x, y, 10000);
}

function disturbLine(x_new, y_new) {

    //Bresenham's line algorithm
    //https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript
    let dx = Math.abs(x_old - x_new);
    let dy = Math.abs(y_old - y_new);
    let sx = Math.sign(x_old - x_new);
    let sy = Math.sign(y_old - y_new);
    let err = dx - dy;

    let x = x_new;
    let y = y_new;

    if (x_old > 0 && y_old > -1) {
        while (true) {
            disturb(x, y, 256);

            if ((x == x_old) && (y == y_old)) {
                break;
            }
            let e2 = err << 1;
            if (e2 > -dy) {
                err -= dy;
                x += sx;
            }
            if (e2 < dx) {
                err += dx;
                y += sy;
            }
        }
    } else {
        disturb(x, y, 256);
    }
}

function mouse_track(event) {
    // animate = false;
    x_new = Math.round(event.offsetX - (canvas.width / 2 - hwidth));
    y_new = Math.round(event.offsetY - (canvas.height / 2 - hheight));
    if (guiParams['discrete']) {
        disturb(x_new, y_new, 1024);
    } else {
        disturbLine(x_new, y_new);
    }
    x_old = x_new;
    y_old = y_new;
}

function getPos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.touches[0].clientX - rect.left,
        y: evt.touches[0].clientY - rect.top
    };
}

//********************** DRAW **********************
let lastFrame = Date.now();
let thisFrame;

function draw() {
    thisFrame = Date.now();
    //Animate lemiscate when mouse is not on window
    // if (!mobile) {
    //     //Animate lemiscate when mouse is not on window
    //     if (animate) {
    //         t += (thisFrame - lastFrame) / 600
    //         t = (t) % (TWO_PI);
    //         //Parametric equation for lemnsicate taken from:
    //         //http://mathworld.wolfram.com/Lemniscate.html
    //         //Some terms are left out
    //         x_new = Math.round(width / 2 + (width / 3 * Math.cos(t)));
    //         y_new = Math.round(height / 2 + (height / 4 * Math.sin(t) * Math.cos(t)));
    //         if (guiParams['discrete']) {
    //             disturb(x_new, y_new, 1024);
    //         } else {
    //             disturbLine(x_new, y_new, 256);
    //         }
    //         x_old = x_new;
    //         y_old = y_new;
    //     }
    // }
    //Raindrops
    if (guiParams['droplets']) {
        if (frame % 5 === 0) {
            disturb(Math.round(Math.random() * width), Math.round(Math.random() * height), Math.round(Math.random() * 1024));
        }
    }

    frame++;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    i_ = oldind;
    oldind = newind;
    newind = i_;

    i_ = 0;
    mapind = oldind;
    for (let y = 0; y < (height); y++) {
        for (let x = 0; x < (width); x++) {

            //Look at the neighbouring pixels from the previous state. Take the sum and divide by 2 (with bitshift)
            if (x > 0) {
                data = (ripplemap[mapind - width] + ripplemap[mapind + width] + ripplemap[mapind - 1] + ripplemap[mapind + 1]) >> 1;
            } else {
                //Freeze left wall so rows aren't periodic
                data = 0
            }
            //Subtract the value in the current state map
            data -= ripplemap[newind + i_];
            //Reduce the strength of the ripple by 1/32nd with bitshift
            data -= data >> (10 - guiParams['fade']);
            ripplemap[newind + i_] = data;

            //Get ripple strength difference in x and y direction
            let xoffset = (ripplemap[x - 1 + y * width] - ripplemap[x + 1 + y * width]) >> 5;
            let yoffset = (ripplemap[x + (y - 1) * width] - ripplemap[x + (y + 1) * width]) >> 5;


            //Determine which pixel to display based on the strength of ripple distortion in the region
            a = (x + xoffset) << 0;
            b = (y + yoffset) << 0;
            //bounds check
            if (a >= width) { a = width - 1; }
            if (a < 0) { a = 0; }
            if (b >= height) { b = height - 1; }
            if (b < 0) { b = 0; }

            //Pixel data is stored as (red, green, blue, alpha) values. Each pixel index is 4 addresses apart

            //The pixel to draw
            new_pixel = (a + (b * width)) << 2;
            //The pixel location to draw to
            cur_pixel = i_ << 2;

            //Copy appropriate rgb pixel values from texture to ripple image
            ripple.data[cur_pixel] = texture.data[new_pixel];
            ripple.data[cur_pixel + 1] = texture.data[new_pixel + 1];
            ripple.data[cur_pixel + 2] = texture.data[new_pixel + 2];

            //Display highlights on waves
            highlights.data[cur_pixel] = 128 + texture.data[new_pixel];
            highlights.data[cur_pixel + 1] = 128 + texture.data[new_pixel + 1];
            highlights.data[cur_pixel + 2] = 255;
            //Set transparency based on the xoffset. Zero-offset pixels will be transparent
            highlights.data[cur_pixel + 3] = xoffset << 2;

            mapind++;
            i_++;
        }
    }

    //Draw ripple data on hidden canvas
    ctx_2.putImageData(ripple, 0, 0);
    //Draw highlights data on hidden canvas next to ripple with a 10 pixel space inbetween

    ctx_2.putImageData(highlights, width + 10, 0);
    //Have highlights brighten the values underneath
    ctx.globalCompositeOperation = "lighter";

    //Draw ripple data from hidden canvas to main display canvas
    ctx.drawImage(canvas_2, 0, 0, width, height, window.innerWidth / 2 - hwidth, window.innerHeight / 2 - hheight, width, height);

    //Draw highlights data from hidden canvas to main display canvas
    ctx.drawImage(canvas_2, width + 10, 0, width, height, window.innerWidth / 2 - hwidth, window.innerHeight / 2 - hheight, width, height);

    lastFrame = thisFrame;
    animationFrameId = window.requestAnimationFrame(draw);
}

function animate_renew() {
    animationFrameId = window.requestAnimationFrame(draw);
}

let canvas;
let canvas_2;

onMounted(() => {
    canvas = document.getElementById('canvas_1');
    canvas_2 = document.getElementById('canvas_2');

    screen_height.value = document.documentElement.clientHeight;
        screen_width.value = document.documentElement.clientWidth;

        width = screen_width.value;
        height = screen_height.value;
        console.log('>>>');
        console.log(width);
        console.log(height);
        console.log('<<<');

    window.onresize = () => {
        screen_height.value = document.documentElement.clientHeight;
        screen_width.value = document.documentElement.clientWidth;
    }

    //Main display canvas
    ctx = canvas.getContext("2d");
    //Hidden canvas
    ctx_2 = canvas_2.getContext("2d");

    //Set hidden canvas to the specifed size such that it fits two images next to each other (with a gap of 10 pixels in between)
    canvas_2.width = 2 * width + 10;
    canvas_2.height = height;

    //Draw background image on hidden canvas
    ctx_2.fillStyle = '#147'
    ctx_2.fillRect(0, 0, width, height);
    let grd = ctx_2.createLinearGradient(0, 0, width, height);
    grd.addColorStop(0, 'rgb(0,255,255)');
    grd.addColorStop(0.33, 'rgb(255,125,255)');
    grd.addColorStop(0.66, 'rgb(255,255,0)');
    grd.addColorStop(1, 'rgb(0,255,255)');
    ctx_2.fillStyle = grd;
    for (let i = 0; i < width / rx; i += 2) {
        for (let j = 0; j < height / ry; j += 2) {
            ctx_2.fillRect(i * rx, j * ry, rx, ry);
        }
    }
    for (let i = 1; i < width / rx; i += 2) {
        for (let j = 1; j < height / ry; j += 2) {
            ctx_2.fillRect(i * rx, j * ry, rx, ry);
        }
    }

    //Set texture, ripple and highlights to the image data
    texture = ctx_2.getImageData(0, 0, width, height);
    ripple = ctx_2.getImageData(0, 0, width, height);
    highlights = ctx_2.getImageData(0, 0, width, height);

    //Initialise ripplemap to size
    for (let i = 0; i < size; i++) {
        ripplemap[i] = 0;
    }

    canvas.addEventListener('mouseenter', mouse_enter);
    // canvas.addEventListener('mousedown', mouse_down);
    canvas.addEventListener('mousemove', mouse_track);
    // canvas.addEventListener('mouseleave', animate_);
    // canvas.addEventListener('click', animate_renew);
    draw();
});

watch([screen_width, screen_height], ([newW, newH]) => {
    // window.cancelAnimationFrame(animationFrameId);

    // width = newW;
    // height = newH;
    // console.log(newW);
    // hwidth = width / 2;
    // hheight = height / 2;

    // oldind = width;
    // newind = width * (height + 2);
    // //Twice the pixel count in image with 2 additional buffer rows
    // size = width * (height + 2) * 2;

    // //Set hidden canvas to the specifed size such that it fits two images next to each other (with a gap of 10 pixels in between)
    // canvas_2.width = 2 * width + 10;
    // canvas_2.height = height;

    // //Draw background image on hidden canvas
    // ctx_2.fillStyle = '#147'
    // ctx_2.fillRect(0, 0, width, height);
    // let grd = ctx_2.createLinearGradient(0, 0, width, height);
    // grd.addColorStop(0, 'rgb(0,255,255)');
    // grd.addColorStop(0.33, 'rgb(255,125,255)');
    // grd.addColorStop(0.66, 'rgb(255,255,0)');
    // grd.addColorStop(1, 'rgb(0,255,255)');
    // ctx_2.fillStyle = grd;
    // for (let i = 0; i < width / rx; i += 2) {
    //     for (let j = 0; j < height / ry; j += 2) {
    //         ctx_2.fillRect(i * rx, j * ry, rx, ry);
    //     }
    // }
    // for (let i = 1; i < width / rx; i += 2) {
    //     for (let j = 1; j < height / ry; j += 2) {
    //         ctx_2.fillRect(i * rx, j * ry, rx, ry);
    //     }
    // }

    // //Set texture, ripple and highlights to the image data
    // texture = ctx_2.getImageData(0, 0, width, height);
    // ripple = ctx_2.getImageData(0, 0, width, height);
    // highlights = ctx_2.getImageData(0, 0, width, height);

    // //Initialise ripplemap to size
    // for (let i = 0; i < size; i++) {
    //     ripplemap[i] = 0;
    // }

    // animationFrameId = window.requestAnimationFrame(draw);
})
</script>

<template>
    <Transition>
        <div class="container">
            <canvas id="canvas_1" width="0" height="0"></canvas>
            <canvas id="canvas_2" width="0" height="0" hidden></canvas>
        </div>
    </Transition>
</template>

<style scoped>
body {
    background-color: #147;
    margin: 0;
    overflow: hidden;
    background-repeat: no-repeat;
}

canvas_1 { display:block; }

canvas_2 { display:block; }
</style>