import { createMemoryHistory, createRouter } from "vue-router";
import HomeVIew from "./views/HomeVIew.vue";

const routes = [{ path: "/", component: HomeVIew }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
