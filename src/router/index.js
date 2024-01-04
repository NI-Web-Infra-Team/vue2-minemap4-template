import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "Root",
    path: "/",
    component: () => import("./../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes,
});


export default router;
