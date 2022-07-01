import LoginView from '@/views/LoginView';
import MailIndexView from '@/views/mail/IndexView';
import DraftIndexView from '@/views/draft/IndexView';

export default [
    {
        path: '/:type?/:page?',
        name: 'index',
        component: MailIndexView,
        meta: {
            middleware: 'auth',
        }
    },
    {
        path: '/draft',
        name: 'draft.index',
        component: DraftIndexView,
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