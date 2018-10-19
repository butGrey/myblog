// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import { Loading } from 'element-ui'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Loading)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'https://www.wwtliu.com';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-ulencode'

// 创建一个store仓库
// const store = new Vuex.Store({
// 	state:{
// 		count:0
// 	}
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
