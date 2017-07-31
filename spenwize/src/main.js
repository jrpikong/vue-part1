// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)


Vue.http.options.root = 'http://128.199.204.149/'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
