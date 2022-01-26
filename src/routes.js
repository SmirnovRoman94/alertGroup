// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404.vue'
import Catalog from '@/pages/Catalog'

//Routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})