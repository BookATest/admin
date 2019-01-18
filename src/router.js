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
      meta: {
        title: 'Logout',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: 'Login',
        auth: false,
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Dashboard',
        auth: true,
      },
    },
    {
      path: '/appointments',
      name: 'appointments.index',
      component: () => import('./views/appointments/Index.vue'),
      meta: {
        title: 'Appointments',
        auth: true,
      },
    },
    {
      path: '/settings/calendar',
      name: 'calendar.index',
      component: () => import('./views/calendar/Index.vue'),
      meta: {
        title: 'Calendar',
        auth: true,
      },
    },
    {
      path: '/settings/users',
      name: 'users.index',
      component: () => import('./views/users/Index.vue'),
      meta: {
        title: 'Users',
        auth: true,
      },
    },
  ],
});

middleware(router);

export default router;
