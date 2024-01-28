<script setup>
import 'css-doodle';
</script>

<template>
    <Transition>
        <div>
            <css-doodle click-to-update>
                @grid: 20 / 100vmax / #0a0c27;
                @content: @unicode.r(0x2500, 0x257f);
                color: hsla(@r360, 70%, 70%, @r.9);
                font-size: 8vmin;
                font-family: sans-serif;
            </css-doodle>
        </div>
    </Transition>
</template>

<style scoped>
css-doodle {
    position: absolute;
    top: 0;
    left: 0;
}

.test {
    position: absolute;
    color: #ffffff;
}
</style>