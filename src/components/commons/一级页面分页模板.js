/**
 * Created by xuxinying on 19-3-1.
 */

export default {
    /**
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
     @click="onClick"
     ></chart>
     </CarouselItem>
     </Carousel>
     */
    data () {
        return {
            option: {
                textStyle: {
                    fontFamily: 'monospace',
                },

                grid: {
                    x:50,
                    y:20,
                    x2:1,
                    y2:50
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周一', '周一', '安全组', '部队管理科', '弹药科', '装备管理科'],
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
                        //name:'直接访问',
                        type: 'bar',
                        barWidth: '40%',
                        itemStyle: {
                            color: '#132f6a',
                            borderColor: '#47cdee',
                            borderWidth: 1,
                            opacity: 1
                        },
                        data: [1, 7, 3, 7, 3, 2, 1]
                    }
                ]
            },
            value1: 0,
            options:[],
            totalNum:0
        }
    },
    mounted() {
        this.queryData();
    },
    methods: {
        queryData(){
            this.http.get(this.ports.manage.basicDuty, (res) => {
                if(res.success){
                    let data = res.data;
                    let num = 0;
                    let pageNum = 0;
                    this.options.push({
                        textStyle: {
                            fontFamily: 'monospace',
                        },

                        grid: {
                            x:50,
                            y:20,
                            x2:1,
                            y2:50
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
                                //name:'直接访问',
                                type: 'bar',
                                barWidth: '40%',
                                itemStyle: {
                                    color: '#132f6a',
                                    borderColor: '#47cdee',
                                    borderWidth: 1,
                                    opacity: 1
                                },
                                data: []
                            }
                        ]
                    });

                    Object.keys(data).forEach(p => {
                        if(p == 'allCount'){
                            // return true;
                        }else{
                            this.options[pageNum].xAxis[0].data.push(p);
                            this.options[pageNum].series[0].data.push(data[p]);
                            num++;
                            if(num>5){
                                num = 0;
                                this.options.push({
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
                                    xAxis:  {
                                        show: false,
                                        type: 'value',
                                        borderWidth: 0,

                                    },
                                    yAxis: {
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
                                        data: []
                                    },
                                    series: [
                                        {
                                            //name: '直接访问',

                                            type: 'bar',
                                            stack: '总量',
                                            barWidth: '30%',
                                            label: {
                                                normal: {
                                                    formatter:'{c|{c}}',
                                                    rich: {
                                                        c:{
                                                            color:'#ffffff',
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
                                            data: [],
                                            itemStyle:{
                                                borderColor:'#08ceef',
                                                borderWidth:1
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
                                            data: [],
                                            itemStyle:{
                                                color:'#1f4f80',
                                                borderColor:'3#0eafd4',
                                                borderWidth:1,
                                                //opacity: 0.28
                                            },
                                        },

                                    ]
                                })
                                pageNum++;
                            }
                        }

                    })
                    this.totalNum = data.allCount
                }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
            })
        }
    },
}