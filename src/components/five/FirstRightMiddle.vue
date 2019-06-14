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
                            data: ['1连', '2连', '3连', '4连', '5连', '6连'],
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
                            data: [1, 7, 3, 7, 3, 2]
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
                this.http.get(this.ports.manage.ammConsumption, (res) => {
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        this.option.title.text=data.sum;
                        Object.keys(data).forEach(p => {
                            if(p == 'sum'){
//                                return true;
                            }else{
                                this.option.series[0].data.push({value:data[p], name:p, itemStyle: {borderColor:this.option.color[num], opacity: 0.7}})
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
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>
