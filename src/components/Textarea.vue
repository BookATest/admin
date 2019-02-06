<template>
  <div class="form__textarea form__text">

    <label :for="`input-${_uid}`">
      <span>{{ label }}</span>
    </label>

    <div>
      <textarea
        :value="value"
        @input="onInput"
        :id="`input-${_uid}`"
      ></textarea>
      <bat-body v-if="error">
        {{ error }}
      </bat-body>
    </div>

  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'Textarea',

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
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
