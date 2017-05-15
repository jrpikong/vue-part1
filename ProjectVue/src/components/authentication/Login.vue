<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">Helo</div>
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">Already a member?</div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form" @submit.prevent="login"  >
                                <div :class="{ 'has-error': errors.has('email'), 'form-group': true } ">
                                <div class="col-md-12">
                                    <input v-validate data-vv-rules="required|email" v-model="form.email"  type="email" class="form-control" name="email" placeholder="E-Mail Address"  required autofocus>
                                    <span v-if="errors.has('email')" class="help-block">
                                        <strong>{{ errors.first('email') }}</strong>
                                        </span>
                                </div>
                            </div>
                                <div :class="{ 'has-error': errors.has('password'), 'form-group': true } ">
                                    <div class="col-md-12">
                                        <input v-validate data-vv-rules="required|min:8" v-model="form.password"  type="password" class="form-control" name="password" placeholder="Password" required autofocus>
                                        <span v-if="errors.has('password')" class="help-block">
                                            <strong>{{ errors.first('password') }}</strong>
                                            </span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="form.remember" type="checkbox" name="remember"> Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary col-md-4">
                                            Login
                                        </button>
                                        <a class="btn btn-link col-md-8" href="">
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Not a member yet?
                        </div>
                        <div class="panel-body">
                            <router-link to="/vendor-register" tag="button" class="btn btn-primary btn-lg btn-block">
                                Sign Up Free

                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {clientId,clientSecret,getHeader} from '../../env'
    export default{
        data(){
            return{
                form:{
                    email: 'admin@jessicadora.com',
                    password: 'Jvnior_2030',
                    remember: false
                }
            }
        },
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },
        methods: {
            login () {
                var postData = {
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: 'password',
                    username: this.form.email,
                    password: this.form.password,
                    scope: ''
                }
                const authUser ={}
                this.$http.post('oauth/token',postData)
                    .then(response =>{
                        authUser.access_token = response.data.access_token
                        authUser.refresh_token = response.data.refresh_token
                        authUser.expiration = response.data.expires_in
                        window.localStorage.setItem('authUser', JSON.stringify(authUser))
                        this.$http.get('api/user',{headers:getHeader()})
                            .then(response => {
                                authUser.userId = response.body.id
                                authUser.userRoleId = response.body.role_id
                                authUser.userAvatar = response.body.avatar
                                authUser.userName = response.body.name
                                authUser.userEmail = response.body.email
                                window.localStorage.setItem('authUser',JSON.stringify(authUser))
                                this.$store.dispatch('setUserObject',authUser)
                                if(response.body.role_id === 2)
                                {
                                    this.$router.push('/vendor/dhasboard')
                                }else{
                                    this.$router.push({name:'home'})
                                }
                            })
                    })
            }
        }
    }
</script>
