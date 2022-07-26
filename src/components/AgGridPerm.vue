<template>

  <ag-grid-vue
    
    style="width: auto ; height: 400px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="response"
    :enableCharts=true
    :enableRangeSelection=true
    :popupParent="popupParent"
    :defaultColDef="defaultColDef"
    @grid-ready="onGridReady"
    :createChartContainer="createChartContainer"
    @column-resized="onColumnResized" 
    @first-data-rendered="onFirstDataRendered"
    
    :chartThemeOverrides="chartThemeOverrides"
  >
  </ag-grid-vue>




  


  
  
</template>

<script>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import{rowData} from './data.js';
import { ModuleRegistry } from 'ag-grid-community';
import { GridChartsModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([
  GridChartsModule

]);

let respone = []
let respone1 = rowData[0]

respone1.forEach(item => {
 
   respone.push({field:item[0].value,Recovery_factor:item[38].value,permeability:item[19].value}) } )
export default {
  name: "AgGridPerm",
  components: {
    AgGridVue
  },
  props: {
    fieldnumber: Number,
    fnn: Number,
    
  },
  data() {
    return {
      response: respone,
      respone2: respone1,
      columnDefs:[
    { headerName: "field", field: "field" , resizable: true , width: 220, chartDataType: 'category'},
    { headerName: "Recovery_factor", field: "Recovery_factor" , resizable: true , width: 300, chartDataType: 'series'},
    { headerName: "permeability (md)", field: "permeability" , resizable: true , width: 300, chartDataType: 'series' },
    
    
  ],
      
      rowData:rowData,
    
      
    };
  },
  created() {
  
  },
  methode: {
   
    
  }



};

</script>
<style>



</style>