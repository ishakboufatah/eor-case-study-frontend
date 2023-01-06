<template>

   
    
    <div></div> 
     
   
   
   
   </template>
   
   <script>
   import axios from 'axios';
   import "ag-grid-community/styles//ag-grid.css";
   import "ag-grid-community/styles//ag-theme-alpine.css";

   import Chart from 'chart.js/auto';
  
   
   
   
   
   export default {
     name: "ChartjsRT",

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
           { permrange: " < 15  (C)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]15 - 20] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]20 - 25] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]25 - 30] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]30 - 35] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]35 - 40] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]40 - 45] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]45 - 50] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]50 - 55] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]55 - 60] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]60 - 65] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]65 - 70] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]70 - 75] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]75 - 80] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]80 - 85] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]85 - 90] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]90 - 95] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]95 - 100] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]100 - 105] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]105 - 110] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]110 - 115] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]115 - 120] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]120 - 125] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: "]125 - 130] (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
           { permrange: " > 130 (C)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
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
         text: ' Case Studies Number Classified by Reservoir Temperature Range'
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
           url: '/RangeRT/',
   
   
           auth: {
             username: 'admin',
             password: 'admineoradmin'
           },
   
         }).then(response => {
           response.data.forEach((item) => { this.DataPerm.forEach((item1) => {
             if((item1.permrange==item.rangeRT ) && (item.eor_type !== null) ){ 
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