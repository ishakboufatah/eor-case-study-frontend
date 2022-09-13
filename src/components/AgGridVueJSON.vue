<template>

  <ag-grid-vue
    
    style="width: auto ; height: 400px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData[0]"
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
      rowData: [0],
      

       columnDefs: [
    { headerName: "Field", field: "field" , resizable: true },
    { headerName: "Pool Name", field: "pool_name" , resizable: true },
    { headerName: "Country", field: "country" , resizable: true },
    { headerName: "EOR Type", field: "eor_type" , resizable: true },
    { headerName: "EOR Sub Type", field: "eor_sub_type" , resizable: true },
    { headerName: "Flood Type", field: "flood_type" , resizable: true },
    { headerName: "Number Of Wells", field: "number_of_wells" , resizable: true },
    { headerName: "Number Of EOR  Injectors", field: "number_of_eor_injectors" , resizable: true },
    { headerName: "Numberof EOR Producers", field: "number_of_eor_producers" , resizable: true },
    { headerName: "Discovery Date", field: "discovery_date" , resizable: true },
    { headerName: "EOR Start Year", field: "eor_start_year" , resizable: true },
    { headerName: "Secondary Recovery", field: "secondary_recovery" , resizable: true },
    { headerName: "EOR 1", field: "eor_1" , resizable: true },
    { headerName: "EOR 2", field: "eor_2" , resizable: true },
    { headerName: "EOR 3", field: "eor_3" , resizable: true },
    { headerName: "EOR 4", field: "eor_4" , resizable: true },
    { headerName: "Depth (m)", field: "depth_m" , resizable: true },
    { headerName: "Average Pay Thickness (m)", field: "average_pay_thickness_m" , resizable: true },
    { headerName: "Average Permeability (md)", field: "average_permeability_md" , resizable: true },
    { headerName: "Average Porosity", field: "average_porosity" , resizable: true },
    { headerName: "Water Saturation", field: "water_saturation" , resizable: true },
    { headerName: "Lithology", field: "lithology" , resizable: true },
    { headerName: "Initial Pressure (kpa)", field: "initial_pressure_kpa" , resizable: true },
    { headerName: "Initial Temperature (c)", field: "initial_temperature_c" , resizable: true },
    { headerName: "Oil Gravity (API)", field: "oil_gravity_API" , resizable: true },
    { headerName: "Oil Density (kgm3)", field: "oil_density_kgm3" , resizable: true },
    { headerName: "Oil Viscosity 15c (cp)", field: "oil_viscosity_15c_cp" , resizable: true },
    { headerName: "Oil Viscosity tr (cp)", field: "oil_viscosity_tr_cp" , resizable: true },
    { headerName: "Salinity Of Formation Water (ppm)", field: "salinity_of_formation_water_ppm" , resizable: true },
    { headerName: "Presence Of Natural Fractures", field: "presence_of_natural_fractures" , resizable: true },
    { headerName: "Presence Of Gas Cap", field: "presence_of_gas_cap" , resizable: true },
    { headerName: "Area Of Project (ha)", field: "area_of_project_ha" , resizable: true },
    { headerName: "Primary Recovery Factor Fraction", field: "primary_recovery_factor_fraction" , resizable: true },
    { headerName: "Incremental WF Recovery Factor Fraction", field: "incremental_wf_recovery_factor_fraction" , resizable: true },
    { headerName: "Incremental EOR Recovery Factor Fraction", field: "incremental_eor_recovery_factor_fraction" , resizable: true },
    { headerName: "Total Recovery Factor Fraction", field: "total_recovery_factor_fraction" , resizable: true },
    { headerName: "OOIP (E3M3)", field: "ooip_e3m3" , resizable: true },
    { headerName: "Remaining Oil In Place (E3M3) After Primary Recovery", field: "remaining_oil_in_place_e3m3_after_primary_eor_recovery" , resizable: true },
    { headerName: "Remaining Recoverable Reserves (E3M3)", field: "remaining_recoverable_reserves_e3m3" , resizable: true },
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
            }).then(response => this.rowData[0] = response.data)
           console.log(this.rowData)
            console.log(this.rowData[0])
        },
        
  },
  

};
</script>