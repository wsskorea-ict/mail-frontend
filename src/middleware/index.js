import routeMiddleware from '@/middleware/routeMiddleware';

export function beforeEachMiddleware(to, from, next) {
    const middleware = to?.meta?.middleware;

    for(const name in routeMiddleware){
        if(middleware !== name) continue;

        if(!routeMiddleware[name].check()) {
            return next(routeMiddleware[name].redirectTo());
        }
    }

    return next();
}