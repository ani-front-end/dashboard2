<template>
  <div class="content">
    <div class="content-left">
      <LegendNum :num=totalNum word="总数"></LegendNum>
    </div>
    <div class="content-right"   @mouseover="mouseOver()" @mouseout="mouseOut()">
      <Carousel v-model="value1"
                :autoplay=autoplay
                :autoplay-speed=autoplaySpeed
                arrow="never"
                :radius-dot=true
                height="1.42rem"
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
    </div>

  </div>
</template>
<script>
  import LegendNum from '../LegendNum'
  import properties from '../../services/properties'

  export default {
        data () {
            return {
                autoplay:true,
                autoplaySpeed:10000,
                pageNums:5,
                barWidth:40,
                barColor:'#fff',
                barBorderColor:'#fff',
                secondBarColor:'#fff',
                secondBarBorderColor:'#fff',


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
                            data: ['合成一营','合成二营','炮兵营','侦察营'],
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
                            barWidth: '10',
                            itemStyle: {
                                color: '#132f6a',
                                borderColor: '#47cdee',
                                borderWidth: 1,
                                opacity: 1
                            },
                            data: [3,2,5,2]
                        }
                    ]
                },
                value1: 0,
                options:[],
                totalNum:0
            }
        },
        components:{
            'LegendNum':LegendNum,
        },
        props: [
        ],
        mounted() {
            setTimeout(() => {
                //进行一级页面颜色动态配置

                this.autoplay=Boolean(properties.AUTO_PLAY);
                this.autoplaySpeed=Number(properties.CHANGE_TIME);
                this.pageNums=Number(properties.PAGE_NUMS)-1;
                this.barWidth=Number(properties.BAR_WIDTH);
                this.barColor=properties.BAR_COLOR;
                this.barBorderColor=properties.BAR_BORDER_COLOR;
                this.secondBarColor=properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor=properties.SECOND_BAR_BORDER_COLOR;
                this.queryData();
//                setInterval(() => {
//                    this.queryData();
//
//                },properties.QUERY_TIME_SPACE)
            },properties.LOOP_WAIT_TIME)

        },
        methods: {
            mouseOver(){
                this.autoplay=false;
            },
            mouseOut(){
                this.autoplay=true;
            },
            queryData(){
                this.value1=0;
                this.options = [];
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
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: this.barColor,
                                        borderColor: this.barBorderColor,
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

                        this.option.xAxis[0].data = [];
                        this.option.series[0].data = [];
                        Object.keys(data).forEach(p => {
                            if(p == 'allCount'){
//                                return true;
                            }else{
                                this.options[pageNum].xAxis[0].data.push(p);
                                this.options[pageNum].series[0].data.push(data[p]);
                                num++;
                                if(num>this.pageNums){
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
                                            minInterval:1,
                                            show: false,
                                            type: 'value',
                                            borderWidth: 0,

                                        },
                                        yAxis: {
                                            minInterval:1,
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
                                                barWidth: this.barWidth,
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
                                                    color:this.barColor,
                                                    borderColor:this.barBorderColor,
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
        computed: {
        }
    }
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    /*padding-left: 35%;*/
    height: 82%;
    width: 100%;
    display: flex;
    .content-left{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 44%;
      /*border: 1px solid grey;*/
    }
    .content-right{
      width: 70%;
      height: 100%;
      /*border: 1px solid grey;*/
    }
  }
  .ivu-carousel-list{
    height: 100% !important;
  }
</style>
