import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Import Home.vue
import authRoutes from "./auth";
import Dashboard from "@/views/user/Dashboard.vue";
import Introduction from "@/views/user/Introduction.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "default" }, // Sử dụng DefaultLayout cho trang chủ
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { layout: "default", requiresAuth: true }, // Thêm requiresAuth
  },
  {
    path: "/introduction",
    name: "Introduction",
    component: Introduction,
    meta: { layout: "default" },
  },

  ...authRoutes, // Spread các route từ authRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard để kiểm tra trạng thái đăng nhập
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log("Navigating to:", to.name, "isLoggedIn:", isLoggedIn); // Debug

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Nếu route yêu cầu đăng nhập mà chưa đăng nhập, chuyển hướng về /login
    next("/login");
  } else if (to.name === "Login" && isLoggedIn) {
    // Nếu đã đăng nhập mà cố truy cập /login, chuyển hướng về /dashboard
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
