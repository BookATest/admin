// Import polyfills.
import '@babel/polyfill';

import Vue from 'vue';
import Meta from 'vue-meta';
import Moment from 'vue-moment';
import VueClipboard from 'vue-clipboard2';
import Plugin from './plugin';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Meta);
Vue.use(Moment);
Vue.use(VueClipboard);
Vue.use(Plugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
