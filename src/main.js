import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'

import "./main-css"

import App from "./App";

import router from "./router/index";

import i18n from "./i18n"
import './registerServiceWorker'

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: "310551170823-9pjkdouq7jq56o5cotrde3pmakq3bqmu.apps.googleusercontent.com",
  clientSecret : "dS2kgvcheeDKC_05x6X8kqzz"
}

Vue.use(GAuth, gauthOption)
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
