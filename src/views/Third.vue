<template>
    <div class="third">
        <div class="top">
            <div class="top-left">
                <CardHeaderSlant titleWord="人员情况" titleWidth=13></CardHeaderSlant>
                <div class="top-left-content">
                    <div class="top-left-left">
                        <div class="top-left-left-top">
                            <CardHeaderTitle title="主官在位情况"></CardHeaderTitle>
                            <ThirdTopLeftLeftTop></ThirdTopLeftLeftTop>
                        </div>
                        <div class="top-left-left-bottom">
                            <CardHeaderTitle title="各单位人员外出情况"></CardHeaderTitle>
                            <ThirdTopLeftLeftBottom></ThirdTopLeftLeftBottom>
                        </div>
                    </div>
                    <div class="top-left-right">
                        <div class="top-left-right-top">
                            <CardHeaderTitle title="关键岗位人员情况"></CardHeaderTitle>
                            <ThirdTopLeftRightTop></ThirdTopLeftRightTop>
                        </div>
                        <div class="top-left-right-bottom">
                            <CardHeaderTitle title="重点关注人员情况"></CardHeaderTitle>
                            <ThirdTopLeftRightBottom></ThirdTopLeftRightBottom>
                        </div>

                    </div>
                </div>
            </div>
            <div class="top-right">
                <CardHeaderSlant titleWord="枪支弹药情况" titleWidth=13></CardHeaderSlant>
                <div class="top-right-content">
                    <div class="top-right-left">
                        <CardHeaderTitle title="枪支情况"></CardHeaderTitle>
                        <ThirdTopRightLeft></ThirdTopRightLeft>
                    </div>
                    <div class="top-right-right">
                        <CardHeaderTitle title="弹药消耗情况"></CardHeaderTitle>
                        <ThirdTopRightRight></ThirdTopRightRight>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-left">
                <div class="bottom-left-left">
                    <CardHeaderSlant titleWord="外来人员" titleWidth=20></CardHeaderSlant>
                    <ThirdBottomLeftLeft></ThirdBottomLeftLeft>
                </div>
                <div class="bottom-left-right">
                    <CardHeaderSlant titleWord="勤务车辆情况" titleWidth=30></CardHeaderSlant>
                    <ThirdBottomLeftRight></ThirdBottomLeftRight>
                </div>
            </div>
            <div class="bottom-right">
                <CardHeaderSlant titleWord="涉密载体情况" titleWidth=13></CardHeaderSlant>
                <div class="bottom-right-content">
                    <div class="bottom-right-left">
                        <CardHeaderTitle title="涉密载体情况"></CardHeaderTitle>
                        <ThirdBottomRightLeft></ThirdBottomRightLeft>
                    </div>
                    <div class="bottom-right-right">
                        <CardHeaderTitle title="手机违规使用情况"></CardHeaderTitle>
                        <ThirdBottomRightRight></ThirdBottomRightRight>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ThirdBottomLeftLeft from '../components/third/ThirdBottomLeftLeft'
    import ThirdBottomLeftRight from '../components/third/ThirdBottomLeftRight.vue'
    import ThirdBottomRightLeft from '../components/third/ThirdBottomRightLeft'
    import ThirdBottomRightRight from '../components/third/ThirdBottomRightRight'
    import ThirdTopLeftLeftBottom from '../components/third/ThirdTopLeftLeftBottom'
    import ThirdTopLeftLeftTop from '../components/third/ThirdTopLeftLeftTop'
    import ThirdTopLeftRightBottom from '../components/third/ThirdTopLeftRightBottom'
    import ThirdTopLeftRightTop from '../components/third/ThirdTopLeftRightTop'
    import ThirdTopRightLeft from '../components/third/ThirdTopRightLeft'
    import ThirdTopRightRight from '../components/third/ThirdTopRightRight'
    import CardHeaderSlant from '../components/CardHeaderSlant'
    import CardHeaderTitle from '../components/CardHeaderTitle'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'CardHeaderSlant':CardHeaderSlant,
            'ThirdBottomLeftLeft':ThirdBottomLeftLeft,
            'ThirdBottomLeftRight':ThirdBottomLeftRight,
            'ThirdBottomRightLeft':ThirdBottomRightLeft,
            'ThirdBottomRightRight':ThirdBottomRightRight,
            'ThirdTopLeftLeftBottom':ThirdTopLeftLeftBottom,
            'ThirdTopLeftLeftTop':ThirdTopLeftLeftTop,
            'ThirdTopLeftRightBottom':ThirdTopLeftRightBottom,
            'ThirdTopLeftRightTop':ThirdTopLeftRightTop,
            'ThirdTopRightLeft':ThirdTopRightLeft,
            'ThirdTopRightRight':ThirdTopRightRight,
            'CardHeaderTitle':CardHeaderTitle
        },
        mounted(){
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .third {
        width: 100%;
        height: 91%;
        font-size: 0.25rem;
        display: flex;
        flex-direction: column;
        .top {
            display: flex;
            height: 54%;
            .top-left {
                margin: 0.1rem 0.05rem 0rem 0.1rem;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 50%;
                background: url("../assets/images/first-center-top.png") 100% 100%;
                .top-left-content {
                    height: 90%;
                    display: flex;
                    .top-left-left {
                        width: 49%;
                        height: 97%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                        border: 0.1px solid #696d8d;
                        .top-left-left-top {
                            width: 98%;
                            height: 42%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                        .top-left-left-bottom {
                            width: 98%;
                            height: 56%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                    }
                    .top-left-right {
                        width: 49%;
                        height: 97%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                        .top-left-right-top {
                            width: 98%;
                            height: 42%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                        .top-left-right-bottom {
                            width: 98%;
                            height: 56%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                    }
                }
            }
            .top-right {
                margin: 0.1rem 0.05rem 0rem 0.02rem;
                border: 0.1px solid #0e3367;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 49%;
                background: url("../assets/images/first-center-top.png") 100% 100%;
                .top-right-content {
                    display: flex;
                    height: 91%;
                    .top-right-left {
                        padding: 0.03rem;
                        border: 0.1px solid #696d8d;
                        width: 49%;
                        height: 96%;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                    }
                    .top-right-right {
                        width: 49%;
                        height: 96%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                    }
                }
            }
        }
        .bottom {
            display: flex;
            height: 46%;
            .bottom-left {
                display: flex;
                width: 52.3%;
                height: 100%;
                .bottom-left-left {
                    width: 50.5%;
                    padding: 0.03rem;
                    height: 93.7%;
                    margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                    border: 0.1px solid #0e3367;
                    box-shadow: 1px 1px 5px #0e3367 inset,
                        -1px -1px 5px #0e3367 inset;
                    background: url("../assets/images/first-center-top.png") 100% 100%;
                }
                .bottom-left-right {
                    padding: 0.03rem;
                    width: 50%;
                    height: 93.7%;
                    margin: 0.05rem 0.1rem 0.05rem 0rem;
                    border: 0.1px solid #0e3367;
                    box-shadow: 1px 1px 5px #0e3367 inset,
                        -1px -1px 5px #0e3367 inset;
                    background: url("../assets/images/first-center-top.png") 100% 100%;
                }
            }
            .bottom-right {
                margin: 0.05rem 0.05rem 0.1rem -0.03rem;
                border: 0.1px solid #0e3367;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 50.35%;
                background: url("../assets/images/first-center-top.png") 100% 100%;
                .bottom-right-content {
                    height: 91%;
                    display: flex;
                    .bottom-right-left {
                        padding: 0.03rem;
                        width: 49%;
                        height: 94%;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                        border: 0.1px solid #696d8d;
                    }
                    .bottom-right-right {
                        padding: 0.03rem;
                        width: 49%;
                        height: 94%;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                    }
                }
            }
            .bottom-header {
                display: flex;
                align-items: center;
                width: 100%;
                height: 0.34rem;
                background: #102c62;
                font-size: 0.1rem;
            }
        }
    }

    .card-header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.3rem;
        background: #102c62;
        font-size: 0.1rem;
    }
</style>