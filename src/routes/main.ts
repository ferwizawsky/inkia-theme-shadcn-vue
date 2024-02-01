import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { useOption } from "@/stores/option";
// import { useAuth } from "@/stores/auth";
import User from "@/routes/user"; 

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/index.vue"),
  }, 
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/dash",
    redirect: "/dash/user",
    component: () => import("@/layouts/main.vue"),
    children: [
      ...User, 
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
//   const auth = useAuth();
//   document.title = to.name + " | " + useOption().name;
//   if (!auth.isAuthenticated && to.path !== "/login") {
//     next("/login");
//   } else {
//     next();
//   }
  // if (!auth.token) next("/login");
  // else next();
  // if (!to.meta?.public && !token) {
  //   next("/login");
  // }
  next();
});

export default router;
