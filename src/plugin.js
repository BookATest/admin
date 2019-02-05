export default function (Vue) {
  Vue.mixin({
    methods: {
      /**
       * Iterate through and fetch all of a listing of resources.
       * @param {string} uri
       * @param {object} params
       */
      async fetchAll(uri, params = {}) {
        const mergedParams = { ...params, page: 1, per_page: 100 };
        let allFetched = false;
        let resources = [];

        do {
          const { data } = await Vue.axios.get(uri, { params: mergedParams });
          resources = [...resources, ...data.data];
          allFetched = data.meta.current_page === data.meta.last_page;
          mergedParams.page += 1;
        } while (!allFetched);

        return resources;
      },

      /**
       * Return a URI relative to the API.
       * @param {string} path
       */
      apiUrl(path) {
        const trimmedPath = path.charAt(0) === '/' ? path.substr(1) : path;

        return `${process.env.VUE_APP_API_URI}/v1/${trimmedPath}`;
      },

      /**
       * @returns {string}
       */
      uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
      },
    },
  });
}
