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
   * @param {string|null} field
   */
  state(field) {
    return this.has(field) ? 'invalid' : null;
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
    const fieldNames = Array.isArray(fields) ? fields : [fields];

    for (let i = 0; i < fieldNames.length; i += 1) {
      const field = fieldNames[i].replace(/\./g, '_');
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }

    return null;
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
