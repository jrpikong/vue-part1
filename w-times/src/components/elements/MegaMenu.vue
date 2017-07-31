<template>
    <div v-html="menus"></div>
</template>
<script>
  import { getMainMenu } from '../../api'
  export default{
    data () {
      return {
        menus: ''
      }
    },
    mounted () {
      this.GetMainMenus()
    },
    methods: {
      GetMainMenus () {
        this.$http.get(getMainMenu)
          .then((response) => {
            this.menus = response.data
          })
      }
    }
  }
</script>
<style>
    ul.menu-links > li:hover > ul{
      opacity: 1;
      visibility:visible;
      display: block;
    }
    ul.menu-links > li.open > ul{
      opacity: 1;
      visibility:visible;
      display: block;
    }
    ul.menu-links > li.open > ul> li:hover > ul{
      opacity: 1;
      visibility:visible;
      display: block;
    }
</style>
