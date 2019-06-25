<template>
    <div class="content">
        <div class="content-left">
            <h6>官兵情况</h6>
        </div>
        <div class="content-right" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <Carousel v-model="value1"
                      :autoplay=autoplay
                      :autoplay-speed=autoplaySpeed
                      arrow="never"
                      :radius-dot=true
                      height="1.9rem"
                      style="height:100%;"

            >
                <CarouselItem style="" v-for="(item,index) in options" :key="index">
                    <chart ref="chart"
                           style="height: 100%;width: 100%"
                           :options="item"
                           :autoresize=true

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
                        机关产生问题统计
                    </div>
                </div>
                <div class="dialog-bottom">
                    <div class="bottom-left">
                        <div class="left1"> {{name}}</div>
                        <!--<div class="left2">({{seriesName}})</div>-->
                    </div>
                    <div class="bottom-center">

                    </div>
                    <div class="bottom-right">
                        <Carousel v-model="value2"
                                  :autoplay=autoplay
                                  :autoplay-speed=autoplaySpeed
                                  arrow="never"
                                  :radius-dot=true
                                  height="1.42rem"
                                  style="height:100%;"

                        >
                            <CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">
                                <chart ref="chart1"
                                       style="height: 100%;width: 100%"
                                       :options="item"
                                       :autoresize=true
                                       @click="onClick"
                                ></chart>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import properties from '../../services/properties'
    import LegendNum from '../../components/LegendNum'

    export default {
        data() {
            return {
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
                            data: ['1连', '2连', '3连', '4连', '5连', '6连', '7连'],
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
                options: [],
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
                barWidth: 10,
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
        props: [
            'screenWidth',
        ],
        components: {
            'LegendNum': LegendNum,
        },
        mounted() {
            this.queryData();
            setTimeout(() => {
                //进行一级页面颜色动态配置
                this.autoplay = Boolean(properties.AUTO_PLAY);
                this.autoplaySpeed = Number(properties.CHANGE_TIME);
                this.pageNums = Number(properties.PAGE_NUMS) - 1;
                //this.barWidth=Number(properties.BAR_WIDTH);
                this.barColor = properties.BAR_COLOR;
                this.barBorderColor = properties.BAR_BORDER_COLOR;
                this.secondBarColor = properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor = properties.SECOND_BAR_BORDER_COLOR;
                // this.queryData();
//                setInterval(() => {
//                    this.queryData();
//                },properties.QUERY_TIME_SPACE)
            }, properties.LOOP_WAIT_TIME)

        },
        methods: {
            openDialog() {
                this.centerDialogVisible = true
            },
            mouseOver() {
                this.autoplay = false;
            },
            mouseOut() {
                this.autoplay = true;
            },
            onClick(event) {
                this.value2 = 0;
                console.log(event);
                let name = event.name;
                if (name) {
                    this.name = name;
                    this.openDialog()
                    this.http.get(`${this.ports.second.officeDutyProblemSecond}/${name}`, (res) => {
                        console.log('firstLeftTop')
                        console.log(res)
                        this.dialogOptions = [];
                        if (res.success) {
                            let data = res.data;
                            let pageNum = 0;
                            let num = 0;
//                            this.dialogOption.xAxis[0].data=[];
//                            this.dialogOption.series[0].data=[];
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
                                        //name:'直接访问',
                                        type: 'bar',
                                        barWidth: 10,
                                        itemStyle: {
//                                color: '#3b78bf',
//                                borderColor: '#47cdee',
                                            color: this.secondBarColor,
                                            borderColor: this.secondBarBorderColor,
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
                            });
                            Object.keys(data).forEach(p => {
                                if (p == 'allCount') {

                                } else {
                                    this.dialogOptions[pageNum].xAxis[0].data.push(p);
                                    this.dialogOptions[pageNum].series[0].data.push(data[p]);
//                                this.dialogOption.xAxis[0].data.push(p)
//                                this.dialogOption.series[0].data.push(data[p])
                                    num++;
                                    console.log(num)
                                    if (num > this.pageNums) {
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
                                                    //name:'直接访问',
                                                    type: 'bar',
                                                    barWidth: this.barWidth,
                                                    itemStyle: {
//                                color: '#3b78bf',
//                                borderColor: '#47cdee',
                                                        color: this.secondBarColor,
                                                        borderColor: this.secondBarBorderColor,
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
                                        });
                                        pageNum++;
                                    }
                                }

                                //进行二级页面颜色动态配置 柱宽
//                                this.dialogOptions[pageNum].series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
//                                this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;
//                                this.dialogOptions[pageNum].series[0].barWidthr=properties.BAR_WIDTH;
                            })
                            if (this.dialogOptions[this.dialogOptions.length - 1].xAxis[0].data.length == 0) {
                                this.dialogOptions.pop();
                            }
//                            this.dialogOption.series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
//                            this.dialogOption.series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;

                            //                        let newOptions = Object.assign({},this.dialogOption);
                            //                        this.dialogOption = newOptions;
                        }
                    })
                }
            },
            queryData() {
                this.value1 = 0;
                this.options = [];
                this.http.get(this.ports.four.leftTop, (res) => {
                    console.log('官兵情况-fiveLeftTop:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
                        // let data = {
                        //   "1连": {
                        //     "findPerson": 2,
                        //     "insertPerson": 3,
                        //     "third":5,
                        //     "forth":6,
                        //   },
                        //   "2连": {
                        //     "findPerson": 10,
                        //     "insertPerson": 7,
                        //     "third":8,
                        //     "forth":3,
                        //   },
                        //   "3连": {
                        //     "findPerson": 4,
                        //     "insertPerson": 6,
                        //     "third":6,
                        //     "forth":4,
                        //   },
                        //   "4连": {
                        //     "findPerson": 2,
                        //     "insertPerson": 3,
                        //     "third":5,
                        //     "forth":6,
                        //   },
                        //   "5连": {
                        //     "findPerson": 10,
                        //     "insertPerson": 7,
                        //     "third":8,
                        //     "forth":3,
                        //   },
                        //   "insertPersonSum": 16,
                        //   "sum": 34,
                        //   "findPersonSum": 18
                        // };
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
                            legend: {
                                data: ['思想波动', '心理疾病', '身体疾病', '训练伤'],
                                textStyle: {
                                    color: '#fff'
                                },
                                top: 0,
                                right: 0
                            },
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
                                show: true,
                                top: '20%',
                                bottom: '15%',
                                left: 0,
                                right: 0,
                                containLabel: true//为ture才会生效以上的设置
                            },
                            xAxis: [
                                {
                                    minInterval: 1,
                                    type: 'category',
                                    data: [],
                                    splitLine: {
                                        show: true
                                    },
                                    axisLabel: {
                                        color: '#fff',
                                        fontSize: 10,
                                        rotate: 0,
                                    },
                                    axisTick: {
                                        show: true,
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
                                    name: '思想波动',
                                    type: 'bar',
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: '#FF7243',
                                        borderColor: this.factBorderColor,
                                        borderWidth: 1
                                    },
                                    data: [],
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            color: '#fff'
                                        },
                                        //opacity: 1
                                    },
                                },
                                {
                                    name: '心理疾病',
                                    type: 'bar',
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: '#7ec8fd',
                                        opacity: 1,
                                        borderColor: this.shouldBorderColor,
                                        borderWidth: 1
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            color: '#fff'
                                        },
                                        //opacity: 1
                                    },
                                    data: []
                                },
                                {
                                    name: '身体疾病',
                                    type: 'bar',
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: '#ea2fd5',
                                        opacity: 1,
                                        borderColor: this.shouldBorderColor,
                                        borderWidth: 1
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            color: '#fff'
                                        },
                                        //opacity: 1
                                    },
                                    data: []
                                },
                                {
                                    name: '训练伤',
                                    type: 'bar',
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: '#00e233',
                                        opacity: 1,
                                        borderColor: this.shouldBorderColor,
                                        borderWidth: 1
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            color: '#fff'
                                        },
                                        //opacity: 1
                                    },
                                    data: []
                                }
                            ]
                        });
                        this.totalNum = data.sum;
                        this.laiDuiNum = data.insertPersonSum;
                        this.fangKeNum = data.findPersonSum;
                        Object.keys(data).forEach(p => {
                            if (p == 'sum' || p == 'findPersonSum' || p == 'insertPersonSum') {
//                                return true;
                            } else {
                                this.options[pageNum].xAxis[0].data.push(p);
                                this.options[pageNum].series[0].data.push(data[p].思想波动);
                                this.options[pageNum].series[1].data.push(data[p].心理疾病);
                                this.options[pageNum].series[2].data.push(data[p].身体疾病);
                                this.options[pageNum].series[3].data.push(data[p].训练伤);
                                num++;
                                if (num > this.pageNums) {
                                    num = 0;
                                    this.options.push({
                                        legend: {
                                            data: ['思想波动', '心理疾病', '身体疾病', '训练伤'],
                                            textStyle: {
                                                color: '#fff'
                                            },
                                            top: 0,
                                            right: 0
                                        },
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
                                            show: true,
                                            top: '20%',
                                            bottom: '15%',
                                            left: 0,
                                            right: 0,
                                            containLabel: true//为ture才会生效以上的设置
                                        },
                                        xAxis: [
                                            {
                                                minInterval: 1,
                                                type: 'category',
                                                data: [],
                                                splitLine: {
                                                    show: true
                                                },
                                                axisLabel: {
                                                    color: '#fff',
                                                    fontSize: 10,
                                                    rotate: 0,
                                                },
                                                axisTick: {
                                                    show: true,
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
                                                name: '思想波动',
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                itemStyle: {
                                                    color: '#FF7243',
                                                    borderColor: this.factBorderColor,
                                                    borderWidth: 1
                                                },
                                                data: [],
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'top',
                                                        color: '#fff'
                                                    },
                                                    //opacity: 1
                                                },
                                            },
                                            {
                                                name: '心理疾病',
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                itemStyle: {
                                                    color: '#7ec8fd',
                                                    opacity: 1,
                                                    borderColor: this.shouldBorderColor,
                                                    borderWidth: 1
                                                },
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'top',
                                                        color: '#fff'
                                                    },
                                                    //opacity: 1
                                                },
                                                data: []
                                            },
                                            {
                                                name: '身体疾病',
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                itemStyle: {
                                                    color: '#ea2fd5',
                                                    opacity: 1,
                                                    borderColor: this.shouldBorderColor,
                                                    borderWidth: 1
                                                },
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'top',
                                                        color: '#fff'
                                                    },
                                                    //opacity: 1
                                                },
                                                data: []
                                            },
                                            {
                                                name: '训练伤',
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                itemStyle: {
                                                    color: '#00e233',
                                                    opacity: 1,
                                                    borderColor: this.shouldBorderColor,
                                                    borderWidth: 1
                                                },
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'top',
                                                        color: '#fff'
                                                    },
                                                    //opacity: 1
                                                },
                                                data: []
                                            }
                                        ]
                                    });
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
        computed: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .left1 {
        font-size: 0.3rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .content {
        height: 100%;
        width: 100%;
        position: relative;
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*border: 1px red solid;*/

        .content-left {
            margin-top: 0.1rem;
            width: 26%;
            position: absolute;
            left: 0;
            top: 0.07rem;
            /*height: 40%;*/
            /*display: flex;*/
            /*justify-content: center;*/
            /*align-items: center;*/
            /*border: 1px solid grey;*/
        }

        .content-right {
            height: 100%;
            padding: 0.2rem 0.4rem 0;
            /*width: 70%;*/
            /*border: 1px solid grey;*/
        }
    }

    .ivu-carousel-list {
        height: 100% !important;
    }

    .content-right :hover {

    }
</style>
