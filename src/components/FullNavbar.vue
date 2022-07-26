<template>
    <header class="_2hQvoO3Vd_i2Rzs3nkao3s">
    <div class="patern"></div>
    <nav style="margin-top: 0px; opacity: 1;">
        <div class="logo"><a href="https://sonatrach.com/" class=""><img src="../assets/img/header/sonatrach.png"  ></a></div>
        <div class="logo1"><a href="https://www.usthb.dz/" class=""><img src="../assets/img/header/logousthb.png"  ></a></div>
        <div class="level1">
            <ul class="categories">
                <li><router-link to="/"  class="" >HOME</router-link></li>
                <li><router-link to="/EorDatabase"    @mouseover="hover2 = true" @mouseleave="hover2 = false" class="" :class="{'active': subIsActive('/cas-injection-de-gaz')}">EOR DATABASE </router-link></li>
                <li><a href="#" onclick="return false;"  @mouseover="hover3 = true" @mouseleave="hover3 = false" class="" :class="{'active': subIsActive('/EorClasPerm')}">CASE STUDY CLASSIFICATION</a></li>
                <li><a href="#" onclick="return false;" @mouseover="hover1 = true" @mouseleave="hover1 = false" class="">AUTHOR</a></li>
                
            </ul>
        </div>
    </nav>
    <div class="subnav " :class="{ active: hover1 | hover6 | hover7}"  @mouseover="hover1 = true" @mouseleave="hover1 = false">
        <ul>
            <li><a href="#" onclick="return false;" @mouseover="hover6 = true" @mouseleave="hover6 = false" class="">From SONATRACH</a></li>
            <li><a href="#" onclick="return false;" @mouseover="hover7 = true" @mouseleave="hover7 = false" class="">From USTHB</a></li>
        </ul>
    </div>
    <div class="subnav" :class="{ active: hover2 }" @mouseover="hover2 = true" @mouseleave="hover2 = false">
        <ul>
            <li><router-link to="/cas-injection-de-gaz" class="" :class="{'active': subIsActive( '/cas-injection-de-gaz')}">Miscible EOR</router-link></li>
            <li><a href="#" onclick="return false;" class="">Chimical EOR</a></li>
            <li><a href="#" onclick="return false;" class="">Microbial EOR</a></li>
        </ul>
    </div>
    <div class="subnav" :class="{ active: hover3 }" @mouseover="hover3 = true" @mouseleave="hover3 = false">
        <ul>
            <li><router-link to="/EorClasPerm"   class=""> By Permeability</router-link></li>
        </ul>
    </div>
    <div class="subnav" :class="{ active: hover4 }" @mouseover="hover4 = true" @mouseleave="hover4 = false">
        <ul>
            <li><a href="#" class="">Représentation Des Cas D'injection De Gaz</a></li>
            <li><a href="#" class="">Représentation Des Cas D'injection Chimique</a></li>
            <li><a href="#" class="">Représentation Des Cas D'injection de micro-organismes</a></li>
        </ul>
    </div>
    <div class="subnav usthb" :class="{ active: hover5 }" @mouseover="hover5 = true" @mouseleave="hover5 = false">
        <ul>
            <li><a href="#" onclick="return false;" class="">Salhi Yassin</a></li>
            <li><a href="#" onclick="return false;" class="">Boufatah Ishak</a></li>
 
        </ul>
    </div>
    <div class="subsubnav">
        <ul>
            <li><a target="_blank" href="https://sonatrach.com/wp-content/uploads/2020/03/Biographie_M.-HAKKAR.pdf"
                    class="download">Biographie de M. le Président Directeur Général</a></li>
        </ul>
    </div>
    <div class="subsubnav" :class="{ active: hover7 }"  @mouseover="hover7 = true" @mouseleave="hover7 = false">
        <ul>
            <li><a href="#" onclick="return false;"   class="">Boufatah Ishak </a></li>
            <li><a href="#" onclick="return false;"  class="">Salhi Yassin</a></li>
        </ul>
    </div>
    <div class="subsubnav" :class="{ active: hover6 }"  @mouseover="hover6 = true" @mouseleave="hover6 = false">
        <ul>
            <li><a href="#" onclick="return false;" class="">Selmi Farouk</a></li>
            <li><a href="#" onclick="return false;" class="">Maâmar Djarir</a></li>
        </ul>
    </div>
    
