<template>
  <div class="home">
    <main class="main">
      <h1 class="view-title">find random quote's</h1>
      <TheContent />
      <button class="btn btn-primary">
        <i class="fas fa-sync-alt"></i>
        Find New Quote
      </button>
    </main>
  </div>
</template>

<script>
import TheContent from "@/components/TheContent";
export default {
  name: "Home",
  components: { TheContent },
};
</script>

<style lang="scss" scoped>
.main {
  @include flex(column, none, center);
}
</style>
