<template>
    <header class="y--XIaJ1NwEOkrmQO5gAQ">
        <div class="patern"></div>
        <nav class="" :class="{ open: click6 }">
            <div class="main">
                <div class="logo"><a href="https://sonatrach.com/"><img src="../assets/img/header/sonatrach.png"
                            alt="Sonatrach"></a>
                </div>
                <div class="burger" :class="{ open: click6  }" @click="click6 = !click6">
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="logo1"><a href="https://www.usthb.dz/"><img src="../assets/img/header/logousthb.png"
                            alt="Sonatrach"></a>
                </div>

            </div>
            <div class="level1">
                <ul class="categories">

                    <li>
                        <div class="mainPage">
                            <router-link to="/" @click="click3 = !click3 ,click6 = !click6" class="">HOME</router-link>
                            <router-link to="/" class="ctaArrow">→</router-link>
                        </div>




                    </li>
                    
                    <li>
                        <div class="mainPage"><a href="#" onclick="return false;" @click="click8 = !click8"
                                class="titel" :class="{ 'active': subIsActive([,'/CaseStadies/']) }">EOR Techniques</a></div>
                        <ul class="pages" :class="{ open: click8 }">
                            <li v-for="EORTechnique in EORTechniques" :key="EORTechnique.eor_techniques_id"><router-link :to="{ name: 'CaseStadies', params: {EORTechnique:EORTechnique.eor_type}}"
              class="" @click="click6 = !click6"> {{EORTechnique.eor_type}} </router-link></li>
                        </ul>
                    </li>
                    <li><div class="mainPage"><router-link to="/EorClasWorldwide" class="titel" @click="click6 = !click6">EOR Worldwide Distribution</router-link>

                    </div></li>
                
                    <li>
                        <div class="mainPage"><a href="#" onclick="return false;" @click="click9 = !click9"
                                class="titel" :class="{ 'active': subIsActive(['/EorClasPerm','/EorClasPor','/EorClasRT','/EorClasSal','/EorClasVisc']) }" >EOR Distribution By Properties</a></div>
                        <ul class="pages" :class="{ open: click9 }">
                            <li><router-link to="/EorClasPerm" class="" @click="click6 = !click6">By Permeability</router-link></li>
                            <li><router-link to="/EorClasPor" class="" @click="click6 = !click6">By Porosity</router-link></li>
                            <li><router-link to="/EorClasRT"   class=""  @click="click6 = !click6"> By Reservoir Temperature</router-link></li>
                            <li><router-link to="/EorClasSal"   class="" @click="click6 = !click6"> By Salinity</router-link></li>
                            <li><router-link to="/EorClasVisc" class="" @click="click6 = !click6"> By Oil Viscosity</router-link></li>
                        
                        </ul>
                    </li>


                     
                    
                    <li>
                        <div class="mainPage"><a href="#" onclick="return false;" @click="click1 = !click1"
                                class="titel">AUTHOR</a><a href="#" onclick="return false;" class="ctaArrow">→</a></div>
                        <ul class="pages" :class="{ open: click1 }">
                            <li>
                                <div class="mainPage"><a href="#" onclick="return false;" @click="click2 = !click2"
                                        class="subpages ">From SONATRACH</a></div>
                                <ul class="subpages" :class="{ open: click2 }">
                                    <li><a href="#" onclick="return false;" class="">Selmi Farouk</a></li>
                                    <li><a href="#" onclick="return false;" class="">Maâmar Djarir</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="mainPage"><a href="#" onclick="return false;" @click="click7 = !click7"
                                        class="subpages open">From USTHB</a></div>
                                <ul class="subpages" :class="{ open: click7 }">
                                    <li><a href="#" onclick="return false;" class="">Boufatah Ishak</a></li>
                                    <li><a href="#" onclick="return false;" class="">Salhi Yacine</a></li>
                                </ul>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MiniNavbar',
    props: {

    },
    data: () => ({
        items: [


        ],
        EORTechniques: [],
        click1: '',
        click2: '',
        click3: '',
        click4: '',
        click5: '',
        click6: '',
        click7: '',
        click8: '',
        click9: '',
        click10: '',
    }),
    mounted() {
        this.getEORTechniques()
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        },
        getEORTechniques() {
            axios({
                method: 'get',
                url: 'https://sheordatabase.herokuapp.com/EORTechniques/',
                auth: {
                    username: 'admin',
                    password: 'admineoradmin'
                }
            }).then(response => this.EORTechniques = response.data)
        },
    }
}
</script>
    <style type="text/css">
    .y--XIaJ1NwEOkrmQO5gAQ {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ .patern {
        position: absolute;
        top: -11px;
        width: 100%;
        height: 78px;
        opacity: .25;
        background: url("/src/assets/img/header/patern-white.png");
        background-position: 50%
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav {
        position: absolute;
        top: 16px;
        left: 16px;
        width: calc(100vw - 32px);
        background-color: #fff;
        height: 67px;
        overflow: hidden
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav.open {
        transition: all .3s ease-in-out;
        height: auto;
        overflow: initial;
        min-height: calc(100vh - 32px);
        padding-bottom: 00px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav.open ul.news {
        display: block
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main {
        display: flex;
        justify-content: space-between
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .logo {
        margin: 10px 0 0 16px;
        width: 31px;
        height: 46px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .logo1 {
        margin: 12px 16px 0 0px;
        width: 40px;
        height: 40px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .language {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%)
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .language select {
        color: #606060;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        border: 0;
        background: none
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger {
        width: 22px;
        height: 15px;
        position: relative;
        margin: 27px 16px 0 0;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span {
        display: block;
        position: absolute;
        height: 1px;
        width: 22px;
        background: #606060;
        opacity: 1;
        transform: rotate(0deg);
        transition: .25s ease-in-out
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(2n),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(odd) {
        left: 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:first-child,
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(2) {
        top: 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(3),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(4) {
        top: 7px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(5),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger span:nth-child(6) {
        top: 13px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:first-child,
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(6) {
        transform: rotate(45deg)
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(2),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(5) {
        transform: rotate(-45deg)
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:first-child,
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(2) {
        left: 0;
        top: 7px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(3),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(4) {
        opacity: 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(5),
    .y--XIaJ1NwEOkrmQO5gAQ nav .main .burger.open span:nth-child(6) {
        left: 0;
        top: 7px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 {
        position: relative;
        margin-top: 23px;
        padding: 0 0 20px 0;
        background-color: #fff;
        overflow: scroll;
        height: calc(100vh - 110px)
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories {
        border-bottom: 1px solid #afafaf
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li {
        border-top: 1px solid #afafaf
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li a {
        display: block;
        padding: 22px 0 22px 16px;
        color: #606060;
        text-decoration: none;
        font-size: 13px;
        text-align: left;
    
        font-family: Raleway, sans-serif;
    
    
    
    
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li:not(:first-child) a.titel:before {
        content: url("/src/assets/img/icons/arrow/grey.svg");
        margin-right: 10px;
        width: 10px;
        height: 5px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li a.active {
        color: #ff8500
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li:not(:first-child) a.titel.active:before {
        content: url("/src/assets/img/icons/arrow/orange.svg");
        margin-right: 15px;
        width: 10px;
        height: 5px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li .mainPage {
        display: flex;
        justify-content: space-between;
        width: 100%
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li .mainPage .ctaArrow {
        color: #ff8500;
        border: 1px solid #ff8500;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 0;
        line-height: 40px;
        text-align: center;
        margin: 10px 16px 0 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li .mainPage .ctaArrow:before {
        content: "";
        width: 0;
        margin-right: 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories li .mainPage .ctaArrow.lighter {
        color: #fff;
        border: 1px solid #fff
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages {
        background-color: #ff8500;
        height: 0;
        overflow: hidden
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages.usthb {
        background-color: #0066FF;
        height: 0;
        overflow: hidden
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li {
        border: none
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li a {
        padding: 20px 16px 10px;
        color: #fff
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li a:before {
        content: "";
        margin-right: 25px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li a.active {
        font-weight: 700
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li a.subpages:before {
        content: url("/src/assets/img/icons/arrow/white.svg");
        margin-right: 15px;
        width: 10px;
        height: 5px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li.page a {
        padding: 15px 10px 10px;
        margin: 22px 0 0 40px;
        display: inline-block;
        border: 1px solid #fff;
        font-size: 13px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages li.page a:before {
        margin-right: 0
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.pages.open {
        padding-bottom: 10px;
        height: auto
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages {
        background-color: #ff8500;
        height: 0;
        overflow: hidden
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages li a {
        margin-left: 20px;
        position: relative
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages li a.download:after {
        content: url("/src/assets/img/icons/download-small-lighter.png");
        border-radius: 50%;
        width: 27px;
        height: 27px;
        padding: 4px 6px;
        color: #fff;
        border: 1px solid #fff;
        margin-left: 10px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages li.page {
        margin-left: 20px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages li.page a {
        margin-top: 11px;
        padding: 15px 10px 10px
    }
    
    .y--XIaJ1NwEOkrmQO5gAQ nav .level1 ul.categories ul.subpages.open {
        height: auto
    }
    </style>