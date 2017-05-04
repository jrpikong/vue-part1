/**
 * Created by jrpikong on 19/03/17.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './components/users/userStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new  Vuex.Store({
    modules:{userStore},
    strict: debug
})


