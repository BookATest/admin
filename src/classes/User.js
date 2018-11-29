const cacheKey = 'user';

export default class User {
  constructor() {
    this.user = User.$fetch();
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
