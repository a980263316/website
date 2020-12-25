// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/';
import utils from './utils/index';
import http from './http/http';
import VueAMap from 'vue-amap';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.prototype.$utils = utils;
Vue.prototype.$http = http;
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
})
