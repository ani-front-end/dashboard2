<template>
    <div class="cont">
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
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    title: {
                        text: '枪支总数',
                        bottom: '0%',
                        left:'40%',
                        textStyle:{
                            color:'#ffffff',
                            fontSize: 12,
                        }
                    },
                    color: ['#53d3d9', '#1f5081'],
                    grid: {
                        show: false,
//                         left: '5%',
//                         right: '5%',
//                         bottom: '5%',
                         containLabel: true,
                        x:10,
                        y:20,
                        x2:10,
                        y2:0
                    },
                    xAxis:  {
                        show: false,
                        type: 'value',
                        borderWidth: 0,

                    },
                    yAxis: {
                        minInterval:1,
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: [this.message]
                    },
                    series: [
                        {
                            //name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '100%',
                            label: {
                                normal: {
                                    formatter: function(params) {
                                        if (params.value > 0) {
                                            return params.value;
                                        } else {
                                            return '';
                                        }
                                    },
                                    rich: {
                                        c:{
                                            color:'#ffffff',
                                            //fontSize: 30,
                                            opacity: 1
                                        }
                                    },
                                    show: true,
                                    position: 'insideRight',
                                    textStyle: {
                                        color: '#ffffff',
                                        opacity: 1
                                    }

                                }
                            },
                            data: [this.num1],
                            itemStyle:{
                                borderColor:'#ffffff',
                                borderWidth:1
                            }
                        },
                        {
                            //name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    formatter: function(params) {
                                        if (params.value > 0) {
                                            return params.value;
                                        } else {
                                            return '';
                                        }
                                    },
                                    show: true,
                                    position: 'right',
                                    color:'#fff'
                                },
                                //opacity: 1
                            },
                            data: [this.num2],
                            itemStyle:{
                                color:'#1f4f80',
                                borderColor:'#0eafd4',
                                borderWidth:1,
                                //opacity: 0.28
                            },
                        },

                    ]
                }
            }
        },
        props: [
            "message",
            "num1",
            "num2"
        ],
        mounted() {
        },
        computed: {
        }
    }
</script>

<style scoped lang="less">
    .cont{
        width:100%;
        height:100%;
        /*border:1px red solid;*/
    }
</style>
