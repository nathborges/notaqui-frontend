import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/views/Home.vue";
import Login from "/src/views/Login.vue";
import NovaDespesa from "/src/views/NovaDespesa.vue";

const routes = [
  {
      path: "/",
      name: "Login",
      component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/new",
    name: "NovaDespesa",
    component: NovaDespesa,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;