<template>

   
    
     <div></div> 
      
    
    
    
    </template>
    
    <script>
    import axios from 'axios';
    import "ag-grid-community/styles//ag-grid.css";
    import "ag-grid-community/styles//ag-theme-alpine.css";

    import Chart from 'chart.js/auto';
   
    
    
    
    
    export default {
      name: "ChartjsPerm",

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
            { permrange: "[0 - 50] (md)",Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]50 - 100] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]100 - 150] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]150 - 200] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]200 - 250] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]250 - 300] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]300 - 350] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]350 - 400] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]400 - 450] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]450 - 500] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]500 - 600] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]600 - 700] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]700 - 800] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]800 - 900] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]900 - 1000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]1000 - 2000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]2000 - 3000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]3000 - 4000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]4000 - 5000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]5000 - 6000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]6000 - 7000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]7000 - 8000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]8000 - 9000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "]9000 - 10000] (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
            { permrange: "> 10000 (md)" ,Miscible_EOR:0, Chemical_EOR:0 ,Thermal_EOR:0,WAG_EOR:0 },
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
          aspectRatio:1.6,
          plugins: {
        title: {
          display: true,
          text: ' Case Studies Number Classified by Permeability Range'
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
            url: '/Rangeperm/',
    
    
            auth: {
              username: 'admin',
              password: 'admineoradmin'
            },
    
          }).then(response => {
            response.data.forEach((item) => { this.DataPerm.forEach((item1) => {
              if((item1.permrange==item.rangeperm ) && (item.eor_type !== null) ){ 
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