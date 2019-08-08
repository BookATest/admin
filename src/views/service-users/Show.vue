<template>
  <div class="main">
    <!-- Service Users -->
    <div class="service-users">
      <!-- Action-->
      <div class="service-users__action">
        <router-link
          tag="button"
          :to="{ name: 'service-users.index' }"
          class="button button__primary button__primary--b"
        >
          <span>Back</span>
        </router-link>
      </div>

      <!-- Data -->
      <div class="service-users__data">
        <div>
          <ul>
            <li><span>Unique ID</span><span>87209842</span></li>
            <li><span>Name</span><span>Robert Kirk</span></li>
            <li><span>Phone</span><span>-</span></li>
            <li><span>Email</span><span>robert.kirk@gmail.com</span></li>
          </ul>

          <form>
            <div class="form__text">
              <label>
                <span>Send feedback submission<br>notification emails?</span>
              </label>

              <label class="button button__radio button__radio">
                <input name="group" type="radio" disabled>
                <span>phone</span>
              </label>

              <label class="button button__radio button__radio">
                <input checked="checked" name="group" type="radio" disabled>
                <span>email</span>
              </label>
            </div>
          </form>
        </div>

        <div>
          <div class="card card__stats--patient">
            <span><strong>10%</strong>DNA rate</span>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="service-users__table">
        <table class="table table--3col" cellpadding="16">
          <tbody>
            <tr>
              <th><span>Date</span></th>
              <th><span>Location</span></th>
              <th><span>Feedback</span></th>
            </tr>
            <tr>
              <td><span>18/02/18</span></td>
              <td><span>Leeds</span></td>
              <td>
                <button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'">
                  <span>View</span>
                </button>
              </td>
            </tr>
            <tr>
              <td><span>18/02/18</span></td>
              <td><span>Leeds</span></td>
              <td>
                <button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'">
                  <span>View</span>
                </button>
              </td>
            </tr>
            <tr>
              <td><span>18/02/18</span></td>
              <td><span>Bradford</span></td>
              <td>
                <button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'">
                  <span>View</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceUsersShowView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },
};
</script>
