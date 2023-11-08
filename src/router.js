import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppShow from "./pages/AppShow.vue";
import AppMessage from "./pages/AppMessage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/:id",
      name: "home.show",
      component: AppShow,
      props: true,
    },
    {
      path: "/:id/message",
      name: "home.message",
      component: AppMessage,
      props: true,
    }
  ],
});

export { router };
