import { RouteRecordRaw } from "vue-router";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: () => import("@/pages/dashboard/index.vue"),
  }, 
];

export default userRoutes;
