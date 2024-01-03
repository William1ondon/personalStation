<script setup>
</script>

<template>
    <transition>
        <div class="bg"></div>
    </transition>
</template>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("../assets/william_bg.jpg") no-repeat center center scroll;
    background-size: cover;
}
</style>