<template>
    <div class="content" style="position: relative">
        <div class="content-left">
            <chart ref="chart1"
                   style="height: 100%;width: 100%"
                   :options="orgOptions"
                   :autoresize=true
                   @click="onClick"
            ></chart>
        </div>
        <div class="content-right">
            <div class="item" v-for="(item,index) in tempData" :key="index">
                <div class="item-left">{{item.name}}:</div>
                <div class="item-left">{{item.value}}</div>
                <div class="item-center" :style="{background:item.colorStyle}"></div>
                <div class="item-right">{{item.desc}}</div>
            </div>
        </div>
        <img style="position: absolute;bottom:0px;left:-2px;" src="../../assets/images/left-bottom.png" alt="">
        <img style="position: absolute;bottom:0px;right:-2px;" src="../../assets/images/right-bottom.png" alt="">
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
                                问题管理状态
                            </div>
                        </div>
                        <div class="dialog-bottom">
                            <div class="bottom-left">
                                <div class="left1"> {{name}}</div>
                                <div class="left2">检查情况</div>
                            </div>
                            <div class="bottom-center">

                            </div>
                            <div class="bottom-right">
                                <Carousel v-model="value2"
                                          :autoplay=false
                                          :autoplay-speed=5000
                                          arrow="never"
                                          :radius-dot=true
                                          height="1.42rem"
                                          loop
                                          style="height:100%;"

                                >
                                    <CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">
                                        <chart ref="chart1"
                                               style="height: 100%;width: 100%"
                                               :options="item"
                                               :autoresize=true
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
    export default {
        data () {
            return {
                centerDialogVisible: false,
                orgOptions: {
                    color:[],
                    title: {
                        text: "0",
                        textStyle: {
                            color: '#00d8ff',
                            fontSize: 39,
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
                            color: '#06dfff',
                            type:'pie',
                            radius: ['30%', '35%'],
                            data: [{value: 100, name: ''}],
                            avoidLabelOverlap: false,
                            label:{
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: false,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                        },
                        {
                            name:'',
                            type:'pie',
                            radius: ['45%', '60%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                opacity: 0.7
                            },
                            label: {
                                fontSize:30
                            },
                            labelLine:{
                                show:true,
                                length:50
                            },
//                            label: {
//                                normal: {
//                                    formatter: '{b|{b}：\n}{c}\n\n  ',
//                                    backgroundColor: {
//                                        image: '/img/center-top-bg1.png'
//                                    },
//                                    borderColor: '#aaa',
//                                    borderWidth: 1,
//                                    borderRadius: 4,
//                                    // shadowBlur:3,
//                                    // shadowOffsetX: 2,
//                                    // shadowOffsetY: 2,
//                                    // shadowColor: '#999',
//                                    // padding: [0, 7],
//                                    rich: {
//                                        a: {
//                                            color: '#999',
//                                            lineHeight: 22,
//                                            align: 'center'
//                                        },
//                                        // abg: {
//                                        //     backgroundColor: '#333',
//                                        //     width: '100%',
//                                        //     align: 'right',
//                                        //     height: 22,
//                                        //     borderRadius: [4, 4, 0, 0]
//                                        // },
//                                        hr: {
//                                            borderColor: '#aaa',
//                                            width: '100%',
//                                            borderWidth: 0.5,
//                                            height: 0
//                                        },
//                                        b: {
//                                            fontSize: 16,
//                                            lineHeight: 33
//                                        },
//                                        per: {
//                                            color: '#eee',
//                                            backgroundColor: '#334455',
//                                            padding: [2, 4],
//                                            borderRadius: 2
//                                        }
//                                    }
//                                }
//                            },
                            data:[]
                        }
                    ]
                },
                colorList:['#01deff','#b401ff','#ff019c','#ffba01','#ff9933','#cc6699','#66cc33','#6666cc'],
                letterList:['A','B','C','D','E','F','G','H','I','J','K',"L"],
                tempData:[
//                    {value:335, name:'A', desc:'人员管理',colorStyle:'#01deff', itemStyle: {borderColor:'#01deff', opacity: 0.7}},
//                    {value:310, name:'B', desc:'枪弹管理',colorStyle:'#b401ff', itemStyle: {borderColor:'#b401ff', opacity: 0.7}},
//                    {value:234, name:'C', desc:'车辆管理',colorStyle:'#ff019c', itemStyle: {borderColor:'#ff019c', opacity: 0.7}},
//                    {value:135, name:'D', desc:'涉密载体管理',colorStyle:'#ffba01', itemStyle: {borderColor:'#ffba01', opacity: 0.7}},
                ],
                originData:{
                    '人员管理':135,
                    '枪弹管理':310,
                    '车辆管理':234,
                    '涉密载体管理':244,
                },
                dialogOptions:[],
                value2:0,
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
                name:'',
                value1:0
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
        },
        methods: {
            openDialog(){
                this.centerDialogVisible = true
            },
            onReady(instance) {
                console.log(instance);
            },
            onClick(event, instance, echarts) {
                this.value2 = 0;
                console.log(event);
                let name = event.data.desc;
                if(name){
                    this.name = name;
                    this.openDialog()
                    this.http.get(`${this.ports.second.allProblemSecond}/${name}`, (res) => {
                        if(res.success){
                            let data = res.data;
                            let pageNum = 0;
                            let num = 0;
                            this.dialogOptions=[];
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
                            })


                            Object.keys(data).forEach(p => {
                                this.dialogOptions[pageNum].xAxis[0].data.push(p);
                                this.dialogOptions[pageNum].series[0].data.push(data[p]);
//                                this.dialogOption.xAxis[0].data.push(p)
//                                this.dialogOption.series[0].data.push(data[p])
                                num++;
                                if(num > 3){
                                    num=0;
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
                                    })
                                    pageNum++;
                                }
                                this.dialogOptions[pageNum].series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
                                this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;
                            })
                            if(this.dialogOptions[this.dialogOptions.length-1].xAxis[0].data.length == 0){
                                this.dialogOptions.pop();
                            }

//                                this.dialogOption.series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
//                                this.dialogOption.series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;

    //                        let newOptions = Object.assign({},this.dialogOption);
    //                        this.dialogOption = newOptions;
                        }
                    })
                }
            },
          queryData(){
              this.http.get(this.ports.manage.allProblem, (res) => {
                  if(res.success){
                      let num = 0;
                      let data = res.data;
                      Object.keys(data).forEach(p => {
                          //暂时设置的最多条数
                          if(num>9){
//                              return true;
                          }else{
                              let item = {value:data[p], name:this.letterList[num], desc:p,colorStyle:this.colorList[num]};
                              //图例显示
                              if(p != 'allCount') {
                                  this.tempData.push(item)
                                  num++;
                              }
                              //图表显示
                              if(p != 'allCount' && data[p] != 0) {
                                  this.orgOptions.series[1].data.push(item)
                              }
                              this.orgOptions.color.push(this.colorList[num]);
                          }
//                          let item = {value:data[p], name:this.letterList[num], desc:p,colorStyle:this.colorList[num], itemStyle: {borderColor:this.colorList[num], opacity: 0.7}};



                      })
//                      let newOptions = Object.assign({},this.orgOptions);
//                      this.orgOptions = newOptions;
                      this.orgOptions.title.text=data.allCount;
                  }
              });

          }
        },
        computed: {}
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .bottom-right{
        height: 100% !important;
    }
    .content {
        height: 91.2%;
        width: 100%;
        position: relative;
        .content-left{
            height: 100%;
            width: 100%;
        }
        .content-right{
            position: absolute;
            right:0;
            top:0;
            width: 30%;
            height: 100%;
            /*border: 1px solid black;*/
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .item{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 0.1rem;
                .item-left{
                    margin-left: 5%;
                }
                .item-center{
                    margin-left: 5%;
                    width: 15%;
                    height: 40%;
                    background: #01deff;
                }
                .item-right{
                    margin-left: 5%;
                    width: 40%;
                }
                width: 70%;
                height: 10%;
                /*border: 1px solid green;*/
            }
        }
    }
</style>
