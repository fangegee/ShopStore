import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    timer: null
  },
  getters: {
    countAdd: state => {
      state.timer = setInterval(function () {
        clearInterval(state.timer)
        state.count >= 4 ? state.count = 0 : state.count++
        // return state.count
      }, 3000)
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
});
