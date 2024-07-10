import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "login1",
        component: () => import("@/page/login1/login1.vue"),
    },
    {
        path: "/login2",
        name: "login2",
        component: () => import("@/page/login2/login2.vue"),
    },
];

const router=createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;