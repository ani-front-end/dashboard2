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
    import properties from "../../services/properties";
    export default {
        data () {
            return {
                option: {
                    title: {
                        text: '风气建设',
                        left: 10,
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
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
                        x2: 20,
                        x1: 20,
                        y2: 20,
                        y1: 20,
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
                                show: true
                            },
                            axisLabel: {
                                show: true
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
                                    color: ['#fff']
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
                            barWidth: '30%',
                            itemStyle: {
                                color: '#9dcaff',
                                borderColor: '#9dcaff',
                                //opacity: 0.7,
                                borderWidth: 1
                            },
                            label: {
                                show: true,
                                position: 'top',
                                color: '#ffffff',
                                fontSize: 12,
                                fontWeight: 'bold'
                            },
                            data: []
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
//                this.http.get(this.ports.five.rightMiddle, (res) => {
//                    console.log('风气建设-fiveRIghtMiddle:',res);
//                    if (res.error_msg == '成功') {
//                        let data=res.data
                        //静态数据
                        let data = properties.static5;
                console.log('风气建设-static-fiveRIghtMiddle:',data);
                        Object.keys(data).forEach(p=>{
                            this.option.xAxis[0].data.unshift(p);
                            this.option.series[0].data.unshift(data[p])
                        })
//                    }
//                });
            }
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content{
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>
