<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import store from './store';

const router = useRouter();

function onClickBtn(btn_event: Event) {
  console.log(store.state.mdState.isLoading);
  
  const target = (btn_event.target as HTMLElement);
  switch (target.id) {
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
    <div class="header">
      <button id="btn_r" class="btn" @click="onClickBtn">Home</button>
      <button id="btn_w" class="btn" @click="onClickBtn">William's</button>
      <button id="btn_j" class="btn" @click="onClickBtn">Jennifer's</button>
      <button id="btn_p" class="btn" @click="onClickBtn">PhotoWall</button>
      <button id="btn_d" class="btn" @click="onClickBtn">DreamWall</button>
    </div>

    <div class="loader" v-if="store.state.mdState.isLoading">
      <div class="container">
        <div class="carousel">
          <div class="love"></div>
          <div class="love"></div>
          <div class="love"></div>
          <div class="love"></div>
          <div class="love"></div>
          <div class="love"></div>
          <div class="love"></div>
        </div>
      </div>
      <div class="container">
        <div class="carousel">
          <div class="death"></div>
          <div class="death"></div>
          <div class="death"></div>
          <div class="death"></div>
          <div class="death"></div>
          <div class="death"></div>
          <div class="death"></div>
        </div>
      </div>
      <div class="container">
        <div class="carousel">
          <div class="robots"></div>
          <div class="robots"></div>
          <div class="robots"></div>
          <div class="robots"></div>
          <div class="robots"></div>
          <div class="robots"></div>
          <div class="robots"></div>
        </div>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component v-bind:is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
/*** header ***/
.header {
  position:fixed;
  top: 0;
  left: 0px;
  width: 100%;
  z-index: 999;
}

/*** button ***/
.btn {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;
  cursor: pointer;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffc506;
  transition: 0.5s ease;
}

.btn:hover {
  color: #1e1e2b;
  transition-delay: 0.5s;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #ffc506;
  transition: 0.4s ease;
  z-index: -1;
}

.btn:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}

.loader {
  display: flex;
  position: relative;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  height: 55px;
  width: 200px;
  overflow: hidden;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  align-items: center;
}

.carousel {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: absolute;
  width: 100%;
  transform-origin: center;
  animation-delay: 2s;
}

.loader .container:nth-child(3) {
  justify-content: flex-start;
  justify-items: flex-start;
  animation: scroll-up 4s infinite ease-in-out;
  animation-delay: 3s;
}

.loader .container:nth-child(2) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: scroll-down 4s infinite ease-in-out;
  animation-delay: 3s;
}

.loader .container:nth-child(1) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: scroll-down 3s infinite ease-in-out;
  animation-delay: 3s;
}

.love {
  background: red;
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 8px;
  margin: 0.8rem 4px;
  transform: rotate(45deg);
  animation-delay: 2s;
}

.love::before, .love::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
}

.love::before {
  left: -16px;
}

.love::after {
  top: -16px;
}

.death {
  display: flex;
  width: 100%;
  height: 55px;
  position: relative;
  align-items: center;
  justify-content: center;
  animation: rotation 3s infinite ease-in-out;
  animation-delay: 1s;
}

.death:after {
  content: '';
  height: 63px;
  position: absolute;
  border-left: 12px solid yellow;
  transform: rotate(45deg);
  border-radius: 8px;
  top: -4px;
}

.death:before {
  content: '';
  height: 60px;
  position: absolute;
  border-left: 12px solid orange;
  transform: rotate(-45deg);
}

.loader:hover {
  animation: none;
}

.robots {
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: space-between;
  background-color: #0abab5;
  border-radius: 0 8px 8px;
  padding: 8px;
  animation-delay: 5s;
}

.robots::after {
  content: '';
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: blink 0.5s 2 forwards;
}

.robots::before {
  content: '';
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: blink 0.5s 2 forwards;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(-150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes scroll-down {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes rotation {
  20%, 100% {
    transform: rotate(180deg);
  }
}

@keyframes blink {
  0% {
    height: 0;
  }

  20% {
    height: 12px;
  }

  100% {
    height: 12px;
  }
}
</style>
