<template>
  <div class="content" style="position: relative">
    <div class="content-left">
      <Carousel v-model="value1"
                :autoplay=true
                :autoplay-speed=5000
                arrow="never"
                :radius-dot=true
                height="2.52rem"
                style="height:100%;width: 5rem"

      >
        <!--<CarouselItem class="" style="height:3rem;">-->
        <CarouselItem style="" v-for="(item,index) in options" :key="index" >
          <chart  ref="chart"
                  style="height: 100%;width: 100%"
                  :options="item"
                  :autoresize=true
          ></chart>
        </CarouselItem>
      </Carousel>

    </div>
    <div class="content-right" :style="{height:`${dataList.length*7.5}%`}">
      <LegendBlockSecond heightStyle=4 :dataList="dataList"></LegendBlockSecond>
    </div>
    <img style="position: absolute;bottom:-5px;left:-2px;" src="../../assets/images/left-bottom.png" alt="">
    <img style="position: absolute;bottom:-5px;right:-2px;" src="../../assets/images/right-bottom.png" alt="">
  </div>
</template>
<script>
    import LegendBlockSecond from '../LegendBlockSecond'
    import properties from "../../services/properties";
    export default {
        data () {
            return {
                value1:0,
                option: {
                    // legend: {},
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        //fontWeight: 'bold'
                    },
                    tooltip: {},
                    dataset: {
                        dimensions: ['product', '人员管理', '车辆管理', '枪弹管理', '涉密载体管理'],
                        source: [
                            {product: '一营', '人员管理': 83.1, '车辆管理':200.4, '枪弹管理': 55.1, '涉密载体管理': 93.7},
                            {product: '二营', '人员管理': 86.4, '车辆管理': 65.2, '枪弹管理': 82.5, '涉密载体管理': 93.7},
                            {product: '三营', '人员管理': 72.4, '车辆管理': 53.9, '枪弹管理': 39.1, '涉密载体管理': 93.7},
                            {product: '四营', '人员管理': 43.3, '车辆管理': 200.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
                            {product: '五营', '人员管理': 140.3, '车辆管理': 85.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
                            {product: '六营', '人员管理': 43.3, '车辆管理': 85.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        show: true,

                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        axisLabel: {
                            color: '#ffffff',
                            fontSize: 10,
                        },

                    },
                    yAxis: {
                        minInterval:1,
                        type: "value",
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#333']
                            }
                        },
                        axisLabel: {
                            color: '#ffffff',
                            fontSize: 10,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },

                    },
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {
                            type: 'bar',
                            itemStyle: {
                                color: '#fb0d7d',
                                opacity:0.5,
                                borderColor: '#ff019c',
                                borderWidth: 1
                            }
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: '#feb529',
                                opacity:0.5,
                                borderColor: '#ffba01',
                                borderWidth: 1
                            }


                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: '#0c9afd',
                                opacity:0.5,
                                borderColor: '#01deff',
                                borderWidth: 1
                            }

                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: '#bf29fe',
                                opacity:0.5,
                                borderColor: '#b401ff',
                                borderWidth: 1
                            }

                        },
                    ]
                },
                dataList:[],
                colorList:['#fb0d7d', '#feb529', '#0c9afd', '#bf29fe','#4169E1', '00FFFF', '#FFFFF0', '#DEB887'],
                options:[],

            }
        },
        components:{
            'LegendBlockSecond':LegendBlockSecond
        },
        props: [
        ],
        mounted(){
            //先关闭定时刷新
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
//                this.option.dataset.dimensions= [];
//                this.dataList = [];
//                this.option.series = [];
//                this.option.dataset.source = [];
                this.options = [];
                this.dataList = [];
                this.http.get(this.ports.manage.differentProblem, (res) => {
                    console.log('res')
                    console.log(res)
                    if(res.success){
                        let data = res.data;
                        console.log('data')
                        console.log(data)
                        let problemList = data.problemList;
                        let num = 0;
                        let pageNum = 0;
                        this.options.push({
                            // legend: {},
                            textStyle: {
                                fontFamily: 'Microsoft YaHei',
                                fontSize: 12,
                                //fontWeight: 'bold'
                            },
                            grid:{
                                x:50,
                                y:50,
                                x1:10,
                                y2:20
                            },
                            tooltip: {},
                            dataset: {
                                dimensions: [],
                                source: [
//                            {product: '一营', '人员管理': 83.1, '车辆管理':2000.4, '枪弹管理': 55.1, '涉密载体管理': 93.7},
//                            {product: '二营', '人员管理': 86.4, '车辆管理': 65.2, '枪弹管理': 82.5, '涉密载体管理': 93.7},
//                            {product: '三营', '人员管理': 72.4, '车辆管理': 53.9, '枪弹管理': 39.1, '涉密载体管理': 93.7},
//                            {product: '四营', '人员管理': 43.3, '车辆管理': 200.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
//                            {product: '五营', '人员管理': 140.3, '车辆管理': 85.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
//                            {product: '六营', '人员管理': 43.3, '车辆管理': 85.8, '枪弹管理': 93.7, '涉密载体管理': 93.7},
                                ]
                            },
                            xAxis: {
                                type: 'category',
                                show: true,

                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },
                                axisLabel: {
                                    color: '#ffffff',
                                    fontSize: 10,
                                },

                            },
                            yAxis: {
                                minInterval:1,
                                type: "value",
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: ['#333']
                                    }
                                },
                                axisLabel: {
                                    color: '#ffffff',
                                    fontSize: 10,
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#4e6590',
                                        width: 1,
                                        shadowColor: '#4e6590',
                                        shadowBlur: 10
                                    }
                                },

                            },
                            // Declare several bar series, each will be mapped
                            // to a column of dataset.source by default.
                            series: [
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        color: '#fb0d7d',
                                        opacity:0.5,
                                        borderColor: '#ff019c',
                                        borderWidth: 1
                                    }
                                },
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        color: '#feb529',
                                        opacity:0.5,
                                        borderColor: '#ffba01',
                                        borderWidth: 1
                                    }


                                },
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        color: '#0c9afd',
                                        opacity:0.5,
                                        borderColor: '#01deff',
                                        borderWidth: 1
                                    }

                                },
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        color: '#bf29fe',
                                        opacity:0.5,
                                        borderColor: '#b401ff',
                                        borderWidth: 1
                                    }

                                },
                            ]
                        });
                        this.options[0].dataset.dimensions.push('product')
                        problemList.forEach(p => {
                            this.options[0].dataset.dimensions.push(p);
                        })
                        Object.keys(problemList).forEach(p => {
                            if(p == 'problemList'){
//                                return true;
                            }else {
                                this.dataList.push({
                                    colorStyle: this.colorList[num],
                                    opacityStyle: 0.45,
                                    word: problemList[p].replace('四管二五自行',''),
                                })
//                                this.options[pageNum].series.push({
//                                    type: 'bar',
//                                    itemStyle: {
//                                        color: this.colorList[num],
//                                        opacity: 0.5,
//                                        borderColor: this.colorList[num],
//                                        borderWidth: 1
//                                    },
//                                })
                                num++;
                                if (num > 3) {
                                    num = 0;
                                    this.options.push({
                                        // legend: {},
                                        textStyle: {
                                            fontFamily: 'Microsoft YaHei',
                                            fontSize: 12,
                                            //fontWeight: 'bold'
                                        },
                                        grid: {
                                            x:50,
                                            y:50,
                                            x1:10,
                                            y2:20
                                        },
                                        tooltip: {},
                                        dataset: {
                                            dimensions: [],
                                            source: [
                                            ]
                                        },
                                        xAxis: {
                                            type: 'category',
                                            show: true,

                                            axisLine: {
                                                lineStyle: {
                                                    color: '#4e6590',
                                                    width: 1,
                                                    shadowColor: '#4e6590',
                                                    shadowBlur: 10
                                                }
                                            },
                                            axisLabel: {
                                                color: '#ffffff',
                                                fontSize: 10,
                                            },

                                        },
                                        yAxis: {
                                            minInterval:1,
                                            type: "value",
                                            splitLine: {
                                                show: true,
                                                lineStyle: {
                                                    color: ['#333']
                                                }
                                            },
                                            axisLabel: {
                                                color: '#ffffff',
                                                fontSize: 10,
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#4e6590',
                                                    width: 1,
                                                    shadowColor: '#4e6590',
                                                    shadowBlur: 10
                                                }
                                            },

                                        },
                                        // Declare several bar series, each will be mapped
                                        // to a column of dataset.source by default.
                                        series: [
                                            {
                                                type: 'bar',
                                                itemStyle: {
                                                    color: '#fb0d7d',
                                                    opacity:0.5,
                                                    borderColor: '#ff019c',
                                                    borderWidth: 1
                                                }
                                            },
                                            {
                                                type: 'bar',
                                                itemStyle: {
                                                    color: '#feb529',
                                                    opacity:0.5,
                                                    borderColor: '#ffba01',
                                                    borderWidth: 1
                                                }


                                            },
                                            {
                                                type: 'bar',
                                                itemStyle: {
                                                    color: '#0c9afd',
                                                    opacity:0.5,
                                                    borderColor: '#01deff',
                                                    borderWidth: 1
                                                }

                                            },
                                            {
                                                type: 'bar',
                                                itemStyle: {
                                                    color: '#bf29fe',
                                                    opacity:0.5,
                                                    borderColor: '#b401ff',
                                                    borderWidth: 1
                                                }

                                            },
                                        ]
                                    });
                                    pageNum++;
                                    this.options[pageNum].dataset.dimensions.push('product')
                                    problemList.forEach(p => {
                                        this.options[pageNum].dataset.dimensions.push(p);
                                    })
                                }
                            }

                        })
                        let num1 = 0;
                        let pageNum1 = 0;
                        Object.keys(data).forEach(p => {
                            if(p == 'problemList'){
//                                return true;
                            }else{
                                let item = {};
                                item.product=p.replace('四管二五自行','');
                                problemList.forEach(i => {
                                    item[i] = data[p][i]?data[p][i]:0;
                                })
                                  this.options[pageNum1].dataset.source.push(item);
                                num1++;
                                if(num1>3){
                                    num1 = 0;
                                    pageNum1++;
                                }

                            }
                        })
                        if(this.options[this.options.length-1].dataset.source.length == 0){
                            this.options.pop();
                        }
                        console.log('this.options')
                        console.log(this.options)

                        console.log('this.option')
                        console.log(this.option)
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
    width: 100%;
    height: 88%;
    /*border:1px solid grey;*/
    display: flex;
    .content-left{
      width: 85%;
      height: 100%;
      /*border:1px solid grey;*/
    }
    .content-right{
      width: 22%;
      height: 30%;
    }
  }
</style>
