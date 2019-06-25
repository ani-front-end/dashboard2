<template>
    <div class="content">
        <h6>枪支情况</h6>
        <div class="content-top">
            <!--<div class="conTxt">-->
            <!--<LegendNum :num=bingqiTotal word="兵器室总数"></LegendNum>-->
            <!--</div>-->
            <div class="conTxt">
                <LegendNum :num=qiangzhiTotal word="枪支总数"></LegendNum>
            </div>
            <div class="conTxt">
                <LegendNum :num=useTotal word="枪支动用总数"></LegendNum>
            </div>
        </div>
        <div class="content-bottom">
            <Carousel v-model="value1"
                      :autoplay=true
                      :autoplay-speed=8000
                      arrow="never"
                      :radius-dot=true
                      height="2.2rem"
                      style="height:100%;"
            >
                <CarouselItem style="" class="bottom-carousel" v-for="(dataList,index) in dataLists" :key="index">
                    <div class="chart" v-for="(item,index) in dataList" :key="index">
                        <span @click="onClick(item.name)">
                            <ThirdTopRightLeftSon :message=item.name :num1=item.num1 :num2=item.num2>
                            </ThirdTopRightLeftSon>
                        </span>

                    </div>
                </CarouselItem>
            </Carousel>
            <div class="footer">
                <div class="onNum">
                    <div class="onSquare"></div>
                    <div class="ontxt">在位数</div>
                </div>
                <div class="useNum">
                    <div class="useSquare"></div>
                    <div class="usetxt">动用数</div>
                </div>
            </div>
        </div>
        <el-dialog
                title="11"
                :visible.sync="centerDialogVisible"
                width="60%"
                center>
            <div class="dialog-content" style="position: relative">
                <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer"
                     class="close2" width="40" src="../../assets/images/close2.png" alt="">
                <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer"
                     class="close1" width="40" src="../../assets/images/close1.png" alt="">

                <div class="dialog-top">
                    <div class="top-left">

                    </div>
                    <div class="top-right">
                        枪支情况
                    </div>
                </div>
                <div class="dialog-bottom">
                    <div class="bottom-left">
                        <div class="left1" style="text-align: center;width: 100%;">{{name}}</div>
                        <div class="left2" style="font-size: 0.25rem;width: 100%;text-align: center">（枪支情况）</div>
                    </div>
                    <div class="bottom-center">

                    </div>
                    <div class="bottom-right">
                        <div class="right1">
                            <Carousel v-model="value2"
                                      :autoplay=autoplay
                                      :autoplay-speed=autoplaySpeed
                                      arrow="never"
                                      :radius-dot=true
                                      height="1.42rem"
                                      style="height:100%;"

                            >
                                <CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions"
                                              :key="index">
                                    <chart ref="chart1"
                                           style="height: 100%;width: 100%"
                                           :options="item"
                                           :autoresize=true
                                    ></chart>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div class="right2">
                            <div class="right2-top">
                                <LittleLegendBlock word1="在外数" word2="在库数"></LittleLegendBlock>
                            </div>
                            <div class="right2-middle">
                            </div>
                            <div class="right2-bottom">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import ThirdTopRightLeftSon from '../third/ThirdTopRightLeftSon'
    import LegendNum from '../LegendNum';
    import LittleLegendBlock from '../LittleLegendBlock'

    export default {
        data() {
            return {
                msg: '',
                dataLists: [],
                value1: 0,
                bingqiTotal: 0,
                qiangzhiTotal: 0,
                useTotal: 0,

                name: '',
                dialogOptions: [],
                value2: 0,
                autoplay: true,
                autoplaySpeed: 10000,
                centerDialogVisible: false,
            }
        },
        components: {
            'ThirdTopRightLeftSon': ThirdTopRightLeftSon,
            'LegendNum': LegendNum,
            'LittleLegendBlock': LittleLegendBlock,
        },
        props: [],
        mounted() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods: {
            queryData() {
                this.dataLists = [];
                this.http.get(this.ports.four.rightTop, (res) => {
                    console.log('枪支情况-sixRightTop:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
//                         let data = {
//                           "合成一营": {
//                             "equipmentIn": 800,
//                             "equipmentOut": 720
//                           },
//                           "合成二营": {
//                             "equipmentIn": 870,
//                             "equipmentOut": 710
//                           },
//                           "合成三营": {
//                             "equipmentIn": 880,
//                             "equipmentOut": 700
//                           },
//                           "合成四营": {
//                             "equipmentIn": 850,
//                             "equipmentOut": 700
//                           },
//                           "炮营": {
//                             "equipmentIn": 800,
//                             "equipmentOut": 750
//                           },
//                           "侦察营": {
//                             "equipmentIn": 800,
//                             "equipmentOut": 720
//                           },
//                             "合成四营1": {
//                                 "equipmentIn": 850,
//                                 "equipmentOut": 700
//                             },
//                             "炮营2": {
//                                 "equipmentIn": 800,
//                                 "equipmentOut": 750
//                             },
//                             "侦察营3": {
//                                 "equipmentIn": 800,
//                                 "equipmentOut": 720
//                             },
//                         };
                        let num = 0;
                        let arr = [];
                        let pageNum = 0;
                        this.dataLists.push(arr)
                        Object.keys(data).forEach(p => {
                            if (p == 'sum' || p == 'out' || p == 'pointSum') {
//                                return true;
                            } else {
                                let item = {
                                    name: p,
                                    num1: data[p].equipmentIn,
                                    num2: data[p].equipmentOut
                                }
                                this.dataLists[pageNum].push(item);
                                num++;
                                if (num > 5) {
                                    arr = [];
                                    pageNum++;
                                    num = 0;
                                    this.dataLists.push(arr);

                                }
                            }

                        })
                        //暂时去掉第二页的空白
                        if (this.dataLists[this.dataLists.length - 1].length == 0) {
                            this.dataLists.pop();
                        }
                        this.bingqiTotal = data.sum
                        this.qiangzhiTotal = res.equipmentAll;
                        this.useTotal = res.equipmentOut
                        console.log('this.dataLists')
                        console.log(this.dataLists)

                    }
                    let newOptions = Object.assign({}, this.option);
                    this.option = newOptions;
                })
            },
            onClick(event) {
                console.log(event);
                let name = event;
                if (name) {
                    this.name = name;
                    this.centerDialogVisible = true;
                    this.http.get(this.ports.four.rightTopSecond+'/'+name, (res) => {
                        console.log('枪支情况:',res);
                        if (res.error_msg == '成功') {
                            let data = res.data;
                            let pageNum = 0;
                            let num = 0;
                            this.dialogOptions = [];
                            this.dialogOptions.push({
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
                                        minInterval: 1,
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
                                        //name: '邮件营销',
                                        type: 'bar',
                                        barWidth: 20,
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'left',
                                                color: '#fff',

                                            },
                                            //opacity: 1
                                        },
                                        data: [],
                                        itemStyle: {
                                            borderWidth: 1,
                                            color: '#00fffd',
                                            borderColor: this.factBorderColor,
                                        }

                                    },
                                    {
                                        //name: '直接访问',

                                        type: 'bar',
                                        stack: '总量1',
                                        barWidth: 20,
                                        label: {
                                            normal: {
                                                formatter: '{c|{c}}',
                                                rich: {
                                                    c: {
                                                        color: '#ffffff',
                                                        opacity: 1
                                                    }
                                                },
                                                show: true,
                                                position: 'top',
                                                textStyle: {
                                                    color: '#ffffff',
                                                    opacity: 1
                                                }

                                            }
                                        },
                                        data: [],
                                        itemStyle: {
                                            color: '26508a',
                                            borderColor: this.shouldBorderColor,
                                            borderWidth: 1,
                                            opacity: 1
                                            //opacity: 0.28
                                        },
                                    },
                                ]
                            });
                            Object.keys(data).forEach(p => {
//
                                this.dialogOptions[pageNum].xAxis[0].data.push(p);
                                this.dialogOptions[pageNum].series[0].data.push(data[p].equipmentIn);
                                this.dialogOptions[pageNum].series[1].data.push(data[p].equipmentOut);
                                num++;
                                if (num > this.secondPageNums) {
                                    num = 0;
                                    this.dialogOptions.push({
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
                                                minInterval: 1,
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
                                                //name: '邮件营销',
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                stack: '总量',
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'left',
                                                        color: '#fff',

                                                    },
                                                    //opacity: 1
                                                },
                                                data: [],
                                                itemStyle: {
                                                    borderWidth: 1,
                                                    color: this.factColor,
                                                    borderColor: this.factBorderColor,
                                                }

                                            },
                                            {
                                                //name: '直接访问',

                                                type: 'bar',
                                                stack: '总量1',
                                                barWidth: this.barWidth,
                                                label: {
                                                    normal: {
                                                        formatter: '{c|{c}}',
                                                        rich: {
                                                            c: {
                                                                color: '#ffffff',
                                                                opacity: 1
                                                            }
                                                        },
                                                        show: true,
                                                        position: 'top',
                                                        textStyle: {
                                                            color: '#ffffff',
                                                            opacity: 1
                                                        }

                                                    }
                                                },
                                                data: [],
                                                itemStyle: {
                                                    color: this.shouldColor,
                                                    borderColor: this.shouldBorderColor,
                                                    borderWidth: 1,
                                                    opacity: 1
                                                    //opacity: 0.28
                                                },
                                            },
                                        ]
                                    });
                                    pageNum++;
                                }

                            });


                            if (this.dialogOptions[this.dialogOptions.length - 1].xAxis[0].data.length == 0) {
                                this.dialogOptions.pop();
                            }
                            let newOptions = Object.assign({}, this.dialogOption);
                            this.dialogOption = newOptions;
                        }
                    })

                }
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        /*border: 1px solid red;*/
        height: 90%;

        .content-top {
            display: flex;
            height: 20%;

            .conTxt {
                width: 50%;
                margin-left: 12%;
                margin-top: 3%;
            }
        }

        .right2 {
            width: 25%;
            /*height: 100%;*/
            /*display: flex;*/
            /*flex-direction: column;*/
            /*align-items: center;*/
            /*justify-content: center;*/
            position: absolute;
            top: 0.5rem;
            right: 0;


            .right2-top {
                height: 15%;
                width: 70%;

            }

            .right2-middle {
                height: 85%;
                width: 100%;
            }

            .right2-bottom {
                height: 3%;
                width: 100%;
                position: absolute;
                bottom: 20%;
                text-align: center;
                color: #fff;
            }
        }

        .content-bottom {
            /*border:1px solid black;*/
            height: 70%;
            width: 100%;

            .bottom-carousel {
                display: flex;
                flex-wrap: wrap;
            }

            .chart {
                width: 50%;
                height: 22%;
                /*border:1px red solid;*/
            }

            .footer {
                height: 10%;
                width: 100%;
                display: flex;
                justify-content: center;

                .onNum {
                    width: 50%;
                    height: 100%;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .onSquare {
                        width: 20px;
                        height: 10px;
                        background: #0eafd4;
                        border: 1px solid #0eafd4;
                    }

                    .ontxt {
                        line-height: 100%;
                        width: 50px;
                        height: 10px;
                    }
                }

                .useNum {
                    width: 50%;
                    height: 100%;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .useSquare {
                        width: 20px;
                        height: 10px;
                        background: #1f5081;
                        border: 1px solid #0eafd4;
                    }

                    .usetxt {
                        line-height: 100%;
                        width: 50px;
                        height: 10px;
                    }
                }
            }

        }
    }
</style>
