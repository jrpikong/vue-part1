<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  require('./assets/js/sehankitchen')
  import Navbar from './components/Navbar.vue'
export default {
    components: {
      'navbar': Navbar
    },
    name: 'app'
}
</script>
<style>
  @import "./assets/css/sehankitchen.css";
</style>

