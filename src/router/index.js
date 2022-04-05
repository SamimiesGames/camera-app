import Vue from "vue"
import VueRouter from 'vue-router'
import CameraPreview from "@/views/CameraPreview";


Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        name: "home",
        component: CameraPreview
    }
]


const router = new VueRouter({
    mode: 'history',
    base: "localhost:8080",
    routes
})

export default router
