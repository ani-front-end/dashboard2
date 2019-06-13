<template>
  <div class="content">
    <div class="content-top">
      <div class="top-main">
        <div class="main">
          <LegendNum :num=totalNum word="总数"></LegendNum>
        </div>
        <div class="main">
          <LegendNumNoBg :num=outNum word="在外数"></LegendNumNoBg>
        </div>
        <div class="main">
          <LegendNumNoBg :num=inNum word="在库数"></LegendNumNoBg>
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
                :autoplay=false
                :autoplay-speed=5000
                arrow="never"
                :radius-dot=true
                height="2.2rem"
                loop
                style="height:100%;"
      >
        <CarouselItem style="" v-for="(item,index) in options" :key="index">
          <chart  ref="chart"
                  style="height: 100%;width: 100%"
                  :options="item"
                  :autoresize=true
          ></chart>
        </CarouselItem>
      </Carousel>

    </div>
  </div>
</template>
<script>
    import LegendNum from '../LegendNum'
    import LegendNumNoBg from '../LegendNumNoBg'
    export default {
        data () {
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
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        borderColor: '#1b3970',
                        borderWidth: 1,
                        borderType: 'dotted',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            minInterval:1,
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: true
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
                            minInterval:1,
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
                                color: '#b58531',
                                borderColor: '#feba01',
                                //opacity: 0.7,
                                borderWidth: 1
                            },
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 12,
                                fontWeight: 'bold'
                            },
                            data: [1, 7, 3, 7, 3, 2, 1]
                        },

                    ]
                },
                options:[],
                totalNum:0,
                outNum:0,
                inNum:0
            }
        },
        props: [
        ],
        components: {
            'LegendNum': LegendNum,
            'LegendNumNoBg': LegendNumNoBg,
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.serviceCar, (res) => {
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
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
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                borderColor: '#1b3970',
                                borderWidth: 1,
                                borderType: 'dotted',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    minInterval:1,
                                    type: 'category',
                                    data: [],
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: true
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
                                    minInterval:1,
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
                                    barWidth: '10%',
                                    itemStyle: {
                                        color: '#b58531',
                                        borderColor: '#feba01',
                                        //opacity: 0.7,
                                        borderWidth: 1
                                    },
                                    label: {
                                        show: true,
                                        position: 'top',
                                        color: '#ffffff',
                                        fontSize: 12,
                                        fontWeight: 'bold'
                                    },
                                    data: []
                                },

                            ]
                        });
                        this.inNum = data.inCarSum;
                        this.totalNum = data.sum;
                        this.outNum = data.outCarSum;
                        Object.keys(data).forEach(p => {
                            if(p == 'inCarSum' || p == 'sum' || p == 'outCarSum'){
//                                return true;
                            }else{
                                this.options[pageNum].xAxis[0].data.push(p);
                                this.options[pageNum].series[0].data.push(data[p].outCar);
                                num++;
                                if(num>5){
                                    num = 0;
                                    this.options.push({
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
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            borderColor: '#1b3970',
                                            borderWidth: 1,
                                            borderType: 'dotted',
                                            containLabel: true
                                        },
                                        xAxis: [
                                            {
                                                minInterval:1,
                                                type: 'category',
                                                data: [],
                                                axisTick: {
                                                    alignWithLabel: true
                                                },
                                                splitLine: {
                                                    show: false
                                                },
                                                axisLabel: {
                                                    show: true
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
                                                minInterval:1,
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
                                                    color: '#b58531',
                                                    borderColor: '#feba01',
                                                    //opacity: 0.7,
                                                    borderWidth: 1
                                                },
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    color: '#ffffff',
                                                    fontSize: 12,
                                                    fontWeight: 'bold'
                                                },
                                                data: []
                                            },

                                        ]
                                    });
                                    pageNum++;
                                }
                            }

                        })
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            }
        },
        mounted() {
            this.queryData();
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    /*border: 1px solid red;*/
    height: 82%;
    .content-top{
      .top-main{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        .main{
          display: flex;
          justify-content: center;
          width: 25%;
          .block-item{
            background-image: url("../../assets/images/little-around.png");
            background-size: 100% 100%;
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            .item-left{
              width: 18px;
              height: 10px;
              background: #faab1b;
              border-radius: 1px;
              margin-right: 5px;
            }
            .item-right{
              font-size: 12px;
              color: #ffffff;
              opacity: 0.6;
            }
          }
        }
      }
      width: 100%;
      height: 20%;
    }
    .content-bottom{
      width: 100%;
      height: 90%;
    }
  }
</style>
