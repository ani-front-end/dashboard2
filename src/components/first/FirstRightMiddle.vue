<template>
    <div class="content">
        <!--<h1>{{ msg }}</h1>-->
        <div class="content-top">
            <LegendNum :num=totalNum word="总数"></LegendNum>
        </div>
        <div class="content-bottom"   @mouseover="mouseOver()" @mouseout="mouseOut()">
            <Carousel v-model="value1"
                      :autoplay=autoplay
                      :autoplay-speed=autoplaySpeed
                      arrow="never"
                      :radius-dot=true
                      height="1.34rem"
                      style="height:100%;"
            >
                <CarouselItem style="" v-for="(item,index) in options" :key="index">
                    <chart ref="chart"
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
                        基层发现问题统计
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
    import LegendNum from '../LegendNum'
    import properties from '../../services/properties'

    export default {
        data () {
            return {
                name:'',
                value1: 0,
                option: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        //fontWeight: 'bold'
                    },
                    grid: {
                        top: '2%',
                        left: '25%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        //boundaryGap: [0, 0.01],
                        axisLabel: {
                            color: '#ffffff',
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
                        axisTick: {
                            show: true,
                            lineStyle: {
                                color: '#4e6590'
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },

                        //data: ['涉案载体管理','枪支管理','车辆管理','人员管理']
                    },
                    series: [
                        //人员管理
                        {
                            type: 'bar',
                            barGap: '170%',
                            barWidth: '8%',
                            data: [
                                {
                                    name: '',
                                    value: 16,
                                    itemStyle: {
                                        color: '#ab8640',
                                        barWidth: '10%',
                                        opacity: 0.9,
                                        borderColor: '#ffba01',
                                        barBorderRadius: 1
                                    },
                                    label: {
                                        normal: {
                                            formatter: '{cate|人员管理}\n{line|————}',
                                            show: true,
                                            position: 'left',
                                            rich: {
                                                cate: {
                                                    color: '#ffffff',
                                                    lineHeight: 15,
                                                    hight: 50
                                                },
                                                line: {
                                                    //backgroundColor:'#ffffff',
                                                    textBorderColor: '#ab8640',
                                                    lineHeight: 1,
                                                    align: 'right',
                                                    color: '#ab8640'
                                                }
                                            }
                                        }
                                    },

                                }
                            ],
                        },
                    ]
                },
                colorList: ['#ab8640', '#a81a5d', '#4624a9', '#0a79c7', '#ab8640', '#a81a5d', '#4624a9', '#0a79c7', '#ab8640', '#a81a5d', '#4624a9', '#0a79c7', '#ab8640', '#a81a5d', '#4624a9', '#0a79c7'],
                options: [],
                totalNum: 0,
                centerDialogVisible:false,
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
                dialogOptions:[],
                value2:0,


                autoplay:true,
                autoplaySpeed:10000,
                pageNums:5,
                barWidth:40,
                barColor:'#fff',
                barBorderColor:'#fff',
                secondBarColor:'#fff',
                secondBarBorderColor:'#fff',
                factColor:'#fff',
                factBorderColor:'#fff',
                shouldColor:'#fff',
                shouldBorderColor:'#fff'
            }
        },
        props: [
            'title',
        ],
        components: {
            'LegendNum': LegendNum
        },
        mounted() {
            setTimeout(() => {
                //进行一级页面颜色动态配置

                this.autoplay=Boolean(properties.BASIC_FIND_AUTO_PLAY);
                this.autoplaySpeed=Number(properties.OFFICE_PERSON_CHANGE_TIMES);
                this.pageNums=Number(properties.BASIC_FIND_NUMS)-1;
                this.barWidth=Number(properties.BASIC_FIND_BAR_WIDTH);

                this.barColor=properties.BAR_COLOR;
                this.barBorderColor=properties.BAR_BORDER_COLOR;
                this.secondBarColor=properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor=properties.SECOND_BAR_BORDER_COLOR;
                this.secondPageNums=Number(properties.SECOND_PAGE_NUMS)-1;

                this.queryData();
//                setInterval(() => {
//                    this.queryData();
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
            openDialog(){
                this.centerDialogVisible = true
            },
            onClick(event) {
                this.value2 = 0;
                console.log(event);
                let name = event.data.label.formatter.split('}')[0].split('|')[1];
                if(name){
                    this.name = name;

                    this.openDialog()
                    this.http.get(`${this.ports.second.basicFindSecond}/${name}`, (res) => {
                        console.log('firstRightMiddle')
                        console.log(res)
                        if(res.success){
                            let data = res.data;
                            let pageNum = 0;
                            let num = 0;
                            this.dialogOptions=[];
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
//
                            Object.keys(data).forEach(p => {
                                this.dialogOptions[pageNum].xAxis[0].data.push(p)
                                this.dialogOptions[pageNum].series[0].data.push(data[p])
                                num++;
                                if(num > this.secondPageNums) {
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
//                                this.dialogOptions[pageNum].series[0].itemStyle.color=properties.SECOND_BAR_COLOR;
//                                this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.SECOND_BAR_BORDER_COLOR;
                            })
                            if(this.dialogOptions[this.dialogOptions.length-1].xAxis[0].data.length == 0){
                                this.dialogOptions.pop();
                            }

                        }
                    })
                }
            },
            queryData(){
                this.value1=0;
                this.options = [];
                this.http.get(this.ports.manage.basicFind, (res) => {
                    if (res.success) {
                        let data = res.data;
                        let num = 0;
                        let pageNum = 0;
                        let originNum = 0;
                        this.options.push({
                            textStyle: {
                                fontFamily: 'Microsoft YaHei',
                                fontSize: 12,
                                //fontWeight: 'bold'
                            },
                            grid: {
                                top: '2%',
                                left: '25%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                minInterval:1,
                                type: 'value',
                                //boundaryGap: [0, 0.01],
                                axisLabel: {
                                    color: '#ffffff',
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
                                axisTick: {
                                    show: true,
                                    lineStyle: {
                                        color: '#4e6590'
                                    }
                                }
                            },
                            yAxis: {
                                minInterval:1,
                                type: 'category',
                                axisLabel: {
                                    color: '#ffffff',
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },

                                //data: ['涉案载体管理','枪支管理','车辆管理','人员管理']
                            },
                            series: [],
                        });
                        Object.keys(data).forEach(p => {
                            if (p == 'allCount') {
//                                return true;
                            }else{
                                console.log('pageNum')
                                console.log(pageNum)
//                            console.log('num')
//                            console.log(num)
                                this.options[pageNum].series.push({
                                    type: 'bar',
                                    barGap: '170%',
                                    barWidth: '8%',
                                    data: [
                                        {
                                            name: '',
                                            value: data[p],
                                            itemStyle: {
                                                color: this.colorList[originNum],
                                                barWidth: '10%',
                                                opacity: 0.9,
                                                borderColor: this.colorList[originNum],
                                                barBorderRadius: 1
                                            },
                                            label: {

                                                normal: {
                                                    formatter: '{cate|'+p+'}\n{line|————}',
                                                    show: true,
                                                    position: 'left',
                                                    rich: {
                                                        cate: {
                                                            color: '#ffffff',
                                                            lineHeight: 15,
                                                            hight: 50
                                                        },
                                                        line: {
                                                            //backgroundColor:'#ffffff',
                                                            textBorderColor: this.colorList[originNum],
                                                            lineHeight: 1,
                                                            align: 'right',
                                                            color: this.colorList[originNum]
                                                        }
                                                    }
                                                }
                                            },

                                        }
                                    ]
                                })
//                            this.options[pageNum].xAxis[0].data.push(p);
//                            this.options[pageNum].series[0].data.push(data[p]);
                                num++;

                                if(num>this.pageNums){
                                    num = 0;
                                    this.options.push({
                                        textStyle: {
                                            fontFamily: 'Microsoft YaHei',
                                            fontSize: 12,
                                            //fontWeight: 'bold'
                                        },
                                        grid: {
                                            top: '2%',
                                            left: '25%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis: {
                                            minInterval:1,
                                            type: 'value',
                                            //boundaryGap: [0, 0.01],
                                            axisLabel: {
                                                color: '#ffffff',
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
                                            axisTick: {
                                                show: true,
                                                lineStyle: {
                                                    color: '#4e6590'
                                                }
                                            }
                                        },
                                        yAxis: {
                                            minInterval:1,
                                            type: 'category',
                                            axisLabel: {
                                                color: '#ffffff',
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#4e6590',
                                                    width: 1,
                                                    shadowColor: '#4e6590',
                                                    shadowBlur: 10
                                                }
                                            },

                                            //data: ['涉案载体管理','枪支管理','车辆管理','人员管理']
                                        },
                                        series: []
                                    })
                                    pageNum++;
                                }
                                originNum++;
                            }

                        })
                        if(this.options[this.options.length-1].series.length == 0){
                            this.options.pop();
                        }
                        this.totalNum = data.allCount
                    }
//                    let newOptions = Object.assign({}, this.options);
//                    this.options = newOptions;
                })
            }
        },
        computed: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .bottom-left{
        align-items: center !important;
    }
    .content {
        position: relative;
        width: 100%;
        height: 85%;
        /*border: 1px solid grey;*/
        .content-top {
            width: 26%;
            height: 25%;
            margin-top: 5%;
            /*border: 1px solid grey;*/
            display: flex;
            justify-content: center;
        }
        .content-bottom {
            position: absolute;
            top:0;
            left: 15%;
            /*display: flex;*/
            /*justify-content: flex-end;*/
            width: 80%;
            height: 88%;
            /*border: 1px solid grey;*/
        }
    }
</style>
