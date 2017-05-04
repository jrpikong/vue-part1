<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <nav class="header-top">
            <div class="container">
                <div class="row">
                    <router-link to="/" ><a><img src="http://www.weddingku.com/assets/i/logo.png" class="navbar-brand"></a></router-link>
                    <ul class="nav navbar-nav navbar-right">
                        <router-link to="/member-register" tag="li" v-if="userStore.authUser == null"><a>Join Member</a></router-link>
                        <router-link to="/login" tag="li" v-if="userStore.authUser == null"><a>Sign In</a></router-link>
                        <router-link to="/vendor-register" tag="li" v-if="userStore.authUser == null"><a>Are You A Vendor ? </a><span class="sr-only">(current)</span></router-link>
                        <li class="dropdown dropdown-avatar"  v-if="userStore.authUser !== null && userStore.authUser.access_token">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img :src="imgUrl+userStore.authUser.userAvatar" class="avatar"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <router-link :to="{name:'vendor-dhasboard'}" tag="li"><a>Dhasboard</a></router-link>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Help</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Setting</a></li>
                                <li><button @click="handleLogOut()" class="btn btn-primary btn-lg btn-block">Log Out</button></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/" exact tag="li" ><a>Vendor</a></router-link>
                    <router-link to="/venoue" tag="li" ><a>Venoue</a></router-link>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>
<script>
    import {mapState} from 'vuex'
    import {imgUrl} from '../env'
    export default{
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },
        data(){
            return {
                imgUrl:imgUrl
            }
        },
        created() {
        },
        methods: {
            handleLogOut(){
                this.$store.dispatch('clearAuthUser')
                window.localStorage.removeItem('authUser')
                this.$router.push({name:'home'})
            }
        }
    }
</script>