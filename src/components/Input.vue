<template>
  <div class="form__text">

    <label :for="`input-${_uid}`">
      <span>{{ label }}</span>
    </label>

    <div>
      <input
        :value="value"
        @input="onInput"
        :type="type"
        :id="`input-${_uid}`"
        :step="step"
        :min="min"
        :max="max"
      >
      <bat-body v-if="error">
        {{ error }}
      </bat-body>
    </div>

  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'Input',

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

    type: {
      required: false,
      type: String,
      default: 'text',
    },

    step: {
      required: false,
      step: String,
    },

    min: {
      required: false,
      step: String,
    },

    max: {
      required: false,
      step: String,
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
