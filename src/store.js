import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import router from './router';
import User from './classes/User';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: auth.isAuthenticated(),
    user: new User(),
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

    /**
     * Update the user state.
     * @param {object} state
     * @param {obejct|null} payload
     */
    user(state, payload) {
      if (payload !== null) {
        state.user.set(payload);
      } else {
        state.user.clear();
      }
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

        // First fetch the user object and cache in local storage, then push.
        Vue.axios.get(`${process.env.VUE_APP_API_URI}/v1/users/user`).then((response) => {
          // Update the user state.
          context.commit('user', response.data.data);

          // Forward the user.
          router.push({ name: 'home' });
        });
      });
    },

    /**
     * Logout logic.
     * @param {object} context
     */
    logout(context) {
      // Clear the user sessions on the API.
      Vue.axios.delete(`${process.env.VUE_APP_API_URI}/v1/users/user/sessions`).then(() => {
        // Clear the token cached locally.
        auth.logout().then(() => {
          // Update the authentication state.
          context.commit('isAuthenticated', {
            isAuthenticated: auth.isAuthenticated(),
          });

          // Update the user state.
          context.commit('user', null);

          // Forward the user.
          router.push({ name: 'login' });
        });
      });
    },
  },
});
