import LoginView from '@/views/LoginView';
import IndexView from '@/views/IndexView';

export default [
    {
        path: '/:type?/:page?',
        name: 'index',
        component: IndexView,
        meta: {
            middleware: 'auth',
        }
    },
    {
        path: '/user/login',
        name: 'login',
        component: LoginView,
        meta: {
            middleware: 'guest',
        }
    },
]