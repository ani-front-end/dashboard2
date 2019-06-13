<template>
  <div class="content">
    <div class="content-top">
      <div class="conLeft">
        <div class="contop">
          <div class="toptxt">总数</div>
          <div class="conTxt">
            <LegendNum :num=total word=""></LegendNum>
          </div>
        </div>
        <div class="conbot">
          <div class="leftinfo"><infoNum :nums=shangcanTotal words="伤残疾病"></infoNum></div>
          <div class="leftinfo"><infoNum :nums=zhiliuTotal words="滞留部队"></infoNum></div>
          <div class="leftinfo"><infoNum :nums=shikongTotal words="失管失控"></infoNum></div>
        </div>
      </div>
      <div class="conRight">
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
          <!--<CarouselItem style="">-->
            <chart  ref="chart"
                    style="height: 64%;width: 100%"
                    :options="item"
                    :autoresize=true
            ></chart>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div class="content-bottom">

    </div>
  </div>
</template>
<script>
    import LegendNum from '../LegendNum'
    import infoNum from '../infoNum'
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
                    legend:{
                        show:true,
                        bottom:0,
//                        backgroundColor:'#182e67',
//                        padding:[5,15,5,15],
                        textStyle:{
                            color:'#ffffff',
                            fontSize:12
                        },
                    },
                    grid: {
                        //type: 'dotted',
//                        left: '3%',
//                        right: '4%',
//                        bottom: '20%',
                        borderColor: '#1b3970',
                        borderWidth: 1,
                        borderType: 'dotted',
                        containLabel: true,
                            //type: 'dotted',
                            x: 10,
                            y: 0,
                            x2: 0,
                            y2: 25
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['一营','二营','三营', '四营'],
                            axisTick: {
                                show: false,
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                padding: [3, 3, 3, 3],
                                backgroundColor:'#1175cd',
                                borderColor: '#00ddff',
                                borderWidth: 1,
                                width: '300%',
                                show: true,
                                color: '#edf1f4',
                                fontSize: 14,
                                //rotate: 45,
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ffffff',
                                    width: 1,
                                    shadowColor: '#ffffff',
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
                                show: false,
                                color: '#edf1f4',
                                fontSize: 10,
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#edf1f4',
                                    width: 1,
                                    shadowColor: '#edf1f4',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name:'伤病残疾',
                            type: 'bar',
                            barWidth: '10%',

                            barGap: '50%',
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 18,
                                fontWeight: 'bold'
                            },
                            itemStyle: {
                                color: '#4fbed0',
                                barBorderRadius:[1, 1, 0, 0],
                                borderColor: '#62ddff',
                                borderWidth: 1,
                                opacity: 0.7
                            },
                            data: [4, 2, 3, 7]
                        },
                        {
                            name:'滞留部队',
                            type: 'bar',
                            barWidth: '10%',
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 18,
                                fontWeight: 'bold'
                            },
                            itemStyle: {
                                color: '#b78939',
                                barBorderRadius:[1, 1, 0, 0],
                                borderColor: '#b78939',
                                borderWidth: 1,
                                opacity: 0.7
                            },
                            data: [1, 7, 2, 4]
                        },
                        {
                            name:'失管失控',
                            type: 'bar',
                            barWidth: '10%',
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 18,
                                fontWeight: 'bold'
                            },
                            itemStyle: {
                                color: '#a62385',
                                barBorderRadius:[1, 1, 0, 0],
                                borderColor: '#ee0a95',
                                borderWidth: 1,
                                opacity: 0.7
                            },
                            data: [1, 5, 3, 6]
                        },

                    ]
                },
                options:[],
                shangcanTotal:0,
                shikongTotal:0,
                zhiliuTotal:0,
                total:0
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.focusOnPersonnel, (res) => {
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
                            legend:{
                                show:true,
                                bottom:0,
//                        backgroundColor:'#182e67',
//                        padding:[5,15,5,15],
                                textStyle:{
                                    color:'#ffffff',
                                    fontSize:12
                                },
                            },
                            grid: {
                                //type: 'dotted',
//                        left: '3%',
//                        right: '4%',
//                        bottom: '20%',
                                borderColor: '#1b3970',
                                borderWidth: 1,
                                borderType: 'dotted',
                                containLabel: true,
                                //type: 'dotted',
                                x: 10,
                                y: 10,
                                x2: 0,
                                y2: 25
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: [],
                                    axisTick: {
                                        show: false,
                                        alignWithLabel: true
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        padding: [3, 3, 3, 3],
                                        backgroundColor:'#1175cd',
                                        borderColor: '#00ddff',
                                        borderWidth: 1,
                                        width: '300%',
                                        show: true,
                                        color: '#edf1f4',
                                        fontSize: 14,
                                        //rotate: 45,
                                    },
                                    axisLine: {
                                        show: false,
                                        lineStyle: {
                                            color: '#ffffff',
                                            width: 1,
                                            shadowColor: '#ffffff',
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
                                        show: false,
                                        color: '#edf1f4',
                                        fontSize: 10,
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: false,
                                        lineStyle: {
                                            color: ['#333']
                                        }
                                    },
                                    axisLine: {
                                        show: false,
                                        lineStyle: {
                                            color: '#edf1f4',
                                            width: 1,
                                            shadowColor: '#edf1f4',
                                            shadowBlur: 10
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name:'伤病残疾',
                                    type: 'bar',
                                    barWidth: '10%',

                                    barGap: '50%',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        color: '#ffffff',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    },
                                    itemStyle: {
                                        color: '#4fbed0',
                                        barBorderRadius:[1, 1, 0, 0],
                                        borderColor: '#62ddff',
                                        borderWidth: 1,
                                        opacity: 0.7
                                    },
                                    data: []
                                },
                                {
                                    name:'滞留部队',
                                    type: 'bar',
                                    barWidth: '10%',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        color: '#ffffff',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    },
                                    itemStyle: {
                                        color: '#b78939',
                                        barBorderRadius:[1, 1, 0, 0],
                                        borderColor: '#b78939',
                                        borderWidth: 1,
                                        opacity: 0.7
                                    },
                                    data: []
                                },
                                {
                                    name:'失管失控',
                                    type: 'bar',
                                    barWidth: '10%',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        color: '#ffffff',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    },
                                    itemStyle: {
                                        color: '#a62385',
                                        barBorderRadius:[1, 1, 0, 0],
                                        borderColor: '#ee0a95',
                                        borderWidth: 1,
                                        opacity: 0.7
                                    },
                                    data: []
                                },

                            ]
                        });
                        this.shangcanTotal = data.disabilitySum;
                        this.zhiliuTotal = data.troopsInDetentionSum;
                        this.shikongTotal = data.loseManageSum;
                        this.total = data.sum;
                        Object.keys(data).forEach(p => {
                            if(p == 'loseManageSum' || p == 'sum' || p == 'disabilitySum' || p == 'troopsInDetentionSum'){
//                                return true;
                            }else{
                                this.options[pageNum].xAxis[0].data.push(p);
                                this.options[pageNum].series[0].data.push(data[p].disability);
                                this.options[pageNum].series[1].data.push(data[p].troopsInDetention);
                                this.options[pageNum].series[2].data.push(data[p].loseManage);
                                console.log(num)
                                num++;

                                if(num==2){
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
                                        legend:{
                                            show:true,
                                            bottom:0,
//                        backgroundColor:'#182e67',
//                        padding:[5,15,5,15],
                                            textStyle:{
                                                color:'#ffffff',
                                                fontSize:12
                                            },
                                        },
                                        grid: {
                                            //type: 'dotted',
//                        left: '3%',
//                        right: '4%',
//                        bottom: '20%',
                                            borderColor: '#1b3970',
                                            borderWidth: 1,
                                            borderType: 'dotted',
                                            containLabel: true,
                                            //type: 'dotted',
                                            x: 10,
                                            y: 10,
                                            x2: 0,
                                            y2: 25
                                        },
                                        xAxis: [
                                            {
                                                type: 'category',
                                                data: [],
                                                axisTick: {
                                                    show: false,
                                                    alignWithLabel: true
                                                },
                                                splitLine: {
                                                    show: false
                                                },
                                                axisLabel: {
                                                    padding: [3, 3, 3, 3],
                                                    backgroundColor:'#1175cd',
                                                    borderColor: '#00ddff',
                                                    borderWidth: 1,
                                                    width: '300%',
                                                    show: true,
                                                    color: '#edf1f4',
                                                    fontSize: 14,
                                                    //rotate: 45,
                                                },
                                                axisLine: {
                                                    show: false,
                                                    lineStyle: {
                                                        color: '#ffffff',
                                                        width: 1,
                                                        shadowColor: '#ffffff',
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
                                                    show: false,
                                                    color: '#edf1f4',
                                                    fontSize: 10,
                                                },
                                                axisTick: {
                                                    show: false
                                                },
                                                splitLine: {
                                                    show: false,
                                                    lineStyle: {
                                                        color: ['#333']
                                                    }
                                                },
                                                axisLine: {
                                                    show: false,
                                                    lineStyle: {
                                                        color: '#edf1f4',
                                                        width: 1,
                                                        shadowColor: '#edf1f4',
                                                        shadowBlur: 10
                                                    }
                                                }
                                            }
                                        ],
                                        series: [
                                            {
                                                name:'伤病残疾',
                                                type: 'bar',
                                                barWidth: '10%',

                                                barGap: '50%',
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    color: '#ffffff',
                                                    fontSize: 18,
                                                    fontWeight: 'bold'
                                                },
                                                itemStyle: {
                                                    color: '#4fbed0',
                                                    barBorderRadius:[1, 1, 0, 0],
                                                    borderColor: '#62ddff',
                                                    borderWidth: 1,
                                                    opacity: 0.7
                                                },
                                                data: []
                                            },
                                            {
                                                name:'滞留部队',
                                                type: 'bar',
                                                barWidth: '10%',
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    color: '#ffffff',
                                                    fontSize: 18,
                                                    fontWeight: 'bold'
                                                },
                                                itemStyle: {
                                                    color: '#b78939',
                                                    barBorderRadius:[1, 1, 0, 0],
                                                    borderColor: '#b78939',
                                                    borderWidth: 1,
                                                    opacity: 0.7
                                                },
                                                data: []
                                            },
                                            {
                                                name:'失管失控',
                                                type: 'bar',
                                                barWidth: '10%',
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    color: '#ffffff',
                                                    fontSize: 18,
                                                    fontWeight: 'bold'
                                                },
                                                itemStyle: {
                                                    color: '#a62385',
                                                    barBorderRadius:[1, 1, 0, 0],
                                                    borderColor: '#ee0a95',
                                                    borderWidth: 1,
                                                    opacity: 0.7
                                                },
                                                data: []
                                            },

                                        ]
                                    });
                                    pageNum++;
                                }
                            }


                        })
                        if(this.options[this.options.length-1].series[0].data.length == 0){
                                                    this.options.pop();

                        }


                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            }
        },
        components:{
            'LegendNum':LegendNum,
            'infoNum':infoNum
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
    width: 100%;
    display: flex;
    .content-top{
      width: 100%;
      height: 100%;
      /*border: 1px solid pink;*/
      display: flex;
      .conLeft{
        width:35%;
        height:100%;
        /*border: 1px solid green;*/
        .contop{
          display: flex;
          height: 40%;
          justify-content: center;
          .toptxt{
            display: flex;
            align-items: center;
            height: 100%;
            /*border: 1px solid black;*/
            font-size: 0.12rem;
            width: 30%;
          }
          .conTxt{
            margin-top: 5%;
            height: 100%;
            /*border: 1px solid pink;*/
          }
        }
        .conbot{
          flex-wrap: wrap;
          width: 100%;
          /*border: 1px solid black;*/
          display: flex;
          height: 70%;
          .leftinfo{
            width:50%;
            height:25%;
          }
        }
      }
      .conRight{
        width:300px;
        /*width: 50%;*/
        height:100%;
        /*border: 1px solid grey;*/
      }
    }
    .content-bottom{

    }

  }

</style>
