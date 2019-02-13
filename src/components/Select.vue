<template>
  <div class="form__drop-down">

    <label :for="`Select::${_uid}`">
      <span>{{ label }}</span>
    </label>

    <div>
      <select
        :value="value"
        @change="onInput"
        :id="`Select::${_uid}`"
      >
        <option
          v-if="showEmpty"
          value=""
          disabled
          :selected="value === ''"
        >
          {{ emptyText }}
        </option>
        <option
          v-for="(option, index) in options"
          :key="`SelectOption::${_uid}::${index}`"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <bat-body v-if="error">
        {{ error }}
      </bat-body>
    </div>

  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'SelectInput',

  components: { BatBody },

  props: {
    value: {
      required: true,
    },

    label: {
      required: true,
      type: String,
    },

    error: {
      required: false,
      default: null,
    },

    options: {
      required: true,
      type: Array,
    },

    showEmpty: {
      required: false,
      type: Boolean,
      default: true,
    },

    emptyText: {
      required: false,
      type: String,
      default: 'Please select...',
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
