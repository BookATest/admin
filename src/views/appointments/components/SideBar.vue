<template>
  <div class="sidebar">

    <!-- Popup -->
    <div class="popup">
      <!-- Available -->
      <div class="available js--popup-block js--popup-block--available" style="display:none;">
        <div class="popup__header">
          <span>Available</span>
        </div>
        <div class="popup__main">
          <form>
            <div class="available--date">
              <span class="js--popup-date-text">Sunday 12 March</span>
            </div>
            <div class="available--time">
              <span class="js--popup-time-text">11:00 am</span>
            </div>
            <hr>
            <div class="available--form">
              <div class="form__checkbox form__checkbox--disabled">
                <div>
                  <input id="checkbox" name="checkbox" type="checkbox" checked disabled>
                  <label for="checkbox">One off</label>
                </div>
              </div>
              <div class="form__drop-down form__drop-down--disabled">
                <label for="dropdown">Repeatable</label>
                <div>
                  <select id="dropdown" name="dropdown" disabled>
                    <option>None</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
            </div>
            <hr>
            <div class="available--user">
              <button class="button button__primary button__primary--a" disabled>Delete</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Booked - Edit -->
      <div class="booked js--popup-block js--popup-block--booked" style="display:none;">
        <div class="popup__header">
          <span>Booked</span>
        </div>
        <div class="popup__main">
          <div class="booked--date">
            <span class="js--popup-date-text">Sunday 12 March</span>
          </div>
          <div class="booked--time">
            <span class="js--popup-time-text">11:00 am</span>
          </div>
          <hr>
          <div class="booked--patient">
            <span>patient</span><span class="js--popup-patient-text">Robert</span>
          </div>
          <div class="booked--with">
            <span>with</span><span class="js--popup-with-text">Alex</span>
          </div>
          <div class="booked--where">
            <span>where</span><span class="js--popup-where-text">Mesmac Leeds</span>
          </div>
          <hr>
          <div class="booked--user">
            <button class="button button__primary button__primary--a">View user</button>
            <button class="button button__inline button__inline--subtle">Cancel appointment?</button>
          </div>
        </div>
      </div>
    </div>

    <div class="popup__footer">
      <button class="js--popup-close"><span>Close</span><i class="icon icon--cross"></i></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>
