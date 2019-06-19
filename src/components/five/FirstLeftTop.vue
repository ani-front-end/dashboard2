<template>
    <div class="content">
        <!--<div class="content-left">-->
        <!--<LegendNum :num=totalNum word="总数"></LegendNum>-->
        <!--</div>-->
        <div class="content-right" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <!--<Carousel v-model="value1"-->
            <!--:autoplay=autoplay-->
            <!--:autoplay-speed=autoplaySpeed-->
            <!--arrow="never"-->
            <!--:radius-dot=true-->
            <!--height="1.42rem"-->
            <!--style="height:100%;"-->

            <!--&gt;-->
            <!--<CarouselItem style="" v-for="(item,index) in options" :key="index">-->
            <chart ref="chart"
                   style="height: 100%;width: 100%"
                   :options="option"
                   :autoresize=true
                   @click="onClick"

            ></chart>
            <!--</CarouselItem>-->
            <!--</Carousel>-->
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
                        公差勤务情况
                    </div>
                </div>
                <div class="dialog-bottom">
                    <div class="bottom-left">
                        <div class="left1"> {{name}}</div>
                        <!--<div class="left2">({{seriesName}})</div>-->
                    </div>
                    <div class="bottom-center">

                    </div>
                    <div class="bottom-right" style="display: flex;justify-content: center;align-items: center">
                        <!--<Carousel v-model="value2"-->
                                  <!--:autoplay=autoplay-->
                                  <!--:autoplay-speed=autoplaySpeed-->
                                  <!--arrow="never"-->
                                  <!--:radius-dot=true-->
                                  <!--height="1.42rem"-->
                                  <!--style="height:100%;"-->

                        <!--&gt;-->
                            <!--<CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">-->
                                <!--<i-table :columns="columns1" :data="data1"></i-table>-->

                        <el-table :data="data1"
                                  style="width: 100%"
                                  height="2.5rem"
                                  highlight-current-row
                            >
                            <el-table-column prop="name" label="姓名"></el-table-column>
                            <el-table-column prop="reason" label="原因"></el-table-column>
                            <el-table-column prop="startTime" label="开始时间"></el-table-column>
                            <el-table-column prop="endTime" label="结束时间"></el-table-column>
                            <el-table-column prop="useUnitName" label="单位"></el-table-column>
                        </el-table>

                            <!--</CarouselItem>-->
                        <!--</Carousel>-->
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
                highLight:false,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '原因',
                        key: 'reason'
                    },
                    {
                        title: '开始时间',
                        key: 'startTime'
                    },
                    {
                        title: '结束时间',
                        key: 'endTime'
                    },
                    {
                        title: '单位',
                        key: 'useUnitName'
                    }
                ],
                data1: [],

                autoplay: true,
                autoplaySpeed: 10000,
                pageNums: 5,
                barWidth: 40,
                barColor: '#fff',
                barBorderColor: '#fff',
                secondBarColor: '#fff',
                secondBarBorderColor: '#fff',

                totalNum: 0,
                option: {
                    legend: {
                        orient: 'vertical',
                        left: 'center',
                        data: ['公差勤务'],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    title: {
                        text: '公差勤务情况',
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#fff']
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#fff']
                            }
                        },
                        nameTextStyle: {
                            color: '#333'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    series: [{
                        name: '公差勤务',
                        data: [],
                        type: 'line'
                    }]
                },

                optionx: {
                    textStyle: {
                        fontFamily: 'monospace',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        x: 50,
                        y: 20,
                        x2: 1,
                        y2: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['督导组', '部队管理科'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                                rotate: 45,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4d648f',
                                    width: 1,
                                    shadowColor: '#4d648f',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
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
                            axisLine: {
                                lineStyle: {
                                    color: '#4d648f',
                                    width: 1,
                                    shadowColor: '#4d648f',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                color: '#132f6a',
                                borderColor: '#47cdf0',
                                borderWidth: 1,
                                //opacity: 0.28
                            },
                            data: [3, 2]
                        }
                    ]
                },
                value1: 0,
                value2: 0,
                pages: 5,
                options: [],
                centerDialogVisible: false,
                name: '',
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
                            data: ['督导组', '部队管理科'],
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
                                color: '#3b78bf',
                                borderColor: '#47cdee',
//                                color: '#fff',
//                                borderColor: '#fff',
                                borderWidth: 1,
                                opacity: 1
                            },
                            data: [3, 2],
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
//                itemHeight: "1.4rem"

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
                this.barWidth = Number(properties.BAR_WIDTH);
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
                    this.openDialog();
                    this.http.get(this.ports.five.leftTopSecond + '/' + name + '/1/100', (res) => {
                        console.log('公差勤务：', res);
                        this.dialogOptions = [];
                        if (res.error_msg == '成功') {
                            this.data1 = res.data;
                            // for (let i = 0; i < 100; i++) {
                            //     this.data1.push(res.data[0])
                            // }
                        }
                    })
                }
            },
            queryData() {
                this.value1 = 0;
                this.options = [];
                this.http.get(this.ports.five.leftTop, (res) => {
                    console.log('fiveLeftTop:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
                        Object.keys(data).forEach(p => {
                            if (p !== 'sum') {
                                this.option.xAxis.data.unshift(p);
                                this.option.series[0].data.unshift(data[p])
                            }
                        })


//                         let num = 0;
//                         let pageNum = 0;
//                         this.options.push({
//                             textStyle: {
//                                 fontFamily: 'monospace',
//                             },
//                             tooltip: {
//                                 trigger: 'axis',
//                                 axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                                     type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
//                                 }
//                             },
//                             grid: {
//                                 x: 50,
//                                 y: 20,
//                                 x2: 1,
//                                 y2: 50
//                             },
//                             xAxis: [
//                                 {
//                                     minInterval: 1,
//                                     type: 'category',
//                                     data: [],
//                                     axisTick: {
//                                         alignWithLabel: true
//                                     },
//                                     splitLine: {
//                                         show: false
//                                     },
//                                     axisLabel: {
//                                         color: '#edf1f4',
//                                         fontSize: 10,
//                                         rotate: 45,
//                                     },
//                                     axisLine: {
//                                         lineStyle: {
//                                             color: '#4d648f',
//                                             width: 1,
//                                             shadowColor: '#4d648f',
//                                             shadowBlur: 10
//                                         }
//                                     }
//                                 }
//                             ],
//                             yAxis: [
//                                 {
//                                     minInterval: 1,
//                                     type: 'value',
//                                     boundaryGap: ['0%', '20%'],
//                                     axisLabel: {
//                                         color: '#edf1f4',
//                                         fontSize: 10,
//                                     },
//                                     splitLine: {
//                                         show: true,
//                                         lineStyle: {
//                                             color: ['#333']
//                                         }
//                                     },
//                                     axisLine: {
//                                         lineStyle: {
//                                             color: '#4d648f',
//                                             width: 1,
//                                             shadowColor: '#4d648f',
//                                             shadowBlur: 10
//                                         }
//                                     }
//                                 }
//                             ],
//                             series: [
//                                 {
//                                     type: 'bar',
//                                     barWidth: this.barWidth,
//                                     itemStyle: {
//                                         color: this.barColor,
//                                         borderColor: this.barBorderColor,
//                                         borderWidth: 1,
//                                         //opacity: 0.28
//                                     },
//                                     data: [],
//                                     label: {
//                                         normal: {
//                                             show: true,
//                                             position: 'top',
//                                             color: '#fff',
//                                         }
//                                     },
//                                 }
//                             ]
//                         })
//                         Object.keys(data).forEach(p => {
//                             if (p == 'allCount') {
// //                                return true
//                             } else {
//                                 num++;
//                                 this.options[pageNum].xAxis[0].data.push(p);
//                                 this.options[pageNum].series[0].data.push(data[p]);
//                                 if (num > this.pageNums) {
//                                     num = 0;
//                                     this.options.push({
//                                         textStyle: {
//                                             fontFamily: 'monospace',
//                                         },
//                                         tooltip: {
//                                             trigger: 'axis',
//                                             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                                                 type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
//                                             }
//                                         },
//                                         grid: {
//                                             x: 50,
//                                             y: 20,
//                                             x2: 1,
//                                             y2: 50
//                                         },
//                                         xAxis: [
//                                             {
//                                                 minInterval: 1,
//                                                 type: 'category',
//                                                 data: [],
//                                                 axisTick: {
//                                                     alignWithLabel: true
//                                                 },
//                                                 splitLine: {
//                                                     show: false
//                                                 },
//                                                 axisLabel: {
//                                                     color: '#edf1f4',
//                                                     fontSize: 10,
//                                                     rotate: 45,
//                                                 },
//                                                 axisLine: {
//                                                     lineStyle: {
//                                                         color: '#4d648f',
//                                                         width: 1,
//                                                         shadowColor: '#4d648f',
//                                                         shadowBlur: 10
//                                                     }
//                                                 }
//                                             }
//                                         ],
//                                         yAxis: [
//                                             {
//                                                 minInterval: 1,
//                                                 type: 'value',
//                                                 boundaryGap: ['0%', '20%'],
//                                                 axisLabel: {
//                                                     color: '#edf1f4',
//                                                     fontSize: 10,
//                                                 },
//                                                 splitLine: {
//                                                     show: true,
//                                                     lineStyle: {
//                                                         color: ['#333']
//                                                     }
//                                                 },
//                                                 axisLine: {
//                                                     lineStyle: {
//                                                         color: '#4d648f',
//                                                         width: 1,
//                                                         shadowColor: '#4d648f',
//                                                         shadowBlur: 10
//                                                     }
//                                                 }
//                                             }
//                                         ],
//                                         series: [
//                                             {
//                                                 type: 'bar',
//                                                 barWidth: this.barWidth,
//                                                 itemStyle: {
//                                                     color: this.barColor,
//                                                     borderColor: this.barBorderColor,
//                                                     borderWidth: 1,
//                                                     //opacity: 0.28
//                                                 },
//                                                 data: [],
//                                                 label: {
//                                                     normal: {
//                                                         show: true,
//                                                         position: 'top',
//                                                         color: '#fff',
//                                                     }
//                                                 },
//                                             }
//                                         ]
//                                     })
//                                     pageNum++;
//                                 }
//                             }
// //                            this.option.xAxis[0].data.push(p);
// //                            this.option.series[0].data.push(data[p]);
//
//                         });
//                         this.totalNum = data.allCount;
                    }
                });
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
        display: flex;
        justify-content: space-around;

        .content-right {
            height: 100%;
            width: 80%;
            /*border: 1px solid grey;*/
        }
    }

    .ivu-carousel-list {
        height: 100% !important;
    }

    .content-right :hover {

    }

</style>
