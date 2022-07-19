<template>
  <full-navbar></full-navbar>
  <router-view/>
</template>
<script>
// @ is an alias to /src

import FullNavbar from '@/components/FullNavbar.vue'

export default {
  name: 'App',
  components: {
    FullNavbar
  }
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
