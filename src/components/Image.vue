<template>
  <div class="form__text">
    <button @click="onClick" type="button" class="button button--upload button--upload--avatar">

      <img v-if="value" :src="value">

      <img v-else-if="existingUrl && !removeExisting" :src="existingUrl">

      <span>{{ label }}</span>
      <input
        style="display: none;"
        @change="onInput"
        type="file"
        accept="image/jpeg"
        ref="file"
      >

    </button>

    <div v-if="value || (existingUrl && !removeExisting)">
      <bat-button @click="onRemove" type="button" secondary>Remove image</bat-button>
    </div>

    <bat-body v-if="error">
      {{ error }}
    </bat-body>
  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';
import BatButton from '@/components/Button.vue';

export default {
  name: 'ImageInput',

  components: { BatBody, BatButton },

  props: {
    value: {
      required: true,
    },

    existingUrl: {
      required: false,
      type: String,
    },

    label: {
      required: false,
      type: String,
      default: 'Upload image',
    },

    error: {
      required: false,
      default: null,
    },
  },

  data() {
    return {
      fileReader: new FileReader(),
      removeExisting: false,
    };
  },

  methods: {
    onInput() {
      const files = this.$refs.file.files;

      if (!files.length) {
        this.$emit('input', null);
        return;
      }

      const file = files[0];
      this.fileReader.onloadend = () => this.$emit('input', this.fileReader.result);
      this.fileReader.readAsDataURL(file);
    },

    onClick() {
      this.$refs.file.click();
    },

    onRemove() {
      if (this.existingUrl && this.removeExisting === false) {
        this.removeExisting = true;
      }

      if (this.existingUrl) {
        this.$emit('input', false);
        return;
      }

      this.$emit('input', null);
    },
  },
};
</script>
