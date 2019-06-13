<template>
  <div class="content">
      <div class="content-left">
        <!--<chart  ref="chart1"-->
                <!--style="height:100%;width: 100%"-->
                <!--:options="option"-->
                <!--:autoresize=true-->
        <!--&gt;</chart>-->
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
                  <chart  ref="chart1"
                          style="height: 100%;width: 100%"
                          :options="item"
                          :autoresize=true
                          @click="onClick"
                  ></chart>
              </CarouselItem>
          </Carousel>
      </div>
      <div class="content-right">
          <div class="block">
              <div class="item" v-for="(item,index) in dataList" :key="index">
                  <div class="item-left" :style="{background:item.colorStyle}"></div>
                  <div class="item-right">{{item.word}}</div>
              </div>
          </div>
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
                      机关发现问题统计
                  </div>
              </div>
              <div class="dialog-bottom">
                  <div class="bottom-left">
                      <div class="left1"> {{name}}</div>
                      <div class="left2">({{seriesName}})</div>
                  </div>
                  <div class="bottom-center">

                  </div>
                  <div class="bottom-right">
                      <chart ref="chart1"
                             style="height: 100%;width: 100%"
                             :options="dialogOption"
                             :autoresize=true
                      ></chart>
                  </div>
              </div>
          </div>
      </el-dialog>
  </div>
</template>
<script>
    import properties from '../../services/properties'
    export default {
        data () {
            return {
                name:'',
                seriesName:'',
                centerDialogVisible:false,
                options:[],
                value1:0,
                option: {
                    color: ['#c09216','#c80813'],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            color: '#ffffff'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#333']
                            }
                        },
                    },
                    yAxis: {
                        minInterval:1,
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: ['#333']
                            }
                        },
                        data: ['涉案载体管理','枪支管理','车辆管理','人员管理'],
                    },
                    series: [
                        {
                            name: '系统检查',
                            type: 'bar',
                            barWidth: '20%',
                            data: [42, 32, 44, 23],
                            barMinHeight:3
                        },

                        {
                            name: '机关检查',
                            type: 'bar',
                            barWidth: '20%',
                            data: [13, 57, 34, 23],
                            barMinHeight:3
                        }
                    ]
                },
                dataList:[
                    {
                        colorStyle:'#c1951b',
                        word:'系统检查'
                    },
                    {
                        colorStyle:'#c90b18',
                        word:'机关检查'
                    }
                ],
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
        },
        methods:{
            openDialog(){
                this.centerDialogVisible = true
            },
            onClick(event) {
                console.log(event);
                let name = event.name;
                let seriesName = event.seriesName;
                if(name){
                    this.name = name;
                    this.seriesName = seriesName;
                    this.openDialog()
                    this.http.get(`${this.ports.second.officeFindSecond}/${seriesName}/${name}`, (res) => {
                        console.log('firstLeftMiddle')
                        console.log(res)
                        if(res.success){
                            let data = res.data;
                            this.dialogOption.xAxis[0].data=[];
                            this.dialogOption.series[0].data=[];
//
                            Object.keys(data).forEach(p => {
                                this.dialogOption.xAxis[0].data.push(p)
                                this.dialogOption.series[0].data.push(data[p])
                            })
                            this.dialogOption.series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
                            this.dialogOption.series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;

                            //                        let newOptions = Object.assign({},this.dialogOption);
                            //                        this.dialogOption = newOptions;
                        }
                    })
                }
            },
            queryData(){
                this.http.get(this.ports.manage.officeFind, (res) => {
                    console.log('firstLeftMiddle');
                    console.log(res);
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
                            color: ['#c09216','#c80813'],
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLabel: {
                                    color: '#ffffff'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: ['#333']
                                    }
                                },
                            },
                            yAxis: {
                                minInterval:1,
                                type: 'category',
                                axisLabel: {
                                    color: '#ffffff'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },
                                splitLine: {
                                    show: false,
                                    lineStyle: {
                                        color: ['#333']
                                    }
                                },
                                data: [],

                            },
                            series: [
                                {
                                    name: '系统检查',
                                    type: 'bar',
                                    barWidth: '20%',
                                    data: [],
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'right',
                                            color: '#fff',
                                            fontSize: 10
                                        }
                                    },

                                },

                                {
                                    name: '机关检查',
                                    type: 'bar',
                                    barWidth: '20%',
                                    data: [],
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'right',
                                            color: '#fff',
                                            fontSize: 10
                                        }
                                    },

                                }
                            ]
                        });

                        Object.keys(data.system).forEach(p => {
                            if(p == 'allCount'){
//                                return true;
                            }else{
                                this.options[pageNum].yAxis.data.push(p)    ;
                                this.options[pageNum].series[0].data.push(data.system[p]);
                                this.options[pageNum].series[1].data.push(data.office[p]);
                                num++;
                                if(num>3){
                                    num = 0;
                                    this.options.push({
                                        color: ['#c09216','#c80813'],
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLabel: {
                                                color: '#ffffff'
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#4e6590',
                                                    width: 1,
                                                    shadowColor: '#4e6590',
                                                    shadowBlur: 10
                                                }
                                            },
                                            splitLine: {
                                                show: true,
                                                lineStyle: {
                                                    color: ['#333']
                                                }
                                            },
                                        },
                                        yAxis: {
                                            minInterval:1,
                                            type: 'category',
                                            axisLabel: {
                                                color: '#ffffff'
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#4e6590',
                                                    width: 1,
                                                    shadowColor: '#4e6590',
                                                    shadowBlur: 10
                                                }
                                            },
                                            splitLine: {
                                                show: false,
                                                lineStyle: {
                                                    color: ['#333']
                                                }
                                            },
                                            data: [],
                                        },
                                        series: [
                                            {
                                                name: '系统检查',
                                                type: 'bar',
                                                barWidth: '20%',
                                                data: [],
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'right',
                                                        color: '#fff',
                                                        fontSize: 10
                                                    }
                                                },
                                            },

                                            {
                                                name: '机关检查',
                                                type: 'bar',
                                                barWidth: '20%',
                                                data: [],
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'right',
                                                        color: '#fff',
                                                        fontSize: 10
                                                    }
                                                },
                                            },

                                        ]
                                    })
                                    pageNum++;
                                }
                            }

                        })
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
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
    .bottom-left{
        align-items: center !important;
    }
    .left2{
        font-size: 0.3rem !important;
    }
  .content{
    height: 82%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content-left{
      height: 100%;
      width: 60%;
      /*border:1px solid grey;*/
    }
    .content-right{
      width: 30%;
      height: 40%;
        .block{
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
            .item{
                width: 70%;
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .item-left{
                    width: 25%;
                    height: 4px;
                }
                .item-right{
                    width: 70%;
                    height: 18px;
                    font-size: 12px !important;
                }
            }
        }
    }
  }
</style>
