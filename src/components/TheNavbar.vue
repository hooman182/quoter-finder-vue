<template>
  <nav class="navbar">
    <ul class="navbar-lists">
      <li class="navbar-list">
        <router-link :to="{ name: 'Home' }" class="navbar-list__link"
          >Find quote</router-link
        >
      </li>
      <li class="navbar-list">
        <router-link :to="{ name: 'Bookmarks' }" class="navbar-list__link"
          >Bookmarks</router-link
        >
      </li>
    </ul>
    <img src="../assets/img/quote.png" alt="">
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
  @include flex(row, space-between, center);
  #{&}-lists {
    list-style: none;
    display: flex;
  }
  #{&}-list {
    &__link {
      padding: 0.75em 1em;
      color: $white;
      font-size: 1rem;
      &:active {
        color: $secondary;
        font-weight: 600;
      }
    }
  }
  @include screen(768px) {
    @include flex(row-reverse, center, center);
  }
}
.router-link-exact-active {
  color: $primary !important;
  font-weight: 600;
}
</style>