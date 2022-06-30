import {createRouter, createWebHistory} from 'vue-router';
import routes from '@/router/routes.js';
import {beforeEachMiddleware} from '@/middleware/index.js';

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(beforeEachMiddleware);