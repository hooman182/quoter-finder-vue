<template>
  <section class="content" v-if="data.content">
    <p class="content-text">
      {{ data.content }}
    </p>
    <div class="content-footer">
      <span class="content-footer__title">{{ data.author }}</span>
      <button class="content-footer__btn" @click="copyToClipboard">
        <i class="fas fa-clone"></i>
      </button>
    </div>
  </section>
  <div class="loading" v-else></div>
</template>

<script>
export default {
  name: "TheContent",
  props: ["data"],
  setup(props) {
    function copyToClipboard() {
      navigator.clipboard.writeText(props.data.content);
    }
    return { copyToClipboard };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 50%;
  background: $secondary;
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;
  @include flex(column, space-between, start);
  #{&}-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: $white;
  }
  #{&}-footer {
    width: 100%;
    margin-top: 0.6em;
    @include flex(row, none, center);
    &__title {
      font-size: 1.2rem;
      font-weight: 600;
      color: $white;
      background: $primary;
      padding: 0.3em 0.6em;
      margin-right: auto;
      transform: translateX(-2em);
      border-radius: 5px;
      @include screen(768px) {
        transform: translateX(-1.5em);
      }
    }
    &__btn {
      background: none;
      font-size: 1rem;
      color: $white;
      padding: 0.25em 0.5em;
      cursor: pointer;
      &:active {
        color: $lite;
      }
    }
  }
  @include screen(768px) {
    width: 90%;
  }
}
</style>