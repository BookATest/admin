<template>
  <div class="base-layout__sidebar">
      <div class="sidebar">
        <div class="main-navigation">

          <nav>
            <ul>

              <!-- Top level items -->
              <li
                v-for="(item, index) in menu"
                :key="`side-bar-top-level-${index}`"
                :class="{
                  'submenu': item.items !== undefined,
                  'submenu--active': item.active,
                  'submenu--isactive': item.items === undefined && expanded,
                }"
              >
                <!-- For items with no submenu -->
                <router-link v-if="item.to !== undefined" :to="item.to">
                  <i class="icon" :class="item.icon"></i><span>{{ item.name }}</span>
                </router-link>

                <!-- For items with a submenu -->
                <template v-else-if="item.items !== undefined">
                  <a @click.prevent="toggleSubMenu(item)" href="#">
                    <i class="icon" :class="item.icon"></i><span>{{ item.name }}</span>
                  </a>

                  <!-- Second level item -->
                  <ul>
                    <li
                      v-for="(item, index) in item.items"
                      :key="`side-bar-second-level-${index}`"
                    >
                      <router-link v-if="item.to !== undefined" :to="item.to">
                        <i class="icon" :class="item.icon"></i><span>{{ item.name }}</span>
                      </router-link>
                    </li>
                  </ul>
                </template>

              </li>
            </ul>
          </nav>

          <router-link :to="{ name: 'help.index' }" class="help">
            <span>Help</span>
            <i class="icon icon--help"></i>
          </router-link>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SideBar',

  data() {
    return {
      subMenuActive: false,
    };
  },

  props: {
    menu: {
      required: true,
      type: Array,
    },
  },

  computed: {
    expanded() {
      let expanded = false;

      this.menu.forEach((item) => {
        if (item.active) {
          expanded = true;
        }
      });

      return expanded;
    },
  },

  methods: {
    toggleSubMenu(item) {
      item.active = !item.active;
    },
  },
};
</script>
