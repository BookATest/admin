import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  getters: {
    /**
     * Returns if the user is authenticated or not.
     * @returns {boolean}
     */
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
        // Custom login logic here.
      });
    },

    /**
     * Logout logic.
     */
    logout() {
      auth.logout({ url: '/auth/logout' }).then(() => {
        // Custom logout logic here.
      });
    },
  },
});
