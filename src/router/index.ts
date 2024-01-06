import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../views/StartPage.vue';
import WilliamPage from '../views/WilliamPage.vue';
import JenniferPage from '../views/JenniferPage.vue';
import DreamWall from '../views/DreamWall.vue';
import PhotoWall from '../views/WilliamPage.vue';
import store from '../store/store';

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/start',
                name: 'startpage',
                component: StartPage,
                alias: '/'
            },
            {
                path: '/william',
                name: 'williampage',
                component: WilliamPage,
            },
            {
                path: '/jennifer',
                name: 'jenniferpage',
                component: JenniferPage,
            },
            {
                path: '/dreamwall',
                name: 'dreamwall',
                component: DreamWall,
            },
            {
                path: '/photowall',
                name: 'photowall',
                component: PhotoWall,
            },
        ]
    }
);

router.beforeEach((to, from, next) => {
    store.commit('loading_state');
    console.log(store.state);
    setTimeout(next, 2000);
})

let sleep = function(time) {
    var timeOut = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() <= timeOut) {}
};

router.afterEach((to, from, next) => {
    store.commit('loading_state');
    console.log(store.state);
});

export default router;