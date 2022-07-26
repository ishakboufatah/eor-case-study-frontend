<template>

  <ag-grid-vue
    
    style="width: auto ; height: 400px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData[0][fnn]"
    
    @column-resized="onColumnResized"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import{ columnDefs ,rowData} from './data.js';

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  props: {
    fieldnumber: Number,
    fnn: Number,
  },
  data() {
    return {
      
      columnDefs:columnDefs 
      ,
      rowData: rowData
    };
  },

};
</script>