import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Done from "../views/Done.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Done",
    name: "Done",
    component: Done
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
