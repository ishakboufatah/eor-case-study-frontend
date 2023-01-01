<template>
    <div style="position: absolute;top:200px;">
    <input style="top:50px;" type="file"  @change="onChange"/> 
    <div style=""> data is :{{this.data}}</div>
</div>
</template>

<script>

import readXlsxFile from 'read-excel-file'
// import XLSX from "xlsx";
export default {
    name: 'NewPage',
    components: {
        
        


    },
    props: {

    },
    data: () => ({
        
        data: [5],
        file: null
        
    }),
    mounted() {     
       
        // this.onFileChange()
        
       

    },
    methods:{
        onFileChange(e) {
            var file = e.target.files ? e.target.files[0] : null;
            readXlsxFile(file).then((rows) => {this.data=rows
                console.log(rows)
            })
        },
        onChange(event) {
      this.file = event.target.files ;
      console.log(this.file[0])
      
    },
  }

  }
    
  

        
    
        
        
    



</script>

<style>

</style>