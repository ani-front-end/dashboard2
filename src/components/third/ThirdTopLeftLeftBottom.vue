<template>
  <div class="content">
    <Carousel v-model="value1"
              :autoplay=false
              :autoplay-speed=5000
              arrow="never"
              :radius-dot=true
              height="1.42rem"
              loop
              style="height:100%;"

    >
      <CarouselItem style="" v-for="(item,index) in options" :key="index">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="item"
                :autoresize=true
        ></chart>
        <!--<chart  ref="chart"-->
                <!--style="height: 100%;width: 100%"-->
                <!--:options="option"-->
                <!--:autoresize=true-->
        <!--&gt;</chart>-->
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
    import properties from "../../services/properties";
    export default {
        data () {
            return {
                option: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        //fontSize不生效
                        fontSize: 30
                    },
                    color: ['#ab8640', '#2af7fa', '#4624a9', '#0a79c7'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend:{
                        show:true,
                        width:'5px',
                        height:'3px',
                        orient:'vertical',
                        itemGap:10,
                        textStyle:{
                            color:'#ffffff',
                            fontSize:12
                        },
                        bottom:'0%',
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '10%',
                        top: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 12
                            },
                            color: '#ffffff',
                            rotate: 30,
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
                        },
                        data: ['一连','二连','三连','四连','五连','六连','七连']
//                        data: []

                    },
                    yAxis: {
                        minInterval:1,
                        type: 'value',
                        axisLabel: {
                            color: '#edf1f4',
                            rotate: 45,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        axisTick: {
                            show: true,
                            lineStyle: {
                                color: '#4e6590'
                            }

                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#333']
                            }
                        },

                    },
                    series: [
//                        {
//                            show: true,
//                            type: 'bar',
//                            barGap: '-100%',
//                            barWidth: '30%',
//                            z: 1,
//                            itemStyle: {
//                                normal: {
//                                    color: '#55cdd6',
//                                    borderColor: '#08ceef',
//                                    borderWidth: 2,
//                                    opacity: 0.9
//                                }
//                            },
//                            data: [67, 78, 67, 78, 68, 69, 68],
//                        },

                        {
                            name: '临时外出',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '30%',
                            itemStyle: {
                                opacity: 0.9
                            },

                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight',

                                }
                            },
                            data: [1, 1, 1, 1, 1, 1, 1]
//                            data: []
                        },
                        {
                            name: '探亲休假',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle: {
                                opacity: 0.9
                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                            data: []
                        },
                        {
                            name: '外出学习',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle: {
                                opacity: 0.9
                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                            data: []
                        },
                        {
                            name: '执行任务',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle: {
                                opacity: 0.9
                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                            data: []
                        }
                    ]
                },
                value1: 0,
                options: []
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
                this.value1=0;
                this.options=[];
                //静态数据 先注释
//                this.http.get(this.ports.second.personOutInfo, (res) => {
//                    if(res.success){
//                        let data = res.data;
                        let data = {
                            "临时外出": [
                                2,
                                3
                            ],
                            "外出学习": [
                                4,
                                2
                            ],
                            "unitList": [
                                "一连",
                                "二连"
                            ],
                            "探亲休假": [
                                1
                            ],
                            "执行任务": [
                                7,12
                            ]
                        }
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
                            textStyle: {
                                fontFamily: 'Microsoft YaHei',
                                //fontSize不生效
                                fontSize: 30
                            },
                            color: ['#ab8640', '#2af7fa', '#4624a9', '#0a79c7'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend:{
                                show:true,
                                width:'5px',
                                height:'3px',
                                orient:'vertical',
                                itemGap:10,
                                textStyle:{
                                    color:'#ffffff',
                                    fontSize:12
                                },
                                bottom:'0%',
                            },
                            grid: {
                                left: '3%',
                                right: '3%',
                                bottom: '10%',
                                top: '3%',
                                containLabel: true
                            },
                            xAxis:  {
                                type: 'category',
                                splitLine: {
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        fontSize: 12
                                    },
                                    color: '#ffffff',
                                    rotate: 30,
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
                                },
//                        data: ['一连','二连','三连','四连','五连','六连','七连']
                                data: []

                            },
                            yAxis: {
                                minInterval:1,
                                type: 'value',
                                axisLabel: {
                                    color: '#edf1f4',
                                    rotate: 45,
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },
                                axisTick: {
                                    show: true,
                                    lineStyle: {
                                        color: '#4e6590'
                                    }

                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: ['#333']
                                    }
                                },

                            },
                            series: [
//                        {
//                            show: true,
//                            type: 'bar',
//                            barGap: '-100%',
//                            barWidth: '30%',
//                            z: 1,
//                            itemStyle: {
//                                normal: {
//                                    color: '#55cdd6',
//                                    borderColor: '#08ceef',
//                                    borderWidth: 2,
//                                    opacity: 0.9
//                                }
//                            },
//                            data: [67, 78, 67, 78, 68, 69, 68],
//                        },

                                {
                                    name: '临时外出',
                                    type: 'bar',
                                    stack: '总量',
                                    barWidth: 20,
                                    itemStyle: {
                                        opacity: 0.9
                                    },

                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'insideRight',

                                        }
                                    },
