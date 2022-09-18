<template>

  <ag-grid-vue style="width: auto ; height: 400px;display: none" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered" :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>

  <ag-grid-vue style="width: auto ; height: 400px;display: none" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response_2"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered2" :chartThemeOverrides="chartThemeOverrides2">

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
import { rowDatachemical } from './chemicaldata.js';
import { ModuleRegistry } from 'ag-grid-community';
import { GridChartsModule, MenuModule, RowGroupingModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([
  GridChartsModule, MenuModule, RowGroupingModule

]);

let respone = []
let respone_2 = []
let respone1 = rowData[0]
let respone2 = rowDatachemical[0]

respone1.forEach(item => {

  respone.push({ field: item[0].value + " " + item[1].value, Recovery_factor: item[39].value, reservoir_temperatur: item[26].value })
})

respone2.forEach(item => {

  respone_2.push({ field: item[0].value + " " + item[1].value, Recovery_factor: item[39].value, reservoir_temperatur: item[26].value })
})

let rowData1 = [
  { permrange: "[30 - 35] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]35 - 40] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]40 - 45] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]45 - 50] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]50 - 55] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]55 - 60] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]60 - 65] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]65 - 70] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]70 - 75] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]75 - 80] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]80 - 85] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]85 - 90] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]90 - 95] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]95 - 100] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]100 - 105] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]105 - 110] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]110 - 115] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]115 - 120] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]120 - 125] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  { permrange: "]125 - 130] (C)",Miscible_EOR: 0, Chemical_EOR: 0 , Thermal_EOR: 0, Microbial_EOR: 0},
  



]
respone.forEach(item => {
  if (Number.isFinite(item.reservoir_temperatur) == true) {
   if (item.reservoir_temperatur > 30 && item.reservoir_temperatur <= 35) {
    rowData1[0].Miscible_EOR = rowData1[0].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 35 && item.reservoir_temperatur <= 40) {
    rowData1[1].Miscible_EOR = rowData1[1].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 40 && item.reservoir_temperatur <= 45) {
    rowData1[2].Miscible_EOR = rowData1[2].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 45 && item.reservoir_temperatur <= 50) {
    rowData1[3].Miscible_EOR = rowData1[3].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 50 && item.reservoir_temperatur <= 55) {
    rowData1[4].Miscible_EOR = rowData1[4].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 55 && item.reservoir_temperatur <= 60) {
    rowData1[5].Miscible_EOR = rowData1[5].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 60 && item.reservoir_temperatur <= 65) {
    rowData1[6].Miscible_EOR = rowData1[6].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 65 && item.reservoir_temperatur <= 70) {
    rowData1[7].Miscible_EOR = rowData1[7].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 70 && item.reservoir_temperatur <= 75) {
    rowData1[8].Miscible_EOR = rowData1[8].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 75 && item.reservoir_temperatur <= 80) {
    rowData1[9].Miscible_EOR = rowData1[9].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 80 && item.reservoir_temperatur <= 85) {
    rowData1[10].Miscible_EOR = rowData1[10].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 85 && item.reservoir_temperatur <= 90) {
    rowData1[11].Miscible_EOR = rowData1[11].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 90 && item.reservoir_temperatur <= 95) {
    rowData1[12].Miscible_EOR = rowData1[12].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 95 && item.reservoir_temperatur <= 100) {
    rowData1[13].Miscible_EOR = rowData1[13].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 100 && item.reservoir_temperatur <= 105) {
    rowData1[14].Miscible_EOR = rowData1[14].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 105 && item.reservoir_temperatur <= 110) {
    rowData1[15].Miscible_EOR = rowData1[15].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 110 && item.reservoir_temperatur <= 115) {
    rowData1[16].Miscible_EOR = rowData1[16].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 115 && item.reservoir_temperatur <= 120) {
    rowData1[17].Miscible_EOR = rowData1[17].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 120 && item.reservoir_temperatur <= 125) {
    rowData1[18].Miscible_EOR = rowData1[18].Miscible_EOR + 1
  } else if ( item.reservoir_temperatur > 125 && item.reservoir_temperatur <= 130) {
    rowData1[19].Miscible_EOR = rowData1[19].Miscible_EOR + 1
  }
}

 

})

