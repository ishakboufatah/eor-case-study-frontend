<template>

    <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
        :rowData="rowDataVisc" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
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
      name: "AgGridViscJSON",
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
          rowDataVisc: [
            { permrange: "[0 - 100] (cp)" },
            { permrange: "]100 - 200] (cp)" },
            { permrange: "]200 - 300] (cp)" },
            { permrange: "]300 - 400] (cp)" },
            { permrange: "]400 - 500] (cp)" },
            { permrange: "]500 - 600] (cp)" },
            { permrange: "]600 - 700] (cp)" },
            { permrange: "]700 - 800] (cp)" },
            { permrange: "]800 - 900] (cp)" },
            { permrange: "]900 - 1000] (cp)" },
            { permrange: "]1000 - 2000] (cp)" },
            { permrange: "]2000 - 3000] (cp)" },
            { permrange: "]3000 - 4000] (cp)" },
            { permrange: "]4000 - 5000] (cp)" },
            { permrange: "]5000 - 6000] (cp)" },
            { permrange: "]6000 - 7000] (cp)" },
            { permrange: "]7000 - 8000] (cp)" },
            { permrange: "]8000 - 9000] (cp)" },
            { permrange: "]9000 - 10000] (cp)" },
            { permrange: "]10000 - 20000] (cp)" },
            { permrange: "]20000 - 30000] (cp)" },
            { permrange: "]30000 - 40000] (cp)" },
            { permrange: "]40000 - 50000] (cp)" },
            { permrange: "]50000 - 60000] (cp)" },
            { permrange: "]60000 - 70000] (cp)" },
            { permrange: "]70000 - 80000] (cp)" },
            { permrange: "]80000 - 90000] (cp)" },
            { permrange: "]90000 - 100000] (cp)" },
            { permrange: "> 100000 (cp)" },
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
              text: ' Case Studies Number Classified by Oil Viscosity Range',
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
              if ((Number.isFinite(item.oil_viscosity_15c_cp) == true)) {
                rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.oil_viscosity_15c_cp, eor_type: item.eor_type })
              }
            }); this.rowData = rowDataa;
            for (let i in varia) {
    
              const variaa = varia[i].replaceAll(' ', '_');
              rowDataa.forEach((item) => {
                if ((Number.isFinite(item.permeability) == true) && (item.eor_type == varia[i])) {
                  if (item.permeability <= 100) {
                    if (Number.isFinite(this.rowDataVisc[0][variaa]) == true) {
                      this.rowDataVisc[0][variaa] += 1
                    } else { this.rowDataVisc[0][variaa] = 0; this.rowDataVisc[0][variaa] += 1 }
    
                  } else if (item.permeability > 100 && item.permeability <= 200) {
                    if (Number.isFinite(this.rowDataVisc[1][variaa]) == true) {
                      this.rowDataVisc[1][variaa] += 1
                    } else { this.rowDataVisc[1][variaa] = 0; this.rowDataVisc[1][variaa] += 1 }
                  } else if (item.permeability > 200 && item.permeability <= 300) {
                    if (Number.isFinite(this.rowDataVisc[2][variaa]) == true) {
                      this.rowDataVisc[2][variaa] += 1
                    } else { this.rowDataVisc[2][variaa] = 0; this.rowDataVisc[2][variaa] += 1 }
                  } else if (item.permeability > 300 && item.permeability <= 400) {
                    if (Number.isFinite(this.rowDataVisc[3][variaa]) == true) {
                      this.rowDataVisc[3][variaa] += 1
                    } else { this.rowDataVisc[3][variaa] = 0; this.rowDataVisc[3][variaa] += 1 }
                  } else if (item.permeability > 400 && item.permeability <= 500) {
                    if (Number.isFinite(this.rowDataVisc[4][variaa]) == true) {
                      this.rowDataVisc[4][variaa] += 1
                    } else { this.rowDataVisc[4][variaa] = 0; this.rowDataVisc[4][variaa] += 1 }
                  } else if (item.permeability > 500 && item.permeability <= 600) {
                    if (Number.isFinite(this.rowDataVisc[5][variaa]) == true) {
                      this.rowDataVisc[5][variaa] += 1
                    } else { this.rowDataVisc[5][variaa] = 0; this.rowDataVisc[5][variaa] += 1 }
                  } else if (item.permeability > 600 && item.permeability <= 700) {
                    if (Number.isFinite(this.rowDataVisc[6][variaa]) == true) {
                      this.rowDataVisc[6][variaa] += 1
                    } else { this.rowDataVisc[6][variaa] = 0; this.rowDataVisc[6][variaa] += 1 }
                  } else if (item.permeability > 700 && item.permeability <= 800) {
                    if (Number.isFinite(this.rowDataVisc[7][variaa]) == true) {
                      this.rowDataVisc[7][variaa] += 1
                    } else { this.rowDataVisc[7][variaa] = 0; this.rowDataVisc[7][variaa] += 1 }
                  } else if (item.permeability > 800 && item.permeability <= 900) {
                    if (Number.isFinite(this.rowDataVisc[8][variaa]) == true) {
                      this.rowDataVisc[8][variaa] += 1
                    } else { this.rowDataVisc[8][variaa] = 0; this.rowDataVisc[8][variaa] += 1 }
                  } else if (item.permeability > 900 && item.permeability <= 1000) {
                    if (Number.isFinite(this.rowDataVisc[9][variaa]) == true) {
                      this.rowDataVisc[9][variaa] += 1
                    } else { this.rowDataVisc[9][variaa] = 0; this.rowDataVisc[9][variaa] += 1 }
                  } else if (item.permeability > 1000 && item.permeability <= 2000) {
                    if (Number.isFinite(this.rowDataVisc[10][variaa]) == true) {
                      this.rowDataVisc[10][variaa] += 1
                    } else { this.rowDataVisc[10][variaa] = 0; this.rowDataVisc[10][variaa] += 1 }
                  } else if (item.permeability > 2000 && item.permeability <= 3000) {
                    if (Number.isFinite(this.rowDataVisc[11][variaa]) == true) {
                      this.rowDataVisc[11][variaa] += 1
                    } else { this.rowDataVisc[11][variaa] = 0; this.rowDataVisc[11][variaa] += 1 }
                  } else if (item.permeability > 3000 && item.permeability <= 4000) {
                    if (Number.isFinite(this.rowDataVisc[12][variaa]) == true) {
                      this.rowDataVisc[12][variaa] += 1
                    } else { this.rowDataVisc[12][variaa] = 0; this.rowDataVisc[12][variaa] += 1 }
                  } else if (item.permeability > 4000 && item.permeability <= 5000) {
                    if (Number.isFinite(this.rowDataVisc[13][variaa]) == true) {
                      this.rowDataVisc[13][variaa] += 1
                    } else { this.rowDataVisc[13][variaa] = 0; this.rowDataVisc[13][variaa] += 1 }
                  } else if (item.permeability > 5000 && item.permeability <= 6000) {
                    if (Number.isFinite(this.rowDataVisc[14][variaa]) == true) {
                      this.rowDataVisc[14][variaa] += 1
                    } else { this.rowDataVisc[14][variaa] = 0; this.rowDataVisc[14][variaa] += 1 }
                  } else if (item.permeability > 6000 && item.permeability <= 7000) {
                    if (Number.isFinite(this.rowDataVisc[15][variaa]) == true) {
                      this.rowDataVisc[15][variaa] += 1
                    } else { this.rowDataVisc[15][variaa] = 0; this.rowDataVisc[15][variaa] += 1 }
                  } else if (item.permeability > 7000 && item.permeability <= 8000) {
                    if (Number.isFinite(this.rowDataVisc[16][variaa]) == true) {
                      this.rowDataVisc[16][variaa] += 1
                    } else { this.rowDataVisc[16][variaa] = 0; this.rowDataVisc[16][variaa] += 1 }
                  } else if (item.permeability > 8000 && item.permeability <= 9000) {
                    if (Number.isFinite(this.rowDataVisc[17][variaa]) == true) {
                      this.rowDataVisc[17][variaa] += 1
                    } else { this.rowDataVisc[17][variaa] = 0; this.rowDataVisc[17][variaa] += 1 }
                  } else if (item.permeability > 9000 && item.permeability <= 10000) {
                    if (Number.isFinite(this.rowDataVisc[18][variaa]) == true) {
                      this.rowDataVisc[18][variaa] += 1
                    } else { this.rowDataVisc[18][variaa] = 0; this.rowDataVisc[18][variaa] += 1 }
                  } else if (item.permeability > 10000 && item.permeability <= 20000) {
                    if (Number.isFinite(this.rowDataVisc[19][variaa]) == true) {
                      this.rowDataVisc[19][variaa] += 1
                    } else { this.rowDataVisc[19][variaa] = 0; this.rowDataVisc[19][variaa] += 1 }
                  } else if (item.permeability > 20000 && item.permeability <= 30000) {
                    if (Number.isFinite(this.rowDataVisc[20][variaa]) == true) {
                      this.rowDataVisc[20][variaa] += 1
                    } else { this.rowDataVisc[20][variaa] = 0; this.rowDataVisc[20][variaa] += 1 }
                  } else if (item.permeability > 30000 && item.permeability <= 40000) {
                    if (Number.isFinite(this.rowDataVisc[21][variaa]) == true) {
                      this.rowDataVisc[21][variaa] += 1
                    } else { this.rowDataVisc[21][variaa] = 0; this.rowDataVisc[21][variaa] += 1 }
                  } else if (item.permeability > 40000 && item.permeability <= 50000) {
                    if (Number.isFinite(this.rowDataVisc[22][variaa]) == true) {
                      this.rowDataVisc[22][variaa] += 1
                    } else { this.rowDataVisc[22][variaa] = 0; this.rowDataVisc[22][variaa] += 1 }
                  } else if (item.permeability > 50000 && item.permeability <= 60000) {
                    if (Number.isFinite(this.rowDataVisc[23][variaa]) == true) {
                      this.rowDataVisc[23][variaa] += 1
                    } else { this.rowDataVisc[23][variaa] = 0; this.rowDataVisc[23][variaa] += 1 }
                  } else if (item.permeability > 60000 && item.permeability <= 70000) {
                    if (Number.isFinite(this.rowDataVisc[24][variaa]) == true) {
                      this.rowDataVisc[24][variaa] += 1
                    } else { this.rowDataVisc[24][variaa] = 0; this.rowDataVisc[24][variaa] += 1 }
                  } else if (item.permeability > 60000 && item.permeability <= 80000) {
                    if (Number.isFinite(this.rowDataVisc[25][variaa]) == true) {
                      this.rowDataVisc[25][variaa] += 1
                    } else { this.rowDataVisc[25][variaa] = 0; this.rowDataVisc[25][variaa] += 1 }
                  } else if (item.permeability > 60000 && item.permeability <= 90000) {
                    if (Number.isFinite(this.rowDataVisc[26][variaa]) == true) {
                      this.rowDataVisc[26][variaa] += 1
                    } else { this.rowDataVisc[26][variaa] = 0; this.rowDataVisc[26][variaa] += 1 }
                  } else if (item.permeability > 60000 && item.permeability <= 100000) {
                    if (Number.isFinite(this.rowDataVisc[27][variaa]) == true) {
                      this.rowDataVisc[27][variaa] += 1
                    } else { this.rowDataVisc[27][variaa] = 0; this.rowDataVisc[27][variaa] += 1 }
                  } else if (item.permeability > 100000 ) {
                    if (Number.isFinite(this.rowDataVisc[28][variaa]) == true) {
                      this.rowDataVisc[28][variaa] += 1
                    } else { this.rowDataVisc[28][variaa] = 0; this.rowDataVisc[28][variaa] += 1 }
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