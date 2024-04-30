import Vue from "vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import App from "./App.vue";

import "@/components/icon/svg.js";

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
