<template>
  <div class="main">

    <!-- Service Users -->
    <div class="service-users">

      <!-- Filter -->
      <div class="service-users__filter">
        <form class="form">
          <div>
            <div class="form__search">
            <label for="search">Search</label>
            <div>
              <input type="text" id="search" name="search"/>
              <button><i class="icon icon--arrowright"></i></button>
            </div>
          </div>
          </div>
          <div>
            <div class="form__drop-down">
              <label for="dropdown">Filter by</label>
              <div>
                <select id="dropdown" name="dropdown">
                  <option>Unique ID</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
            <div class="form__drop-down">
              <div>
                <select id="dropdown" name="dropdown">
                  <option>Name</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
            <div class="form__drop-down">
              <div>
                <select id="dropdown" name="dropdown">
                  <option>Last Appointment</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Table -->
      <div class="service-users__table">

        <table class="table table--4col" cellpadding="16">
          <tr>
            <th><span>Unique ID</span></th>
            <th><span>Name</span></th>
            <th><span>Last appointment</span></th>
            <th><span>&nbsp;</span></th>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
          <tr>
            <td><span>87209842</span></td>
            <td><span>Robert Kirk</span></td>
            <td><span>18/02/18</span></td>
            <td><button class="button button__primary button__primary--b" onclick="location.href='../users/user--view.html'"><span>View</span></button></td>
          </tr>
        </table>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'ServiceUsersIndexView',
};
</script>
