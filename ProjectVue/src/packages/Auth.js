/**
 * Created by jrpikong on 18/03/17.
 */

export default function (Vue) {
    Vue.auth ={

        setToken (token,expiration){
            window.localStorage.setItem('token',token)
            window.localStorage.setItem('expiration',expiration)
        },

        getToken (){
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            if(! token || !expiration)
                return null
            if(Date.now() > expiration) {
                this.destroyToken()
                return null
            }else {
                return token
            }
        },

        destroyToken (){
            window.localStorage.removeItem('authUser')
            return true
        },

        isAuthenTicated (){
            if(this.getToken())
                return true
            else
                return false
        },

        setAuthenticatedUser (data){
            window.localStorage.setItem('AuthenticatedUser',data)
        },

        getAuthenticatedUser(){
            return window.localStorage.getItem(AuthenticatedUser)
        }
    }

    Object.defineProperties(Vue.prototype,{
        $auth:{
            get:() => {
                return Vue.auth
            }
        }
    })
}