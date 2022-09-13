<template>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs"
    :rowData="rowData" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
    :defaultColDef="defaultColDef" @grid-ready="onGridReady" :createChartContainer="createChartContainer"
    @column-resized="onColumnResized" @first-data-rendered="onFirstDataRendered"
    :chartThemeOverrides="chartThemeOverrides">

  </ag-grid-vue>

  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
    :rowData="rowData1" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
    :defaultColDef="defaultColDef" @grid-ready="onGridReady" :createChartContainer="createChartContainer"
    @column-resized="onColumnResized" @first-data-rendered="onFirstDataRendered1"
    :chartThemeOverrides="chartThemeOverrides1">

  </ag-grid-vue>



</template>

<script>
import axios from 'axios';
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ModuleRegistry } from 'ag-grid-community';
import { GridChartsModule, MenuModule, RowGroupingModule } from 'ag-grid-enterprise';
// import {ref} from "vue";


// let rowData=ref(null);

ModuleRegistry.registerModules([
  GridChartsModule, MenuModule, RowGroupingModule

]);




export default {
  name: "AgGridPermJSON",
  components: {
    AgGridVue
  },
  props: {
    fieldnumber: Number,
    fnn: Number,

  },
  watch: {
    rowData:{
      deep:true
    }
  },
  // let rowData = 
  data() {
    return {
      
      rowData:null,
      rowdata: [],
      Data: null,
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

      columnDefs: [
        { headerName: "field", field: "field", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Incremental EOR Recovery Factor", field: "Recovery_factor", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "permeability (md)", field: "permeability", resizable: true, width: 300, chartDataType: 'series' },


      ],
      columnDefs1: [
        { headerName: "permeability range (md)", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "number of fields ", field: "fields_number", resizable: true, width: 300, chartDataType: 'series' },



      ],
      rowData1: [
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
      ],
      function() {

        
      }
      ,






    };
  },
  computed:{
    RowData: function () {
      return this.getCaseStudies()
    }
  },
  created() {
    this.popupParent = document.body;
    this.chartThemeOverrides = {
      common: {
        title: {
          enabled: true,
          text: 'Permeability Impact On Oil Recovery',
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
          text: ' Case Studies Number Classified by Permeability Range',
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
  mounted() {
    this.getCaseStudies()
   
    
  },
  methods: {

    getCaseStudies() {
      var rowDataa=[];
      axios({
        method: 'get',
        url: 'https://sheordatabase.herokuapp.com/CaseStudies/',


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => { response.data.forEach((item) => {
           rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_permeability_md })
         });this.rowData=rowDataa;
      
         rowDataa.forEach((item) => { 
           if (Number.isFinite(item.permeability) == true) { 
            if (item.permeability <= 5) {
              this.rowData1[0].fields_number = this.rowData1[0].fields_number + 1
            } else if (item.permeability > 5 && item.permeability <= 10) {
              this.rowData1[1].fields_number = this.rowData1[1].fields_number + 1
            } else if (item.permeability > 10 && item.permeability <= 15) {
              this.rowData1[2].fields_number = this.rowData1[2].fields_number + 1
            } else if (item.permeability > 15 && item.permeability <= 20) {
              this.rowData1[3].fields_number = this.rowData1[3].fields_number + 1
            } else if (item.permeability > 20 && item.permeability <= 25) {
              this.rowData1[4].fields_number = this.rowData1[4].fields_number + 1
            } else if (item.permeability > 25 && item.permeability <= 30) {
              this.rowData1[5].fields_number = this.rowData1[5].fields_number + 1
            } else if (item.permeability > 30 && item.permeability <= 35) {
              this.rowData1[6].fields_number = this.rowData1[6].fields_number + 1
            } else if (item.permeability > 35 && item.permeability <= 40) {
              this.rowData1[7].fields_number = this.rowData1[7].fields_number + 1
            } else if (item.permeability > 40 && item.permeability <= 45) {
              this.rowData1[8].fields_number = this.rowData1[8].fields_number + 1
            } else if (item.permeability > 45 && item.permeability <= 50) {
              this.rowData1[9].fields_number = this.rowData1[9].fields_number + 1
            } else if (item.permeability > 50 && item.permeability <= 60) {
              this.rowData1[10].fields_number = this.rowData1[10].fields_number + 1
            } else if (item.permeability > 60 && item.permeability <= 70) {
              this.rowData1[11].fields_number = this.rowData1[11].fields_number + 1
            } else if (item.permeability > 70 && item.permeability <= 80) {
              this.rowData1[12].fields_number = this.rowData1[12].fields_number + 1
            } else if (item.permeability > 80 && item.permeability <= 90) {
              this.rowData1[13].fields_number = this.rowData1[13].fields_number + 1
            } else if (item.permeability > 90 && item.permeability <= 100) {
              this.rowData1[14].fields_number = this.rowData1[14].fields_number + 1
            } else if (item.permeability > 100 && item.permeability <= 200) {
              this.rowData1[15].fields_number = this.rowData1[15].fields_number + 1
            } else if (item.permeability > 200 && item.permeability <= 300) {
              this.rowData1[16].fields_number = this.rowData1[16].fields_number + 1
            } else if (item.permeability > 300 && item.permeability <= 400) {
              this.rowData1[17].fields_number = this.rowData1[17].fields_number + 1
            } else if (item.permeability > 400 && item.permeability <= 500) {
              this.rowData1[18].fields_number = this.rowData1[18].fields_number + 1
            } else if (item.permeability > 500 && item.permeability <= 600) {
              this.rowData1[19].fields_number = this.rowData1[19].fields_number + 1
            } else if (item.permeability > 600 && item.permeability <= 700) {
              this.rowData1[20].fields_number = this.rowData1[20].fields_number + 1
            } else if (item.permeability > 700 && item.permeability <= 800) {
              this.rowData1[21].fields_number = this.rowData1[21].fields_number + 1
            } else if (item.permeability > 800 && item.permeability <= 900) {
              this.rowData1[22].fields_number = this.rowData1[22].fields_number + 1
            } else if (item.permeability > 900 && item.permeability <= 1000) {
              this.rowData1[23].fields_number = this.rowData1[23].fields_number + 1
            } else if (item.permeability > 1000) {
              this.rowData1[24].fields_number = this.rowData1[24].fields_number + 1
            }
          }



    })
  
      
    })
    return this.rowDataa
    },
   

    onFirstDataRendered(params) {
      var createRangeChartParams = {
        cellRange: {

          rowStartIndex: 0,
          rowEndIndex: 75,
          chartType: 'customCombo',
          columns: ["field", "Recovery_factor", 'permeability'],
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