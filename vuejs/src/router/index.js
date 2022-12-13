import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/auctions",
    name: "auctions",
    component: () => import("../views/AuctionView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/HelpView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link-nav'
});

export default router;
