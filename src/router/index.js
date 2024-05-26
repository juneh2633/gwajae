import { createRouter, createWebHistory } from "vue-router";
import FriendList from "../components/FriendList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: FriendList,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
