<template>
  <div class="main">
    <!-- Audit Logging -->
    <div class="audit-logging">
      <!-- Filter -->
      <div class="audit-logging__filter">
        <form class="form">
          <div>
            <div class="form__search">
              <label for="search">Search</label>
              <div>
                <input type="text" id="search" name="search">
                <button><i class="icon icon--arrowright"></i></button>
              </div>
            </div>
          </div>

          <div>
            <div class="form__drop-down">
              <label for="dropdown">Filter by</label>

              <div>
                <select id="dropdown" name="dropdown">
                  <option>User</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>

            <div class="form__date">
              <div>
                <input type="text" id="date_one" name="date_one" placeholder="March 1st 2018">
              </div>
              -
              <div>
                  <input type="text" id="date_two" name="date_two" placeholder="March 20th 2018">
              </div>
              <button><i class="icon icon--arrowright"></i></button>
            </div>
          </div>
        </form>
      </div>

      <!-- Table -->
      <div class="audit-logging__table">
        <table class="table table--2col" cellpadding="16">
          <tbody>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
            <tr>
              <td><span>Joe Bloggs added a new appointment for 12th March</span></td>
              <td><button class="button button__primary button__primary--b"><span>View</span></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
