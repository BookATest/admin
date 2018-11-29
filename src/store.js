import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: auth.isAuthenticated(),
  },
  getters: {
    //
  },
  mutations: {
    /**
     * Update the authentication state.
     * @param {object} state
     * @param {object} payload
     */
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  actions: {
    /**
     * Authenticate logic.
     * @param {object} context
     * @param {object} provider
     */
    authenticate(context, provider = 'oauth2') {
      auth.authenticate(provider).then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated(),
        });

        // Custom authenticate logic here.
        router.push({ name: 'home' });
      });
    },

    /**
     * Logout logic.
     * @param {object} context
     */
    logout(context) {
      auth.logout({ url: `${process.env.VUE_APP_API_URI}/auth/logout` }).then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated(),
        });

        // Custom logout logic here.
        router.push({ name: 'login' });
      });
    },
  },
});
