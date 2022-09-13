<template>

<div class="columnContent"  v-for="c in CaseStudies" v-bind:key="c" >

                <h2><span class="firm"><strong style="text-transform: uppercase;">IDENTIFICATION OF EOR POTENTIAL IN {{c}}</strong></span></h2>
                <p>.....&nbsp;:</p>
                        

                <ul class="list_number">
                    <AgGridVueJSON 
                        :country="c" :eortype= "this.$route.params.EORTechnique" :key= "this.$route.params.EORTechnique"  style="display: block;margin-left: auto;margin-right: auto;margin-bottom: 10px;margin-top: 20px;">
                    </AgGridVueJSON>
                    <div class="title">Table 1: {{c}} Fields Data</div>
                    

                    
                    <CaseStudies :country="c" :eortype= "this.$route.params.EORTechnique" :key= "this.$route.params.EORTechnique"></CaseStudies>




                </ul>
             <div class="end"></div>
            
            </div>
</template>

<script>

import CaseStudies from '@/components/CaseStudies.vue'; 
import AgGridVueJSON from '@/components/AgGridVueJSON.vue' ;
import axios from 'axios';

export default {
    name: 'CaseStudiesCountryBox',
    components: {
    AgGridVueJSON,
    CaseStudies,
    
},

    props: {

    },
     
    data: () => ({
        CaseStudies: [],
        // CaseStudies2: [],
        // eortype:null,
        
        Coun: [],
        // EORTechniques: this.$router.query.EORTechnique,

        items: [


        ],

    }),

    mounted() {
        this.getCaseStudies()
        // this.getCaseStudies2()
        
        // this.eortype = this.$router.params.EORTechnique
    },
   
    computed:{
        // itemNames: [...new Set(this.CaseStudies.map(x => x.country))],
        console: () => console,
        
   
        // const dist =object.value(CaseStudies.reduce((b[a.contry]= a;return)))   
  
    },

    methods: {

    
        getCaseStudies() {
            axios({
                method: 'get',
                url: 'https://sheordatabase.herokuapp.com/CaseStudies/?eortype='+this.$route.params.EORTechnique,
                auth: {
                    username: 'admin',
                    password: 'admineoradmin'
                }
            }).then(response => this.CaseStudies = [... new Set(response.data.map(x => x.country))])
         console.log('CaseStudies')
         console.log(this.CaseStudies)
        },
       
        
        
        
    }
    
}

</script>