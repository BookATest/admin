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
      path: '/settings',
      name: 'settings.index',
      component: () => import('./views/settings/Index.vue'),
      meta: {
        title: 'Settings',
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
    {
      path: '/settings/users/create',
      name: 'users.create',
      component: () => import('./views/users/Create.vue'),
      meta: {
        title: 'Create User',
        auth: true,
      },
    },
    {
      path: '/settings/users/:user/edit',
      name: 'users.edit',
      component: () => import('./views/users/Edit.vue'),
      meta: {
        title: 'Edit User',
        auth: true,
      },
    },
    {
      path: '/settings/clinics',
      name: 'clinics.index',
      component: () => import('./views/clinics/Index.vue'),
      meta: {
        title: 'Locations',
        auth: true,
      },
    },
    {
      path: '/settings/clinics/create',
      name: 'clinics.create',
      component: () => import('./views/clinics/Create.vue'),
      meta: {
        title: 'Create Location',
        auth: true,
      },
    },
    {
      path: '/settings/clinics/:clinic/edit',
      name: 'clinics.edit',
      component: () => import('./views/clinics/Edit.vue'),
      meta: {
        title: 'Edit Location',
        auth: true,
      },
    },
    {
      path: '/settings/reports',
      name: 'reports.index',
      component: () => import('./views/reports/Index.vue'),
      meta: {
        title: 'Reporting',
        auth: true,
      },
    },
    {
      path: '/settings/audits',
      name: 'audits.index',
      component: () => import('./views/audits/Index.vue'),
      meta: {
        title: 'Audits',
        auth: true,
      },
    },
    {
      path: '/settings/audits/:audit',
      name: 'audits.show',
      component: () => import('./views/audits/Show.vue'),
      meta: {
        title: 'Audit',
        auth: true,
      },
    },
    {
      path: '/service-users',
      name: 'service-users.index',
      component: () => import('./views/service-users/Index.vue'),
      meta: {
        title: 'Service Users',
        auth: true,
      },
    },
    {
      path: '/service-users/:service_user',
      name: 'service-users.show',
      component: () => import('./views/service-users/Show.vue'),
      meta: {
        title: 'Service User',
        auth: true,
      },
    },
  ],
});

middleware(router);

export default router;