</header>
</template>
<script>
export default {
  name: 'FullNavbar',
  props: {
    
  },
  data: () => ({
    items: [
        
        
      ],
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
    hover5: false,
    hover6: false,
    hover7: false,
  }),
  methods: {
  subIsActive(input) {
    const paths = Array.isArray(input) ? input : [input]
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0 // current path starts with this path string
    })
  }
}
}
</script>
<style type="text/css">
._2hQvoO3Vd_i2Rzs3nkao3s {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    padding: 30px 0 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

._2hQvoO3Vd_i2Rzs3nkao3s .patern {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    outline: 0;
    position: absolute;
    top: -64px;
    width: 100%;
    height: 164px;
    opacity: .25;
    background: url("/src/assets/img/header/patern-white.png");
    background-position: 50%;

}

._2hQvoO3Vd_i2Rzs3nkao3s nav {
        -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    background: #fff;
    max-width: 80%;
    min-width: 1093px;
    width: 100%;
    height: 90px;
    margin: -20px auto 0;
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translate3d(-50%,0,0);
    margin-top: 0px;
    opacity: 1;
    
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .logo {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    outline: 0;
    position: absolute;
    top: 16px;
    left: 30px;
    width: 39px;
    height: 58px;
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .logo1 {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    outline: 0;
    position: absolute;
    top: 16px;
    right: 30px;
    width: 55px;
    height: 68px;
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .logo a {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    box-sizing: inherit;
}
._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    outline: 0;
    position: absolute;
    top: 33px;
    left: 80px;
    right: 0px;
    width: calc(100% - 150px);
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories {
    -webkit-font-smoothing: antialiased;
    font-family: Raleway,sans-serif;
    font-size: 14px;
    color: #606060;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
    
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li {
    display: inline-block;
    height: 57px;
    border-bottom: 4px solid #fff;
    transition: all .3s
}



._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li a {
    padding: 38px 5px;
    color: #606060;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    line-height: 23px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li:not(:first-child) a:after {
    content: url("/src/assets/img/icons/arrow/grey.svg");
    margin-left: 5px;
    width: 10px;
    height: 5px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li a.active {
    color: #ff8500
}
#usthb.active {
    color: #0066FF
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li:not(:first-child) a.active:after {
    content: url("/src/assets/img/icons/arrow/orange.svg");
    margin-left: 5px;
    width: 10px;
    height: 5px
}

#usthb.active:after {
   
    margin-left: 5px;
    width: 10px;
    height: 5px
}
._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li.usthb:hover {
    border-bottom: 4px solid #0066FF;
    
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li:hover {
    border-bottom: 4px solid #ff8500
}


._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.categories li:hover a {
    color: #ff8500
}


 li:hover #usthb {
    color: #0066FF
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.news {
    float: right;
    margin: 0
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.news li {
    display: inline-block
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.news li a {
    text-transform: uppercase;
    padding: 10px 5px;
    color: #606060;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
    line-height: 14px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.news li:hover a,
._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 ul.news li a.active {
    color: #ff8500
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language {
    float: right
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select {
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    color: #606060;
    margin-left: 10px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control {
    height: 20px;
    border: none
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control .Select-multi-value-wrapper .Select-value {
    line-height: 20px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control .Select-multi-value-wrapper .Select-value span {
    color: #ff8500
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control .Select-multi-value-wrapper .Select-input {
    height: 16px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control .Select-arrow-zone {
    pointer-events: none;
    padding-left: 5px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-control .Select-arrow-zone .Select-arrow {
    border-color: #ff8500 transparent transparent;
    border-width: 5px 5px 1px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-option.is-selected {
    background-color: #fff;
    color: #606060
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-option.is-focused {
    background-color: #ff8500;
    color: #fff
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select .Select-menu-outer {
    border: none
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level1 .language .Select.is-open .Select-arrow-zone .Select-arrow {
    border-color: transparent transparent #ff8500;
    border-width: 0 5px 5px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level2 {
    background: #ff8500;
    font-size: 14px;
    line-height: 23px;
    height: 60px
}

._2hQvoO3Vd_i2Rzs3nkao3s nav .level3 {
    background: #fff;
    font-size: 14px;
    line-height: 23px;
    height: 64px
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav {
    position: absolute;
    max-width: 80%;
    min-width: 1024px;
    width: 100%;
    height: 60px;
    background-color: #ff8500;
    z-index: 2;
    top: 120px;
    left: 50%;
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
    transition: all .3s
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav.usthb {
    position: absolute;
    max-width: 80%;
    min-width: 1024px;
    width: 100%;
    height: 60px;
    background-color: #0066FF;
    z-index: 2;
    top: 120px;
    left: 50%;
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
    transition: all .3s
}
._2hQvoO3Vd_i2Rzs3nkao3s .subnav ul {
    padding: 0 37px 0 97px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav ul li {
    display: inline-block;
    overflow: hidden
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav ul li a {
    padding: 0 35px 0 0;
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    opacity: .6;
    height: 100%;
    min-height: 60px
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav ul li:hover a,
._2hQvoO3Vd_i2Rzs3nkao3s .subnav ul li a.active {
    opacity: 1
}

._2hQvoO3Vd_i2Rzs3nkao3s .subnav.active {
    transform: translate3d(-50%, 0, 0);
    opacity: 1
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav {
    position: absolute;
    width: 100%;
    max-width: 80%;
    min-width: 1024px;
    height: 60px;
    background-color: #fff;
    z-index: 1;
    top: 120px;
    left: 50%;
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
    transition: all .3s
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul {
    padding: 0 37px 0 97px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li {
    padding: 0 35px 0 0;
    display: inline-block
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li a {
    color: #606060;
    text-decoration: none
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li a.active {
    color: #ff8500
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li a.download:before {
    content: url("/src/assets/img/icons/download-small-dark.png");
    border-radius: 50%;
    width: 27px;
    height: 27px;
    padding: 4px 8px;
    color: #606060;
    border: 1px solid #606060;
    margin-right: 10px
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li:hover a {
    color: #ff8500
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav ul li:hover a.download:before {
    content: url("/src/assets/img/icons/download-small.png");
    border-radius: 50%;
    width: 27px;
    height: 27px;
    padding: 4px 8px;
    color: #ff8500;
    border: 1px solid #ff8500;
    margin-right: 10px
}

._2hQvoO3Vd_i2Rzs3nkao3s .subsubnav.active {
    transform: translate3d(-50%, 100%, 0);
    opacity: 1
}
        audio, embed, iframe, img, object, video {
    height: auto;
    max-width: 100%;
}
nav {
    display: block;
}
ul {
    list-style: none;
}
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
}
*, :after, :before {
    box-sizing: inherit;
}
    </style>