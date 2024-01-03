<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

function onClickBtn(btn_event) {
  switch (btn_event.target.id) {
    case 'btn_w':
      router.push({ path: '/william' });
      break;

    case 'btn_j':
      router.push({ path: '/jennifer' });
      break;

    case 'btn_p':
      router.push({ path: '/photowall' });
      break;

    case 'btn_d':
      router.push({ path: '/dreamwall' });
      break;

    case 'btn_r':
      router.push({ path: '/' });
      break;

    default:
      break;
  }
}
</script>

<template>
  <div>
    <button id="btn_w" @click="onClickBtn">button to the William's page</button>
    <button id="btn_j" @click="onClickBtn">button to the Jennifer's page</button>
    <button id="btn_p" @click="onClickBtn">button to the PhotoWall</button>
    <button id="btn_d" @click="onClickBtn">button to the DreamWall</button>
    <button id="btn_r" @click="onClickBtn">return to StartPage</button>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component v-bind:is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
