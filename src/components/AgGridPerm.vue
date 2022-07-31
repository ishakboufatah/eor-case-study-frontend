<template>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered" :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>
  <br>
  <div id="myChart" class="ag-theme-alpine my-chart"></div>
  <br>
  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1" :rowData="rowData1"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered1" :chartThemeOverrides="chartThemeOverrides1">

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
  { permrange: "[0 - 5] (md)", fields_number: 0 },
  { permrange: "]5 - 10] (md)", fields_number: 0 },
  { permrange: "]10 - 15] (md)", fields_number: 0 },
  { permrange: "]15 - 20] (md)", fields_number: 0 },
  { permrange: "]20 - 25] (md)", fields_number: 0 },
  { permrange: "]25 - 30] (md)", fields_number: 0 },
  { permrange: "]30 - 35] (md)", fields_number: 0 },
  { permrange: "]35 - 40] (md)", fields_number: 0 },
  { permrange: "]40 - 45] (md)", fields_number: 0 },
  { permrange: "]45 - 50] (md)", fields_number: 0 },
  { permrange: "]50 - 60] (md)", fields_number: 0 },
  { permrange: "]60 - 70] (md)", fields_number: 0 },
  { permrange: "]70 - 80] (md)", fields_number: 0 },
  { permrange: "]80 - 90] (md)", fields_number: 0 },
  { permrange: "]90 - 100] (md)", fields_number: 0 },
  { permrange: "]100 - 200] (md)", fields_number: 0 },
  { permrange: "]200 - 300] (md)", fields_number: 0 },
  { permrange: "]300 - 400] (md)", fields_number: 0 },
  { permrange: "]400 - 500] (md)", fields_number: 0 },
  { permrange: "]500 - 600] (md)", fields_number: 0 },
  { permrange: "]600 - 700] (md)", fields_number: 0 },
  { permrange: "]700 - 800] (md)", fields_number: 0 },
  { permrange: "]800 - 900] (md)", fields_number: 0 },
  { permrange: "]900 - 1000] (md)", fields_number: 0 },
  { permrange: "> 1000 (md)", fields_number: 0 },



]

respone.forEach(item => {
  if (Number.isFinite(item.permeability) == true) {
   if (item.permeability <= 5) {
    console.log(item.permeability);
    rowData1[0].fields_number = rowData1[0].fields_number + 1
  } else if ( item.permeability > 5 && item.permeability <= 10) {
    rowData1[1].fields_number = rowData1[1].fields_number + 1
  } else if ( item.permeability > 10 && item.permeability <= 15) {
    rowData1[2].fields_number = rowData1[2].fields_number + 1
  } else if ( item.permeability > 15 && item.permeability <= 20) {
    rowData1[3].fields_number = rowData1[3].fields_number + 1
  } else if ( item.permeability > 20 && item.permeability <= 25) {
    rowData1[4].fields_number = rowData1[4].fields_number + 1
  } else if ( item.permeability > 25 && item.permeability <= 30) {
    rowData1[5].fields_number = rowData1[5].fields_number + 1
  } else if ( item.permeability > 30 && item.permeability <= 35) {
    rowData1[6].fields_number = rowData1[6].fields_number + 1
  } else if ( item.permeability > 35 && item.permeability <= 40) {
    rowData1[7].fields_number = rowData1[7].fields_number + 1
  } else if ( item.permeability > 40 && item.permeability <= 45) {
    rowData1[8].fields_number = rowData1[8].fields_number + 1
  } else if ( item.permeability > 45 && item.permeability <= 50) {
    rowData1[9].fields_number = rowData1[9].fields_number + 1
  } else if ( item.permeability > 50 && item.permeability <= 60) {
    rowData1[10].fields_number = rowData1[10].fields_number + 1
  } else if ( item.permeability > 60 && item.permeability <= 70) {
    rowData1[11].fields_number = rowData1[11].fields_number + 1
  } else if ( item.permeability > 70 && item.permeability <= 80) {
    rowData1[12].fields_number = rowData1[12].fields_number + 1
  } else if ( item.permeability > 80 && item.permeability <= 90) {
    rowData1[13].fields_number = rowData1[13].fields_number + 1
  } else if ( item.permeability > 90 && item.permeability <= 100) {
    rowData1[14].fields_number = rowData1[14].fields_number + 1
  } else if ( item.permeability > 100 && item.permeability <= 200) {
    rowData1[15].fields_number = rowData1[15].fields_number + 1
  } else if ( item.permeability > 200 && item.permeability <= 300) {
    rowData1[16].fields_number = rowData1[16].fields_number + 1
  } else if ( item.permeability > 300 && item.permeability <= 400) {
    rowData1[17].fields_number = rowData1[17].fields_number + 1
  } else if ( item.permeability > 400 && item.permeability <= 500) {
    rowData1[18].fields_number = rowData1[18].fields_number + 1
  } else if ( item.permeability > 500 && item.permeability <= 600) {
    rowData1[19].fields_number = rowData1[19].fields_number + 1
  } else if ( item.permeability > 600 && item.permeability <= 700) {
    rowData1[20].fields_number = rowData1[20].fields_number + 1
  } else if ( item.permeability > 700 && item.permeability <= 800) {
    rowData1[21].fields_number = rowData1[21].fields_number + 1
  } else if ( item.permeability > 800 && item.permeability <= 900) {
    rowData1[22].fields_number = rowData1[22].fields_number + 1
  } else if ( item.permeability > 900 && item.permeability <= 1000) {
    rowData1[23].fields_number = rowData1[23].fields_number + 1
  } else if ( item.permeability > 1000) {
    rowData1[24].fields_number = rowData1[24].fields_number + 1
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
          enabled: false,
          text: 'Medals by Age',
        },
        navigator: {
    enabled: true,
    min: 0.2,
    max: 0.7,
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
          enabled: false,
          text: 'Medals by Age',
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
          rowEndIndex: 71,
          chartType: 'customCombo',
          columns: ['field',"Recovery_factor", 'permeability'],
        },
        seriesChartTypes: [
      
      { colId: 'Recovery_factor', chartType: 'groupedColumn', secondaryAxis: true },
      { colId: 'permeability', chartType: 'line', secondaryAxis: true }
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