//                            data: [3, 4, 2, 5, 2, 1, 4]
                                    data: []
                                },
                                {
                                    name: '探亲休假',
                                    type: 'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'insideRight'
                                        }
                                    },
                                    itemStyle: {
                                        opacity: 0.9
                                    },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                    data: []
                                },
                                {
                                    name: '外出学习',
                                    type: 'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'insideRight'
                                        }
                                    },
                                    itemStyle: {
                                        opacity: 0.9
                                    },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                    data: []
                                },
                                {
                                    name: '执行任务',
                                    type: 'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'insideRight'
                                        }
                                    },
                                    itemStyle: {
                                        opacity: 0.9
                                    },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                    data: []
                                }
                            ]
                        });
                        for(let i=0;i<data.unitList.length;i++){
                            this.options[pageNum].xAxis.data.push(data.unitList[i]);
                            this.options[pageNum].series[0].data.push(data.临时外出[i]);
                            this.options[pageNum].series[1].data.push(data.探亲休假[i]);
                            this.options[pageNum].series[2].data.push(data.外出学习[i]);
                            this.options[pageNum].series[3].data.push(data.执行任务[i]);
                            num++;
                            if(num>5){
                                num = 0;
                                this.options.push({
                                    textStyle: {
                                        fontFamily: 'Microsoft YaHei',
                                        //fontSize不生效
                                        fontSize: 30
                                    },
                                    color: ['#ab8640', '#2af7fa', '#4624a9', '#0a79c7'],
                                    tooltip : {
                                        trigger: 'axis',
                                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                        }
                                    },
                                    legend:{
                                        show:true,
                                        width:'5px',
                                        height:'3px',
                                        orient:'vertical',
                                        itemGap:10,
                                        textStyle:{
                                            color:'#ffffff',
                                            fontSize:12
                                        },
                                        bottom:'0%',
                                    },
                                    grid: {
                                        left: '3%',
                                        right: '3%',
                                        bottom: '10%',
                                        top: '3%',
                                        containLabel: true
                                    },
                                    xAxis:  {
                                        type: 'category',
                                        splitLine: {
                                            show: false
                                        },
                                        axisLabel: {
                                            textStyle: {
                                                fontSize: 12
                                            },
                                            color: '#ffffff',
                                            rotate: 30,
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
                                        },
//                        data: ['一连','二连','三连','四连','五连','六连','七连']
                                        data: []

                                    },
                                    yAxis: {
                                        minInterval:1,
                                        type: 'value',
                                        axisLabel: {
                                            color: '#edf1f4',
                                            rotate: 45,
                                        },
                                        axisLine: {
                                            lineStyle: {
                                                color: '#4e6590',
                                                width: 1,
                                                shadowColor: '#4e6590',
                                                shadowBlur: 10
                                            }
                                        },
                                        axisTick: {
                                            show: true,
                                            lineStyle: {
                                                color: '#4e6590'
                                            }

                                        },
                                        splitLine: {
                                            show: true,
                                            lineStyle: {
                                                color: ['#333']
                                            }
                                        },

                                    },
                                    series: [
//                        {
//                            show: true,
//                            type: 'bar',
//                            barGap: '-100%',
//                            barWidth: '30%',
//                            z: 1,
//                            itemStyle: {
//                                normal: {
//                                    color: '#55cdd6',
//                                    borderColor: '#08ceef',
//                                    borderWidth: 2,
//                                    opacity: 0.9
//                                }
//                            },
//                            data: [67, 78, 67, 78, 68, 69, 68],
//                        },

                                        {
                                            name: '临时外出',
                                            type: 'bar',
                                            stack: '总量',
                                            barWidth: '30%',
                                            itemStyle: {
                                                opacity: 0.9
                                            },

                                            label: {
                                                normal: {
                                                    show: false,
                                                    position: 'insideRight',

                                                }
                                            },
//                            data: [3, 4, 2, 5, 2, 1, 4]
                                            data: []
                                        },
                                        {
                                            name: '探亲休假',
                                            type: 'bar',
                                            stack: '总量',
                                            label: {
                                                normal: {
                                                    show: false,
                                                    position: 'insideRight'
                                                }
                                            },
                                            itemStyle: {
                                                opacity: 0.9
                                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                            data: []
                                        },
                                        {
                                            name: '外出学习',
                                            type: 'bar',
                                            stack: '总量',
                                            label: {
                                                normal: {
                                                    show: false,
                                                    position: 'insideRight'
                                                }
                                            },
                                            itemStyle: {
                                                opacity: 0.9
                                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                            data: []
                                        },
                                        {
                                            name: '执行任务',
                                            type: 'bar',
                                            stack: '总量',
                                            label: {
                                                normal: {
                                                    show: false,
                                                    position: 'insideRight'
                                                }
                                            },
                                            itemStyle: {
                                                opacity: 0.9
                                            },
//                            data: [2, 1, 2, 3, 3, 4, 1]
                                            data: []
                                        }
                                    ]
                                });
                                pageNum++;
                            }
                        }

//                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
//                })
            }
        },

        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
  /*border: 1px solid red;*/
  height: 80%;
}
</style>
