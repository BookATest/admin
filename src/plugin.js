export default function (Vue) {
  Vue.mixin({
    methods: {
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
    },
  });
}
