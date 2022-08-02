<template>
  <div class="home">
    <Poster msg="Welcome to Your Vue.js App"/>
  </div>
  <MainSecEORD id="div1"></MainSecEORD>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/PosterCom.vue'
import MainSecEORD from '@/components/MainSecEORD.vue'
export default {
  name: 'HomeView',
  components: {
    Poster,MainSecEORD,

  },
  mounted() {  
    document.title = "SH EOR DATABASE";  
  },
  

}
</script>



