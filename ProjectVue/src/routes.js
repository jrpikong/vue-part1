/**
 * Created by jrpikong on 18/03/17.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from

Vue.use(VueRouter)
let routes=[
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/authentication/Login.vue'),
    },
    {
        path: '/vendor-register',
        name: 'vendor-register',
        component: require('./components/authentication/Register.vue'),
    },
    {
        path: '/member-register',
        name: 'member-register',
        component: require('./components/authentication/Register.vue'),
    },
    {
        path: '/vendor/dhasboard',
        name: 'vendor-dhasboard',
        component: require('./components/pages/vendor/Dhasboard.vue'),
        meta:{
            requiresAuth:true
        }
    }
]
export default new VueRouter({
    mode: 'history',
    hashbang: false,
    linkActiveClass: 'active',
    routes
})
routes.mode = 'html5'


