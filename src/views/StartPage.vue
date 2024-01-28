<script setup>
</script>

<template>
    <!-- <transition> -->
        <div class="video-box">
            <video class="video-background" preload="auto" loop playsinline autoplay
                src="https://test-william-web.oss-cn-guangzhou.aliyuncs.com/videos/web_bg/start_bg.mp4" tabindex="-1"
                muted="muted"></video>
        </div>
    <!-- </transition> -->
</template>

<style scoped>
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