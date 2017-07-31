<template>
  <div id="app">
    <div class="body">
      <headers></headers>
      <router-view></router-view>
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  components: {
    'headers': Header,
    'footers': Footer
  }
}
</script>

<style>
</style>
