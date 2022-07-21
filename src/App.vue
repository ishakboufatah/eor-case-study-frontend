<template>
  <full-navbar v-if="windowWidth > 1093"></full-navbar>
  <mini-navbar v-if="windowWidth < 1093"></mini-navbar>
  <router-view/>
</template>
<script>
// @ is an alias to /src

import FullNavbar from '@/components/FullNavbar.vue'
import MiniNavbar from '@/components/MiniNavbar.vue'

export default {
  name: 'App',
  components: {
    FullNavbar,
    MiniNavbar
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      success: false
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
