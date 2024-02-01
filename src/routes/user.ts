import { RouteRecordRaw } from "vue-router";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "user",
    name: "List user",
    component: () => import("@/pages/user/index.vue"),
  },
  {
    path: "user/:id",
    name: "User",
    component: () => import("@/pages/user/id.vue"),
  },
  {
    path: "user-make",
    name: "User Make",
    component: () => import("@/pages/user/id.vue"),
  },
];

export default userRoutes;
