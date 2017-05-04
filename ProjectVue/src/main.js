import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import store from './store'
import Auth from './packages/Auth.js'
Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = 'http://wingding.dev'

Router.beforeEach(
    (to, from, next) => {
        if(to.matched.some(record => record.meta.requiresAuth)){
            const Auth = JSON.parse(window.localStorage.getItem('authUser'))
            if(Auth && Auth.access_token){
                next()
            }else{
                next({
                    path: '/login',
                })
            }
        }
        next()
    }
)
new Vue({
    el: '#app',
    render: h => h(App),
    router:Router,
    store
})

