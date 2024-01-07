import { createApp } from 'vue';
import './style.css';
import './my_animate.css';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'animate.css';

// 滚动动画 AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: false, //只展示一次动画？
    offset: 50,
    delay: 100,
    duration: 1000,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
