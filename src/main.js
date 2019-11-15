import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import eventApi from "./api/api.event";
import bussinessApi from "./api/api.bussiness";

Vue.config.productionTip = false;

const app = new Vue({
  mixins: [eventApi, bussinessApi],
  router,
  render: h => h(App)
}).$mount("#app");

window.app = app;
