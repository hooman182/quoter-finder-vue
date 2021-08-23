<template>
  <section class="section">
    <h1 class="view-title">Bookmarked Quotes</h1>
    <QuoteContainer
      v-for="(data, index) in boomarkedData"
      :key="index"
      :data="data"
    />
  </section>
</template>

<script>
import QuoteContainer from "@/components/QuoteContainer";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
export default {
  name: "BookMarks",
  components: { QuoteContainer },
  setup() {
    const store = useStore();
    const boomarkedData = computed(() => store.getters.boomarkedData);
    return { boomarkedData };
  },
};
</script>

<style>
.section {
  width: 50%;
  margin: 2em auto;
}
</style>