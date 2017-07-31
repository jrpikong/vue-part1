import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('../../src/components/pages/Home.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: require('../../src/components/pages/Article.vue')
    },
    {
      path: '/detail-article/:id/:slug',
      name: 'Detail-Article',
      component: require('../../src/components/pages/DetailArticle.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: require('../../src/components/pages/Contact.vue')
    },
    {
      path: '/login',
      component:require('../../src/components/pages/Login.vue')
    },
    {
      path: '/calculators',
      component:require('../../src/components/pages/Calculator.vue')
    }
  ],
  linkActiveClass: 'active',
  // mode: 'history',
  // base: window.location.href,
  base: __dirname,
  // hashbang: false,
})

// router.afterEach((to, from) => {
//   console.log(from+'--'+to)
//   })
