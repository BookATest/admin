<template>
  <div class="controls">
    <ul>
      <li><button @click="onPrevious"><i class="icon icon--lg-arrowleft"></i></button></li>
      <li><span>WC / {{ dateObject | moment('Do MMMM') | lowercase }}</span></li>
      <li><button @click="onNext"><i class="icon icon--lg-arrowright"></i></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Controls',

  props: {
    date: {
      required: true,
      type: String,
    },
  },

  computed: {
    dateObject() {
      return this.$moment(this.date);
    },
  },

  filters: {
    lowercase(string) {
      return string.toLowerCase();
    },
  },

  methods: {
    onPrevious() {
      this.$emit('update:date', this.dateObject.subtract(1, 'week').format('YYYY-MM-DD'));
    },

    onNext() {
      this.$emit('update:date', this.dateObject.add(1, 'week').format('YYYY-MM-DD'));
    },
  },
};
</script>
