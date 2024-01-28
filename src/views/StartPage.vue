<script setup>
import CardA from '../components/CardA.vue'
import { ref, onMounted } from 'vue';

const videoEle = ref(null);

onMounted(() => {
    videoEle.value = document.querySelector('.video-background');
});

function videoControl(n){
    switch (n) {
        case 0:
            videoEle.value.currentTime = 0;
            videoEle.value.play();
            break;

        case 1:
            videoEle.value.play();
            break;

        case 2:
            videoEle.value.pause();
            break;
    
        default:
            break;
    }
}
</script>

<template>
    <transition>
        <div>
            <!-- 这个bg图，是截下面视频的第一帧制成，为了避免视频加载前的一小段空白 -->
            <div class="bg"></div>

            <!-- 视频 -->
            <div class="video-box">
                <video class="video-background" preload="auto" loop playsinline autoplay
                    src="../assets/start_video.mp4" tabindex="-1"></video>
            </div>
            <CardA @videoControl="(n) => {videoControl(n)}"/>
        </div>
    </transition>
</template>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: url("../assets/start_bg.jpg") no-repeat center center scroll;
    background-size: cover;
}

/*
    视频样式
*/
* {
    margin: 0;
    padding: 0;
}

.video-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /*进行视频裁剪*/
    overflow: hidden;
}

.video-box .video-background {
    position: absolute;
    left: 50%;
    top: 50%;
    /*保证视频内容始终居中*/
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /*保证视频充满屏幕*/
    object-fit: cover;
    min-height: 800px;
}
</style>