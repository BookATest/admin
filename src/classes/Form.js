import Vue from 'vue';
import Errors from './Errors';

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   * @param {object} config
   */
  constructor(data, config = {}) {
    this.$originalData = data;

    for (let i = 0; i < Object.keys(data).length; i += 1) {
      const field = Object.keys(data)[i];
      this[field] = data[field];
    }

    this.$errors = new Errors();
    this.$submitting = false;
    this.$config = config;
  }

  /**
   * Fetch all relevant data for the form.
   */
  data() {
    const data = {};

    for (let i = 0; i < Object.keys(this.$originalData).length; i += 1) {
      const property = Object.keys(this.$originalData)[i];
      data[property] = this[property];
    }

    return data;
  }

  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   * @param {callback|null} callback
   */
  post(url, callback = null) {
    return this.submit('post', url, callback);
  }

  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   * @param {callback|null} callback
   */
  put(url, callback = null) {
    return this.submit('put', url, callback);
  }

  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   * @param {callback|null} callback
   */
  patch(url, callback = null) {
    return this.submit('patch', url, callback);
  }

  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete(url) {
    return this.submit('delete', url);
  }

  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   * @param {callback|null} callback
   */
  submit(requestType, url, callback = null) {
    this.$submitting = true;
    let data = JSON.parse(JSON.stringify(this.data()));
    const config = JSON.parse(JSON.stringify(this.parseConfig()));

    if (callback !== null) {
      callback(data, config);
    }

    if (this.hasFiles()) {
      data = this.toFormData(data);
    }

    return new Promise((resolve, reject) => {
      Vue.axios[requestType](url, data, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (!error.response || error.response.status !== 422) {
            return reject(error);
          }

          this.onFail(error.response.data);
          return reject(error.response.data);
        })
        .then(() => {
          this.$submitting = false;
        });
    });
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} data
   */
  onFail(data) {
    // Only records errors if there is an error bag returned.
    if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
      this.$errors.record(data.errors);
    }
  }

  /**
   * Checks if the config has files.
   *
   * @returns {boolean}
   */
  hasFiles() {
    return (
      Object.prototype.hasOwnProperty.call(this.$config, 'hasFiles') && this.$config.hasFiles === true
    );
  }

  /**
   * Parses the config passed in.
   *
   * @returns {object}
   */
  parseConfig() {
    const parsedConfig = {};

    if (this.hasFiles()) {
      parsedConfig.headers = { 'Content-Type': 'multipart/form-data' };
    }

    return parsedConfig;
  }

  /**
   * Converts an object to form data.
   *
   * @param obj
   * @param form
   * @param namespace
   * @returns {*|FormData}
   */
  toFormData(obj, form, namespace) {
    const fd = form || new FormData();
    let formKey;

    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      const property = Object.keys(obj)[i];

      if (Object.prototype.hasOwnProperty.call(obj, property) && obj[property]) {
        if (namespace) {
          formKey = `${namespace}[${property}]`;
        } else {
          formKey = property;
        }

        // if the property is an object, but not a File, use recursivity.
        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        } else if (
          typeof obj[property] === 'object'
          && !(obj[property] instanceof File)
        ) {
          this.toFormData(obj[property], fd, formKey);
        } else {
          // if it's a string or a File object
          fd.append(formKey, obj[property]);
        }
      }
    }

    return fd;
  }
}
