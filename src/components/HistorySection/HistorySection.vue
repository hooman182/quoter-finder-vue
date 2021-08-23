<template>
  <template v-if="dataHistory.length">
    <section class="section">
      <HistoryItem
        v-for="(data, index) in dataHistory"
        :key="index"
        :data="data"
        :index="index"
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
import HistoryItem from "./HistoryItem";
export default {
  name: "HistorySection",
  components: { HistoryItem },
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