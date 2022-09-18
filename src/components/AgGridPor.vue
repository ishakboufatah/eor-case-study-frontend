<template>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered" :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1" :rowData="rowData1"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered1" :chartThemeOverrides="chartThemeOverrides1">

  </ag-grid-vue>












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

  respone.push({ field: item[0].value + " " + item[1].value, Recovery_factor: item[39].value, porosity: item[22].value })
})
let rowData1 = [
  { permrange: "[0 - 0.05]", fields_number: 0 },
  { permrange: "]0.05 - 0.1]", fields_number: 0 },
  { permrange: "]0.1 - 0.15]", fields_number: 0 },
  { permrange: "]0.15 - 0.2]", fields_number: 0 },
  { permrange: "]0.2 - 0.25]", fields_number: 0 },
  { permrange: "]0.25 - 0.3]", fields_number: 0 },
  { permrange: "]0.3 - 0.35]", fields_number: 0 },
  { permrange: "]0.35 - 0.4]", fields_number: 0 },
  { permrange: "]0.4 - 0.45]", fields_number: 0 },
  { permrange: "]0.45 - 0.5]", fields_number: 0 },
  { permrange: "]0.5 - 0.55]", fields_number: 0 },
  { permrange: "]0.55 - 0.6]", fields_number: 0 },
  { permrange: "]0.6 - 0.65]", fields_number: 0 },
  { permrange: "]0.65 - 0.7]", fields_number: 0 },
  { permrange: "]0.7 - 0.75]", fields_number: 0 },
  { permrange: "]0.75 - 0.8]", fields_number: 0 },
  { permrange: "]0.8 - 0.85]", fields_number: 0 },
  { permrange: "]0.85 - 0.9]", fields_number: 0 },
  { permrange: "]0.9 - 0.95]", fields_number: 0 },
  { permrange: "]0.95 - 1]", fields_number: 0 },
  



]

respone.forEach(item => {
  if (Number.isFinite(item.porosity) == true) {
   if (item.porosity <= 0.05) {
    rowData1[0].fields_number = rowData1[0].fields_number + 1
  } else if ( item.porosity > 0.05 && item.porosity <= 0.1) {
    rowData1[1].fields_number = rowData1[1].fields_number + 1
  } else if ( item.porosity > 0.10 && item.porosity <= 0.15) {
    rowData1[2].fields_number = rowData1[2].fields_number + 1
  } else if ( item.porosity > 0.15 && item.porosity <= 0.20) {
    rowData1[3].fields_number = rowData1[3].fields_number + 1
  } else if ( item.porosity > 0.20 && item.porosity <= 0.25) {
    rowData1[4].fields_number = rowData1[4].fields_number + 1
  } else if ( item.porosity > 0.25 && item.porosity <= 0.30) {
    rowData1[5].fields_number = rowData1[5].fields_number + 1
  } else if ( item.porosity > 0.30 && item.porosity <= 0.35) {
    rowData1[6].fields_number = rowData1[6].fields_number + 1
  } else if ( item.porosity > 0.35 && item.porosity <= 0.40) {
    rowData1[7].fields_number = rowData1[7].fields_number + 1
  } else if ( item.porosity > 0.40 && item.porosity <= 0.45) {
    rowData1[8].fields_number = rowData1[8].fields_number + 1
  } else if ( item.porosity > 0.45 && item.porosity <= 0.50) {
    rowData1[9].fields_number = rowData1[9].fields_number + 1
  } else if ( item.porosity > 0.5 && item.porosity <= 0.55) {
    rowData1[10].fields_number = rowData1[10].fields_number + 1
  } else if ( item.porosity > 0.55 && item.porosity <= 0.6) {
    rowData1[11].fields_number = rowData1[11].fields_number + 1
  } else if ( item.porosity > 0.6 && item.porosity <= 0.65) {
    rowData1[12].fields_number = rowData1[12].fields_number + 1
  } else if ( item.porosity > 0.65 && item.porosity <= 0.7) {
    rowData1[13].fields_number = rowData1[13].fields_number + 1
  } else if ( item.porosity > 0.7 && item.porosity <= 0.75) {
    rowData1[14].fields_number = rowData1[14].fields_number + 1
  } else if ( item.porosity > 0.75 && item.porosity <= 0.8) {
    rowData1[15].fields_number = rowData1[15].fields_number + 1
  } else if ( item.porosity > 0.8 && item.porosity <= 0.85) {
    rowData1[16].fields_number = rowData1[16].fields_number + 1
  } else if ( item.porosity > 0.85 && item.porosity <= 0.9) {
    rowData1[17].fields_number = rowData1[17].fields_number + 1
  } else if ( item.porosity > 0.9 && item.porosity <= 0.95) {
    rowData1[18].fields_number = rowData1[18].fields_number + 1
  } else if ( item.porosity > 0.95 && item.porosity <= 1) {
    rowData1[19].fields_number = rowData1[19].fields_number + 1
  }
}

 

})

export default {
  name: "AgGridPor",
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
        { headerName: "Incremental EOR Recovery Factor", field: "Recovery_factor", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "porosity ", field: "porosity", resizable: true, width: 300, chartDataType: 'series' },


      ],
      columnDefs1: [
        { headerName: "porosity range ", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "number of fields ", field: "fields_number", resizable: true, width: 300, chartDataType: 'series' },



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
          enabled: true,
          text: 'porosity Impact On Oil Recovery',
        },
        navigator: {
    enabled: true,
    min: 0.2,
    max: 0.8,
  },
        legend: {
          position: 'bottom',
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
      this.chartThemeOverrides1 = {
      common: {
        title: {
          enabled: true,
          text: ' Case Studies Number Classified by porosity Range',
        },
        
        legend: {
          position: 'bottom',
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
          rowEndIndex: 75,
          chartType: 'customCombo',
          columns: ['field',"Recovery_factor", 'porosity'],
        },
        seriesChartTypes: [
      
      { colId: 'Recovery_factor', chartType: 'groupedColumn', secondaryAxis: true },
      { colId: 'porosity', chartType: 'line', secondaryAxis: true }
    ], 
        suppressChartRanges: true,
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

/* .my-chart {
  height: 500px;

} */

.ag-theme-alpine {
  /* pink category range */
  --ag-range-selection-chart-category-background-color: rgba(255, 0, 132, 0.1);

  /* orange data range */
  --ag-range-selection-chart-background-color: rgba(255, 115, 0, 0.1);
}
</style>