<template>
  <template v-if="dataHistory.length">
    <section class="section">
      <QuoteContainer
        v-for="(data, index) in dataHistory"
        :key="index"
        :data="data"
        @addToBookmark="bookmarkItem"
      />
      <button class="btn btn-danger" @click="handleClearHistory">
        <i class="fas fa-trash"></i>
        Clear History
      </button>
    </section>
  </template>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import QuoteContainer from "@/components/QuoteContainer";
export default {
  name: "HistorySection",
  components: { QuoteContainer },
  setup() {
    const store = useStore();
    const dataHistory = computed(() => store.state.dataHistory);
    function handleClearHistory() {
      store.commit("clearHistory");
    }
    function bookmarkItem(index) {
      store.commit('bookmarkItem', index);
    }
    return { dataHistory, handleClearHistory, bookmarkItem };
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 50%;
  margin: 2em 0 1em 0;
  @include flex(column, none, center);
}
</style>