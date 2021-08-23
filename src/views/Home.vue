<template>
  <div class="home">
    <main class="main">
      <h1 class="view-title">find random quote's</h1>
      <TheContent :data="data" @addToBookmark="bookmarkItem"/>
      <button class="btn btn-primary" @click="getNewData">
        <i class="fas fa-sync-alt"></i>
        Find New Quote
      </button>
      <HistorySection />
    </main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import TheContent from "@/components/TheContent";
import HistorySection from "@/components/HistorySection";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: { TheContent, HistorySection },
  setup() {
    const store = useStore();
    const data = computed(() => store.state.data);

    function getNewData() {
      store.dispatch("fetchData");
    }
    onMounted(() => getNewData());
    function bookmarkItem(data) {
      console.log(data);
    }

    return {
      data,
      getNewData,
      bookmarkItem
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  @include flex(column, none, center);
}
</style>
