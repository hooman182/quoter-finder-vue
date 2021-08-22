<template>
<!-- v-for="(data, index) in dataHistory" :key="index" -->
  <section class="section">
    <HistoryItem  />
    <button class="btn btn-danger">
      <i class="fas fa-trash"></i>
      Clear History
    </button>
  </section>
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
    return { dataHistory };
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