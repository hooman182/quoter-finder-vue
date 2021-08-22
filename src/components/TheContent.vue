<template>
  <section class="content">
    <p class="content-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
      architecto unde hic vel non, id explicabo quae quod nobis error saepe
      voluptatibus ducimus ratione maiores
    </p>
    <div class="content-footer">
      <span class="content-footer__title">Bill Gates</span>
      <button class="content-footer__btn">
        <i class="fas fa-clone"></i>
      </button>
      <button class="content-footer__btn">
        <i class="far fa-bookmark"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheContent",
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
}
</style>