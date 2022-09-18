<template>
  
  <ag-grid-vue style="width: auto ; height: 400px;display: none;" class="ag-theme-alpine" :columnDefs="columnDefs"
    :rowData="getCaseStudies2(eortype)" :enableCharts=true :enableRangeSelection=true :popupParent="popupParent"
    :defaultColDef="defaultColDef" @grid-ready="onGridReady" :createChartContainer="createChartContainer"
    @column-resized="onColumnResized" @first-data-rendered="onFirstDataRendered"
    :chartThemeOverrides=editchartThemeOverrides(eortype) >

  </ag-grid-vue>

</template>

<script>
import axios from 'axios';
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ModuleRegistry } from 'ag-grid-community';
import { GridChartsModule, MenuModule, RowGroupingModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([
  GridChartsModule, MenuModule, RowGroupingModule

]);
export default {
    name: "AgGridPermJSON2",
  components: {
    AgGridVue
  },
  props: {
    fieldnumber: Number,
    fnn: Number,
    Text11: String,
    eortype: String,

  },
  data() {
    return {
        rowData:[],
        
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
      popupParent: document.body,
        columnDefs: [
        { headerName: "field", field: "field", resizable: true, width: 220, chartDataType: 'category' },
        { headerName: "Incremental EOR Recovery Factor", field: "Recovery_factor", resizable: true, width: 300, chartDataType: 'series' },
        { headerName: "permeability (md)", field: "permeability", resizable: true, width: 300, chartDataType: 'series' },


      ],
    }},
    mounted() {
        // this.getCaseStudies2()
        
    },
    methods: {
        
        editchartThemeOverrides(Text1){
      var varia = {
      common: {
        title: {
          enabled: true,
          text: Text1 
          // + ' Permeability Impact On Oil Recovery'
          ,
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
    }
      
      return varia
    },

    getCaseStudies2(varia) {
        var rowDataa = [];
        
      axios({
        method: 'get',
        url: 'https://sheordatabase.herokuapp.com/CaseStudies/?eortype=' + varia,


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => {
        response.data.forEach((item) => {
          if ((Number.isFinite(item.average_permeability_md) == true)) { if ((item.eor_type !== null)){
            rowDataa.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_permeability_md, eor_type: item.eor_type })
            // ,this.rowData.push({ field: item.field + " " + item.pool_name, Recovery_factor: item.incremental_eor_recovery_factor_fraction, permeability: item.average_permeability_md, eor_type: item.eor_type })
          }}
        });
        this.rowData=rowDataa
        return rowDataa
         ,console.log(this.rowData)
      })
      rowDataa=this.rowData,console.log(this.rowDataa)
      // ,console.log(rowDataa),console.log(this.createnew(rowDataa))
      return rowDataa 
    
    },
    onFirstDataRendered(params) {
      var createRangeChartParams = {
        cellRange: {

          rowStartIndex: 0,
          // rowEndIndex: 75,
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
    },

}
</script>

<style>

</style>