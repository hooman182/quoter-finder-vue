import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    data: "",
    dataHistory: [],
  },
  mutations: {
    getData(state, response) {
      response.bookmark = false
      state.data = response;
      state.dataHistory = [...state.dataHistory, response];
    },
    bookmarkItem(state, index) {
      state.dataHistory[index].bookmark = !state.dataHistory[index].bookmark
    },
    removeBookmark(state, item) {
      state.bookmarks.splice(item, 1);
    },
    clearHistory(state) {
      state.dataHistory = [];
    }
  },
  actions: {
    async fetchData({ commit }) {
      await axios.get("https://api.quotable.io/random")
        .then(res => commit('getData', res.data))
        .catch(res => console.log(res));
    }
  },
  getters: {
    boomarkedData(state) {
      const bookmarks = [];
      for (const data of state.dataHistory) {
        if (data.bookmark) {
          bookmarks.push(data)
        }
      }
      return bookmarks;
    }
  },
  modules: {},
});
