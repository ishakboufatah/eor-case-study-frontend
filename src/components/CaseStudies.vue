<template>
    
    <li v-for="CaseStudy in CaseStudies" v-bind:key="CaseStudy.CaseStudies_id" style=""><strong>{{CaseStudy.field + " " + CaseStudy.pool_name}}</strong><br>
                        <span v-html=CaseStudy.summary ></span>
                        </li>
</template>
<script>
//  console.log( this.$route.params.EORTechnique)


import axios from 'axios';
export default {
    name: 'CaseStudies',
    components: {
        


    },

    props: {
    country:String,
    eortype: String
  },
     
    data: () => ({
        CaseStudies: [],
        Coun: [],

        items: [


        ],
        hover1: false,
        hover2: false,
        hover3: false,
        hover4: false,
        hover5: false,
    }),

    mounted() {
        this.getCaseStudies()
    },
   
    computed:{
        storedcountries(Country) {
        const countries=this.getCaseStudies(Country).reduce((p,c)=> {
             p[c.category]=c
        return p
        },{})
        return Object.values(countries).sort((a,b) =>a.category.localCompare(b.category))
        
        }
  
    },
    methods: {
        
        toggleOrder(name) {
            this.currentOrder = name;
        },
        orderedItems(items) {
            return items.filter(item => {
                if (item[this.currentOrder]) return item;
            });     
        },
        getCountry() {
            axios({
                method: 'get',
                url: 'https://sheordatabase.herokuapp.com/Country',
                auth: {
                    username: 'admin',
                    password: 'admineoradmin'
                }
            }).then(response => this.Coun = response.data)
            
        },
    
        getCaseStudies() {
            axios({
                method: 'get',
                url: 'https://sheordatabase.herokuapp.com/CaseStudies/?country=' + this.country +'&eortype=' + this.eortype,
                auth: {
                    username: 'admin',
                    password: 'admineoradmin'
                }
            }).then(response => this.CaseStudies = response.data)
        },
        
        
    }
    
}

</script>