import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
    },

]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


