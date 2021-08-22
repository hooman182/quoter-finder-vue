<template>
  <div class="item">
    <p class="item-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iure
      dolor quos debitis ab? Maxime nostrum quaerat, repellendus fuga ab magni
      facere pariatur voluptate voluptas eius omnis illum sapiente odit.
    </p>
    <div class="item-footer">
      <span class="item-footer__title">Bill Gates</span>
      <div>
        <button class="item-footer__btn">
          <i class="fas fa-clone"></i>
        </button>
        <button class="item-footer__btn">
          <i class="far fa-bookmark"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item {
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
    }
  }
}
</style>