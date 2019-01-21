const cacheKey = 'user';
const organisationAdmin = 'organisation_admin';
const clinicAdmin = 'clinic_admin';
const communityWorker = 'community_worker';

export default class User {
  /**
   * Constructor.
   * @param {object|null} user
   */
  constructor(user = null) {
    this.user = user || User.$fetch();
  }

  /**
   * Set the user object.
   * @param {object} user
   */
  set(user) {
    localStorage.setItem(cacheKey, JSON.stringify(user));
    this.user = user;
  }

  /**
   * Get the user object.
   */
  get() {
    return this.user;
  }

  /**
   * Clear the user object.
   */
  clear() {
    User.$clear();
    this.user = undefined;
  }

  /**
   * Check if the user is an organisation admin.
   * @returns {boolean}
   */
  isOrganisationAdmin() {
    const foundRole = this.user.roles.find(role => role.role === organisationAdmin);

    return foundRole !== undefined;
  }

  /**
   * Check if the user is a clinic admin.
   * @param {string|null}
   * @returns {boolean}
   */
  isClinicAdmin(clinicId) {
    let foundRole = false;

    if (clinicId) {
      foundRole = this.user.roles.find(role => role.role === clinicAdmin && role.clinic_id === clinicId);
    } else {
      foundRole = this.user.roles.find(role => role.role === clinicAdmin);
    }

    return foundRole !== undefined;
  }

  /**
   * Check if the user is a community worker.
   * @param {string|null}
   * @returns {boolean}
   */
  isCommunityWorker(clinicId) {
    let foundRole = false;

    if (clinicId) {
      foundRole = this.user.roles.find(role => role.role === communityWorker && role.clinic_id === clinicId);
    } else {
      foundRole = this.user.roles.find(role => role.role === communityWorker);
    }

    return foundRole !== undefined;
  }

  /**
   * Get an array of all the clinic ID's that the user is a community worker at.
   * @returns {array}
   */
  clinicIds() {
    return this.user.roles
      .filter(role => role.role === communityWorker)
      .map(role => role.clinic_id);
  }

  /**
   * @returns {string}
   */
  fullName() {
    return `${this.user.first_name} ${this.user.last_name}`;
  }

  /**
   * Check if the user exists in local cache.
   * @returns {boolean}
   */
  static $exists() {
    return localStorage.getItem(cacheKey) !== null;
  }

  /**
   * Return the user from local cache.
   * @returns {object|undefined}
   */
  static $fetch() {
    if (!User.$exists()) {
      return undefined;
    }

    const data = localStorage.getItem(cacheKey);

    return JSON.parse(data);
  }

  /**
   * Clears the user from local cache.
   */
  static $clear() {
    if (!User.$exists()) {
      return;
    }

    localStorage.removeItem(cacheKey);
  }
}
