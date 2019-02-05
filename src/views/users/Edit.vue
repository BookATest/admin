<template>
  <div class="main">

    <!-- Edit User -->
    <div class="edit-user">

      <div class="edit-user__intro">
        <div>
          <h2>Update User <i class="icon icon--edit"></i></h2>
        </div>
      </div>

      <bat-loader v-if="loadingUser"/>
      <div v-else class="edit-user__details">

        <!-- Form -->
        <div>
          <form @submit.prevent="onSubmit" class="form form--edit-user">

            <bat-input
              label="First name"
              v-model="userForm.first_name"
              @input="userForm.$errors.clear('first_name')"
              :error="userForm.$errors.get('first_name')"
            />

            <bat-input
              label="Last name"
              v-model="userForm.last_name"
              @input="userForm.$errors.clear('last_name')"
              :error="userForm.$errors.get('last_name')"
            />

            <bat-input
              label="Email"
              v-model="userForm.email"
              @input="userForm.$errors.clear('email')"
              :error="userForm.$errors.get('email')"
              type="email"
            />

            <bat-input
              label="Phone"
              v-model="userForm.phone"
              @input="userForm.$errors.clear('phone')"
              :error="userForm.$errors.get('phone')"
              type="tel"
            />

            <bat-input
              label="Change password"
              v-model="userForm.password"
              @input="userForm.$errors.clear('password')"
              :error="userForm.$errors.get('password')"
              type="password"
            />

            <bat-radio
              label="Display your email to service users?"
              v-model="userForm.display_email"
              @input="userForm.$errors.clear('display_email')"
            />

            <bat-radio
              label="Display your phone to service users?"
              v-model="userForm.display_phone"
              @input="userForm.$errors.clear('display_phone')"
            />

            <bat-radio
              label="Received booking confirmations?"
              v-model="userForm.receive_booking_confirmations"
              @input="userForm.$errors.clear('receive_booking_confirmations')"
            />

            <bat-radio
              label="Received cancellation confirmations?"
              v-model="userForm.receive_cancellation_confirmations"
              @input="userForm.$errors.clear('receive_cancellation_confirmations')"
            />

            <div class="edit-user__notification" v-for="(role, index) in userForm.roles" :key="role.id || role._id">
              <div class="form__drop-down">
                <label for="dropdown"><span>Role</span></label>
                <div>
                  <select v-model="role.role">
                    <option value="">Select role...</option>
                    <option v-for="role in roles" :key="role.value" :value="role.value">{{ role.text }}</option>
                  </select>
                </div>
              </div>

              <template v-if="['clinic_admin', 'community_worker'].includes(role.role)">
                <bat-loader v-if="loadingClinics"/>
                <div v-else class="form__drop-down">
                  <label for="dropdown"><span>Location</span></label>
                  <div>
                    <select v-model="role.clinic_id">
                      <option value="">Select clinic...</option>
                      <option v-for="clinic in clinics" :key="clinic.id" :value="clinic.id">{{ clinic.name }}</option>
                    </select>
                  </div>
                </div>
              </template>

              <div class="create-user__remove-permission-button">
                <bat-button @click="onRemoveRole(index)" type="button" primary>
                  <span>Remove permission</span>
                </bat-button>
              </div>
            </div>

            <div class="edit-user__notification">
              <bat-button @click="onAddRole" type="button" primary>
                <span>Add permission</span>
              </bat-button>
            </div>

            <bat-image
              v-model="userForm.profile_picture"
              :existing-url="apiUrl(`/users/${this.$route.params.user}/profile-picture.jpg`)"
              @input="userForm.$errors.clear('profile_picture')"
              :error="userForm.$errors.get('profile_picture')"
            />

            <div class="edit-user__action">
              <bat-button type="submit" primary :disabled="userForm.$submitting">
                <span v-if="!userForm.$submitting">Update</span>
                <span v-else>Updating...</span>
              </bat-button>
            </div>

          </form>
        </div>

        <div>
          <bat-card warning>
            <div class="warning__action">
              <bat-button @click="onDelete" secondary :disabled="deletingUser">
                <span v-if="!deletingUser">Delete user</span>
                <span v-else>Deleting...</span>
              </bat-button>
            </div>
            <div class="warning__icon">
              <i class="icon icon--warning"></i>
            </div>
            <div class="warning__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque dictum</p>
            </div>
          </bat-card>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Form from '@/classes/Form';
