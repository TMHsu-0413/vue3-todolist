import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Done from "../views/Done.vue"
import Undone from "../views/Undone.vue"
import Add from "../views/Add.vue"

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
  {
    path: "/Undone",
    name: "Undone",
    component: Undone
  },
  {
    path: "/Add",
    name: "Add",
    component: Add
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
