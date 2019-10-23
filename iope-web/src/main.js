// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import md5 from 'js-md5'
import vuelidate from 'vuelidate'

import axios from 'axios'
import {post, fetch, patch, put} from './util/https'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/AdminLTE.min.css'
import './assets/js/adminlte.min.js'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5
Vue.prototype.$axios = axios
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.use(vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
