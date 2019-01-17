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
    settings: null,
    title: '',
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
     * @param {object|null} payload
     */
    user(state, payload) {
      if (payload !== null) {
        state.user.set(payload);
      } else {
        state.user.clear();
      }
    },

    /**
     * Update the authentication state.
     * @param {object} state
     * @param {object|null} payload
     */
    settings(state, payload) {
      state.settings = payload;
    },

    /**
     * Update the page title.
     * @param {object} state
     * @param {string} title
     */
    title(state, title) {
      state.title = title;
    },
  },

  actions: {
    /**
     * Logic for loading the settings.
     * @param {object} context
     */
    loadSettings(context) {
      const cacheKey = 'settings';
      const exists = localStorage.getItem(cacheKey) !== null;

      // First, attempt to load the settings from local storage.
      if (exists) {
        // Retrieve the serialised JSON string from local storage and parse it.
        const settings = JSON.parse(
          localStorage.getItem(cacheKey),
        );

        context.commit('settings', settings);

        return;
      }

      // Otherwise, request them from the API and persist them to local storage.
      Vue.axios.get(`${process.env.VUE_APP_API_URI}/v1/settings`).then((response) => {
        // Extract the settings from the request.
        const settings = response.data.data;

        // Persist the settings to local storage.
        localStorage.setItem(cacheKey, JSON.stringify(settings));

        context.commit('settings', settings);
      });
    },

    /**
     * Clear the settings from local storage and re-fetch them.
     * @param {object} context
     */
    reloadSettings(context) {
      const cacheKey = 'settings';

      // Remove the settings to local storage.
      localStorage.removeItem(cacheKey);

      context.dispatch('loadSettings', null);
    },

    /**
     * Authenticate logic.
     * @param {object} context
     * @param {object} payload
     */
    authenticate(context, payload = { provider: 'oauth2' }) {
      auth.authenticate(payload.provider).then(() => {
        // First fetch the user object and cache in local storage, then push.
        Vue.axios.get(`${process.env.VUE_APP_API_URI}/v1/users/user`).then((response) => {
          // Update the user state.
          context.commit('user', response.data.data);

          // Update the authentication state.
          context.commit('isAuthenticated', {
            isAuthenticated: auth.isAuthenticated(),
          });

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
          // Forward the user.
          router.push({ name: 'logout' });

          // Update the authentication state.
          context.commit('isAuthenticated', {
            isAuthenticated: auth.isAuthenticated(),
          });

          // Update the user state.
          context.commit('user', null);
        });
      });
    },
  },
});
