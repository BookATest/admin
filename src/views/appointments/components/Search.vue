<template>
  <div class="search">
    <!-- Search -->
    <form class="form">
      <div class="form__search">
        <label for="search">Search</label>
        <div>
          <input type="text" id="search" name="search">
          <button><i class="icon icon--arrowright"></i></button>
        </div>
      </div>
    </form>
    <form class="form">
      <!-- Location -->
      <div class="form__drop-down">
        <label for="dropdown"><span>location</span></label>
        <div>
          <select id="dropdown" name="dropdown">
            <option>Leeds</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
      </div>
      <!-- Filter -->
      <div class="form__drop-down">
        <label for="dropdown">Filter by</label>
        <div>
          <select id="dropdown" name="dropdown">
            <option>Person</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>
