import store from './store';

export default function (router) {
  router.beforeEach((to, from, next) => {
    // If route specifies authentication.
    if (to.matched.some(route => Object.prototype.hasOwnProperty.call(route.meta, 'auth'))) {
      // Get the auth requirement from the route.
      const { meta: { auth } } = to;

      // If the router required authenticated user and the user is not authenticated.
      if (auth && !store.getters.isAuthenticated) {
        return next({ name: 'login' });
      }

      // If the router required guest user and the user is authenticated.
      if (!auth && store.getters.isAuthenticated) {
        return next({ name: 'home' });
      }
    }

    // If all middleware passes, then allow navigation to the requested page.
    return next();
  });
}
