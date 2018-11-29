import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { VueAuthenticate } from 'vue-authenticate';

Vue.use(VueAxios, axios);

export default new VueAuthenticate(Vue.prototype.$http, {
  providers: {
    oauth2: {
      name: 'oauth2',
      clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
      redirectUri: `${process.env.VUE_APP_URI}/auth/callback`,
      authorizationEndpoint: `${process.env.VUE_APP_API_URI}/oauth/authorize`,
      responseType: 'token',
    },
  },
});
