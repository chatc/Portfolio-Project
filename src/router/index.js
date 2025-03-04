import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Project from "../views/ProjectViews.vue";
import About from "../views/AboutViews.vue";
import Contact from "../views/ContactViews.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Project", component: Project },
  { path: "/About", component: About },
  { path: "/Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
