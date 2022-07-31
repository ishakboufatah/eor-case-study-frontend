<template>
  <div class="cDpcGHeo8QEyJwmqR4QVC">
    <div class="logo"><img src="../assets/img/general/logo_white.png" alt="Sonatrach"></div>
    <div class="title">
        <h1 class="lighter"><strong>Enhanced Oil Recovery.</strong><br><br><br><strong>EOR case studies database </strong></h1>
    </div>
    <div class="content">
        <div class="left">
            <div class="_3MOJnJfUl9FrJpMqecbvje picture">
                <div class="content"
                    style="background: url(&quot;https://sonatrach.com/wp-content/uploads/2020/03/left-11.jpg&quot;) center center / cover no-repeat; opacity: 1;">
                    <img width="0" height="0" alt=""></div>
            </div>
        </div>
        <div class="right">
            <div class="_3MOJnJfUl9FrJpMqecbvje picture">
                <div class="content"
                    style="">
                    <img width="0" height="0" alt=""></div>
            </div>
        </div>
    </div><button class="scroll" @click="goto('div1')"></button>
</div>
</template>

<script>
export default {
  name: 'PosterCom',
  props: {
    msg: String
  },
  methods: {
    goto(id){
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
    <style type="text/css">
        .cDpcGHeo8QEyJwmqR4QVC {
            position: relative;
            overflow: hidden;
            height: 100vh
        }

        .cDpcGHeo8QEyJwmqR4QVC .logo {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            display: block;
            z-index: 6
        }

        .cDpcGHeo8QEyJwmqR4QVC .logo img {
            display: inline-block
        }

        .cDpcGHeo8QEyJwmqR4QVC .content {
            display: flex;
            height: 100%
        }

        .cDpcGHeo8QEyJwmqR4QVC .content .left,
        .cDpcGHeo8QEyJwmqR4QVC .content .right {
            width: 50%;
            height: 100%
        }

        .cDpcGHeo8QEyJwmqR4QVC .title {
            position: absolute;
            right: 50%;
            top: 50%;
            display: block;
            z-index: 6;
            transform: translate3d(0, -50%, 0);
            width: 50%;
            padding-left: 175px
        }

        .cDpcGHeo8QEyJwmqR4QVC .title h1 {
            max-width: 310px;
            font-size: 18px;
            line-height: 24px;
            color: #000
        }

        @media screen and (max-width:1093px) {
            .cDpcGHeo8QEyJwmqR4QVC .title h1 {
                font-size: 16px;
                line-height: 23px
            }
        }

        .cDpcGHeo8QEyJwmqR4QVC .title h1.lighter {
            color: #fff
        }

        .cDpcGHeo8QEyJwmqR4QVC .scroll {
            position: absolute;
            right: 30px;
            bottom: 40px;
            background: none;
            border: 0;
            cursor: pointer
        }

        .cDpcGHeo8QEyJwmqR4QVC .scroll:after {
            content: url("/src/assets/img/icons/scroll-down.png");
            width: 51px;
            height: 51px;
            margin-left: 3px
        }

        .cDpcGHeo8QEyJwmqR4QVC .scroll div {
            line-height: 40px;
            margin-bottom: 30px;
            transform: rotate(-90deg);
            text-transform: uppercase
        }

        @media screen and (max-width:1093px) {
            .cDpcGHeo8QEyJwmqR4QVC .content {
                flex-wrap: wrap
            }

            .cDpcGHeo8QEyJwmqR4QVC .content .left,
            .cDpcGHeo8QEyJwmqR4QVC .content .right {
                width: 100%;
                height: 50%
            }

            .cDpcGHeo8QEyJwmqR4QVC .title {
                top: auto;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 0;
                margin: 0 auto;
                text-align: center;
                width: 100%;
                max-width: calc(100% - 100px)
            }

            .cDpcGHeo8QEyJwmqR4QVC .title h1 {
                margin: 0 auto;
                max-width: calc(100% - 32px)
            }

            .cDpcGHeo8QEyJwmqR4QVC .scroll {
                right: 10px;
                bottom: 10px
            }

            .cDpcGHeo8QEyJwmqR4QVC .scroll div {
                line-height: 20px;
                transform: rotate(-90deg);
                text-transform: uppercase
            }

            .cDpcGHeo8QEyJwmqR4QVC .scroll:after {
                content: url("/src/assets/img/icons/scroll-down.png");
                width: 21px;
                height: 21px;
                margin-left: 3px
            }
        }
                ._3MOJnJfUl9FrJpMqecbvje {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative
        }

        ._3MOJnJfUl9FrJpMqecbvje .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            opacity: 0
        }

        ._3MOJnJfUl9FrJpMqecbvje .content.layer {
            z-index: 2
        }
        .right ._3MOJnJfUl9FrJpMqecbvje .content {
            background: url("/src/assets/img/general/res.jpg") center bottom / cover no-repeat;
            opacity: 1;
        }
        
    </style>
