import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProva from "./pages/AppProva.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/prova",
      name: "prova",
      component: AppProva,
    },
  ],
});

export { router };
