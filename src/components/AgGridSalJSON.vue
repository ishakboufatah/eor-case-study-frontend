<template>

    <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs1"
        :rowData="rowDataSal" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
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
      name: "AgGridSalJSON",
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
            { headerName: "salinity range (ppm)", field: "permrange", resizable: true, width: 220, chartDataType: 'category' },
    
    
    
    
          ],
          rowDataSal: [
            { permrange: "[0 - 10000] (ppm)" },
            { permrange: "]10000 - 20000] (ppm)" },
            { permrange: "]20000 - 30000] (ppm)" },
            { permrange: "]30000 - 40000] (ppm)" },
            { permrange: "]40000 - 50000] (ppm)" },
            { permrange: "]50000 - 60000] (ppm)" },
            { permrange: "]60000 - 70000] (ppm)" },
            { permrange: "]70000 - 80000] (ppm)" },
            { permrange: "]80000 - 90000] (ppm)" },
            { permrange: "]90000 - 100000] (ppm)" },
            { permrange: "]100000 - 110000] (ppm)" },
            { permrange: "]110000 - 120000] (ppm)" },
            { permrange: "]120000 - 130000] (ppm)" },
            { permrange: "]130000 - 140000] (ppm)" },
            { permrange: "]140000 - 150000] (ppm)" },
            { permrange: "]150000 - 160000] (ppm)" },
            { permrange: "]160000 - 170000] (ppm)" },
            { permrange: "]170000 - 180000] (ppm)" },
            { permrange: "]180000 - 190000] (ppm)" },
            { permrange: "]190000 - 200000] (ppm)" },
            { permrange: "]200000 - 210000] (ppm)" },
            { permrange: "]210000 - 220000] (ppm)" },
            { permrange: "]220000 - 230000] (ppm)" },
            { permrange: "]230000 - 240000] (ppm)" },
            { permrange: "]240000 - 250000] (ppm)" },
            { permrange: "]250000 - 260000] (ppm)" },
            { permrange: "]260000 - 270000] (ppm)" },
            { permrange: "]270000 - 280000] (ppm)" },
            { permrange: "]280000 - 290000] (ppm)" },
            { permrange: "]290000 - 300000] (ppm)" },
            { permrange: "> 300000 (ppm)" },
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
              text: ' Case Studies Number Classified by Salinity Range',
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
              if ((Number.isFinite(item.salinity_of_formation_water_ppm) == true)) {
                rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.salinity_of_formation_water_ppm, eor_type: item.eor_type })
              }
            }); this.rowData = rowDataa;
            for (let i in varia) {
    
              const variaa = varia[i].replaceAll(' ', '_');
              rowDataa.forEach((item) => {
                if ((Number.isFinite(item.permeability) == true) && (item.eor_type == varia[i])) {
                  if (item.permeability <= 10000) {
                    if (Number.isFinite(this.rowDataSal[0][variaa]) == true) {
                      this.rowDataSal[0][variaa] += 1
                    } else { this.rowDataSal[0][variaa] = 0; this.rowDataSal[0][variaa] += 1 }
    
                  } else if (item.permeability > 10000 && item.permeability <= 20000) {
                    if (Number.isFinite(this.rowDataSal[1][variaa]) == true) {
                      this.rowDataSal[1][variaa] += 1
                    } else { this.rowDataSal[1][variaa] = 0; this.rowDataSal[1][variaa] += 1 }
                  } else if (item.permeability > 20000 && item.permeability <= 30000) {
                    if (Number.isFinite(this.rowDataSal[2][variaa]) == true) {
                      this.rowDataSal[2][variaa] += 1
                    } else { this.rowDataSal[2][variaa] = 0; this.rowDataSal[2][variaa] += 1 }
                  } else if (item.permeability > 30000 && item.permeability <= 40000) {
                    if (Number.isFinite(this.rowDataSal[3][variaa]) == true) {
                      this.rowDataSal[3][variaa] += 1
                    } else { this.rowDataSal[3][variaa] = 0; this.rowDataSal[3][variaa] += 1 }
                  } else if (item.permeability > 40000 && item.permeability <= 50000) {
                    if (Number.isFinite(this.rowDataSal[4][variaa]) == true) {
                      this.rowDataSal[4][variaa] += 1
                    } else { this.rowDataSal[4][variaa] = 0; this.rowDataSal[4][variaa] += 1 }
                  } else if (item.permeability > 50000 && item.permeability <= 60000) {
                    if (Number.isFinite(this.rowDataSal[5][variaa]) == true) {
                      this.rowDataSal[5][variaa] += 1
                    } else { this.rowDataSal[5][variaa] = 0; this.rowDataSal[5][variaa] += 1 }
                  } else if (item.permeability > 60000 && item.permeability <= 70000) {
                    if (Number.isFinite(this.rowDataSal[6][variaa]) == true) {
                      this.rowDataSal[6][variaa] += 1
                    } else { this.rowDataSal[6][variaa] = 0; this.rowDataSal[6][variaa] += 1 }
                  } else if (item.permeability > 70000 && item.permeability <= 80000) {
                    if (Number.isFinite(this.rowDataSal[7][variaa]) == true) {
                      this.rowDataSal[7][variaa] += 1
                    } else { this.rowDataSal[7][variaa] = 0; this.rowDataSal[7][variaa] += 1 }
                  } else if (item.permeability > 80000 && item.permeability <= 90000) {
                    if (Number.isFinite(this.rowDataSal[8][variaa]) == true) {
                      this.rowDataSal[8][variaa] += 1
                    } else { this.rowDataSal[8][variaa] = 0; this.rowDataSal[8][variaa] += 1 }
                  } else if (item.permeability > 90000 && item.permeability <= 100000) {
                    if (Number.isFinite(this.rowDataSal[9][variaa]) == true) {
                      this.rowDataSal[9][variaa] += 1
                    } else { this.rowDataSal[9][variaa] = 0; this.rowDataSal[9][variaa] += 1 }
                  } else if (item.permeability > 100000 && item.permeability <= 110000) {
                    if (Number.isFinite(this.rowDataSal[10][variaa]) == true) {
                      this.rowDataSal[10][variaa] += 1
                    } else { this.rowDataSal[10][variaa] = 0; this.rowDataSal[10][variaa] += 1 }
                  } else if (item.permeability > 110000 && item.permeability <= 120000) {
                    if (Number.isFinite(this.rowDataSal[11][variaa]) == true) {
                      this.rowDataSal[11][variaa] += 1
                    } else { this.rowDataSal[11][variaa] = 0; this.rowDataSal[11][variaa] += 1 }
                  } else if (item.permeability > 120000 && item.permeability <= 130000) {
                    if (Number.isFinite(this.rowDataSal[12][variaa]) == true) {
                      this.rowDataSal[12][variaa] += 1
                    } else { this.rowDataSal[12][variaa] = 0; this.rowDataSal[12][variaa] += 1 }
                  } else if (item.permeability > 130000 && item.permeability <= 140000) {
                    if (Number.isFinite(this.rowDataSal[13][variaa]) == true) {
                      this.rowDataSal[13][variaa] += 1
                    } else { this.rowDataSal[13][variaa] = 0; this.rowDataSal[13][variaa] += 1 }
                  } else if (item.permeability > 140000 && item.permeability <= 150000) {
                    if (Number.isFinite(this.rowDataSal[14][variaa]) == true) {
                      this.rowDataSal[14][variaa] += 1
                    } else { this.rowDataSal[14][variaa] = 0; this.rowDataSal[14][variaa] += 1 }
                  } else if (item.permeability > 150000 && item.permeability <= 160000) {
                    if (Number.isFinite(this.rowDataSal[15][variaa]) == true) {
                      this.rowDataSal[15][variaa] += 1
                    } else { this.rowDataSal[15][variaa] = 0; this.rowDataSal[15][variaa] += 1 }
                  } else if (item.permeability > 160000 && item.permeability <= 170000) {
                    if (Number.isFinite(this.rowDataSal[16][variaa]) == true) {
                      this.rowDataSal[16][variaa] += 1
                    } else { this.rowDataSal[16][variaa] = 0; this.rowDataSal[16][variaa] += 1 }
                  } else if (item.permeability > 170000 && item.permeability <= 180000) {
                    if (Number.isFinite(this.rowDataSal[17][variaa]) == true) {
                      this.rowDataSal[17][variaa] += 1
                    } else { this.rowDataSal[17][variaa] = 0; this.rowDataSal[17][variaa] += 1 }
                  } else if (item.permeability > 180000 && item.permeability <= 190000) {
                    if (Number.isFinite(this.rowDataSal[18][variaa]) == true) {
                      this.rowDataSal[18][variaa] += 1
                    } else { this.rowDataSal[18][variaa] = 0; this.rowDataSal[18][variaa] += 1 }
                  } else if (item.permeability > 190000 && item.permeability <= 200000) {
                    if (Number.isFinite(this.rowDataSal[19][variaa]) == true) {
                      this.rowDataSal[19][variaa] += 1
                    } else { this.rowDataSal[19][variaa] = 0; this.rowDataSal[19][variaa] += 1 }
                  } else if (item.permeability > 200000 && item.permeability <= 210000) {
                    if (Number.isFinite(this.rowDataSal[20][variaa]) == true) {
                      this.rowDataSal[20][variaa] += 1
                    } else { this.rowDataSal[20][variaa] = 0; this.rowDataSal[20][variaa] += 1 }
                  } else if (item.permeability > 210000 && item.permeability <= 220000) {
                    if (Number.isFinite(this.rowDataSal[21][variaa]) == true) {
                      this.rowDataSal[21][variaa] += 1
                    } else { this.rowDataSal[21][variaa] = 0; this.rowDataSal[21][variaa] += 1 }
                  } else if (item.permeability > 220000 && item.permeability <= 230000) {
                    if (Number.isFinite(this.rowDataSal[22][variaa]) == true) {
                      this.rowDataSal[22][variaa] += 1
                    } else { this.rowDataSal[22][variaa] = 0; this.rowDataSal[22][variaa] += 1 }
                  } else if (item.permeability > 230000 && item.permeability <= 240000) {
                    if (Number.isFinite(this.rowDataSal[23][variaa]) == true) {
                      this.rowDataSal[23][variaa] += 1
                    } else { this.rowDataSal[23][variaa] = 0; this.rowDataSal[23][variaa] += 1 }
                  } else if (item.permeability > 240000 && item.permeability <= 250000) {
                    if (Number.isFinite(this.rowDataSal[24][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 250000 && item.permeability <= 260000) {
                    if (Number.isFinite(this.rowDataSal[25][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 260000 && item.permeability <= 270000) {
                    if (Number.isFinite(this.rowDataSal[26][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 270000 && item.permeability <= 280000) {
                    if (Number.isFinite(this.rowDataSal[27][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 280000 && item.permeability <= 290000) {
                    if (Number.isFinite(this.rowDataSal[28][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 290000 && item.permeability <= 300000) {
                    if (Number.isFinite(this.rowDataSal[29][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
                  } else if (item.permeability > 300000 ) {
                    if (Number.isFinite(this.rowDataSal[30][variaa]) == true) {
                      this.rowDataSal[24][variaa] += 1
                    } else { this.rowDataSal[24][variaa] = 0; this.rowDataSal[24][variaa] += 1 }
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