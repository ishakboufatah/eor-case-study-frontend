<template>

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

      rowData: null,
      rowdataaaa: null,
      rowdata: [],
      eortypes:[],
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
      

      
      columnDefs1: [
        { headerName: "permeability range (md)", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },




      ],
      rowData1: [
        { permrange: "[0 - 5] (md)" },
        { permrange: "]5 - 10] (md)" },
        { permrange: "]10 - 15] (md)" },
        { permrange: "]15 - 20] (md)" },
        { permrange: "]20 - 25] (md)" },
        { permrange: "]25 - 30] (md)" },
        { permrange: "]30 - 35] (md)" },
        { permrange: "]35 - 40] (md)" },
        { permrange: "]40 - 45] (md)" },
        { permrange: "]45 - 50] (md)" },
        { permrange: "]50 - 60] (md)" },
        { permrange: "]60 - 70] (md)" },
        { permrange: "]70 - 80] (md)" },
        { permrange: "]80 - 90] (md)" },
        { permrange: "]90 - 100] (md)" },
        { permrange: "]100 - 200] (md)" },
        { permrange: "]200 - 300] (md)" },
        { permrange: "]300 - 400] (md)" },
        { permrange: "]400 - 500] (md)" },
        { permrange: "]500 - 600] (md)" },
        { permrange: "]600 - 700] (md)" },
        { permrange: "]700 - 800] (md)" },
        { permrange: "]800 - 900] (md)" },
        { permrange: "]900 - 1000] (md)" },
        { permrange: "> 1000 (md)" },
      ],

      function() {


      }
      ,






    };
  },
  computed: {
    // RowData: function () {
    //   return this.getCaseStudies()
    // }
    



  },
  created() {
    this.popupParent = document.body;
    
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
    
    this.geteortechnique()
    // this.getCaseStudies2()
    


  },
  methods: {
    createnew(neww){
      var variable=null
      variable=neww
      return variable

    },
    replace(vari){
      return vari.replaceAll(' ','_')
    },
    
    
    geteortechnique() {
      var rowdataa = [];
      
      axios({
        method: 'get',
        url: 'https://sheordatabase.herokuapp.com/EORTechniques/',


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => {
        response.data.forEach((item) => { rowdataa.push(item.eor_type),this.eortypes.push(item.eor_type), this.columnDefs1.push({ headerName: item.eor_type, field: item.eor_type.replaceAll(' ', '_'), resizable: true, width: 300, chartDataType: 'series' }) }); this.getCaseStudies(rowdataa);



      })
    },
    
    getCaseStudies(varia) {
      var rowDataa = [];
      axios({
        method: 'get',
        url: 'https://sheordatabase.herokuapp.com/CaseStudies/',


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => {
        response.data.forEach((item) => {
          if ((Number.isFinite(item.average_permeability_md) == true)) {
            rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_permeability_md, eor_type: item.eor_type })
          }
        }); this.rowData = rowDataa;
        for (let i in varia) {

          const variaa = varia[i].replaceAll(' ', '_');
          rowDataa.forEach((item) => {
            if ((Number.isFinite(item.permeability) == true) && (item.eor_type == varia[i])) {
              if (item.permeability <= 5) {
                if (Number.isFinite(this.rowData1[0][variaa]) == true) {
                  this.rowData1[0][variaa] += 1
                } else { this.rowData1[0][variaa] = 0; this.rowData1[0][variaa] += 1 }

              } else if (item.permeability > 5 && item.permeability <= 10) {
                if (Number.isFinite(this.rowData1[1][variaa]) == true) {
                  this.rowData1[1][variaa] += 1
                } else { this.rowData1[1][variaa] = 0; this.rowData1[1][variaa] += 1 }
              } else if (item.permeability > 10 && item.permeability <= 15) {
                if (Number.isFinite(this.rowData1[2][variaa]) == true) {
                  this.rowData1[2][variaa] += 1
                } else { this.rowData1[2][variaa] = 0; this.rowData1[2][variaa] += 1 }
              } else if (item.permeability > 15 && item.permeability <= 20) {
                if (Number.isFinite(this.rowData1[3][variaa]) == true) {
                  this.rowData1[3][variaa] += 1
                } else { this.rowData1[3][variaa] = 0; this.rowData1[3][variaa] += 1 }
              } else if (item.permeability > 20 && item.permeability <= 25) {
                if (Number.isFinite(this.rowData1[4][variaa]) == true) {
                  this.rowData1[4][variaa] += 1
                } else { this.rowData1[4][variaa] = 0; this.rowData1[4][variaa] += 1 }
              } else if (item.permeability > 25 && item.permeability <= 30) {
                if (Number.isFinite(this.rowData1[5][variaa]) == true) {
                  this.rowData1[5][variaa] += 1
                } else { this.rowData1[5][variaa] = 0; this.rowData1[5][variaa] += 1 }
              } else if (item.permeability > 30 && item.permeability <= 35) {
                if (Number.isFinite(this.rowData1[6][variaa]) == true) {
                  this.rowData1[6][variaa] += 1
                } else { this.rowData1[6][variaa] = 0; this.rowData1[6][variaa] += 1 }
              } else if (item.permeability > 35 && item.permeability <= 40) {
                if (Number.isFinite(this.rowData1[7][variaa]) == true) {
                  this.rowData1[7][variaa] += 1
                } else { this.rowData1[7][variaa] = 0; this.rowData1[7][variaa] += 1 }
              } else if (item.permeability > 40 && item.permeability <= 45) {
                if (Number.isFinite(this.rowData1[8][variaa]) == true) {
                  this.rowData1[8][variaa] += 1
                } else { this.rowData1[8][variaa] = 0; this.rowData1[8][variaa] += 1 }
              } else if (item.permeability > 45 && item.permeability <= 50) {
                if (Number.isFinite(this.rowData1[9][variaa]) == true) {
                  this.rowData1[9][variaa] += 1
                } else { this.rowData1[9][variaa] = 0; this.rowData1[9][variaa] += 1 }
              } else if (item.permeability > 50 && item.permeability <= 60) {
                if (Number.isFinite(this.rowData1[10][variaa]) == true) {
                  this.rowData1[10][variaa] += 1
                } else { this.rowData1[10][variaa] = 0; this.rowData1[10][variaa] += 1 }
              } else if (item.permeability > 60 && item.permeability <= 70) {
                if (Number.isFinite(this.rowData1[11][variaa]) == true) {
                  this.rowData1[11][variaa] += 1
                } else { this.rowData1[11][variaa] = 0; this.rowData1[11][variaa] += 1 }
              } else if (item.permeability > 70 && item.permeability <= 80) {
                if (Number.isFinite(this.rowData1[12][variaa]) == true) {
                  this.rowData1[12][variaa] += 1
                } else { this.rowData1[12][variaa] = 0; this.rowData1[12][variaa] += 1 }
              } else if (item.permeability > 80 && item.permeability <= 90) {
                if (Number.isFinite(this.rowData1[13][variaa]) == true) {
                  this.rowData1[13][variaa] += 1
                } else { this.rowData1[13][variaa] = 0; this.rowData1[13][variaa] += 1 }
              } else if (item.permeability > 90 && item.permeability <= 100) {
                if (Number.isFinite(this.rowData1[14][variaa]) == true) {
                  this.rowData1[14][variaa] += 1
                } else { this.rowData1[14][variaa] = 0; this.rowData1[14][variaa] += 1 }
              } else if (item.permeability > 100 && item.permeability <= 200) {
                if (Number.isFinite(this.rowData1[15][variaa]) == true) {
                  this.rowData1[15][variaa] += 1
                } else { this.rowData1[15][variaa] = 0; this.rowData1[15][variaa] += 1 }
              } else if (item.permeability > 200 && item.permeability <= 300) {
                if (Number.isFinite(this.rowData1[16][variaa]) == true) {
                  this.rowData1[16][variaa] += 1
                } else { this.rowData1[16][variaa] = 0; this.rowData1[16][variaa] += 1 }
              } else if (item.permeability > 300 && item.permeability <= 400) {
                if (Number.isFinite(this.rowData1[17][variaa]) == true) {
                  this.rowData1[17][variaa] += 1
                } else { this.rowData1[17][variaa] = 0; this.rowData1[17][variaa] += 1 }
              } else if (item.permeability > 400 && item.permeability <= 500) {
                if (Number.isFinite(this.rowData1[18][variaa]) == true) {
                  this.rowData1[18][variaa] += 1
                } else { this.rowData1[18][variaa] = 0; this.rowData1[18][variaa] += 1 }
              } else if (item.permeability > 500 && item.permeability <= 600) {
                if (Number.isFinite(this.rowData1[19][variaa]) == true) {
                  this.rowData1[19][variaa] += 1
                } else { this.rowData1[19][variaa] = 0; this.rowData1[19][variaa] += 1 }
              } else if (item.permeability > 600 && item.permeability <= 700) {
                if (Number.isFinite(this.rowData1[20][variaa]) == true) {
                  this.rowData1[20][variaa] += 1
                } else { this.rowData1[20][variaa] = 0; this.rowData1[20][variaa] += 1 }
              } else if (item.permeability > 700 && item.permeability <= 800) {
                if (Number.isFinite(this.rowData1[21][variaa]) == true) {
                  this.rowData1[21][variaa] += 1
                } else { this.rowData1[21][variaa] = 0; this.rowData1[21][variaa] += 1 }
              } else if (item.permeability > 800 && item.permeability <= 900) {
                if (Number.isFinite(this.rowData1[22][variaa]) == true) {
                  this.rowData1[22][variaa] += 1
                } else { this.rowData1[22][variaa] = 0; this.rowData1[22][variaa] += 1 }
              } else if (item.permeability > 900 && item.permeability <= 1000) {
                if (Number.isFinite(this.rowData1[23][variaa]) == true) {
                  this.rowData1[23][variaa] += 1
                } else { this.rowData1[23][variaa] = 0; this.rowData1[23][variaa] += 1 }
              } else if (item.permeability > 1000) {
                if (Number.isFinite(this.rowData1[24][variaa]) == true) {
                  this.rowData1[24][variaa] += 1
                } else { this.rowData1[24][variaa] = 0; this.rowData1[24][variaa] += 1 }
              }
            }



          })
        }





      })
      // return this.rowDataa
    },


    
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;


    },
    onFirstDataRendered1(params) {
      var rowdataa = ['permrange',];
      axios({
        method: 'get',
        url: 'https://sheordatabase.herokuapp.com/EORTechniques/',


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },


      }).then(response => {
        response.data.forEach((item) => { rowdataa.push(item.eor_type.replaceAll(' ', '_')) });

        var createRangeChartParams = {
          cellRange: {
            rowStartIndex: 0,
            // rowEndIndex: 1000,
            // columns: ['permrange', 'Miscible_EOR' , 'Chemical_EOR' , 'Thermal_EOR', 'Microbial_EOR'],
            columns: rowdataa,
          },
          chartType: 'stackedColumn',
          chartContainer: document.querySelector('#myChart1'),
          aggFunc: 'sum',
        };
        params.api.createRangeChart(createRangeChartParams);
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