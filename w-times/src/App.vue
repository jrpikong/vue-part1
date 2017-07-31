<template>
  <div>
    <div id="menu">
      <nav-menu></nav-menu>
    </div>

    <div id="content">
      <card></card>
      <section class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-12 col-xs-12">
              <div class="section">
                <router-view></router-view>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <site-sidebar></site-sidebar>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="footer">
      <site-footer></site-footer>
    </div>
  </div>
</template>

<script type="text/javascript">
  import NavMenu from './components/core/NavMenu.vue'
  import SiteFooter from './components/core/SiteFooter.vue'
  import SiteSidebar from './components/elements/Sidebar.vue'
  import Card from './components/elements/Card.vue'
  export default {
    components: {
      NavMenu,
      SiteFooter,
      SiteSidebar,
      Card
    },
    created () {
      window.addEventListener('resize', () => {
        this.calculateMinHeight()
      })
    },
    mounted () {
      this.calculateMinHeight()
    },
    methods: {
      calculateMinHeight () {
        let menuHeight = document.getElementById('menu').clientHeight
        let footerHeight = document.getElementById('footer').clientHeight
        this.minHeight = window.innerHeight - menuHeight - footerHeight
      }
    },
    data () {
      return {
        minHeight: 0
      }
    }
  }
</script>
