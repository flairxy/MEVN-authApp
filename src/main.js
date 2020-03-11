import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCookie from "vue-cookie";
Vue.use(VueCookie);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = true;

// import axios from "./repository/base";
// axios.defaults.baseURL = "http://localhost:4000";

import Navbar from "@/components/layouts/Navbar";
Vue.component("Navbar", Navbar);
Vue.prototype.$fire = new Vue();

// require("@/assets/css/styles.css");
// require("@/assets/css/bky.css");
require("./assets/css/theme.min.css");
// require('./assets/css/theme-dark.min.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
