import { createWebHistory, createRouter } from "vue-router"

import Privacy from "../views/privacy.vue"
import Terms from "../views/terms.vue"
import Home from "../views/home.vue"
import Driver from "../views/driverOnboard.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
    },
    {
        path: "/terms",
        name: "Terms",
        component: Terms,
    },
    {
        path: "/terms",
        name: "Terms",
        component: Terms,
    },
    {
        path: "/onboarding",
        name: "OnBoarding",
        component: Driver,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
