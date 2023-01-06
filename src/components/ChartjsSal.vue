<template>

   
    
    <div></div> 
     
   
   
   
   </template>
   
   <script>
   import axios from 'axios';
   import "ag-grid-community/styles//ag-grid.css";
   import "ag-grid-community/styles//ag-theme-alpine.css";

   import Chart from 'chart.js/auto';
  
   
   
   
   
   export default {
     name: "ChartjsSal",

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
           { permrange: "[0 - 10000] (ppm)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]10000 - 20000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]20000 - 30000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]30000 - 40000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]40000 - 50000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]50000 - 60000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]60000 - 70000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]70000 - 80000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]80000 - 90000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]90000 - 100000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]100000 - 110000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]110000 - 120000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]120000 - 130000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]130000 - 140000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]140000 - 150000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]150000 - 160000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]160000 - 170000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]170000 - 180000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]180000 - 190000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]190000 - 200000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]200000 - 210000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]210000 - 220000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]220000 - 230000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]230000 - 240000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]240000 - 250000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]250000 - 260000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]260000 - 270000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]270000 - 280000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]280000 - 290000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]290000 - 300000] (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "> 300000 (ppm)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
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
         text: ' Case Studies Number Classified by Salinity Range'
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
           url: '/RangeSal/',
   
   
           auth: {
             username: 'admin',
             password: 'admineoradmin'
           },
   
         }).then(response => {
           response.data.forEach((item) => { this.DataPerm.forEach((item1) => {
             if((item1.permrange==item.rangeSal ) && (item.eor_type !== null) ){ 
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