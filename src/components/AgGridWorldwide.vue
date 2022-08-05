<template>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="response"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady"  @column-resized="onColumnResized"
     >

  </ag-grid-vue>
  <br>
  <ag-grid-vue style="width: auto ; height: 400px" class="ag-theme-alpine" :columnDefs="columnDefs1" :rowData="worldwide"
    :enableCharts=true :enableRangeSelection=true :popupParent="popupParent" :defaultColDef="defaultColDef"
    @grid-ready="onGridReady" :createChartContainer="createChartContainer" @column-resized="onColumnResized"
    @first-data-rendered="onFirstDataRendered1" :chartThemeOverrides="chartThemeOverrides" :pivotMode="true" >

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
let worldwide = []
let respone1 = rowData[0]
let respone2 = rowDatachemical[0]

respone1.forEach(item => {

   if (Number.isFinite(item[12].value) == true) {
   
    respone.push({ field: item[0].value + " " + item[1].value,country: item[3].value ,EOR_start_year: item[12].value,EOR_Type: item[4].value, EOR_Sub_Type: item[5].value })
   }

  
})

respone2.forEach(item => {

   if (Number.isFinite(item[12].value) == true) {
   
    respone.push({ field: item[0].value + " " + item[1].value,country: item[3].value ,EOR_start_year: item[12].value,EOR_Type: item[4].value, EOR_Sub_Type: item[5].value })
   }

  
})

for (let i=1900; i < 2022; i++){
  respone.forEach(item => { 
    if (item.EOR_start_year === i) {
      
      

        worldwide.push({EOR_start_year: item.EOR_start_year,country: item.country ,EOR_Type: item.EOR_Type , EOR_Sub_Type: item.EOR_Sub_Type,  fieldumber: 1})
      
    
      
      
    }
  })

}



export default {
  name: "AgGridWorldwide",
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
      worldwide: worldwide,
      columnDefs: [
        { headerName: "field", field: "field", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Country", field: "country", resizable: true, width: 220, chartDataType: 'series' },
        { headerName: "EOR start year", field: "EOR_start_year", resizable: true, width: 300, chartDataType: 'series'},
        { headerName: "EOR Type", field: "EOR_Type", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "EOR Sub Type", field: "EOR_Sub_Type", resizable: true, width: 300, chartDataType: 'series' },
        


      ],
      columnDefs1: [
      
        { headerName: "Country", field: "country", resizable: true, width: 220, chartDataType: 'series' ,pivot: true},
        { headerName: "EOR start year", field: "EOR_start_year", resizable: true, width: 300, chartDataType: 'series',rowGroup: true },
        { headerName: "EOR Type", field: "EOR_Type", resizable: true, width: 300, chartDataType: 'series' ,rowGroup: true},
        { headerName: "EOR Sub Type", field: "EOR_Sub_Type", resizable: true, width: 300, chartDataType: 'series' ,rowGroup: true},
        { headerName: "field number", field: "fieldumber", resizable: true, width: 300, chartDataType: 'series' ,aggFunc: "sum"},


      ],
  

      rowData: rowData,
      
    



    };
  },
  created() {
    this.popupParent = document.body;
    this.chartThemeOverrides = {
      common: {
        title: {
          enabled: true,
          text: 'EOR Worldwide Distribution',
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

  },
  methods: {
    
    onFirstDataRendered1(event) {
      var chartContainer = document.querySelector('#myChart1');
      var params = {
        chartType: 'groupedColumn',
        chartContainer: chartContainer,
        chartThemeName: 'ag-vivid',
        chartThemeOverrides: {
          common: {
            padding: {
              top: 20,
              left: 10,
              bottom: 30,
              right: 10,
            },
            legend: {
              enabled: true,
              position: 'bottom',
            },
            navigator: {
              enabled: true,
              height: 10,
              min: 0,
              max: 0.5,
            },
          },
        },
      };
      event.api.createPivotChart(params);
      // expand one row for demonstration purposes
      setTimeout(function () {
        event.api.getDisplayedRowAtIndex(2).setExpanded(true);
      }, 0);
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;


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