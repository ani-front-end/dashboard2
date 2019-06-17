<template>
    <div class="content">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                option: {
                    title: {
                        text: '各单位参训率',
                        left: 10,
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    legend: {
                        data:['参训率'],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
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
                                show: true,
                                interval:0
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
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
                            name:'参训率',
                            type: 'bar',
                            barWidth: '20%',
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 12,
                                fontWeight: 'bold'
                            },
                            data: [],
                            itemStyle: {
                                color: '#b58531',
                                borderColor: '#feba01',
                                //opacity: 0.7,
                                borderWidth: 1,
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{
                                    color:function(params) {
                                        var colorList = [
                                            '#7fc8fd'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        },

                    ]
                },
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.four.centerMiddle, (res) => {
                    console.log('centerMiddle:',res);
                    if(res.error_msg=='成功'){
                        let data = res.data;
                        let num = 0;
                        this.option.title.text=data.sum;
                        Object.keys(data).forEach(p => {
                            if(p == 'sum'){
//                                return true;
                            }else{
                                this.option.series[0].data.push(data[p]);
                                this.option.xAxis[0].data.push(p);
                                num++;
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
        height: 100%;
    }
</style>
