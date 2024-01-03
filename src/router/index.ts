import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../views/StartPage.vue';
import WilliamPage from '../views/WilliamPage.vue';
import JenniferPage from '../views/JenniferPage.vue';
import DreamWall from '../views/DreamWall.vue';
import PhotoWall from '../views/WilliamPage.vue';

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

/**
 * ## 全局后置钩子
 * ·发生的时间节点: 导航被确认后
 * ·传入: 函数
 * ·作用: 分析、更改页面标题、声明页面等辅助功能，这个钩子不接受next函数也不会改变导航本身
 * @to: 即将要进入的目标
 * @from: 当前导航正要离开的路由
 */
// router.afterEach((to, from) => {
//     const toDepth = to.path.split('/').length;
//     const fromDepth = from.path.split('/').length;
//     to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
// });

export default router;