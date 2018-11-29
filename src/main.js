import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuthenticate from 'vue-authenticate';

Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  baseUrl: process.env.VUE_APP_API_URI, // Your API domain

  providers: {
    github: {
      clientId: process.env.VUA_APP_OAUTH_CLIENT_ID,
      redirectUri: 'http://localhost:8080/auth/callback', // Your client app URL
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
