<template>
  <div class="form__text">

    <h2>{{ label }}</h2>

    <label class="button button__radio">
      <input
        :checked="value === true"
        @change="onInput"
        :name="`input-${_uid}`"
        type="radio"
        value="true"
      >
      <span>Yes</span>
    </label>

    <label class="button button__radio">
      <input
        :checked="value === false"
        @change="onInput"
        :name="`input-${_uid}`"
        type="radio"
        value="false"
      >
      <span>No</span>
    </label>

  </div>
</template>

<script>
export default {
  name: 'RadioInput',

  props: {
    value: {
      required: true,
    },

    label: {
      required: true,
      type: String,
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value === 'true');
    },
  },
};
</script>
