import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EncyclopedieView from "@/views/EncyclopedieView.vue";
import AProposView from "@/views/AProposView.vue";
import ContactView from "@/views/ContactView.vue";
import ErrorView from "@/views/ErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/encyclopedie",
      name: "encyclopedie",
      component: EncyclopedieView,
    },
    {
      path: "/a-propos",
      name: "a-propos",
      component: AProposView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "ErrorView",
      component: ErrorView,
      meta: {
        robots: "noindex",
      },
    },
  ],
});

export default router;
