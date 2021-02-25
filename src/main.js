import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
// import axios from "axios";
// import VueAxios from "vue-axios";

import "./main-css"

import App from "./App";

import router from "./router/index";

import i18n from "./i18n"
import './registerServiceWorker'

Vue.use(VueRouter);
Vue.use(RouterPrefetch);
// Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
