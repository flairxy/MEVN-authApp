import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("jwt");
      if (token) {
        next();
      } else {
        next("/404");
      }
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("jwt");
      if (token) {
        next("/");
      } else {
        next();
      }
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/auth/Register.vue"),
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("jwt");
      if (token) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "*",
    name: "Error",
    component: () => import(/* webpackChunkName: "error" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
