<template>

   
    
    <div></div> 
     
   
   
   
   </template>
   
   <script>
   import axios from 'axios';
   import "ag-grid-community/styles//ag-grid.css";
   import "ag-grid-community/styles//ag-theme-alpine.css";

   import Chart from 'chart.js/auto';
  
   
   
   
   
   export default {
     name: "ChartjsVisc",

     props: {
       fieldnumber: Number,
       fnn: Number,
       Text11: String,
   
     },
     watch: {
       rowData: {
         deep: true
       }
     },
     // let rowData = 
     data() {
       return {
         
         
         
         
   
         
         
         DataPerm: [
           { permrange: "[0 - 1] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]1 - 2] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]2 - 3] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]3 - 4] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]4 - 5] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]5 - 6] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]6 - 7] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]7 - 8] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]8 - 9] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]9 - 10] (cp)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]10 - 20] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]20 - 30] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]30 - 40] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]40 - 50] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]50 - 60] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]60 - 70] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]70 - 80] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]80 - 90] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]90 - 100] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]100 - 200] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]200 - 300] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]300 - 400] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]400 - 500] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]500 - 600] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]600 - 700] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]700 - 800] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]800 - 900] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]900 - 1000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]1000 - 2000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]2000 - 3000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]3000 - 4000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]4000 - 5000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]5000 - 6000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]6000 - 7000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]7000 - 8000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]8000 - 9000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]9000 - 10000] (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "> 10000 (cp)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
         ],
   
         function() {
   
   
         }
         ,
   
   
   
   
   
   
       };
     },
     computed: {
      
       
   
   
   
     },
     created() {
       
       
       
     },
     mounted() {
       
       this.getRangeperm()
       // this.getCaseStudies2()
       // this.chartfanc()
       
   
   
     },
     methods: {
       chartfanc(data){
         new Chart(
     document.getElementById('chart'),
     {
       type: 'bar',
       data: {
         labels: this.DataPerm.map(row => row.permrange),
         datasets: [
           
             {label: 'Miscible EOR',
             data: data.map(row => row.Miscible_EOR),
             backgroundColor: '#f3622d',
             borderColor: '#AA4520',
             borderWidth: 1},
   
             {label: 'Chemical EOR',
             data: data.map(row => row.Chemical_EOR),
             backgroundColor: '#fba71b',
             borderColor: '#B07513',
             borderWidth: 1},
   
             {label: 'Thermal EOR',
             data: data.map(row => row.Thermal_EOR),
             backgroundColor: '#57b757',
             borderColor: '#3D803D',
             borderWidth: 1},
   
             {label: 'WAG EOR',
             data: data.map(row => row.WAG_EOR),
             backgroundColor: '#41A9C9',
             borderColor: '#2D768D',
             borderWidth: 1},
            
           
         ],
        
         
       },
       options:{
         responsive: true,
         maintainAspectRatio: false,
         aspectRatio:1,
         plugins: {
       title: {
         display: true,
         text: ' Case Studies Number Classified by viscosity Range'
       },
       legend:{
         position : 'bottom'
       }
     },
         
         scales: {
         x: {
             stacked: true,
             },
         y: {
             stacked: true
             }
     }}
       
     }
   );
     },
     getRangeperm() {
         
         var data = this.rowDataPerm
         axios({
           method: 'get',
           url: '/RangeVisc/',
   
   
           auth: {
             username: 'admin',
             password: 'admineoradmin'
           },
   
         }).then(response => {
           response.data.forEach((item) => { this.DataPerm.forEach((item1) => {
             if((item1.permrange==item.rangeVisc ) && (item.eor_type !== null) ){ 
               item1[item.eor_type.replaceAll(' ', '_')]=item.count} })})
               ;console.log(data);this.chartfanc(this.DataPerm)
         })
       },
      
       
       
       
       
   
       
       
     },
   };
   
   
   
   
   
   </script>
   <style>
   .wrapper {
     display: flex;
     flex-direction: column;
     height: 100%;
   }
   
   #myGrid {
     flex: 1;
     height: auto !important;
   }
   
   .my-chart {
     height: 500px;
   
   }
   
   .ag-theme-alpine {
     /* pink category range */
     --ag-range-selection-chart-category-background-color: rgba(255, 0, 132, 0.1);
   
     /* orange data range */
     --ag-range-selection-chart-background-color: rgba(255, 115, 0, 0.1);
   }
   </style>