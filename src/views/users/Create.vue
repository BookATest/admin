<template>
  <button @click="userForm.post('/test')">Click</button>
</template>

<script>
import Form from '@/classes/Form';

export default {
  name: 'UsersCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  data() {
    return {
      userForm: new Form({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        display_email: false,
        display_phone: false,
        receive_booking_confirmations: false,
        receive_cancellation_confirmations: false,
        include_calendar_attachment: false,
        roles: [],
        profile_picture: null,
      }),
    };
  },
};
</script>
