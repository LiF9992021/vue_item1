import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 倒入全局的样式
import './assets/css/login.css'
// 导入axios
import axios from 'axios'
Vue.prototype.$axios=axios
// 设置请求根路径
axios.defaults.baseURL='http://127.0.0.1'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
