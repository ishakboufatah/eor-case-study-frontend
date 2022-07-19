<template>
  <div class="home">
    <Poster msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/PosterCom.vue'

export default {
  name: 'HomeView',
  components: {
    Poster,
    
  }
}
</script>
