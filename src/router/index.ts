import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../views/StartPage.vue';
import WilliamPage from '../views/WilliamPage.vue';
import JenniferPage from '../views/JenniferPage.vue';
import DreamWall from '../views/DreamWall.vue';
import PhotoWall from '../views/PhotoWall.vue';
import store from '../store'

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

router.beforeEach((_to, _from, next) => {
    store.commit('switchLS');
    console.log(store.state);
    next();
})

router.afterEach((_to, _from, _next) => {
    setTimeout(() => {
        store.commit('switchLS');
        console.log(store.state);
    }, 1500);
});

export default router;