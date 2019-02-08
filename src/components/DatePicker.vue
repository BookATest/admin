<template>
  <div class="form__text">

    <label :for="`input-${_uid}`">
      <span>{{ label }}</span>
    </label>

    <div>
      <vue-datepicker
        :value="value"
        @selected="onSelected"
        :monday-first="true"
        :format="dateFormatter"
      />

      <bat-body v-if="error">
        {{ error }}
      </bat-body>
    </div>

  </div>
</template>

<script>
import VueDatepicker from 'vuejs-datepicker';
import BatBody from '@/components/Body.vue';

export default {
  name: 'DatePickerInput',

  components: { VueDatepicker, BatBody },

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
    onSelected(date) {
      this.$emit('input', this.$moment(date).format('YYYY-MM-DD'));
    },

    dateFormatter(date) {
      return this.$moment(date).format('Do MMM YYYY');
    },
  },
};
</script>
