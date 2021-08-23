<template>
  <Navbar />
  <router-view />
</template>
<script>
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
import Navbar from "@/components/TheNavbar";
export default {
  name: "App",
  components: { Navbar },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("fetchData"));
  },
};
</script>

<style lang="scss">
</style>
