export default class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
  }

  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   * @returns {boolean}
   */
  has(field) {
    const fieldName = field.replace(/\./g, '_');
    return Object.prototype.hasOwnProperty.call(this.errors, fieldName);
  }

  /**
   * Determine if we have any errors.
   *
   * @returns {boolean}
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Returns the errors object.
   *
   * @returns {Object}
   */
  all() {
    return this.errors;
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string|Array} fields
   * @returns {string|null}
   */
  get(fields) {
    const fieldsArray = Array.isArray(fields) ? fields : [fields];

    let error = null;

    fieldsArray.forEach((field) => {
      const fieldName = field.replace(/\./g, '_');

      if (this.errors[fieldName]) {
        error = this.errors[fieldName][0];
      }
    });

    return error;
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
    const keys = Object.keys(errors);

    keys.forEach((key) => {
      if (key.includes('.')) {
        const newKey = key.replace(/\./g, '_');
        errors[newKey] = errors[key];
        delete errors[key];
      }
    });

    this.errors = errors;
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
    if (field) {
      const fieldName = field.replace(/\./g, '_');
      delete this.errors[fieldName];

      return;
    }

    this.errors = {};
  }
}
