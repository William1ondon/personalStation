<script setup>
import { onMounted, ref, toRefs } from 'vue';
import WaterBackground from '../components/WaterBackground.vue'

</script>

<template>
    <Transition>
        <div>
            <WaterBackground class="water_bg"/>
        </div>
    </Transition>
</template>

<style scoped>
</style>