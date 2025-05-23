import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import InformationsView from "@/views/InformationsView.vue";
import EncyclopedieView from "@/views/EncyclopedieView.vue";
import JukeboxView from "@/views/JukeboxView.vue";
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
      path: "/informations",
      name: "informations",
      component: InformationsView,
    },
    {
      path: "/encyclopedie",
      name: "encyclopedie",
      component: EncyclopedieView,
    },
    {
      path: "/juke-box",
      name: "juke-box",
      component: JukeboxView,
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
