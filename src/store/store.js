import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: "测试文本",
  str: "str"
};
const mutations = {
  addCount: () => {
    console.log('++++++', this)
    return state.count += ''
  }
}

export default new Vuex.Store({
  state,
  mutations
})
