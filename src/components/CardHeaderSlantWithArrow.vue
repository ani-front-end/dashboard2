<template>
    <div class="center-header" style="position: relative">
        <div class="title-one">
            <div class="title-one-white"></div>
        </div>
        <div class="title-two" :style="twoWidthStyle">
            <div class="title-two-word">{{titleWord}}</div>
            <div class="title-two-line"></div>
        </div>
        <div class="title-three">
            <div class="title-three-white"></div>
        </div>
        <div class="title-four">
            <div class="title-four-blue"></div>
        </div>
        <div class="title-five" :style="fiveWidthStyle">
            <div class="title-five-line"></div>
        </div>
        <div class="title-six">
            <div class="title-six-right"></div>
        </div>
        <img style="position: absolute;top:-2px;left:-2px;" src="../assets/images/left-top.png" alt="">
        <img style="position: absolute;top:-2px;right:-2px;" src="../assets/images/right-top.png" alt="">
    </div>
</template>

<script>
    export default {
        data () {
            return {
//                isBlue: false,
                twoWidthStyle:{
                    width:`${this.titleWidth}%`
                },
                fiveWidthStyle:{
                    width:`${100-this.titleWidth}%`
                },
            }
        },
        props: [
            'titleWord',
            'titleWidth'
        ],
        mounted(){
        },
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @title-left-width:14%;
    @title-right-width:100-@title-left-width;
    .center-header{
        padding-right: 2%;
        width: 100%;
        height: 0.34rem;
        border: 1px solid rgba(255,255,255,0.12);
        background: url("../assets/images/first-center-slant.png");
        background-size: cover;
        display: flex;
        .title-one{
            width: 20px;
            height: 100%;
            /*background: red;*/
            background-image: url("../assets/images/blue-left.png");
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .title-one-white{
                width: 100%;
                height: 40%;
                /*background: blue;*/
                background-image: url("../assets/images/white-left.png");
                background-size: 100% 100%;
            }
        }
        .title-two{
            //width: @title-left-width;
            height: 100%;
            /*background: red;*/
            .title-two-word{
                width: 100%;
                height: 60%;
                line-height:220%;
                /*background: blue;*/
                font-size: 0.14rem;
            }
            .title-two-line{
                width: 100%;
                height: 40%;
                /*background: green;*/
                background-image: url("../assets/images/white-center.png");
                background-size: 100% 100%;
            }
        }
        .title-three{
            width: 20px;
            height: 100%;
            /*background-image: url("../assets/images/blue-left.png");*/
            /*background-size: 100% 100%;*/
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .title-three-white{
                width: 100%;
                height: 40%;
                /*background: blue;*/
                background-image: url("../assets/images/white-right.png");
                background-size: 100% 100%;
            }
        }
        .title-four{
            width: 25px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .title-four-blue{
                margin-left:-0.08rem;
                width: 100%;
                height: 30%;
                @media screen and(max-width: 1500px){
                    margin-bottom: 25%;
                }
                @media screen and(min-width: 1501px){
                    margin-bottom: 0.06rem;
                }
                background-image: url("../assets/images/center-title-line.png");
                background-size: 100% 100%;
            }
        }
        .title-five{
            //width: @title-right-width;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .title-five-line{
                margin-top: 0.02rem;
                margin-left: -0.08rem;
                width: 100%;
                border: 0.5px solid rgba(21,74,126,0.8);
            }
        }
        .title-six{
            width:20px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .title-six-right{
                /*border:1px solid red;*/
                margin-top: 0.03rem;
                margin-left:-0.06rem;
                width: 100%;
                height: 30%;
                background-image: url("../assets/images/center-title-right.png");
                background-size: 100% 100%;
            }
        }
    }
</style>
