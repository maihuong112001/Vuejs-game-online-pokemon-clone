import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pokemo from "../views/Pokemo.vue";
import NotFound from "../views/404.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemo",
    name: "Pokemo",
    component: Pokemo,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: NotFound,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
