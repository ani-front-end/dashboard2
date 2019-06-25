<template>
    <div class="content">
        <CardHeaderSlant titleWord="勤务车辆情况" titleWidth=30></CardHeaderSlant>
        <div class="content-top">
            <div class="top-main">
                <div class="main">
                    <LegendNum :num=allnum word="总数"></LegendNum>
                </div>
                <div class="main">
                    <LegendNumNoBg :num=outnum word="在外数"></LegendNumNoBg>
                </div>
                <div class="main">
                    <LegendNumNoBg :num=innum word="在库数"></LegendNumNoBg>
                </div>
                <div class="main">
                    <div class="block-item">
                        <div class="item-left"></div>
                        <div class="item-right">在外数</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-bottom">
            <Carousel v-model="value1"
                      :autoplay=autoplay
                      :autoplay-speed=autoplaySpeed
                      arrow="never"
                      :radius-dot=true
                      height="2rem"
                      style="height:100%;"
            >
                <CarouselItem style="" v-for="(item,index) in options" :key="index">
                    <chart ref="chart"
                           style="height: 100%;width: 100%"
                           :options="item"
                           :autoresize=true
                           @click="onClick"
                    ></chart>
                </CarouselItem>
            </Carousel>
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
                        勤务车辆情况
                    </div>
                </div>
                <div class="dialog-bottom">
                    <div class="bottom-left">
                        <div class="left1">{{name}}</div>
                        <div class="left2">（勤务车辆情况）</div>
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
    import LegendNum from '../LegendNum'
    import LegendNumNoBg from '../LegendNumNoBg'
    import LittleLegendBlock from '../LittleLegendBlock'
    import properties from '../../services/properties'
    import CardHeaderSlant from '../../components/CardHeaderSlant'

    export default {
        data() {
            return {
                allnum: 0,
                outnum: 0,
                innum: 0,

                option: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        //type: 'dotted',
                        x: 30,
                        y: 30,
                        x2: 30,
                        y2: 60
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['一营', '二营', '三营', '四营', '五营', '六营', '七营'],
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                                rotate: 45,
                            },
                            axisTick: {
                                show: false,
                                lineStyle: {
                                    color: '#4e6590'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4e6590',
                                    width: 1,
                                    shadowColor: '#4e6590',
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
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4e6590',
                                    width: 1,
                                    shadowColor: '#4e6590',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            //name:'直接访问',
                            type: 'bar',
                            barWidth: '20%',
                            itemStyle: {
                                color: '#55cdd6',
                                opacity: 0.28,
                                borderColor: '#08ceef',
                                borderWidth: 1
                            },
                            data: [1, 7, 3, 7, 3, 2, 1]
                        },
                        {
                            //name:'直接访问',
                            type: 'bar',
                            barWidth: '20%',
                            itemStyle: {
                                color: '#2af7fa',
                                borderColor: '#08ceef',
                                borderWidth: 1
                            },
                            data: [1, 7, 3, 7, 3, 2, 1]
                        }
                    ]
                },
                options: [
                    {
                        grid: {
                            //type: 'dotted',
                            show: false,
                            top: '20%',
                            bottom: '0%',
                            left: '5%',
                            right: '5%',
                            containLabel: true//为ture才会生效以上的设置
                        },
                        xAxis: {
                            type: 'category',
                            data: [],
                            minInterval: 1,
                            axisLabel: {
                                color: '#fff',
                                fontSize: 10,
                                rotate: 0,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                }
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            minInterval: 1,
                            boundaryGap: ['0%', '20%'],
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                }
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        series: [{
                            data: [],
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                color: '#FF7243',
                                borderColor: this.factBorderColor,
                                borderWidth: 1
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    color: '#fff'
                                },
                            },
                        }]
                    }
                ],
                value1: 0,
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
                            //name: '邮件营销',
                            type: 'bar',
                            barWidth: 10,
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
                                color: '#08ceef',
                                borderColor: '#47cdee',
                            }

                        },
                        {
                            //name: '直接访问',

                            type: 'bar',
                            stack: '总量1',
                            barWidth: 10,
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
                                color: '#1f4f80',
                                borderColor: '#0eafd4',
                                borderWidth: 1,
                                opacity: 1
                                //opacity: 0.28
                            },
                        },
                    ]
                },
                centerDialogVisible: false,
                name: '',
                dialogOptions: [],
                value2: 0,

                autoplay: true,
                autoplaySpeed: 10000,
                pageNums: 5,
                barWidth: 40,
                barColor: '#fff',
                barBorderColor: '#fff',
                secondBarColor: '#fff',
                secondBarBorderColor: '#fff',
                factColor: '#fff',
                factBorderColor: '#fff',
                shouldColor: '#fff',
                shouldBorderColor: '#fff'
            }
        },
        props: [],
        mounted() {
            setTimeout(() => {
                //进行一级页面颜色动态配置

                this.autoplay = Boolean(properties.AUTO_PLAY);
                this.autoplaySpeed = Number(properties.CHANGE_TIME);
                this.pageNums = Number(properties.PAGE_NUMS) - 1;
                this.barWidth = Number(properties.BAR_WIDTH);
                this.barColor = properties.BAR_COLOR;
                this.barBorderColor = properties.BAR_BORDER_COLOR;
                this.secondBarColor = properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor = properties.SECOND_BAR_BORDER_COLOR;
                this.secondPageNums = properties.SECOND_PAGE_NUMS;

                this.factColor = properties.FACT_COLOR;
                this.factBorderColor = properties.FACT_BORDER_COLOR;
                this.shouldColor = properties.SHOULD_COLOR;
                this.shouldBorderColor = properties.SHOULD_BORDER_COLOR;
                this.queryData();
//                setInterval(() => {
//                    this.queryData();
//                },properties.QUERY_TIME_SPACE)
            }, properties.LOOP_WAIT_TIME)
        },
        methods: {
            openDialog() {
                this.centerDialogVisible = true
            },
            onClick(event) {
                console.log(event)
                let name = event.name;
                if (name) {
                    this.name = name;
                    this.openDialog();

                    this.http.get(this.ports.four.rightBottomSecond + '/' + name, (res) => {
                        console.log('勤务车辆情况:', res);
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
                                            color: '#00fffd',
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
            },
            queryData() {
                this.value1 = 0;
                this.http.get(this.ports.four.rightBottom, (res) => {
                    console.log('勤务车辆情况-sixRightBottom:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;

                        let num = 0;
                        let pageNum = 0;
                        this.allnum = res.equipmentAll;
                        this.innum = res.equipmentIn;
                        this.outnum = res.equipmentOut;
                        Object.keys(data).forEach(p => {
                            if (p == 'sum' || p == 'findPersonSum' || p == 'insertPersonSum') {
//                                return true;
                            } else {
                                this.options[pageNum].xAxis.data.unshift(p);
                                this.options[pageNum].series[0].data.unshift(data[p].equipmentOut);
                                // this.options[pageNum].series[1].data.push(data[p].insertPerson);
                                num++;
                                if (num > this.pageNums) {
                                    num = 0;
                                    this.options.push({
                                        grid: {
                                            //type: 'dotted',
                                            show: false,
                                            top: '20%',
                                            bottom: '0%',
                                            left: '5%',
                                            right: '5%',
                                            containLabel: true//为ture才会生效以上的设置
                                        },
                                        xAxis: {
                                            type: 'category',
                                            data: [],
                                            minInterval: 1,
                                            axisLabel: {
                                                color: '#fff',
                                                fontSize: 10,
                                                rotate: 0,
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#fff',
                                                    width: 1,
                                                }
                                            },
                                            splitLine: {
                                                show: false
                                            }
                                        },
                                        yAxis: {
                                            type: 'value',
                                            minInterval: 1,
                                            boundaryGap: ['0%', '20%'],
                                            axisLabel: {
                                                color: '#edf1f4',
                                                fontSize: 10,
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#fff',
                                                    width: 1,
                                                }
                                            },
                                            splitLine: {
                                                show: false
                                            }
                                        },
                                        series: [{
                                            data: [],
                                            type: 'bar',
                                            barWidth: 10,
                                            itemStyle: {
                                                color: '#FF7243',
                                                borderColor: this.factBorderColor,
                                                borderWidth: 1
                                            },
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'top',
                                                    color: '#fff'
                                                },
                                            },
                                        }]
                                    })
                                    pageNum++;
                                }
                            }

                        })
                        if (this.options[this.options.length - 1].xAxis[0].data.length == 0) {
                            this.options.pop();
                        }
                    }
                    let newOptions = Object.assign({}, this.option);
                    this.option = newOptions;
                })
            }
        },
        components:
            {
                'LegendNum':
                LegendNum,
                'LegendNumNoBg':
                LegendNumNoBg,
                'LittleLegendBlock':
                LittleLegendBlock,
                'CardHeaderSlant':
                CardHeaderSlant,
            }
        ,
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .bottom-left {
        align-items: center !important;

    }

    .left1 {
        font-size: 0.3rem;
    }

    .left2 {
        font-size: 0.2rem;
    }

    .bottom-right {
        width: 80% !important;
        display: flex;
    }

    .right1 {
        width: 75%;

    }

    .right2 {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

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

    .content {
        width: 100%;
        height: 82%;

        .content-top {
            padding-top: 0.1rem;

            .top-main {
                display: flex;
                justify-content: space-around;
                width: 100%;
                height: 100%;

                .main {
                    display: flex;
                    justify-content: center;
                    width: 20%;

                    .block-item {
                        background-image: url("../../assets/images/little-around.png");
                        background-size: 100% 100%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .item-left {
                            width: 18px;
                            height: 10px;
                            background: #FF7243;
                            border-radius: 1px;
                            margin-right: 5px;
                        }

                        .item-right {
                            font-size: 12px;
                            color: #ffffff;
                            opacity: 0.6;
                        }
                    }
                }

                .main4 {
                    width: 30%;
                }
            }

            width: 100%;
            height: 20%;
        }

        .content-bottom {
            width: 100%;
            height: 85%;
        }
    }
</style>
