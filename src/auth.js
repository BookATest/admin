import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { VueAuthenticate } from 'vue-authenticate';

Vue.use(VueAxios, axios);

export default new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: process.env.VUE_APP_API_URI, // Your API domain

  providers: {
    github: {
      clientId: process.env.VUA_APP_OAUTH_CLIENT_ID,
      redirectUri: 'http://localhost:8080/auth/callback', // Your client app URL
    },
  },
});
