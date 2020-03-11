import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    name: ""
  },
  getters: {
    name: state => {
      return state.name;
    },
    username: state => {
      return state.username;
    }
  },
  mutations: {
    saveData: (state, payload) => {
      state.name = payload.name;
      state.username = payload.username;
    }
  },
  actions: {
    storeData: ({ commit }, data) => {
      commit("saveData", data);
      router.push({ name: "Thanks" });
    }
  },
  modules: {}
});
