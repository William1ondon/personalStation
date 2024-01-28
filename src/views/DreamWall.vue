<script setup>
import { ref } from 'vue';


const x = ref(0);
const y = ref(0);
function onMousemove(e){
    x.value = e.clientX;
    y.value = e.clientY;
}
</script>

<template>
    <Transition>
        <div>
            <div 
            class="colorfulBG"
            @mousemove="onMousemove"
            >

            </div>
        </div>
    </Transition>
</template>