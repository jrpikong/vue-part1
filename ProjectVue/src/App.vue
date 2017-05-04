<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <!--<footers></footers>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  export default {
      components: {
          'navbar':Navbar,
          'footers':Footer
      },
      computed: {
          ...mapState({
              userStore: state => state.userStore
          })
      },
      created() {
          const userObj = JSON.parse(window.localStorage.getItem('authUser'))
          this.$store.dispatch('setUserObject',userObj)
      }
  }
</script>

<style lang="scss">

</style>
