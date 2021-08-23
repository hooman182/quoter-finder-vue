<template>
  <nav class="navbar">
    <ul class="navbar-lists">
      <li class="navbar-list">
        <router-link :to="{name:'Home'}" class="navbar-list__link">Find quote</router-link>
      </li>
      <li class="navbar-list">
        <router-link :to="{name:'Bookmarks'}" class="navbar-list__link">Bookmarks</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  padding: 0.75em;
  background: $light;
  display: flex;
  justify-content: space-between;
  #{&}-lists {
    list-style: none;
    display: flex;
  }
  #{&}-list {
    &__link {
      padding: 0.75em 1em;
      color: $white;
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
</style>