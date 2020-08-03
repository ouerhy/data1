import Vue from "vue";
import Vuex from "vuex";
import countNum from "./count"
import myselect from "./select"
// 作为插件使用
Vue.use(Vuex);
let store = new Vuex.Store({
   modules:{
    countNum,
    myselect
   }
})
export default store