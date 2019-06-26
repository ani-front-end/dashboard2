<template>
    <div class="four">
        <div class="four-left">
            <div class="four-left-top">
                <FirstCenterMiddle :screenWidth="screenWidth"
                                   @getChildOption="getChildOption"
                ></FirstCenterMiddle>
            </div>
            <div class="four-left-bottom">
                <FirstCenterTop :screenWidth="screenWidth"
                                :screenHeight="screenHeight"
                                @getChildOption="getChildOption"
                ></FirstCenterTop>
            </div>
        </div>
        <div class="four-right">
            <div class="four-right-top">
                <FiveRightBottom :screenWidth="screenWidth"
                                 @getChildOption="getChildOption"
                ></FiveRightBottom>
            </div>
            <div class="four-right-bottom">
                <FiveLeftTop :screenWidth="screenWidth"
                             @getChildOption="getChildOption"></FiveLeftTop>
            </div>
        </div>
        <el-dialog
                fullscreen="true"
                title="11"
                :visible.sync="screenDialogVisible"
                center>
            <div class="dialog-content2" style="position: relative; " :style="{height:screenHeight+'px'}">
                <img @click="screenDialogVisible = false" style="position: absolute;top:10px;right:10px;cursor: pointer" class="close2" width="40" src="../assets/images/close2.png" alt="">
                <img @click="screenDialogVisible = false" style="position: absolute;top:10px;right:10px;cursor: pointer" class="close1" width="40" src="../assets/images/close1.png" alt="">
                <chart  v-if="option.series"
                        ref="chart"
                        :options="option"
                        style="height: 100%;width: 100%"
                        :autoresize=true
                ></chart>
                    <div class="content-right"  v-else @mouseover="mouseOver()" @mouseout="mouseOut()">
                    <Carousel
                        v-model="value1"
                          :autoplay=autoplay
                          :autoplay-speed=5000
                          arrow="never"
                          :radius-dot=true
                          :height=screenHeight-30

                >
                    <CarouselItem style="" v-for="(item,index) in option" :key="index">
                        <chart ref="chart"
                               style="height: 100%;width: 100%"
                               :options="item"
                               :autoresize=true

                        ></chart>
                    </CarouselItem>
                </Carousel>
                </div>
            </div>


        </el-dialog>
    </div>

</template>
<script>
    import FirstCenterTop from '../components/four/FirstCenterTop'
    import FirstCenterMiddle from '../components/four/FirstCenterMiddle'
    import FiveRightBottom from '../components/five/FirstRightBottom'
    import FiveLeftTop from '../components/five/FirstLeftTop'

    export default {
        name: 'hello',
        data() {
            return {
                value1: 0,
                msg: 'Welcome to Your Vue.js App',
                screenWidth: document.body.clientWidth, // 屏幕宽度
                screenHeight: document.body.clientHeight, // 屏幕宽度
                screenDialogVisible:false,
                option:{},
                autoplay:true

            }
        },
        components: {
            'FirstCenterMiddle': FirstCenterMiddle,
            'FirstCenterTop': FirstCenterTop,
            'FiveRightBottom': FiveRightBottom,
            'FiveLeftTop':FiveLeftTop,

        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth
                    this.screenHeight = document.body.clientHeight
                })()
            }
        },
        methods: {
            getChildOption(option){
                console.log('option',option)
                this.screenDialogVisible=true
                    this.option=option;
            },
            mouseOver(){
                this.autoplay = false;
            },
            mouseOut(){
                this.autoplay = true;
            },
        }
    }
