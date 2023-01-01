<template>
    <div class="YPO1AZqVOG3JVS9MFFfBm CODE" style="">
        <div class="_1yjs1_SEnbYM4ZwUEjiHjN title">
            <div class="titleContent"><span class="label"></span>
                <h1><strong><span style="color: #ff8500;">CASE STUDIES DISTRIBUTION BY SALINITY</span></strong>
                </h1>
            </div>
            <div class="traits">
                <div class="trait"></div>
            </div>
        </div>
        <div class="mainPicture">
            <div class="_3MOJnJfUl9FrJpMqecbvje picture">
                <div class="content"
                    style="background: rgba(0, 0, 0, 0) url(&quot;https://sonatrach.com/wp-content/uploads/2018/08/tbwa_sonatrach_09_timimoun02_A14761.jpg&quot;) no-repeat scroll center center / cover; opacity: 1;">
                    <img alt="" width="0" height="0">
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="columnContent">

                <h2><span class="firm"><strong>Salinity Range Distribution</strong></span></h2>
                <p>We present the in chart 1 the number of Case Studies Classified by Salinity.  <br>&nbsp;</p>
                <ul class="list_number">

                    <AgGridSalJSON 
                        style="display: none;margin-left: auto;margin-right: auto;margin-bottom: 10px;margin-top: 20px;">
                    </AgGridSalJSON>
                    
                    







                </ul>
                <ul class="list_number">
                    <div id="myChart1" class="ag-theme-alpine my-chart"></div>
                    <div class="title">Chart 1 : Case Studies Number Classified by Salinity.</div>

                </ul>
                <h2><span class="firm"><strong>Salinity Impact On Oil Recovery</strong></span></h2>
                <p>We present the in this charts the salinity impact on Oil recovery, we can see clearly that high recovery factor correspond to low salinity. <br>&nbsp;</p>
                <ul class="list_number">
                    
                    <div id="aggrid" v-for="(eortyp,ind) in eortypess" v-bind:key="ind">
                    <AgGridSalJSON2 
                    :eortype="eortyp" style="display: none;margin-left: auto;margin-right: auto;margin-bottom: 10px;margin-top: 20px;">
                    </AgGridSalJSON2><br><br>
                    <div :id=eortypp(eortyp) class="ag-theme-alpine my-chart"></div>
                    <div class="title">Chart {{ind+1}} : Salinity On Oil Recovery ({{eortyp}}).</div>
                    </div>
                   
                    

                </ul>

            </div>




        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import AgGridSalJSON from '@/components/AgGridSalJSON.vue';
import AgGridSalJSON2 from '@/components/AgGridSalJSON2.vue';
export default {
    name: 'MainClasPerm',
    components: {
        AgGridSalJSON,
        AgGridSalJSON2


    },
    props: {

    },
    data: () => ({
        height: document.body.scrollHeight,
        items: [


        ],
        eortype:'Miscible EOR',
        hover1: false,
        hover2: false,
        hover3: false,
        hover4: false,
        hover5: false,
        eortypess:[],

    }),
    mounted() {     
        this.eortechnique()

    },
    methods:{
        eortypp(varia){
            return varia.replaceAll(' ', '_')
        },
        
        eortechnique() {
     
      
      axios({
        method: 'get',
        url: '/EORTechniques/',


        auth: {
          username: 'admin',
          password: 'admineoradmin'
        },

      }).then(response => {
        response.data.forEach((item) => { this.eortypess.push(item.eor_type) });



      })
    },
    }
}


</script>