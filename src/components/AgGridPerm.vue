<template>

  <ag-grid-vue style="width: auto ; height: 400px" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered" :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>
  <br>
  <div id="myChart" class="ag-theme-alpine my-chart"></div>
  <br>
  <ag-grid-vue style="width: auto ; height: 400px" class="ag-theme-alpine" :columnDefs="columnDefs1" :rowData="rowData1"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered1" :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>
  <br>
  <div id="myChart1" class="ag-theme-alpine my-chart"></div>










</template>

<script>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { rowData } from './data.js';
import { ModuleRegistry } from 'ag-grid-community';
import { GridChartsModule, MenuModule, RowGroupingModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([
  GridChartsModule, MenuModule, RowGroupingModule

]);

let respone = []
let respone1 = rowData[0]

respone1.forEach(item => {

  respone.push({ field: item[0].value + " " + item[1].value, Recovery_factor: item[38].value, permeability: item[19].value })
})
let rowData1 = [
  { permrange: "[0 - 5]", fields_number: 0 },
  { permrange: "]5 - 10]", fields_number: 0 },
  { permrange: "]10 - 15]", fields_number: 0 },
  { permrange: "]15 - 20]", fields_number: 0 },
  { permrange: "]20 - 25]", fields_number: 0 },
  { permrange: "]25 - 30]", fields_number: 0 },
  { permrange: "]30 - 35]", fields_number: 0 },
  { permrange: "]35 - 40]", fields_number: 0 },
  { permrange: "]40 - 45]", fields_number: 0 },
  { permrange: "]45 - 50]", fields_number: 0 },
  { permrange: "]50 - 60]", fields_number: 0 },
  { permrange: "]60 - 70]", fields_number: 0 },
  { permrange: "]70 - 80]", fields_number: 0 },
  { permrange: "]80 - 90]", fields_number: 0 },
  { permrange: "]90 - 100]", fields_number: 0 },
  { permrange: ">100", fields_number: 0 },



]

respone.forEach(item => {
  if (Number.isFinite(item.permeability) == true) {
   if (item.permeability <= 5) {
    console.log(item.permeability);
    rowData1[0].fields_number = rowData1[0].fields_number + 1
  } else if ( item.permeability > 5 && item.permeability < 10) {
    rowData1[1].fields_number = rowData1[1].fields_number + 1
  }
}

 

})

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
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
      popupParent: null,
      chartThemeOverrides: null,
      response: respone,
      respone2: respone1,
      columnDefs: [
        { headerName: "field", field: "field", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Recovery factor", field: "Recovery_factor", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "permeability (md)", field: "permeability", resizable: true, width: 300, chartDataType: 'series' },


      ],
      columnDefs1: [
        { headerName: "permeability range (md)", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "fields number", field: "fields_number", resizable: true, width: 300, chartDataType: 'series' },



      ],

      rowData: rowData,
      rowData1: rowData1,



    };
  },
  created() {
    this.popupParent = document.body;
    this.chartThemeOverrides = {
      common: {
        title: {
          enabled: false,
          text: 'Medals by Age',
        },
        legend: {
          position: 'right',
        },
      },
      column: {
        axes: {
          category: {
            label: {
              rotation: -60,
            },
          },
        },
      },
    };
  },
  methods: {
    onFirstDataRendered(params) {
      var createRangeChartParams = {
        cellRange: {
          rowStartIndex: 0,
          rowEndIndex: 71,
          columns: ['field', 'permeability'],
        },
        chartType: 'stackedColumn',
        chartContainer: document.querySelector('#myChart'),
        aggFunc: 'sum',
      };
      params.api.createRangeChart(createRangeChartParams);
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;


    },
    onFirstDataRendered1(params) {
      var createRangeChartParams = {
        cellRange: {
          rowStartIndex: 0,
          rowEndIndex: 71,
          columns: ['permrange', 'fields_number'],
        },
        chartType: 'stackedColumn',
        chartContainer: document.querySelector('#myChart1'),
        aggFunc: 'sum',
      };
      params.api.createRangeChart(createRangeChartParams);
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