</script>
<style scoped lang="less">
    @bgColor: rgba(9, 60, 118, 0.23);
    @centerBottomBgColor: none;
    /*@centerBorder:1px solid rgba(0,131,179,0.23);*/
    @centerBorder: 1px solid #5fd8e8;
    .content-right {
        height: 100%;
        padding: 0.2rem 0.4rem 0;
        /*width: 70%;*/
        /*border: 1px solid grey;*/
    }
    .four {
        width: 100%;
        height: 90%;
        font-size: 0.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .four-left {
            width: 50%;
            padding: 0.2rem;
            .four-left-top {
                height: 50%;
                border: @centerBorder;
                padding: 0.1rem;
            }

            .four-left-bottom {
                height: 50%;
                border: @centerBorder;
                border-top: none;
                padding: 0.1rem;
            }
        }

        .four-right {
            width: 50%;
            padding: 0.2rem;
            .four-right-top {
                height: 50%;
                border: @centerBorder;
                padding: 0.1rem;
            }

            .four-right-bottom {
                height: 50%;
                border: @centerBorder;
                border-top: none;
                padding: 0.1rem;
            }
        }
    }


    .first {
        width: 100%;
        height: 90%;
        font-size: 0.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
            width: 30%;
            padding: 0.2rem 0 0.1rem 0.1rem;
            /*height: 98%;*/

            .left-top {
                margin: 0 0 0.1rem 0;
                height: 28%;
                /*background:#093c76;*/
                background-color: @bgColor; //#093c76 23%
                border: @centerBorder;
            }

            .left-middle {
                margin: 0 0 0.1rem 0;
                background-color: @bgColor;
                height: 28%;
                border: @centerBorder;
            }

            .left-bottom {
                background-color: @bgColor;
                height: 43%;
                border: @centerBorder;
            }
        }

        .center {
            height: 99%;
            box-shadow: 0 0 0 1px rgba(186, 247, 238, 0.36) inset;
            margin: 0.1rem 0.1rem 0.05rem 0.1rem;
            padding: 0.08rem 0.08rem 0.08rem 0.08rem;
            width: 40%;

            .center-top {
                margin-bottom: 0.1rem;
                /*background: none;*/
                background-image: url("../assets/images/first-center-top.png");
                background-size: 100% 100%;
                border: @centerBorder;
                height: 33%;
                /*//box-shadow: 1px 1px 5px #0e3367 inset,*/
                /*//            -1px -1px 5px #0e3367 inset;*/
            }

            .center-middle {
                margin-bottom: 0.1rem;
                /*background: none;*/
                background-image: url("../assets/images/first-center-top.png");
                background-size: 100% 100%;
                border: @centerBorder;
                height: 33%;
                /*//box-shadow: 1px 1px 5px #0e3367 inset,*/
                /*//            -1px -1px 5px #0e3367 inset;*/
            }

            .center-bottom {
                /*background-image: url("../assets/images/first-center-top.png");*/
                /*background-size: 100% 100%;*/
                //box-shadow: 1px 1px 5px #0e3367 inset,
                //            -1px -1px 5px #0e3367 inset;
                border: @centerBorder;
                height: 31%;
                display: flex;
                flex-direction: column;
                /*padding-top: 0.2rem;*/

                .center-bottom-content {
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    width: 100%;

                    .center-bottom-left {
                        background: @centerBottomBgColor;
                        height: 100%;
                        width: 100%;
                        padding: 0.1rem;
                    }

                    .center-bottom-center {
                        background: @centerBottomBgColor;
                        height: 88%;
                        width: 22%;
                        /*border: 0.1px solid pink;*/
                        margin: 0 0.5% 0.5% 0.5%;
                    }

                    .center-bottom-right {
                        background-color: @centerBottomBgColor;
                        height: 88%;
                        width: 42%;
                        margin: 0 1% 0.5% 0.5%;
                        /*border: 0.1px solid pink;*/
                    }
                }
            }
        }

        .right {
            width: 30%;
            margin: 0.2rem 0 0.1rem 0;
            border: @centerBorder;

            .right-top {
                margin: 0 0 0.1rem 0;
                background-color: @bgColor;
                height: 50%;

            }

            .right-middle {
                margin: 0 0 0.1rem 0;
                background-color: @bgColor;
                height: 28%;

            }

            .right-bottom {
                background-color: @bgColor;
                height: 50%;
            }
        }
    }

    .first-header {
        font-size: 0.2rem;
    }
</style>