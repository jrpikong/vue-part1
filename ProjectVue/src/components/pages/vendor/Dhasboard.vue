<template>
    <div>
        <div class="container">
            <div class="row profile">
                <div class="col-md-3">
                    <div class="profile-sidebar">
                        <!-- SIDEBAR USERPIC -->
                        <div class="profile-userpic">
                            <img :src="imgUrl+userStore.authUser.userAvatar" class="img-responsive" alt="" />
                        </div>
                        <!-- END SIDEBAR USERPIC -->
                        <!-- SIDEBAR USER TITLE -->
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name">
                                {{ userStore.authUser.userEmail }}
                            </div>
                            <div class="profile-usertitle-job">
                                {{ userStore.authUser.userName }}
                            </div>
                        </div>
                        <!-- END SIDEBAR USER TITLE -->
                        <!-- SIDEBAR BUTTONS -->
                        <div class="profile-userbuttons">
                            <ul class="star">
                                <li>
                                    <i class="glyphicon glyphicon-star active"></i>
                                    <i class="glyphicon glyphicon-star active"></i>
                                    <i class="glyphicon glyphicon-star active"></i>
                                    <i class="glyphicon glyphicon-star"></i>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-success btn-sm">Follow</button>
                            <button type="button" class="btn btn-danger btn-sm">Message</button>
                        </div>
                        <!-- END SIDEBAR BUTTONS -->
                        <!-- SIDEBAR MENU -->
                        <div class="profile-usermenu">
                            <ul class="nav">
                                <li class="active">
                                    <a href="#">
                                        <i class="glyphicon glyphicon-home"></i>
                                        Overview </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="glyphicon glyphicon-user"></i>
                                        Account Settings </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="glyphicon glyphicon-ok"></i>
                                        Tasks </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="glyphicon glyphicon-flag"></i>
                                        Help </a>
                                </li>
                            </ul>
                        </div>
                        <!-- END MENU -->
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-content">
                        Some user related content goes here...
                     </div>
                </div>
            </div>
        </div>
        <!--<div class="container">-->
            <!--<div class="row">-->
                <!--&lt;!&ndash;sidebar menus&ndash;&gt;-->
                <!--<div class="col-sm-3">-->
                    <!--<ul class="top-profile sidebar-vendor">-->
                        <!--<li><img :src="imgUrl+userStore.authUser.userAvatar"/></li>-->
                        <!--<li>-->
                            <!--<i class="glyphicon glyphicon-star active"></i>-->
                            <!--<i class="glyphicon glyphicon-star active"></i>-->
                            <!--<i class="glyphicon glyphicon-star active"></i>-->
                            <!--<i class="glyphicon glyphicon-star"></i>-->
                        <!--</li>-->
                        <!--<li>{{ userStore.authUser.userEmail }}</li>-->
                        <!--<li>{{ userStore.authUser.userName }}</li>-->
                    <!--</ul>-->
                    <!--<ul class="nav nav-sidebar sidebar-menu sidebar-vendor">-->
                        <!--<li>Helo</li>-->
                        <!--<li role="separator" class="divider"></li>-->
                        <!--<li>helo 2</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--&lt;!&ndash;end sidebar menus&ndash;&gt;-->
                <!--&lt;!&ndash;left content&ndash;&gt;-->
                <!--<div class="col-md-9">-->
                    <!--<div class="content-vendor">-->

                    <!--</div>-->

                <!--</div>-->
                <!--&lt;!&ndash;end left content&ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<style></style>
<script>
    import {imgUrl} from '../../../env'
    import {mapState} from 'vuex'
    import {getHeader} from '../../../env'
    export default{
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },
        data(){
            return{
                users: [],
                imgUrl:imgUrl
            }
        },

        created(){

        }
    }
</script>