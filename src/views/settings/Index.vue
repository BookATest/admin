<template>
  <div class="main">
    <!-- Configuration -->
    <div class="configuration">
      <div class="configuration__intro">
        <div>
          <h2>Notifications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum sem quis aliquet laoreet. Duis blandit luctus nulla vel
            ullamcorper. Suspendisse eu efficitur justo. Quisque mollis in erat
            sit amet rhoncus.
          </p>
        </div>
      </div>

      <div class="configuration__options">
        <div>
          <div class="button button__amend button__amend--edit" onclick="location.href='../settings/configuration--edit.html'">
            <input
              type="text"
              id="one"
              name="one"
              value="Pick up milk"
              class="button__amend__input"
            >
            <button class="button__amend__edit">
              <span>Edit</span><i class="icon icon--edit"></i>
            </button>
          </div>

          <div class="button button__amend button__amend--edit" onclick="location.href='../settings/configuration--edit.html'">
            <input
              type="text"
              id="two"
              name="two"
              value="See GP"
              class="button__amend__input"
            >
            <button class="button__amend__edit">
              <span>Edit</span><i class="icon icon--edit"></i>
            </button>
          </div>

          <div
            class="button button__amend button__amend--add"
            onclick="location.href='../settings/configuration--edit.html'"
          >
            <button class="button__amend__add">
              <span>Add</span><i class="icon icon--pluscircle"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="configuration__feedback">
        <h2>Follow-up feedback?</h2>

        <label class="button button__radio">
          <input checked="checked" name="group" type="radio"><span>Enable</span>
        </label>

        <label class="button button__radio">
          <input name="group" type="radio"><span>Disable</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },
};
</script>
