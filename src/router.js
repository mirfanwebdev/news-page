import { createWebHistory, createRouter } from "vue-router";
import HomeVIew from "./views/HomeVIew.vue";
import SaveView from "./views/SaveView.vue";

const routes = [
  { path: "/", component: HomeVIew },
  { path: "/save", component: SaveView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
