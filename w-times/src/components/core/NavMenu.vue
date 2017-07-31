<template>
    <div>
        <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
            </div>
        </div>
        <section class="topbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                        <div class="col-md-6 col-sm-3 col-xs-12">
                            <ul class="social-media-icons-top">
                                <li><a href=""><i class="ti-facebook"></i> </a></li>
                                <li><a href=""><i class="ti-twitter"></i></a></li>
                                <li><a href=""><i class="ti-pinterest"></i></a></li>
                                <li><a href=""><i class="ti-linkedin"></i></a></li>
                                <li><a href=""><i class="ti-google"></i></a></li>
                                <li><a href=""><i class="ti-youtube"></i></a></li>
                                <li><a href=""><i class="ti-vimeo"></i></a></li>
                                <li><a href=""><i class="ti-themify-favicon"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-9 col-xs-12">
                            <ul class="">
                                <li> <i class="ti-calendar"></i> Saturday 28 January, 2017</li>
                                <li><a href=""><i class="ti-stats-up"></i> Advertize</a></li>
                                <li><a href=""><i class="ti-share"></i> Follow</a></li>
                                <li><a href=""> <i class="ti-user"></i> login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu-container-section">
            <nav id="menu-3" class="megaMenu items-description-hide vertical_lines_hide search-bar-hide-desktop" data-color="" style="max-width: 1240px; opacity: 1;">
                <div class="nav-container">
                    <div class="sticky-container">
                        <!-- mobile trigger button for show the collapse drop down -->
                        <ul class="menu-mobile-trigger">
                            <li><i class="fa fa-bars"></i></li>
                        </ul>
                        <ul class="menu-logo hidden-md">
                            <li>
                                <a href="/">
                                    <img :src="imgUrl+logo" class="img-responsive" alt="logo">
                                </a>
                            </li>
                        </ul>

                        <mega-menu></mega-menu>

                        <ul class="menu-search-bar-desktop">
                            <li>
                                <a href="javascript:void(0)"><i class="fa fa-angle-right fa-indicator"></i>
                                    <i class="fa fa-search"></i>
                                </a>
                                <div id="open-1" class="drop-down">
                                    <form action="#">
                                        <input type="search" name="s" placeholder="Search...">
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    </div>
</template>

<script>
  /* eslint-disable space-before-blocks,key-spacing */
  import { imgUrl } from '../../env'
  import { logo } from '../../api'
  import megaMenu from './../elements/MegaMenu.vue'
export default{
    components: {
      megaMenu
    },
    data (){
      return {
        logo : '',
        imgUrl: imgUrl
      }
    },
    mounted (){
      this.GetLogo()
    },
    methods: {
      GetLogo (){
        this.$http.get(logo)
          .then((response) => {
            this.logo = response.data.logo
          })
      }
    }
}
</script>
