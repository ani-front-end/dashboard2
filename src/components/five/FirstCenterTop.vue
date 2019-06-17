<template>
    <div class="content" style="position: relative">
        <div class="content-left">
            <h6>今日菜谱</h6>
            <img :src=imgSrc style="margin-top: 0.1rem;width: 70%;height: 70%;" @click="onClick()">
            <!--<img src="../../assets/images/u93.png" alt="" @click="onClick()">-->
        </div>
        <div class="content-right">
            <h6>年度油耗</h6>
            <h3 class="nums">{{nums}}L</h3>
        </div>

        <el-dialog
                title="11"
                :visible.sync="centerDialogVisible"
                width="60%"
                center>
            <div class="dialog-content" style="position: relative">
                <img :src=imgSrc style="width: 100%;">
                <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer"
                     class="close2" width="40" src="../../assets/images/close2.png" alt="">
                <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer"
                     class="close1" width="40" src="../../assets/images/close1.png" alt="">

                <!--<div class="dialog-top">-->
                    <!--<div class="top-left">-->

                    <!--</div>-->
                    <!--<div class="top-right">-->
                        <!--问题管理状态-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="dialog-bottom">-->
                    <!--<div class="bottom-left">-->
                        <!--<div class="left1"> {{name}}</div>-->
                        <!--<div class="left2">检查情况</div>-->
                    <!--</div>-->
                    <!--<div class="bottom-center">-->

                    <!--</div>-->
                    <!--<div class="bottom-right">-->
                        <!--<Carousel v-model="value1"-->
                                  <!--:autoplay=false-->
                                  <!--:autoplay-speed=5000-->
                                  <!--arrow="never"-->
                                  <!--:radius-dot=true-->
                                  <!--height="1.42rem"-->
                                  <!--loop-->
                                  <!--style="height:100%;"-->

                        <!--&gt;-->
                            <!--<CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">-->
                                <!--<chart ref="chart1"-->
                                       <!--style="height: 100%;width: 100%"-->
                                       <!--:options="item"-->
                                       <!--:autoresize=true-->
                                       <!--@click="onClick"-->
                                <!--&gt;</chart>-->
                            <!--</CarouselItem>-->
                        <!--</Carousel>-->

                    <!--</div>-->
                <!--</div>-->
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import properties from '../../services/properties'

    export default {
        data() {
            return {
                centerDialogVisible: false,
                orgOptions: {
                    color: [],
                    title: {
                        text: "37",
                        textStyle: {
                            color: '#00d8ff',
                            fontSize: 39,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        bottom: 'center',
                        itemGap: 60,
                    },
                    series: [
                        {
                            color: '#06dfff',
                            type: 'pie',
                            radius: ['30%', '35%'],
                            data: [{value: 100, name: ''}],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: false,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                        },
                        {
                            name: '',
                            type: 'pie',
                            radius: ['45%', '60%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                opacity: 0.7
                            },
                            label: {
                                fontSize: 30
                            },
                            labelLine: {
                                show: true,
                                length: 50
                            },
//                            label: {
//                                normal: {
//                                    formatter: '{b|{b}：\n}{c}\n\n  ',
//                                    backgroundColor: {
//                                        image: '/img/center-top-bg1.png'
//                                    },
//                                    borderColor: '#aaa',
//                                    borderWidth: 1,
//                                    borderRadius: 4,
//                                    // shadowBlur:3,
//                                    // shadowOffsetX: 2,
//                                    // shadowOffsetY: 2,
//                                    // shadowColor: '#999',
//                                    // padding: [0, 7],
//                                    rich: {
//                                        a: {
//                                            color: '#999',
//                                            lineHeight: 22,
//                                            align: 'center'
//                                        },
//                                        // abg: {
//                                        //     backgroundColor: '#333',
//                                        //     width: '100%',
//                                        //     align: 'right',
//                                        //     height: 22,
//                                        //     borderRadius: [4, 4, 0, 0]
//                                        // },
//                                        hr: {
//                                            borderColor: '#aaa',
//                                            width: '100%',
//                                            borderWidth: 0.5,
//                                            height: 0
//                                        },
//                                        b: {
//                                            fontSize: 16,
//                                            lineHeight: 33
//                                        },
//                                        per: {
//                                            color: '#eee',
//                                            backgroundColor: '#334455',
//                                            padding: [2, 4],
//                                            borderRadius: 2
//                                        }
//                                    }
//                                }
//                            },
                            data: [
                                {
                                    value: 16,
                                    name: 'A',
                                    itemStyle: {color: '#01deff', borderColor: '#01deff', opacity: 0.7}
                                },
                                {
                                    value: 4,
                                    name: 'B',
                                    itemStyle: {color: '#b401ff', borderColor: '#b401ff', opacity: 0.7}
                                },
                                {
                                    value: 8,
                                    name: 'C',
                                    itemStyle: {color: '#ff019c', borderColor: '#ff019c', opacity: 0.7}
                                },
                                {
                                    value: 7,
                                    name: 'D',
                                    itemStyle: {color: '#ffba01', borderColor: '#ffba01', opacity: 0.7}
                                },
                            ]
                        }
                    ]
                },
                colorList: ['#01deff', '#b401ff', '#ff019c', '#ffba01', '#ff9933', '#cc6699', '#66cc33', '#6666cc'],
                letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', "L"],
                tempData: [
                    {
                        value: 16,
                        name: 'A',
                        desc: '人员管理',
                        colorStyle: '#01deff',
                        itemStyle: {borderColor: '#01deff', opacity: 0.7}
                    },
                    {
                        value: 4,
                        name: 'B',
                        desc: '枪弹管理',
                        colorStyle: '#b401ff',
                        itemStyle: {borderColor: '#b401ff', opacity: 0.7}
                    },
                    {
                        value: 8,
                        name: 'C',
                        desc: '车辆管理',
                        colorStyle: '#ff019c',
                        itemStyle: {borderColor: '#ff019c', opacity: 0.7}
                    },
                    {
                        value: 7,
                        name: 'D',
                        desc: '涉密载体管理',
                        colorStyle: '#ffba01',
                        itemStyle: {borderColor: '#ffba01', opacity: 0.7}
                    },
                ],
                originData: {
                    '人员管理': 135,
                    '枪弹管理': 310,
                    '车辆管理': 234,
                    '涉密载体管理': 244,
                },
                dialogOptions: [],
                dialogOption: {
                    textStyle: {
                        fontFamily: 'monospace',
                    },

                    grid: {
                        x: 50,
                        y: 20,
                        x2: 1,
                        y2: 100
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 15,
                                interval: 0,
                                formatter: function (value) {
                                    //x轴的文字改为竖版显示
                                    var str = value.split("");
                                    return str.join("\n");
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                    shadowColor: '#4d648f',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            minInterval: 1,
                            type: 'value',
                            boundaryGap: ['0%', '20%'],
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                    shadowColor: '#4d648f',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            //name:'直接访问',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
//                                color: '#3b78bf',
//                                borderColor: '#47cdee',
                                color: '#fff',
                                borderColor: '#fff',
                                borderWidth: 1,
                                opacity: 1
                            },
                            data: [],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    color: '#fff',
                                }
                            },
                        }
                    ]
                },
                name: '',
                value1: 0,
                imgSrc:'',
                nums:''
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
        },
        methods: {
            toPercent(num) {
                return (Math.round(num * 10000) / 100).toFixed(2) + '%';
            },
            openDialog() {
                this.centerDialogVisible = true
            },
            onReady(instance) {
                console.log(instance);
            },
            onClick(event) {
                this.openDialog();


            },
            queryData() {
                this.http.get(this.ports.five.centerTopLeft, (res) => {
                    console.log('fivecenterTopleft:',res);
                    this.imgSrc=res;
                    if (res.error_msg == '成功') {

                    }
                });
                this.http.get(this.ports.five.centerTopRight, (res) => {
                    console.log('fivecenterTopRight:',res);
                    this.nums=res;
                    if (res.error_msg == '成功') {

                    }
                });
            }
        },
        computed: {}
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .bottom-right {
        height: 100% !important;
    }

    .content {
        height: 100%;
        width: 100%;
        position: relative;

        .content-left {
            height: 100%;
            width: 50%;
            border-right: 1px solid #5fd8e8;
            padding-top: 0.1rem;
        }

        .content-right {
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
            height: 100%;
            /*border: 1px solid black;*/
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 0.1rem;

            .nums {
                color: #169bd5;
                margin-top: 0.5rem;
            }

            .item {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 0.1rem;

                .item-left {
                    margin-left: 5%;
                }

                .item-center {
                    margin-left: 5%;
                    width: 15%;
                    height: 40%;
                    background: #01deff;
                }

                .item-right {
                    margin-left: 5%;
                    width: 40%;
                }

                width: 70%;
                height: 10%;
                /*border: 1px solid green;*/
            }
        }
    }
</style>
