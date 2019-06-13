<template>
  <div class="content" style="position: relative">
    <div class="content-left">
      <chart  ref="chart"
              style="height: 100%;width: 100%"
              :options="option"
              :autoresize=true
      ></chart>
    </div>
    <div class="content-right" :style="{height:`${dataList.length*7}%`}">
      <LegendBlockSecond heightStyle=3 :dataList="dataList"></LegendBlockSecond>
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
                option: {
                    color: ['#fb0d7d', '#bf29fe', '#0c9afd', '#feb529','#4169E1', '00FFFF', '#FFFFF0', '#DEB887'],
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
//                    legend: {
//                        data:['人员管理', '车辆管理', '枪弹管理', '涉密载体管理']
//                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLabel: {
                                color: '#ffffff',
                            },
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#43557e'
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '问题数  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
//                            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                            data: []
                        },
                        {
                            type: 'category',
                            show: false,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#43557e'
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '问题数  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
//                            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            minInterval:1,
                            type: 'value',
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLabel: {
                                color: '#ffffff',
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#43557e'
                                }
                            },
                        }
                    ],
                    series: [
//                        {
//                            name:'人员管理',
//                            type:'line',
//                            xAxisIndex: 1,
//                            smooth: true,
//                            lineStyle: {
//                                shadowColor: '#4164b8',
//                                shadowBlur: 2,
//                                shadowOffsetY: 2,
//                            },
//                            data: []
//                        },
                    ]
                },
                dataList:[],
                colorList:['#fb0d7d', '#bf29fe', '#0c9afd', '#feb529','#4169E1', '00FFFF', '#FFFFF0', '#DEB887']

            }
        },
        props: [
        ],
        components:{
            'LegendBlockSecond':LegendBlockSecond
        },
        mounted() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
                //先关闭定时刷新
                this.dataList = [];
                this.option.series = [];
                this.option.xAxis[0].data = [];
                this.http.get(this.ports.manage.tongQiProblem, (res) => {
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        data.problemList.forEach(p => {
                            this.dataList.push({
                                colorStyle:this.colorList[num],
                                opacityStyle:0.45,
                                word:p,
                            })
                            num++;
                            this.option.series.push({
                                name:p,
                                type:'line',
                                xAxisIndex: 1,
                                smooth: true,
                                lineStyle: {
                                    shadowColor: '#4164b8',
                                    shadowBlur: 2,
                                    shadowOffsetY: 2,
                                },
                                data: []
                            });
                        })
                        Object.keys(data).forEach(p => {
                            if(p == 'problemList'){
//                                return true;
                            }else{
                                this.option.xAxis[0].data.push(p)
//                            this.option.xAxis[1].data.push(p)
                                for(let i=0;i<data.problemList.length;i++){
                                    this.option.series[i].data.push((data[p][data.problemList[i]])?(data[p][data.problemList[i]]):0)
                                }
                            }


                        })
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
      width: 15%;
      /*height: 70%;*/
      /*border:1px solid grey;*/

    }
  }
</style>
