import Vue from 'vue';
import Router from 'vue-router';
import middleware from './middleware';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/Logout.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: { auth: false },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: { auth: true },
    },
    {
      path: '/appointments',
      name: 'appointments.index',
      component: () => import('./views/appointments/Index.vue'),
      meta: { auth: true },
    },
  ],
});

middleware(router);

export default router;
