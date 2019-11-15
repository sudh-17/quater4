import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rightApi from "./api/right-api";
import leftApi from "./api/left-api";

Vue.config.productionTip = false;

const app = new Vue({
  mixins: [leftApi, rightApi],
  router,
  render: h => h(App)
}).$mount("#app");

window.app = app;
