<template>
  <div class="content">
    <!--<div class="content-left">-->
      <!--<LegendNum :num=totalNum word="总数"></LegendNum>-->
    <!--</div>-->
    <!--<div class="content-right"   @mouseover="mouseOver()" @mouseout="mouseOut()">-->
      <!--<Carousel v-model="value1"-->
                <!--:autoplay=autoplay-->
                <!--:autoplay-speed=autoplaySpeed-->
                <!--arrow="never"-->
                <!--:radius-dot=true-->
                <!--height="1.42rem"-->
                <!--style="height:100%;"-->

      <!--&gt;-->
        <!--<CarouselItem style="" v-for="(item,index) in options" :key="index">-->
          <chart  ref="chart"
                  style="height: 100%;width: 100%"
                  :options="option"
                  :autoresize=true
                  @click="onClick"
          ></chart>
        <!--</CarouselItem>-->

      <!--</Carousel>-->
    <!--</div>-->

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
                    title: {
                        text: '组织建设情况',
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['非党员','党员'],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    grid: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 20,
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : [],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#fff']
                                }
                            },
                            axisLine: {
                                lineStyle :{
                                    color : '#fff'
                                }
                            },
                        },

                    ],
                    yAxis : [
                        {
                            type : 'value',
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#fff']
                                }
                            },
                            axisLine: {
                                lineStyle :{
                                    color : '#fff'
                                }
                            },
                        }
                    ],
                    series : [
                        {
                            name:'非党员',
                            type:'bar',
                            stack:'1',
                            data:[],
                            label:{
                                normal:{
                                    show: true,
                                    distance: 20,
                                    position: 'bottom',
                                    formatter: '军官',
                                    fontSize: 12,
                                    rich: {
                                        name: {
                                            textBorderColor: '#fff'
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                color: '#cc99cc'
                            },
                        },
                        {
                            name:'党员',
                            type:'bar',
                            stack:'1',
                            data:[],
                            itemStyle: {
                                color: '#2af7fa'
                            },
                        },
                        {
                            name:'非党员',
                            type:'bar',
                            stack: '2',
                            data:[],
                            label:{
                                normal:{
                                    show: true,
                                    distance: 20,
                                    position: 'bottom',
                                    formatter: '士官',
                                    fontSize: 12,
                                    rich: {
                                        name: {
                                            textBorderColor: '#fff'
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                color: '#cc99cc'
                            },
                        },
                        {
                            name:'党员',
                            type:'bar',
                            stack: '2',
                            data:[],
                            itemStyle: {
                                color: '#2af7fa'
                            },
                        },
                        {
                            name:'非党员',
                            type:'bar',
                            stack: '3',
                            data:[],
                            label:{
                                normal:{
                                    show: true,
                                    distance: 20,
                                    position: 'bottom',
                                    formatter: '文职',
                                    fontSize: 12,
                                    rich: {
                                        name: {
                                            textBorderColor: '#fff'
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                color: '#cc99cc'
                            },

                        },
                        {
                            name:'党员',
                            type:'bar',
                            stack: '3',
                            data:[],
                            itemStyle: {
                                color: '#2af7fa'
                            },
                        },
                        {
                            name:'非党员',
                            type:'bar',
                            stack: '4',
                            data:[],
                            label:{
                                normal:{
                                    show: true,
                                    distance: 20,
                                    position: 'bottom',
                                    formatter: '义务兵',
                                    fontSize: 12,
                                    rich: {
                                        name: {
                                            textBorderColor: '#fff'
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                color: '#cc99cc'
                            },
                        },
                        {
                            name:'党员',
                            type:'bar',
                            stack: '4',
                            data:[],
                            itemStyle: {
                                color: '#2af7fa'
                            },
                        },

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
            this.queryData();
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
                // this.queryData();
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
                this.http.get(this.ports.five.rightTop, (res) => {
                    console.log('组织建设情况-fiveRightTop:',res);
                    if (res.error_msg == '成功') {
                        let data=res.data;
                        Object.keys(data).forEach(p=>{
                            this.option.xAxis[0].data.unshift(p);
                            if(data[p]['军官']!==undefined){
                                this.option.series[0].data.unshift(data[p]['军官']['非党员']);
                                this.option.series[1].data.unshift(data[p]['军官']['党员']);
                            }else {
                                this.option.series[0].data.unshift(0);
                                this.option.series[1].data.unshift(0);
                            }
                            if(data[p]['士官']!==undefined){
                                this.option.series[2].data.unshift(data[p]['士官']['非党员']);
                                this.option.series[3].data.unshift(data[p]['士官']['党员']);
                            }else {
                                this.option.series[2].data.unshift(0);
                                this.option.series[3].data.unshift(0);
                            }
                            if(data[p]['文职']!==undefined){
                                this.option.series[4].data.unshift(data[p]['文职']['非党员']);
                                this.option.series[5].data.unshift(data[p]['文职']['党员']);
                            }else{
                                this.option.series[4].data.unshift(0);
                                this.option.series[5].data.unshift(0);
                            }
                            if(data[p]['义务兵']!==undefined){
                                this.option.series[6].data.unshift(data[p]['义务兵']['非党员']);
                                this.option.series[7].data.unshift(data[p]['义务兵']['党员']);
                            }else {
                                this.option.series[6].data.unshift(0);
                                this.option.series[7].data.unshift(0);
                            }
                        });

                    }
                });
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
