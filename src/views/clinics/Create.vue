<template>
  <div class="main">

    <!-- Location Edit -->
    <div class="location-edit">

      <div class="location-edit__form">

        <div class="">
          <form class="form form--location-edit">
            <div class="form__text">
              <label for="name"><span>Name</span></label>
              <div>
                <input type="text" id="name" name="name">
              </div>
            </div>
            <div class="form__text">
              <label for="phone"><span>Phone</span></label>
              <div>
                <input type="text" id="phone" name="phone">
              </div>
            </div>
            <div class="form__text">
              <label for="email"><span>Email</span></label>
              <div>
                <input type="text" id="email" name="email">
              </div>
            </div>
            <div class="form__textarea form__text">
              <label for="address">Address</label>
              <div>
                <textarea></textarea>
              </div>
            </div>
            <div class="form__textarea form__text">
              <label for="directions">Directions</label>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </form>
        </div>

        <div class="">
          <h2>Pre triage questions</h2>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Gender" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Sexuality" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Age" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--add">
            <button class="button__amend__add" onclick="location.href='../settings/pre-triage-edit.html'"><span>Add</span><i class="icon icon--pluscircle"></i></button>
          </div>

          <!--
            <div class="button button__amend button__amend--add button__amend--add--inactive">
              <button class="button__amend__add"><span>Add</span><i class="icon icon--pluscircle"></i></button>
            </div>
          -->

        </div>

      </div>

      <div class="location-edit__action">
        <button class="button button__primary button__primary--b"><span>Save</span></button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ClinicsCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },
};
</script>
