<template>

    <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
        :rowData="rowDataPor" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
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
      name: "AgGridPorJSON",
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
          
          rowDataPor : [
  { permrange: "[0 - 0.025]" },
  { permrange: "]0.025 - 0.05]" },
  { permrange: "]0.05 - 0.075]" },
  { permrange: "]0.075 - 0.1]" },
  { permrange: "]0.1 - 0.125]" },
  { permrange: "]0.125 - 0.15]" },
  { permrange: "]0.15 - 0.175]" },
  { permrange: "]0.175 - 0.2]" },
  { permrange: "]0.2 - 0.225]" },
  { permrange: "]0.225 - 0.25]" },
  { permrange: "]0.25 - 0.275]" },
  { permrange: "]0.275 - 0.3]" },
  { permrange: "]0.3 - 0.325]" },
  { permrange: "]0.325 - 0.35]" },
  { permrange: "]0.35 - 0.375]" },
  { permrange: "]0.375 - 0.4]" },
  { permrange: "]0.4 - 0.425]" },
  { permrange: "]0.425 - 0.45]" },
  { permrange: "]0.45 - 0.475]" },
  { permrange: "]0.475 - 0.5]" },
  { permrange: "]0.5 - 0.6]" },
  { permrange: "]0.6 - 0.7]" },
  { permrange: "]0.7 - 0.8]" },
  { permrange: "]0.8 - 0.9]" },
  { permrange: "]0.9 - 1]" },
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
              text: ' Case Studies Number Classified by Porosity Range',
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
                rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_porosity, eor_type: item.eor_type })
              }
            }); this.rowData = rowDataa;
            for (let i in varia) {
    
              const variaa = varia[i].replaceAll(' ', '_');
              rowDataa.forEach((item) => {
                if ((Number.isFinite(item.permeability) == true) && (item.eor_type == varia[i])) {
                  if (item.permeability <= 0.025) {
                    if (Number.isFinite(this.rowDataPor[0][variaa]) == true) {
                      this.rowDataPor[0][variaa] += 1
                    } else { this.rowDataPor[0][variaa] = 0; this.rowDataPor[0][variaa] += 1 }
    
                  } else if (item.permeability > 0.025 && item.permeability <= 0.05) {
                    if (Number.isFinite(this.rowDataPor[1][variaa]) == true) {
                      this.rowDataPor[1][variaa] += 1
                    } else { this.rowDataPor[1][variaa] = 0; this.rowDataPor[1][variaa] += 1 }
                  } else if (item.permeability > 0.05 && item.permeability <= 0.075) {
                    if (Number.isFinite(this.rowDataPor[2][variaa]) == true) {
                      this.rowDataPor[2][variaa] += 1
                    } else { this.rowDataPor[2][variaa] = 0; this.rowDataPor[2][variaa] += 1 }
                  } else if (item.permeability > 0.075 && item.permeability <= 0.1) {
                    if (Number.isFinite(this.rowDataPor[3][variaa]) == true) {
                      this.rowDataPor[3][variaa] += 1
                    } else { this.rowDataPor[3][variaa] = 0; this.rowDataPor[3][variaa] += 1 }
                  } else if (item.permeability > 0.1 && item.permeability <= 0.125) {
                    if (Number.isFinite(this.rowDataPor[4][variaa]) == true) {
                      this.rowDataPor[4][variaa] += 1
                    } else { this.rowDataPor[4][variaa] = 0; this.rowDataPor[4][variaa] += 1 }
                  } else if (item.permeability > 0.125 && item.permeability <= 0.15) {
                    if (Number.isFinite(this.rowDataPor[5][variaa]) == true) {
                      this.rowDataPor[5][variaa] += 1
                    } else { this.rowDataPor[5][variaa] = 0; this.rowDataPor[5][variaa] += 1 }
                  } else if (item.permeability > 0.15 && item.permeability <= 0.175) {
                    if (Number.isFinite(this.rowDataPor[6][variaa]) == true) {
                      this.rowDataPor[6][variaa] += 1
                    } else { this.rowDataPor[6][variaa] = 0; this.rowDataPor[6][variaa] += 1 }
                  } else if (item.permeability > 0.175 && item.permeability <= 0.2) {
                    if (Number.isFinite(this.rowDataPor[7][variaa]) == true) {
                      this.rowDataPor[7][variaa] += 1
                    } else { this.rowDataPor[7][variaa] = 0; this.rowDataPor[7][variaa] += 1 }
                  } else if (item.permeability > 0.2 && item.permeability <= 0.225) {
                    if (Number.isFinite(this.rowDataPor[8][variaa]) == true) {
                      this.rowDataPor[8][variaa] += 1
                    } else { this.rowDataPor[8][variaa] = 0; this.rowDataPor[8][variaa] += 1 }
                  } else if (item.permeability > 0.225 && item.permeability <= 0.25) {
                    if (Number.isFinite(this.rowDataPor[9][variaa]) == true) {
                      this.rowDataPor[9][variaa] += 1
                    } else { this.rowDataPor[9][variaa] = 0; this.rowDataPor[9][variaa] += 1 }
                  } else if (item.permeability > 0.25 && item.permeability <= 0.275) {
                    if (Number.isFinite(this.rowDataPor[10][variaa]) == true) {
                      this.rowDataPor[10][variaa] += 1
                    } else { this.rowDataPor[10][variaa] = 0; this.rowDataPor[10][variaa] += 1 }
                  } else if (item.permeability > 0.275 && item.permeability <= 0.3) {
                    if (Number.isFinite(this.rowDataPor[11][variaa]) == true) {
                      this.rowDataPor[11][variaa] += 1
                    } else { this.rowDataPor[11][variaa] = 0; this.rowDataPor[11][variaa] += 1 }
                  } else if (item.permeability > 0.3 && item.permeability <= 0.325) {
                    if (Number.isFinite(this.rowDataPor[12][variaa]) == true) {
                      this.rowDataPor[12][variaa] += 1
                    } else { this.rowDataPor[12][variaa] = 0; this.rowDataPor[12][variaa] += 1 }
                  } else if (item.permeability > 0.325 && item.permeability <= 0.35) {
                    if (Number.isFinite(this.rowDataPor[13][variaa]) == true) {
                      this.rowDataPor[13][variaa] += 1
                    } else { this.rowDataPor[13][variaa] = 0; this.rowDataPor[13][variaa] += 1 }
                  } else if (item.permeability > 0.35 && item.permeability <= 0.375) {
                    if (Number.isFinite(this.rowDataPor[14][variaa]) == true) {
                      this.rowDataPor[14][variaa] += 1
                    } else { this.rowDataPor[14][variaa] = 0; this.rowDataPor[14][variaa] += 1 }
                  } else if (item.permeability > 0.375 && item.permeability <= 0.4) {
                    if (Number.isFinite(this.rowDataPor[15][variaa]) == true) {
                      this.rowDataPor[15][variaa] += 1
                    } else { this.rowDataPor[15][variaa] = 0; this.rowDataPor[15][variaa] += 1 }
                  } else if (item.permeability > 0.4 && item.permeability <= 0.425) {
                    if (Number.isFinite(this.rowDataPor[16][variaa]) == true) {
                      this.rowDataPor[16][variaa] += 1
                    } else { this.rowDataPor[16][variaa] = 0; this.rowDataPor[16][variaa] += 1 }
                  } else if (item.permeability > 0.425 && item.permeability <= 0.45) {
                    if (Number.isFinite(this.rowDataPor[17][variaa]) == true) {
                      this.rowDataPor[17][variaa] += 1
                    } else { this.rowDataPor[17][variaa] = 0; this.rowDataPor[17][variaa] += 1 }
                  } else if (item.permeability > 0.45 && item.permeability <= 0.475) {
                    if (Number.isFinite(this.rowDataPor[18][variaa]) == true) {
                      this.rowDataPor[18][variaa] += 1
                    } else { this.rowDataPor[18][variaa] = 0; this.rowDataPor[18][variaa] += 1 }
                  } else if (item.permeability >0.475 && item.permeability <= 0.5) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[19][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
                  } else if (item.permeability >0.5 && item.permeability <= 0.6) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[20][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
                  } else if (item.permeability >0.6 && item.permeability <= 0.7) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[21][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
                  } else if (item.permeability >0.7 && item.permeability <= 0.8) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[22][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
                  } else if (item.permeability >0.8 && item.permeability <= 0.9) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[23][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
                  } else if (item.permeability >0.9 && item.permeability <= 1) {
                    if (Number.isFinite(this.rowDataPor[19][variaa]) == true) {
                      this.rowDataPor[19][variaa] += 1
                    } else { this.rowDataPor[24][variaa] = 0; this.rowDataPor[19][variaa] += 1 }
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