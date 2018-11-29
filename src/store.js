import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  getters: {
    isAuthenticated() {
      return auth.isAuthenticated();
    },
  },
  mutations: {
    //
  },
  actions: {
    /**
     * Login logic.
     * @param {object} context
     * @param {object} payload
     */
    login(context, payload) {
      auth.login(payload.user, payload.requestOptions).then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated(),
        });
      });
    },

    /**
     * Logout logic.
     * @param {object} context
     */
    logout(context) {
      auth.logout({ url: '/auth/logout' }).then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated(),
        });
      });
    },
  },
});
