import LoginView from '@/views/LoginView';
import IndexView from '@/views/IndexView';
import StarredView from '@/views/StarredView';
import SentView from '@/views/SentView';

export default [
    {
        path: '/',
        name: 'index',
        component: IndexView,
        meta: {
            middleware: 'auth',
        }
    },
    {
        path: '/starred',
        name: 'starred',
        component: StarredView,
        meta: {
            middleware: 'auth',
        }
    },
    {
        path: '/sent',
        name: 'sent',
        component: SentView,
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