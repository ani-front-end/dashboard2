<template>
  <div class="content">
    <div class="content-left">
      <LegendNum :num=totalNum word="总数"></LegendNum>
    </div>
    <div class="content-right" @mouseover="mouseOver()" @mouseout="mouseOut()">
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
    <el-dialog
            title="11"
            :visible.sync="centerDialogVisible"
            width="60%"
            center>
      <div class="dialog-content" style="position: relative">
        <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer" class="close2" width="40" src="../../assets/images/close2.png" alt="">
        <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer" class="close1" width="40" src="../../assets/images/close1.png" alt="">

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

                totalNum:0,
                option: {
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
                        x:50,
                        y:20,
                        x2:1,
                        y2:50
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
                            data: [3,2]
                        }
                    ]
                },
                value1: 0,
                value2: 0,
                pages:5,
                options:[],
                centerDialogVisible:false,
                name:'',
                dialogOptions:[],
                dialogOption:{
                    textStyle: {
                        fontFamily: 'monospace',
                    },

                    grid: {
                        x:50,
                        y:20,
                        x2:1,
                        y2:100
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
                            data: [3,2],
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
        components:{
            'LegendNum':LegendNum,
        },
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
//                },properties.QUERY_TIME_SPACE)
            },properties.LOOP_WAIT_TIME)

        },
        methods:{
            openDialog(){
                this.centerDialogVisible = true
            },
            mouseOver(){
                this.autoplay=false;
            },
            mouseOut(){
                this.autoplay=true;
            },
            onClick(event) {
                this.value2 = 0;
                console.log(event);
                let name = event.name;
                if(name){
                    this.name = name;
                    this.openDialog()
                    this.http.get(`${this.ports.second.officeDutyProblemSecond}/${name}`, (res) => {
                        console.log('firstLeftTop')
                        console.log(res)
                        this.dialogOptions=[];
                        if(res.success){
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
                                    x:50,
                                    y:20,
                                    x2:1,
                                    y2:100
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
                                        minInterval:1,
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
                                if(p == 'allCount'){

                                }else{
                                    this.dialogOptions[pageNum].xAxis[0].data.push(p);
                                    this.dialogOptions[pageNum].series[0].data.push(data[p]);
//                                this.dialogOption.xAxis[0].data.push(p)
//                                this.dialogOption.series[0].data.push(data[p])
                                    num++;
                                    console.log(num)
                                    if(num > this.pageNums) {
                                        num = 0;
                                        this.dialogOptions.push({
                                            textStyle: {
                                                fontFamily: 'monospace',
                                            },

                                            grid: {
                                                x:50,
                                                y:20,
                                                x2:1,
                                                y2:100
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
                                                    minInterval:1,
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
                            if(this.dialogOptions[this.dialogOptions.length-1].xAxis[0].data.length == 0){
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
            queryData(){
                this.value1 = 0;
                this.options= [];
                this.http.get(this.ports.manage.officeDutyProblem, (res) => {
                    console.log('res')
                    console.log(res)
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
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
                                    type: 'bar',
                                    barWidth: this.barWidth,
                                    itemStyle: {
                                        color: this.barColor,
                                        borderColor: this.barBorderColor,
                                        borderWidth: 1,
                                        //opacity: 0.28
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
                        Object.keys(data).forEach(p => {
                            if(p == 'allCount'){
//                                return true
                            }else{
                                num++;
                                this.options[pageNum].xAxis[0].data.push(p);
                                this.options[pageNum].series[0].data.push(data[p]);
                                if(num>this.pageNums){
                                    num = 0;
                                    this.options.push({
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
                                                type: 'bar',
                                                barWidth: this.barWidth,
                                                itemStyle: {
                                                    color: this.barColor,
                                                    borderColor: this.barBorderColor,
                                                    borderWidth: 1,
                                                    //opacity: 0.28
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
                            }
//                            this.option.xAxis[0].data.push(p);
//                            this.option.series[0].data.push(data[p]);

                        });
                        this.totalNum = data.allCount;
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
  .left1{
    font-size: 0.3rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .content{
    height: 82%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .content-left{
      width: 26%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      /*border: 1px solid grey;*/
    }
    .content-right{
      height: 100%;
      width: 70%;
      /*border: 1px solid grey;*/
    }
  }
  .ivu-carousel-list{
    height: 100% !important;
  }
  .content-right :hover{

  }
</style>
