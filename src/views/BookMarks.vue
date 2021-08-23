<template>
  <section class="section">
    <HistoryItem v-for="data,index in boomarkedData" :key="index" :data="data"/>
  </section>
</template>

<script>
import HistoryItem from "@/components/HistorySection/HistoryItem";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
export default {
  name: "BookMarks",
    components: { HistoryItem },
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