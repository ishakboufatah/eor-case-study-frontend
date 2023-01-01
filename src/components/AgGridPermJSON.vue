<template>

<ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
    :rowData="rowDataPerm" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
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
      rowDataPerm: [
        { permrange: "[0 - 50] (md)" },
        { permrange: "]50 - 100] (md)" },
        { permrange: "]100 - 150] (md)" },
        { permrange: "]150 - 200] (md)" },
        { permrange: "]200 - 250] (md)" },
        { permrange: "]250 - 300] (md)" },
        { permrange: "]300 - 350] (md)" },
        { permrange: "]350 - 400] (md)" },
        { permrange: "]400 - 450] (md)" },
        { permrange: "]450 - 500] (md)" },
        { permrange: "]500 - 600] (md)" },
        { permrange: "]600 - 700] (md)" },
        { permrange: "]700 - 800] (md)" },
        { permrange: "]800 - 900] (md)" },
        { permrange: "]900 - 1000] (md)" },
        { permrange: "]1000 - 2000] (md)" },
        { permrange: "]2000 - 3000] (md)" },
        { permrange: "]3000 - 4000] (md)" },
        { permrange: "]4000 - 5000] (md)" },
        { permrange: "]5000 - 6000] (md)" },
        { permrange: "]6000 - 7000] (md)" },
        { permrange: "]7000 - 8000] (md)" },
        { permrange: "]8000 - 9000] (md)" },
        { permrange: "]9000 - 10000] (md)" },
        { permrange: "> 10000 (md)" },
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
        url: '/EORTechniques/',


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
        url: '/CaseStudies/',


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
              if (item.permeability <= 50) {
                if (Number.isFinite(this.rowDataPerm[0][variaa]) == true) {
                  this.rowDataPerm[0][variaa] += 1
                } else { this.rowDataPerm[0][variaa] = 0; this.rowDataPerm[0][variaa] += 1 }

              } else if (item.permeability > 50 && item.permeability <= 100) {
                if (Number.isFinite(this.rowDataPerm[1][variaa]) == true) {
                  this.rowDataPerm[1][variaa] += 1
                } else { this.rowDataPerm[1][variaa] = 0; this.rowDataPerm[1][variaa] += 1 }
              } else if (item.permeability > 100 && item.permeability <= 150) {
                if (Number.isFinite(this.rowDataPerm[2][variaa]) == true) {
                  this.rowDataPerm[2][variaa] += 1
                } else { this.rowDataPerm[2][variaa] = 0; this.rowDataPerm[2][variaa] += 1 }
              } else if (item.permeability > 150 && item.permeability <= 200) {
                if (Number.isFinite(this.rowDataPerm[3][variaa]) == true) {
                  this.rowDataPerm[3][variaa] += 1
                } else { this.rowDataPerm[3][variaa] = 0; this.rowDataPerm[3][variaa] += 1 }
              } else if (item.permeability > 200 && item.permeability <= 250) {
                if (Number.isFinite(this.rowDataPerm[4][variaa]) == true) {
                  this.rowDataPerm[4][variaa] += 1
                } else { this.rowDataPerm[4][variaa] = 0; this.rowDataPerm[4][variaa] += 1 }
              } else if (item.permeability > 250 && item.permeability <= 300) {
                if (Number.isFinite(this.rowDataPerm[5][variaa]) == true) {
                  this.rowDataPerm[5][variaa] += 1
                } else { this.rowDataPerm[5][variaa] = 0; this.rowDataPerm[5][variaa] += 1 }
              } else if (item.permeability > 300 && item.permeability <= 350) {
                if (Number.isFinite(this.rowDataPerm[6][variaa]) == true) {
                  this.rowDataPerm[6][variaa] += 1
                } else { this.rowDataPerm[6][variaa] = 0; this.rowDataPerm[6][variaa] += 1 }
              } else if (item.permeability > 350 && item.permeability <= 400) {
                if (Number.isFinite(this.rowDataPerm[7][variaa]) == true) {
                  this.rowDataPerm[7][variaa] += 1
                } else { this.rowDataPerm[7][variaa] = 0; this.rowDataPerm[7][variaa] += 1 }
              } else if (item.permeability > 400 && item.permeability <= 450) {
                if (Number.isFinite(this.rowDataPerm[8][variaa]) == true) {
                  this.rowDataPerm[8][variaa] += 1
                } else { this.rowDataPerm[8][variaa] = 0; this.rowDataPerm[8][variaa] += 1 }
              } else if (item.permeability > 450 && item.permeability <= 500) {
                if (Number.isFinite(this.rowDataPerm[9][variaa]) == true) {
                  this.rowDataPerm[9][variaa] += 1
                } else { this.rowDataPerm[9][variaa] = 0; this.rowDataPerm[9][variaa] += 1 }
              } else if (item.permeability > 500 && item.permeability <= 600) {
                if (Number.isFinite(this.rowDataPerm[10][variaa]) == true) {
                  this.rowDataPerm[10][variaa] += 1
                } else { this.rowDataPerm[10][variaa] = 0; this.rowDataPerm[10][variaa] += 1 }
              } else if (item.permeability > 600 && item.permeability <= 700) {
                if (Number.isFinite(this.rowDataPerm[11][variaa]) == true) {
                  this.rowDataPerm[11][variaa] += 1
                } else { this.rowDataPerm[11][variaa] = 0; this.rowDataPerm[11][variaa] += 1 }
              } else if (item.permeability > 700 && item.permeability <= 800) {
                if (Number.isFinite(this.rowDataPerm[12][variaa]) == true) {
                  this.rowDataPerm[12][variaa] += 1
                } else { this.rowDataPerm[12][variaa] = 0; this.rowDataPerm[12][variaa] += 1 }
              } else if (item.permeability > 800 && item.permeability <= 900) {
                if (Number.isFinite(this.rowDataPerm[13][variaa]) == true) {
                  this.rowDataPerm[13][variaa] += 1
                } else { this.rowDataPerm[13][variaa] = 0; this.rowDataPerm[13][variaa] += 1 }
              } else if (item.permeability > 900 && item.permeability <= 1000) {
                if (Number.isFinite(this.rowDataPerm[14][variaa]) == true) {
                  this.rowDataPerm[14][variaa] += 1
                } else { this.rowDataPerm[14][variaa] = 0; this.rowDataPerm[14][variaa] += 1 }
              } else if (item.permeability > 1000 && item.permeability <= 2000) {
                if (Number.isFinite(this.rowDataPerm[15][variaa]) == true) {
                  this.rowDataPerm[15][variaa] += 1
                } else { this.rowDataPerm[15][variaa] = 0; this.rowDataPerm[15][variaa] += 1 }
              } else if (item.permeability > 2000 && item.permeability <= 3000) {
                if (Number.isFinite(this.rowDataPerm[16][variaa]) == true) {
                  this.rowDataPerm[16][variaa] += 1
                } else { this.rowDataPerm[16][variaa] = 0; this.rowDataPerm[16][variaa] += 1 }
              } else if (item.permeability > 3000 && item.permeability <= 4000) {
                if (Number.isFinite(this.rowDataPerm[17][variaa]) == true) {
                  this.rowDataPerm[17][variaa] += 1
                } else { this.rowDataPerm[17][variaa] = 0; this.rowDataPerm[17][variaa] += 1 }
              } else if (item.permeability > 4000 && item.permeability <= 5000) {
                if (Number.isFinite(this.rowDataPerm[18][variaa]) == true) {
                  this.rowDataPerm[18][variaa] += 1
                } else { this.rowDataPerm[18][variaa] = 0; this.rowDataPerm[18][variaa] += 1 }
              } else if (item.permeability > 5000 && item.permeability <= 6000) {
                if (Number.isFinite(this.rowDataPerm[19][variaa]) == true) {
                  this.rowDataPerm[19][variaa] += 1
                } else { this.rowDataPerm[19][variaa] = 0; this.rowDataPerm[19][variaa] += 1 }
              } else if (item.permeability > 6000 && item.permeability <= 7000) {
                if (Number.isFinite(this.rowDataPerm[20][variaa]) == true) {
                  this.rowDataPerm[20][variaa] += 1
                } else { this.rowDataPerm[20][variaa] = 0; this.rowDataPerm[20][variaa] += 1 }
              } else if (item.permeability > 7000 && item.permeability <= 8000) {
                if (Number.isFinite(this.rowDataPerm[21][variaa]) == true) {
                  this.rowDataPerm[21][variaa] += 1
                } else { this.rowDataPerm[21][variaa] = 0; this.rowDataPerm[21][variaa] += 1 }
              } else if (item.permeability > 8000 && item.permeability <= 9000) {
                if (Number.isFinite(this.rowDataPerm[22][variaa]) == true) {
                  this.rowDataPerm[22][variaa] += 1
                } else { this.rowDataPerm[22][variaa] = 0; this.rowDataPerm[22][variaa] += 1 }
              } else if (item.permeability > 9000 && item.permeability <= 10000) {
                if (Number.isFinite(this.rowDataPerm[23][variaa]) == true) {
                  this.rowDataPerm[23][variaa] += 1
                } else { this.rowDataPerm[23][variaa] = 0; this.rowDataPerm[23][variaa] += 1 }
              } else if (item.permeability > 10000) {
                if (Number.isFinite(this.rowDataPerm[24][variaa]) == true) {
                  this.rowDataPerm[24][variaa] += 1
                } else { this.rowDataPerm[24][variaa] = 0; this.rowDataPerm[24][variaa] += 1 }
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
        url: '/EORTechniques/',


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