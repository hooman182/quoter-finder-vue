<template>
  <div class="item">
    <p class="item-text">
      {{ data.content }}
    </p>
    <div class="item-footer">
      <span class="item-footer__title">{{ data.author }}</span>
      <div>
        <button class="item-footer__btn" @click="copyToClipboard">
          <i class="fas fa-clone"></i>
        </button>
        <button class="item-footer__btn" @click="addToBookmark">
          <i class="far fa-bookmark" v-if="!data.bookmark"></i>
          <i class="fas fa-bookmark" style="color: #a5b1c2" v-else></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteContainer",
  props: ["data", "index"],
  setup(props, { emit }) {
    function addToBookmark() {
      emit("addToBookmark", props.index);
    }
    function copyToClipboard() {
      navigator.clipboard.writeText(props.data.content);
    }
    return { addToBookmark, copyToClipboard };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  background: $white;
  border-radius: 6px;
  overflow: hidden;
  margin: 0.5em;
  #{&}-text {
    padding: 0.75em;
    font-size: 0.9rem;
    font-weight: 600;
    color: $secondary;
  }
  #{&}-footer {
    @include flex(row, space-between, center);
    padding: 0.25em 0.75em;
    background: $secondary;
    font-size: 0.95rem;
    color: $white;
    &__title {
      font-weight: 600;
    }
    &__btn {
      background: none;
      padding: 0.25em;
      cursor: pointer;
      color: $white;
      &:active {
        color: $lite;
      }
    }
  }
}
</style>