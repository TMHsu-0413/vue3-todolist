import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todolist from "../views/Todolist.vue"
import Undone from "../views/Undone.vue"
import Add from "../views/Add.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {title: '首頁'}
  },
  {
    path: "/Todolist",
    name: "Todolist",
    component: Todolist,
    meta: {title: 'Todolist'}
  },
  {
    path: "/Undone",
    name: "Undone",
    component: Undone
  },
  {
    path: "/Add",
    name: "Add",
    component: Add,
    meta: {title: '溫度查詢'}
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next()
})
export default router;
