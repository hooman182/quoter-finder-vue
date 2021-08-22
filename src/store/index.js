import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    data: ""
  },
  mutations: {
    getData(state, response) {
      state.data = response
    }
  },
  actions: {
    async fetchData({ commit }) {
      await axios.get("https://api.quotable.io/random").then(res => commit('getData', res.data));
    }
  },
  modules: {},
});