import BatButton from '@/components/Button.vue';
import BatLoader from '@/components/Loader.vue';
import BatCard from '@/components/Card.vue';
import BatInput from '@/views/users/components/Input.vue';
import BatRadio from '@/views/users/components/Radio.vue';
import BatImage from '@/views/users/components/Image.vue';


export default {
  name: 'UsersEditView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatButton,
    BatLoader,
    BatCard,
    BatInput,
    BatRadio,
    BatImage,
  },

  data() {
    return {
      loadingUser: false,
      deletingUser: false,
      user: null,
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
      loadingClinics: false,
      clinics: [],
      roles: [
        { value: 'organisation_admin', text: 'Organisation admin' },
        { value: 'clinic_admin', text: 'Clinic admin' },
        { value: 'community_worker', text: 'Community worker' },
      ],
    };
  },

  watch: {
    'userForm.roles': {
      handler(roles) {
        // Loop through each role.
        roles.forEach((role) => {
          // Unset the clinic ID if not required for selected role.
          if (!['clinic_admin', 'community_worker'].includes(role.role)) {
            role.clinic_id = '';
          }
        });
      },
      deep: true,
    },
  },

  methods: {
    async onSubmit() {
      try {
        const { data } = await this.userForm.put(`/users/${this.$route.params.user}`, (payload) => {
          // Remove the password from the request if empty.
          if (payload.password === '') {
            delete payload.password;
          }

          // Remove clinic ID from roles that don't need it.
          payload.roles.forEach((role) => {
            if (!['clinic_admin', 'community_worker'].includes(role.role)) {
              delete role.clinic_id;
            }
          });

          // Remove the profile picture from the request if null.
          if (payload.profile_picture === null) {
            delete payload.profile_picture;
          }

          // Setting the profile picture to false indicates it should be removed.
          if (payload.profile_picture === false) {
            payload.profile_picture = null;
          }
        });

        this.$store.commit('user', data);
        this.$router.push({ name: 'users.edit', params: { user: data.id } });
      } catch (exception) {
        // Supress error from console.
      }
    },

    onAddRole() {
      this.userForm.roles.push({
        _id: this.uuid(),
        role: '',
        clinic_id: '',
      });
    },

    onRemoveRole(index) {
      this.$delete(this.userForm.roles, index);
    },

    async fetchClinics() {
      this.loadingClinics = true;
      this.clinics = await this.fetchAll('/clinics');
      this.loadingClinics = false;
    },

    async fetchUser() {
      this.loadingUser = true;

      const { data: { data: user } } = await this.$http.get(`/users/${this.$route.params.user}`);
      this.user = user;

      this.userForm.first_name = this.user.first_name;
      this.userForm.last_name = this.user.last_name;
      this.userForm.email = this.user.email;
      this.userForm.phone = this.user.phone;
      this.userForm.display_email = this.user.display_email;
      this.userForm.display_phone = this.user.display_phone;
      this.userForm.receive_booking_confirmations = this.user.receive_booking_confirmations;
      this.userForm.receive_cancellation_confirmations = this.user.receive_cancellation_confirmations;
      this.userForm.include_calendar_attachment = this.user.include_calendar_attachment;
      this.userForm.roles = this.user.roles.filter((role) => {
        switch (role.role) {
          // Always show org admin.
          case 'organisation_admin':
            return true;
          // Only show clinic admin if not an org admin.
          case 'clinic_admin':
            return this.user.roles
              .find(foundRole => foundRole.role === 'organisation_admin') === undefined;
          // Only show community worker if not an org admin or a clinic admin for the same clinic.
          case 'community_worker':
            return this.user.roles
              .find(foundRole => (foundRole.role === 'organisation_admin')
                  || (foundRole.role === 'clinic_admin' && foundRole.clinic_id === role.clinic_id)) === undefined;
          default:
            return true;
        }
      });

      this.loadingUser = false;
    },

    async onDelete() {
      this.deletingUser = true;

      try {
        await this.userForm.delete(`/users/${this.$route.params.user}`);

        // Logout if the user deleted their own account.
        if (this.$store.state.user.get().id === this.$route.params.user) {
          this.$store.dispatch('logout');
          return;
        }

        this.$router.push({ name: 'users.index' });
      } catch (exception) {
        this.deletingUser = false;
      }
    },
  },

  created() {
    this.fetchUser();
    this.fetchClinics();
  },
};
</script>

<style lang="scss">
.create-user {
  &__remove-permission-button {
    margin-top: 1rem;
    width: unset !important;
  }
}
</style>
