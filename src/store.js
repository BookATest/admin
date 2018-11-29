import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: auth.isAuthenticated(),
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
     * @param {object} payload
     */
    authenticate(context, payload = { provider: 'oauth2' }) {
      auth.authenticate(payload.provider).then(() => {
        // Update the authentication state.
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated(),
        });

        // Custom authenticate logic here.
        // TODO: First fetch the user object and cache in local storage, then push.
        router.push({ name: 'home' });
      });
    },

    /**
     * Logout logic.
     * @param {object} context
     * @param {object} payload
     */
    logout(context, payload = { url: `${process.env.VUE_APP_API_URI}/v1/users/user/sessions` }) {
      // Clear the user sessions on the API.
      Vue.axios.delete(payload.url).then(() => {
        // Clear the token cached locally.
        auth.logout().then(() => {
          // Update the authentication state.
          context.commit('isAuthenticated', {
            isAuthenticated: auth.isAuthenticated(),
          });

          // Custom logout logic here.
          router.push({ name: 'login' });
        });
      });
    },
  },
});
