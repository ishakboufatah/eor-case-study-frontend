<template>

   
    
    <div></div> 
     
   
   
   
   </template>
   
   <script>
   import axios from 'axios';
   import "ag-grid-community/styles//ag-grid.css";
   import "ag-grid-community/styles//ag-theme-alpine.css";

   import Chart from 'chart.js/auto';
 
   export default {
     name: "ChartjsRTRF",

     props: {
       fieldnumber: Number,
       fnn: Number,
       Text11: String,
       eortype: String,
       id:Number,
   
     },
     watch: {
       rowData: {
         deep: true
       }
     },
     // let rowData = 
     data() {
       return {
       };
     },
     computed: {

     },
     created() {
   
     },
     mounted() {

       this.getCaseStudies2(this.eortype)
       // this.chartfanc()

     },
     methods: {
       chartfanc(data){
         new Chart(
          document.querySelector('#'+this.eortype.replaceAll(' ', '_')),
     {
       type: 'bar',
       data: {
        //  labels: data.map(row => row.field),
         datasets: [
           
             {label: 'Recoveryfactor',
             data: data.map(row => row.Recovery_factor),
             backgroundColor: '#f3622d',
             borderColor: '#AA4520',
             borderWidth: 1,
             yAxisID: 'y',
             order: 1},
   
             {label: 'Reservoir Temperature (C)',
             data: data.map(row => row.RT),
             backgroundColor: '#fba71b',
             borderColor: '#B07513',
             borderWidth: 1,
             yAxisID: 'y2',
             type: 'line',
             order: 0},
         ],  
       },
       options:{
         responsive: true,
         maintainAspectRatio: false,
        //  aspectRatio:1,
         plugins: {
       title: {
         display: true,
         text: this.eortype
       },
       legend:{
         position : 'bottom'
       }
     },
         
         scales: {
         x: {
          type: 'category',
          labels: data.map(row => row.field),
             },
          x1: {
          type: 'category',
             
             },
         y: {
             
             position: 'left',
             title: {
          // color: 'red',
          display: true,
          text: 'Incremental EOR Recovery Factor'
        }
             },
             
         y2: {
             
             position: 'right',
             title: {
          // color: 'red',
          display: true,
          text: 'Reservoir Temperature (C)'
        }
             }
     }} 
     }
   );
     },

       getCaseStudies2(varia) {
        var rowDataa = [];
        
      axios({
        method: 'get',
        url: '/CaseStudies/?eortype=' + varia,


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => {
        response.data.forEach((item) => {
          if ((Number.isFinite(item.initial_temperature_c) == true)&& (Number.isFinite(item.incremental_eor_recovery_factor_fraction) == true)) { if ((item.eor_type !== null)){
            rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, RT: item.initial_temperature_c, eor_type: item.eor_type })
            // ,this.rowData.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_permeability_md, eor_type: item.eor_type })
          }}
        });this.chartfanc(rowDataa)
      })
      return rowDataa 
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