<template>
    <div class="content" style="position: relative">
        <el-button size="mini" type="primary"
                   style="position: absolute;top: 0.1rem;right:0.1rem;z-index: 999"
                   @click="openScreenDialog()">全屏
        </el-button>
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
   </div>
</template>
<!--<script src="../service/FiveLeftBottom.js"></script>-->
<script>
    import LittleLegendBlock from '../LittleLegendBlock.vue'
    import properties from '../../services/properties'

    export default {
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    title: {
                        text: '人均弹药消耗情况',
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    legend: {
                        data: ['手枪子弹', '步枪子弹'],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        },
                        top: '10%'
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '10%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#fff']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#fff']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    series: [
                        {
                            barWidth: 12,
                            name: '手枪子弹',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [],
                            itemStyle: {
                                color: '#f68050',
                            },
                        },
                        {
                            barWidth: 12,
                            name: '步枪子弹',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [],
                            itemStyle: {
                                color: '#87cdfa'
                            },
                        },
                    ]
                },

                option1: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    color: ['#53d3d9', '#1f5081'],
                    grid: {
                        top: '2%',
                        left: '5%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                        borderWidth: 0,

                    },
                    yAxis: {
                        minInterval: 1,
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: ['督导组', '部队管理科']
                    },
                    series: [
                        {
                            //name: '直接访问',

                            type: 'bar',
                            stack: '总量',
                            barWidth: '30%',
                            label: {
                                normal: {
                                    formatter: '{c|{c}}',
                                    rich: {
                                        c: {
                                            color: '#ffffff',
                                            //fontSize: 30,
                                            opacity: 1
                                        }
                                    },
                                    show: true,
                                    position: 'insideRight',
                                    textStyle: {
                                        color: '#ffffff',
                                        opacity: 1
                                    }

                                }
                            },
                            data: [128, 136, 301, 334, 404],
                            itemStyle: {
                                borderColor: '#08ceef',
                                borderWidth: 1
                            }
                        },
                        {
                            //name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight',
                                },
                                //opacity: 1
                            },
                            data: [132, 140, 101, 134, 90],
                            itemStyle: {
                                color: '#1f4f80',
                                borderColor: '3#0eafd4',
                                borderWidth: 1,
                                //opacity: 0.28
                            },
                        },
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
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight',
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
                            stack: '总量',
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
                dialogOptionRound: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    title: {
                        text: "0/0",
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 25,
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
                            color: ['#ad7319'],
                            name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['62%', '63%'],
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                // color: '#ad7319',
                                // borderColor:'#ad7319'

                            },
                            data: [
                                {value: 645, name: ''},
                            ]
                        },
                        {
                            name: '',
                            color: ['#ad7319'],
                            type: 'pie',
                            radius: ['60%', '73%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },

                            itemStyle: {
                                opacity: 0.5
                            },

                            data: [
                                {value: 1209, name: '已完成'},
                                {
                                    value: 1310,
                                    name: '未完成',
                                    itemStyle: {
                                        opacity: 0
                                    }
                                }
                            ]
                        }
                    ]
                },
                name: '',
                centerDialogVisible: false,
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
        components: {
            'LittleLegendBlock': LittleLegendBlock
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
            setTimeout(() => {
                //进行一级页面颜色动态配置
                this.autoplay = Boolean(properties.OFFICE_PERSON_AUTO_PLAY);
                this.autoplaySpeed = Number(properties.OFFICE_PERSON_CHANGE_TIMES);
                this.pageNums = Number(properties.OFFICE_PERSON_NUMS) - 1;
                this.barWidth = Number(properties.OFFICE_PERSON_BAR_WIDTH);
                this.barColor = properties.BAR_COLOR;
                this.barBorderColor = properties.BAR_BORDER_COLOR;
                this.secondBarColor = properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor = properties.SECOND_BAR_BORDER_COLOR;
                this.secondPageNums = properties.SECOND_PAGE_NUMS;

                this.factColor = properties.FACT_COLOR;
                this.factBorderColor = properties.FACT_BORDER_COLOR;
                this.shouldColor = properties.SHOULD_COLOR;
                this.shouldBorderColor = properties.SHOULD_BORDER_COLOR;
                //this.queryData();
                // setInterval(() => {
                //     this.queryData();
                // },properties.QUERY_TIME_SPACE)
            }, properties.LOOP_WAIT_TIME)

        },
        methods: {
            openScreenDialog() {
                this.$emit('getChildOption', this.option)
            },
            mouseOver() {
                this.autoplay = false;
            },
            mouseOut() {
                this.autoplay = true;
            },
            openDialog() {
                this.centerDialogVisible = true
            },
            onClick(event) {
                let name = event.name;
                if (name) {
                    this.name = name;
                    this.openDialog()
                    this.http.get(`${this.ports.second.officePatrolSecond}/${name}`, (res) => {
                        console.log('firstLeftBottom2')
                        console.log(res)
                        if (res.success) {
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
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight',
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
                                        stack: '总量',
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
                            // this.dialogOption.xAxis[0].data=[];
                            // this.dialogOption.series[0].data=[];
                            // this.dialogOption.series[1].data=[];
                            // this.dialogOption.series[1].data=[];
//
                            Object.keys(data).forEach(p => {
                                if (p == 'factAll' || p == 'shouldAll' || p == 'division') {
                                    // return true;
                                } else {
                                    this.dialogOptions[pageNum].xAxis[0].data.push(p)
                                    this.dialogOptions[pageNum].series[0].data.push(data[p].factAll)
                                    this.dialogOptions[pageNum].series[1].data.push(data[p].shouldAll - data[p].factAll)
                                    num++;
                                    if (num > this.secondPageNums) {
                                        num = 0;
                                        this.dialogOptions.push({
                                            textStyle: {
                                                fontFamily: 'monospace',
                                            },

                                            grid: {
                                                bottom:'20%'
//                                                x: 200,
//                                                y: 200,
//                                                x2: 200,
//                                                y2: 500
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
                                                    stack: '总量',
                                                    label: {
                                                        normal: {
                                                            show: true,
                                                            position: 'insideRight',
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
                                                    stack: '总量',
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
                                        })
                                        pageNum++;
                                    }
                                }


                                // this.dialogOptions[pageNum].series[0].itemStyle.color=properties.FACT_COLOR;
                                // this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.FACT_BORDER_COLOR;
                                // this.dialogOptions[pageNum].series[1].itemStyle.color=properties.SHOULD_COLOR;
                                // this.dialogOptions[pageNum].series[1].itemStyle.borderColor=properties.SHOULD_BORDER_COLOR;
                            })
                            // color: '#08ceef',  实检
                            //     borderColor: '#47cdee',
                            // color:'#1f4f80',  应检
                            //     borderColor:'#0eafd4',

                            if (this.dialogOptions[this.dialogOptions.length - 1].xAxis[0].data.length == 0) {
                                this.dialogOptions.pop();
                            }
                            this.dialogOptionRound.title.text = data.division;
                            this.dialogOptionRound.series[1].data[0].value = data.factAll;
                            this.dialogOptionRound.series[1].data[1].value = data.shouldAll - data.factAll;
                            //                        let newOptions = Object.assign({},this.dialogOption);
                            //                        this.dialogOption = newOptions;
                        }
                    })
                }
            },
            queryData() {
                this.http.get(this.ports.five.leftBottom, (res) => {
                    console.log('sixLeftBottom-人均弹药消耗情况:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
                        Object.keys(data).forEach(p => {
                            if (p !== 'unitList') {
                                this.option.yAxis.data.push(p);
                                this.option.series[0].data.push(data[p]['手枪子弹']);
                                this.option.series[1].data.push(data[p]['步枪子弹']);

                            }

                        })
                    }
                });
            }
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
  .bottom-left{
    align-items: center !important;
  }
  .left1{
    font-size: 0.3rem;
  }
  .bottom-right{
    width: 80%!important;
    display: flex;
    /*border: 1px solid red;*/
  }
  .right1{
    width: 75%;
  }
  .right2{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .right2-top{
      height: 15%;
      width: 70%;

    }
    .right2-middle{
      height: 85%;
      width: 100%;
    }
    .right2-bottom{
      height: 3%;
      width: 100%;
      position: absolute;
      bottom:20%;
      text-align: center;
      color: #fff;
    }
  }
  .content{
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .content-top{
      height: 40%;
      width: 100%;
      /*border: 1px solid grey;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-top-left{
        height: 100%;
        width: 70%;
        /*border: 1px solid grey;*/
      }
      .content-top-right{
        height: 44%;
        width: 18%;
        /*border: 1px solid grey;*/
      }
    }
    .content-bottom{
      height: 60%;
      border: 1px solid grey;
      width: 90%;
    }
  }
</style>
