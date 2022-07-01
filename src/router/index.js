import {createRouter, createWebHistory} from 'vue-router';
import {beforeEachMiddleware} from '@/middleware';
import routes from '@/router/routes';

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(beforeEachMiddleware);