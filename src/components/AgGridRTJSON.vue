<template>

    <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
        :rowData="rowDataRT" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
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
      name: "AgGridRTJSON",
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
          rowDataRT: [
          { permrange: "   < 15  (C)"},
            { permrange: "]15 - 20] (C)"},
            { permrange: "]20 - 25] (C)"},
            { permrange: "]25 - 30] (C)"},
            { permrange: "[30 - 35] (C)"},
            { permrange: "]35 - 40] (C)"},
            { permrange: "]40 - 45] (C)"},
            { permrange: "]45 - 50] (C)"},
            { permrange: "]50 - 55] (C)"},
            { permrange: "]55 - 60] (C)"},
            { permrange: "]60 - 65] (C)"},
            { permrange: "]65 - 70] (C)"},
            { permrange: "]70 - 75] (C)"},
            { permrange: "]75 - 80] (C)"},
            { permrange: "]80 - 85] (C)"},
            { permrange: "]85 - 90] (C)"},
            { permrange: "]90 - 95] (C)"},
            { permrange: "]95 - 100] (C)"},
            { permrange: "]100 - 105] (C)"},
            { permrange: "]105 - 110] (C)"},
            { permrange: "]110 - 115] (C)"},
            { permrange: "]115 - 120] (C)"},
            { permrange: "]120 - 125] (C)"},
            { permrange: "]125 - 130] (C)"},
            { permrange: "  > 130 (C)"},
            
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
              if ((Number.isFinite(item.initial_temperature_c) == true)) {
                rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.initial_temperature_c, eor_type: item.eor_type })
              }
            }); this.rowData = rowDataa;
            for (let i in varia) {
    
              const variaa = varia[i].replaceAll(' ', '_');
              rowDataa.forEach((item) => {
                if ((Number.isFinite(item.permeability) == true) && (item.eor_type == varia[i])) {
                  if (item.permeability <= 15) {
                    if (Number.isFinite(this.rowDataRT[0][variaa]) == true) {
                      this.rowDataRT[0][variaa] += 1
                    } else { this.rowDataRT[0][variaa] = 0; this.rowDataRT[0][variaa] += 1 }
    
                  } else if (item.permeability > 15 && item.permeability <= 20) {
                    if (Number.isFinite(this.rowDataRT[1][variaa]) == true) {
                      this.rowDataRT[1][variaa] += 1
                    } else { this.rowDataRT[1][variaa] = 0; this.rowDataRT[1][variaa] += 1 }
                  } else if (item.permeability > 20 && item.permeability <= 25) {
                    if (Number.isFinite(this.rowDataRT[2][variaa]) == true) {
                      this.rowDataRT[2][variaa] += 1
                    } else { this.rowDataRT[2][variaa] = 0; this.rowDataRT[2][variaa] += 1 }
                  } else if (item.permeability > 25 && item.permeability <= 30) {
                    if (Number.isFinite(this.rowDataRT[3][variaa]) == true) {
                      this.rowDataRT[3][variaa] += 1
                    } else { this.rowDataRT[3][variaa] = 0; this.rowDataRT[3][variaa] += 1 }
                  } else if (item.permeability > 30 && item.permeability <= 35) {
                    if (Number.isFinite(this.rowDataRT[4][variaa]) == true) {
                      this.rowDataRT[4][variaa] += 1
                    } else { this.rowDataRT[4][variaa] = 0; this.rowDataRT[4][variaa] += 1 }
                  } else if (item.permeability > 35 && item.permeability <= 40) {
                    if (Number.isFinite(this.rowDataRT[5][variaa]) == true) {
                      this.rowDataRT[5][variaa] += 1
                    } else { this.rowDataRT[5][variaa] = 0; this.rowDataRT[5][variaa] += 1 }
                  } else if (item.permeability > 40 && item.permeability <= 45) {
                    if (Number.isFinite(this.rowDataRT[6][variaa]) == true) {
                      this.rowDataRT[6][variaa] += 1
                    } else { this.rowDataRT[6][variaa] = 0; this.rowDataRT[6][variaa] += 1 }
                  } else if (item.permeability > 45 && item.permeability <= 50) {
                    if (Number.isFinite(this.rowDataRT[7][variaa]) == true) {
                      this.rowDataRT[7][variaa] += 1
                    } else { this.rowDataRT[7][variaa] = 0; this.rowDataRT[7][variaa] += 1 }
                  } else if (item.permeability > 50 && item.permeability <= 55) {
                    if (Number.isFinite(this.rowDataRT[8][variaa]) == true) {
                      this.rowDataRT[8][variaa] += 1
                    } else { this.rowDataRT[8][variaa] = 0; this.rowDataRT[8][variaa] += 1 }
                  } else if (item.permeability > 55 && item.permeability <= 60) {
                    if (Number.isFinite(this.rowDataRT[9][variaa]) == true) {
                      this.rowDataRT[9][variaa] += 1
                    } else { this.rowDataRT[9][variaa] = 0; this.rowDataRT[9][variaa] += 1 }
                  } else if (item.permeability > 60 && item.permeability <= 65) {
                    if (Number.isFinite(this.rowDataRT[10][variaa]) == true) {
                      this.rowDataRT[10][variaa] += 1
                    } else { this.rowDataRT[10][variaa] = 0; this.rowDataRT[10][variaa] += 1 }
                  } else if (item.permeability > 65 && item.permeability <= 70) {
                    if (Number.isFinite(this.rowDataRT[11][variaa]) == true) {
                      this.rowDataRT[11][variaa] += 1
                    } else { this.rowDataRT[11][variaa] = 0; this.rowDataRT[11][variaa] += 1 }
                  } else if (item.permeability > 70 && item.permeability <= 75) {
                    if (Number.isFinite(this.rowDataRT[12][variaa]) == true) {
                      this.rowDataRT[12][variaa] += 1
                    } else { this.rowDataRT[12][variaa] = 0; this.rowDataRT[12][variaa] += 1 }
                  } else if (item.permeability > 75 && item.permeability <= 80) {
                    if (Number.isFinite(this.rowDataRT[13][variaa]) == true) {
                      this.rowDataRT[13][variaa] += 1
                    } else { this.rowDataRT[13][variaa] = 0; this.rowDataRT[13][variaa] += 1 }
                  } else if (item.permeability > 80 && item.permeability <= 85) {
                    if (Number.isFinite(this.rowDataRT[14][variaa]) == true) {
                      this.rowDataRT[14][variaa] += 1
                    } else { this.rowDataRT[14][variaa] = 0; this.rowDataRT[14][variaa] += 1 }
                  } else if (item.permeability > 85 && item.permeability <= 90) {
                    if (Number.isFinite(this.rowDataRT[15][variaa]) == true) {
                      this.rowDataRT[15][variaa] += 1
                    } else { this.rowDataRT[15][variaa] = 0; this.rowDataRT[15][variaa] += 1 }
                  } else if (item.permeability > 90 && item.permeability <= 95) {
                    if (Number.isFinite(this.rowDataRT[16][variaa]) == true) {
                      this.rowDataRT[16][variaa] += 1
                    } else { this.rowDataRT[16][variaa] = 0; this.rowDataRT[16][variaa] += 1 }
                  } else if (item.permeability > 95 && item.permeability <= 100) {
                    if (Number.isFinite(this.rowDataRT[17][variaa]) == true) {
                      this.rowDataRT[17][variaa] += 1
                    } else { this.rowDataRT[17][variaa] = 0; this.rowDataRT[17][variaa] += 1 }
                  } else if (item.permeability > 100 && item.permeability <= 105) {
                    if (Number.isFinite(this.rowDataRT[18][variaa]) == true) {
                      this.rowDataRT[18][variaa] += 1
                    } else { this.rowDataRT[18][variaa] = 0; this.rowDataRT[18][variaa] += 1 }
                  } else if (item.permeability > 105 && item.permeability <= 110) {
                    if (Number.isFinite(this.rowDataRT[19][variaa]) == true) {
                      this.rowDataRT[19][variaa] += 1
                    } else { this.rowDataRT[19][variaa] = 0; this.rowDataRT[19][variaa] += 1 }
                  } else if (item.permeability > 110 && item.permeability <= 115) {
                    if (Number.isFinite(this.rowDataRT[20][variaa]) == true) {
                      this.rowDataRT[20][variaa] += 1
                    } else { this.rowDataRT[20][variaa] = 0; this.rowDataRT[20][variaa] += 1 }
                  } else if (item.permeability > 115 && item.permeability <= 120) {
                    if (Number.isFinite(this.rowDataRT[21][variaa]) == true) {
                      this.rowDataRT[21][variaa] += 1
                    } else { this.rowDataRT[21][variaa] = 0; this.rowDataRT[21][variaa] += 1 }
                  } else if (item.permeability > 120 && item.permeability <= 125) {
                    if (Number.isFinite(this.rowDataRT[22][variaa]) == true) {
                      this.rowDataRT[22][variaa] += 1
                    } else { this.rowDataRT[22][variaa] = 0; this.rowDataRT[22][variaa] += 1 }
                  } else if (item.permeability > 125 && item.permeability <= 130) {
                    if (Number.isFinite(this.rowDataRT[23][variaa]) == true) {
                      this.rowDataRT[23][variaa] += 1
                    } else { this.rowDataRT[23][variaa] = 0; this.rowDataRT[23][variaa] += 1 }
                  }else if (item.permeability > 130 ) {
                    if (Number.isFinite(this.rowDataRT[24][variaa]) == true) {
                      this.rowDataRT[24][variaa] += 1
                    } else { this.rowDataRT[24][variaa] = 0; this.rowDataRT[24][variaa] += 1 }
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