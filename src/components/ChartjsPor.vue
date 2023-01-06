<template>

   
    
    <div></div> 
     
   
   
   
   </template>
   
   <script>
   import axios from 'axios';
   import "ag-grid-community/styles//ag-grid.css";
   import "ag-grid-community/styles//ag-theme-alpine.css";

   import Chart from 'chart.js/auto';
  
   
   
   
   
   export default {
     name: "ChartjsPor",

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
           { permrange: "[0 - 0.025]",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.025 - 0.05]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.05 - 0.075]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.075 - 0.1]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.1 - 0.125]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.125 - 0.15]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.15 - 0.175]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.175- 0.2]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.2 - 0.225]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.225 - 0.25]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.25 - 0.275]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.275 - 0.3]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.3 - 0.325]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.325 - 0.35]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.35 - 0.375]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.375 - 0.4]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.4 - 0.425]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.425 - 0.45]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.45 - 0.475]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.475 - 0.5]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.5 - 0.55]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.55 - 0.6]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.6 - 0.65]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.65 - 0.7]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.7 - 0.75]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.75 - 0.8]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.8 - 0.85]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.85 - 0.9]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.9 - 0.95]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]0.95 - 1]" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
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
         text: ' Case Studies Number Classified by Porosity Range'
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
           url: '/Rangepor/',
   
   
           auth: {
             username: 'admin',
             password: 'admineoradmin'
           },
   
         }).then(response => {
           response.data.forEach((item) => { this.DataPerm.forEach((item1) => {
             if((item1.permrange==item.rangepor ) && (item.eor_type !== null) ){ 
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