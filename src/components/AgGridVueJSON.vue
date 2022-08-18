<template>

  <ag-grid-vue
    
    style="width: auto ; height: 400px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    @column-resized="onColumnResized"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import axios from 'axios';
// import { format } from "path";

export default {
  name: "AgGridVueJSON",
  components: {
    AgGridVue,
  },
  props: {
    fieldnumber: Number,
    fnn: Number,
    country:String,
    eortype: String
  },
  data() {
    return {
      rowData: [],
      

       columnDefs: [
    { headerName: "field", field: "field" , resizable: true },
    { headerName: "pool_name", field: "pool_name" , resizable: true },
    { headerName: "formation", field: "formation" , resizable: true },
    { headerName: "country", field: "country" , resizable: true },
    { headerName: "eor_type", field: "eor_type" , resizable: true },
    { headerName: "eor_sub_type", field: "eor_sub_type" , resizable: true },
    { headerName: "flood_type", field: "flood_type" , resizable: true },
    { headerName: "number_of_wells", field: "number_of_wells" , resizable: true },
    { headerName: "number_of_eor_injectors", field: "number_of_eor_injectors" , resizable: true },
    { headerName: "number_of_eor_producers", field: "number_of_eor_producers" , resizable: true },
    { headerName: "discovery_date", field: "discovery_date" , resizable: true },
    { headerName: "secondary_recovery", field: "secondary_recovery" , resizable: true },
    { headerName: "eor_1", field: "eor_1" , resizable: true },
    { headerName: "eor_2", field: "eor_2" , resizable: true },
    { headerName: "eor_3", field: "eor_3" , resizable: true },
    { headerName: "eor_4", field: "eor_4" , resizable: true },
    { headerName: "depth_m", field: "depth_m" , resizable: true },
    { headerName: "average_pay_thickness_m", field: "average_pay_thickness_m" , resizable: true },
    { headerName: "average_permeability_md", field: "average_permeability_md" , resizable: true },
    { headerName: "average_porosity", field: "average_porosity" , resizable: true },
    { headerName: "water_saturation", field: "water_saturation" , resizable: true },
    { headerName: "lithology", field: "lithology" , resizable: true },
    { headerName: "initial_pressure_kpa", field: "initial_pressure_kpa" , resizable: true },
    { headerName: "initial_temperature_c", field: "initial_temperature_c" , resizable: true },
    { headerName: "oil_gravity_API", field: "oil_gravity_API" , resizable: true },
    { headerName: "oil_density_kgm3", field: "oil_density_kgm3" , resizable: true },
    { headerName: "oil_viscosity_15c_cp", field: "oil_viscosity_15c_cp" , resizable: true },
    { headerName: "oil_viscosity_tr_cp", field: "oil_viscosity_tr_cp" , resizable: true },
    { headerName: "salinity_of_formation_water_ppm", field: "salinity_of_formation_water_ppm" , resizable: true },
    { headerName: "presence_of_natural_fractures", field: "presence_of_natural_fractures" , resizable: true },
    { headerName: "presence_of_gas_cap", field: "presence_of_gas_cap" , resizable: true },
    { headerName: "area_of_project_ha", field: "area_of_project_ha" , resizable: true },
    { headerName: "primary_recovery_factor_fraction", field: "primary_recovery_factor_fraction" , resizable: true },
    { headerName: "incremental_wf_recovery_factor_fraction", field: "incremental_wf_recovery_factor_fraction" , resizable: true },
    { headerName: "incremental_eor_recovery_factor_fraction", field: "incremental_eor_recovery_factor_fraction" , resizable: true },
    { headerName: "total_recovery_factor_fraction", field: "total_recovery_factor_fraction" , resizable: true },
    { headerName: "ooip_e3m3", field: "ooip_e3m3" , resizable: true },
    { headerName: "remaining_oil_in_place_e3m3_after_primary_eor_recovery", field: "remaining_oil_in_place_e3m3_after_primary_eor_recovery" , resizable: true },
    { headerName: "remaining_recoverable_reserves_e3m3", field: "remaining_recoverable_reserves_e3m3" , resizable: true },
    ]

    
      ,
      //  Country: 'Canada',
      //  Eortype: 'Miscible EOR',
       

      
    };
  },
  mounted() {
        this.getCaseStudies()
    },

  methods:{
    getCaseStudies() {
    
            axios({
                method: 'get',
                url: 'https://sheordatabase.herokuapp.com/CaseStudies/?country=' + this.country +'&eortype=' + this.eortype,
                
                
                auth: {
                    username: 'admin',
                    password: 'admineoradmin'
                }
            }).then(response => this.rowData = response.data)
            console.log(this.rowData)
        },
        
  },
  

};
</script>