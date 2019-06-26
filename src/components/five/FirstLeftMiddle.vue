<template>
    <div class="content" style="position: relative">
        <el-button size="mini" type="primary"
                   style="position: absolute;top: 0.1rem;right:0.1rem;z-index: 999"
                   @click="openScreenDialog()">全屏
        </el-button>
        <chart ref="chart1"
               style="height: 100%;width: 100%"
               :options="option"
               :autoresize=true
               @click="onClick"
        ></chart>
    </div>
</template>
<script>
    import properties from '../../services/properties'

    export default {
        data() {
            return {
                autoplay: true,
                autoplaySpeed: 10000,
                pageNums: 5,
                barWidth: 40,
                barColor: '#fff',
                barBorderColor: '#fff',
                secondBarColor: '#fff',
                secondBarBorderColor: '#fff',
                secondPageNums: 8,

                name: '',
                seriesName: '',
                centerDialogVisible: false,
                options: [],
                value1: 0,
                dialogOptions: [],
                value2: 0,
                option: {
                    grid: {
                        x: 50,
                        y: 20,
                        x2: 1,
                        y2: 50
                    },
                    title: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 18,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        top: 'top',
                        itemGap: 60,
                        text: '弹药消耗情况',
//                        subtext: '纯属虚构',
                        x: 'top'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: [],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    series: [
                        {
                            name: '弹药消耗情况',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            label: {
                                normal: {
                                    formatter: "{b|{b}：}{c}",
                                    backgroundColor: {
//                                        image: 'https://www.baidu.com/favicon.ico'
                                    },
//                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 12,
                                            lineHeight: 33
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal: {
                                    color: function (params) {
                                        var colorList = [
                                            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                        }
                    ]
                },
                dataList: [
                    {
                        colorStyle: '#c1951b',
                        word: '系统检查'
                    },
                    {
                        colorStyle: '#c90b18',
                        word: '机关检查'
                    }
                ],
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
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
            setTimeout(() => {
                //进行一级页面颜色动态配置

                this.autoplay = Boolean(properties.OFFICE_FIND_AUTO_PLAY);
                this.autoplaySpeed = Number(properties.OFFICE_FIND_CHANGE_TIMES);
                this.pageNums = Number(properties.OFFICE_FIND_NUMS) - 1;
                this.barWidth = Number(properties.OFFICE_FIND_BAR_WIDTH);
                this.secondPageNums = properties.SECOND_PAGE_NUMS;

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
                this.value2 = 0;
                console.log(event);
                let name = event.name;
                let seriesName = event.seriesName;
                if (name) {
                    this.name = name;
                    this.seriesName = seriesName;
                    this.openDialog()
                    this.http.get(`${this.ports.second.officeFindSecond}/${seriesName}/${name}`, (res) => {
                        console.log('firstLeftMiddle')
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
                            })

//
                            Object.keys(data).forEach(p => {
                                this.dialogOptions[pageNum].xAxis[0].data.push(p)
                                this.dialogOptions[pageNum].series[0].data.push(data[p])
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
                                    })
                                    pageNum++;
                                }
//                            this.dialogOptions[pageNum].series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
//                            this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;
                            })
                            if (this.dialogOptions[this.dialogOptions.length - 1].xAxis[0].data.length == 0) {
                                this.dialogOptions.pop();
                            }
                            //                        let newOptions = Object.assign({},this.dialogOption);
                            //                        this.dialogOption = newOptions;
                        }
                    })
                }
            },
            queryData() {
                this.http.get(this.ports.five.leftMiddle, (res) => {
                    console.log('弹药消耗情况-sixLeftTop:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
                        Object.keys(data).forEach(p => {
                            if (p !== 'all') {
                                this.option.legend.data.push(p);
                                this.option.series[0].data.push({value: data[p], name: p})
                            }
                        })
                    }
                })
            },
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
    .bottom-left {
        align-items: center !important;
    }

    .left2 {
        font-size: 0.3rem !important;
    }

    .content {
        height: 82%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content-left {
            height: 100%;
            width: 60%;
            /*border:1px solid grey;*/
        }

        .content-right {
            width: 30%;
            height: 40%;

            .block {
                width: 100%;
                height: 100%;
                background-image: url("../../assets/images/little-around.png");
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                padding-top: 5%;
                padding-bottom: 5%;

                .item {
                    width: 70%;
                    height: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    .item-left {
                        width: 25%;
                        height: 4px;
                    }

                    .item-right {
                        width: 70%;
                        height: 18px;
                        font-size: 12px !important;
                    }
                }
            }
        }
    }
</style>
