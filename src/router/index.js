import {createRouter, createWebHistory} from 'vue-router';
import routes from '@/router/routes';
import {beforeEachMiddleware} from '@/middleware/index';

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(beforeEachMiddleware);