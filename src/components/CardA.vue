<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <!-- 控制/说明 卡片 -->
  <div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">
          <svg t="1704941879310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4269" width="50" height="50">
            <path
              d="M413.504 666.944l223.488-127.296c20.544-11.776 20.544-45.248 0-56.96l-223.488-127.36c-18.624-10.56-40.448 4.736-40.448 28.48v254.72c0 23.68 21.824 38.976 40.448 28.416z m462.656-537.856H149.312c-45.952 0-83.52 43.136-83.52 96v572.096c0 52.992 37.248 96 83.52 96H876.16c46.016 0 83.52-43.2 83.52-96V225.088c0-53.056-37.248-96-83.52-96zM233.344 797.376c0 17.728-11.968 32.128-28.224 32.128h-55.296c-15.616 0-28.224-13.632-28.224-32.128v-63.04c0-17.728 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128v63.04z m0-254.72c0 17.792-11.968 32.128-28.224 32.128h-55.296c-15.552 0-28.224-13.568-28.224-32.128v-63.04c0-17.728 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128v63.04z m0-254.656c0 17.728-11.968 32.128-28.224 32.128h-55.296c-15.552 0-28.224-13.632-28.224-32.128v-63.04c0-17.792 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128V288z m502.912 541.504H289.28V192.768h446.976v636.736z m167.552-32.128c0 17.728-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.728 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128v63.04z m0-254.72c0 17.792-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.728 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128v63.04z m0-254.656c0 17.728-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.792 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128V288z"
              fill="#ffffff" p-id="4270"></path>
          </svg>
          <strong>Hover Me</strong>
        </div>
      </div>

      <div class="front">

        <div class="card_img">
          <img src="../assets/card.jpg">
        </div>

        <div class="front-content">
          <small class="badge">
            本片摄于2023.12.29<br>
            Fear and Dreams<br>
            世界巡回演唱会--广州站
          </small>
          <div class="description">
            <div class="pfp">
              <div class="playing">
                <div class="greenline line-1"></div>
                <div class="greenline line-2"></div>
                <div class="greenline line-3"></div>
                <div class="greenline line-4"></div>
                <div class="greenline line-5"></div>
              </div>
            </div>

            <div class="video_title">
              <strong>《空 城 记》</strong>
            </div>

            <div class="title">
              <div class="buttons">
                <button class="skip-btn" @click="$emit('videoControl', 0)"><svg viewBox="0 0 16 16" class="bi bi-skip-backward-fill" fill="currentColor"
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z">
                    </path>
                  </svg></button>
                <button class="play-btn" @click="$emit('videoControl', 1)"><svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" height="20"
                    width="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z">
                    </path>
                  </svg></button>
                <button class="pause-btn" @click="$emit('videoControl', 2)"><svg viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor"
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z">
                    </path>
                  </svg>
                </button>
              </div>
              <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none"
                  font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10"
                  stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero"
                  fill="#20c997">
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  bottom: 10px;
  right: 10px;
  overflow: visible;
  width: 190px;
  height: 254px;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front,
.back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000085;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
  animation: neon1 0.5s ease-in-out infinite alternate;
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }

  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}

.description {
  position: absolute;
  left: -10px;
  bottom: 0;
  border: 1px solid #000000Df;
  width: 100%;
  padding: 10px;
  background-color: #0000009f;
  backdrop-filter: blur(5px);
}

.title {
  position: relative;
  left: 0;
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.title p {
  width: 50%;
}

.front .card_img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

/*
  播放柱状图
*/
.pfp {
  position: absolute;
  top: 12px;
  left: 33px;
  height: 40px;
  width: 40px;
  background-color: #d2d2d2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video_title {
  position: relative;
  top: 11px;
  left: 10px;
  font-size: 18px;
  height: 40px;
  max-width: 100%;
}

.playing {
  display: flex;
  position: relative;
  justify-content: center;
  gap: 1px;
  width: 30px;
  height: 20px;
}

.greenline {
  background-color: #1db954;
  height: 20px;
  width: 2px;
  position: relative;
  transform-origin: bottom;
}

.line-1 {
  animation: infinite playing 1s ease-in-out;
  animation-delay: 0.2s;
}

.line-2 {
  animation: infinite playing 1s ease-in-out;
  animation-delay: 0.5s;
}

.line-3 {
  animation: infinite playing 1s ease-in-out;
  animation-delay: 0.6s;
}

.line-4 {
  animation: infinite playing 1s ease-in-out;
  animation-delay: 0s;
}

.line-5 {
  animation: infinite playing 1s ease-in-out;
  animation-delay: 0.4s;
}

@keyframes playing {
  0% {
    transform: scaleY(0.1);
  }

  33% {
    transform: scaleY(0.6);
  }

  66% {
    transform: scaleY(0.9);
  }

  100% {
    transform: scaleY(0.1);
  }
}

.buttons {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.play-btn,
.pause-btn,
.skip-btn {
  font-size: 16px;
  color: #ffffff;
  margin-right: 8px;
  transition: transform 0.2s ease-in-out;
}

.play-btn:hover,
.pause-btn:hover,
.skip-btn:hover,
.volume-btn:hover {
  transform: scale(1.2);
}
</style>