respone_2.forEach(item => {
  if (Number.isFinite(item.reservoir_temperatur) == true) {
   if (item.reservoir_temperatur > 30 && item.reservoir_temperatur <= 35) {
    rowData1[0].Chemical_EOR = rowData1[0].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 35 && item.reservoir_temperatur <= 40) {
    rowData1[1].Chemical_EOR = rowData1[1].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 40 && item.reservoir_temperatur <= 45) {
    rowData1[2].Chemical_EOR = rowData1[2].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 45 && item.reservoir_temperatur <= 50) {
    rowData1[3].Chemical_EOR = rowData1[3].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 50 && item.reservoir_temperatur <= 55) {
    rowData1[4].Chemical_EOR = rowData1[4].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 55 && item.reservoir_temperatur <= 60) {
    rowData1[5].Chemical_EOR = rowData1[5].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 60 && item.reservoir_temperatur <= 65) {
    rowData1[6].Chemical_EOR = rowData1[6].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 65 && item.reservoir_temperatur <= 70) {
    rowData1[7].Chemical_EOR = rowData1[7].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 70 && item.reservoir_temperatur <= 75) {
    rowData1[8].Chemical_EOR = rowData1[8].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 75 && item.reservoir_temperatur <= 80) {
    rowData1[9].Chemical_EOR = rowData1[9].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 80 && item.reservoir_temperatur <= 85) {
    rowData1[10].Chemical_EOR = rowData1[10].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 85 && item.reservoir_temperatur <= 90) {
    rowData1[11].Chemical_EOR = rowData1[11].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 90 && item.reservoir_temperatur <= 95) {
    rowData1[12].Chemical_EOR = rowData1[12].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 95 && item.reservoir_temperatur <= 100) {
    rowData1[13].Chemical_EOR = rowData1[13].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 100 && item.reservoir_temperatur <= 105) {
    rowData1[14].Chemical_EOR = rowData1[14].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 105 && item.reservoir_temperatur <= 110) {
    rowData1[15].Chemical_EOR = rowData1[15].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 110 && item.reservoir_temperatur <= 115) {
    rowData1[16].Chemical_EOR = rowData1[16].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 115 && item.reservoir_temperatur <= 120) {
    rowData1[17].Chemical_EOR = rowData1[17].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 120 && item.reservoir_temperatur <= 125) {
    rowData1[18].Chemical_EOR = rowData1[18].Chemical_EOR + 1
  } else if ( item.reservoir_temperatur > 125 && item.reservoir_temperatur <= 130) {
    rowData1[19].Chemical_EOR = rowData1[19].Chemical_EOR + 1
  }
}

 

})

export default {
  name: "AgGridRT",
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
      response_2: respone_2,
      respone2: respone1,
      columnDefs: [
        { headerName: "field", field: "field", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Incremental EOR Recovery Factor", field: "Recovery_factor", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "Reservoir Temperatur_ ", field: "reservoir_temperatur", resizable: true, width: 300, chartDataType: 'series' },


      ],
      columnDefs1: [
        { headerName: "reservoir temperatur range ", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Miscible EOR",field: "Miscible_EOR", resizable: true, width: 220, chartDataType: 'series'},
        { headerName: "Chemical EOR", field: "Chemical_EOR", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "Thermal EOR", field: "Thermal_EOR", resizable: true, width: 300, chartDataType: 'series' },
         { headerName: "Microbial EOR", field: "Microbial_EOR", resizable: true, width: 300, chartDataType: 'series' },




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
          text: 'Reservoir Temperature Impact On Oil Recovery (Miscible EOR)',
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
        this.chartThemeOverrides2 = {
      common: {
        title: {
          enabled: true,
          text: 'Reservoir Temperature Impact On Oil Recovery (Chemical EOR)',
        },
        navigator: {
    enabled: true,
    min: 0,
    max: 1,
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
          text: ' Case Studies Number Classified by Reservoir Temperature Range',
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
          columns: ['field',"Recovery_factor", 'reservoir_temperatur'],
        },
        seriesChartTypes: [
      
      { colId: 'Recovery_factor', chartType: 'groupedColumn', secondaryAxis: true },
      { colId: 'reservoir_temperatur', chartType: 'line', secondaryAxis: true }
    ], 
        suppressChartRanges: true,
        chartContainer: document.querySelector('#myChart'),
        aggFunc: 'sum',
      };
      
      params.api.createRangeChart(createRangeChartParams);
    },
    onFirstDataRendered2(params) {
      var createRangeChartParams = {
        cellRange: {
          
          rowStartIndex: 0,
          rowEndIndex: 75,
          chartType: 'customCombo',
          columns: ['field',"Recovery_factor", 'reservoir_temperatur'],
        },
        seriesChartTypes: [
      
      { colId: 'Recovery_factor', chartType: 'groupedColumn', secondaryAxis: true },
      { colId: 'reservoir_temperatur', chartType: 'line', secondaryAxis: true }
    ], 
        suppressChartRanges: true,
        chartContainer: document.querySelector('#myChart2'),
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
          columns: ['permrange','Miscible_EOR', 'Chemical_EOR','Thermal_EOR','Microbial_EOR'],
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