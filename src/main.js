import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'

import "./main-css"

import App from "./App";

import router from "./router";

import i18n from "./locales"

import './registerServiceWorker'

Vue.use(VueRouter);
Vue.use(RouterPrefetch);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
