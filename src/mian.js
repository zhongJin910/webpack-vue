import Vue from "vue";
import Router from "vue-router";

import App from "./app.vue";
import Home from "./views/home.vue";

Vue.use(Router); // vue 引入 vue-router
const routes = [
  {
    path: "/",
    name: "home",
    // component: () => import("./views/home.vue"),
    component: Home,
  },
];
const router = new Router({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
