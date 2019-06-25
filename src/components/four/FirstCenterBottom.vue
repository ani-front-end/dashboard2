<template>
    <div class="content">
        <!--<h1>{{ msg }}</h1>-->
        <chart ref="chart1"
               style="height: 100%;width: 100%"
               :options="option"
               :autoresize=true
        ></chart>
    </div>
</template>
<script>
    import properties from '../../services/properties'

    export default {
        data() {
            return {
                maxNum:1,
                option: {
                    title: {
                        text: '教育学习情况',
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    tooltip: {},
                    legend: {
                        data: [],
                        orient: 'vertical',
                        left: 'right',
                        top: 'bottom',
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    grid: {
                        x: 20,
                        y: 20,
                        x2: 20,
                        y2: 20
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
//                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            {name: '军事理论学习',max:this.maxNum},
                            {name: '思想政治教育',max:this.maxNum},
                            {name: '安全常识学习',max:this.maxNum},
                            {name: '法规制度学习',max:this.maxNum},
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
//                             {
//                                 value : [1, 1, 1, 3],
//                                 name : '1营'
//                             },
//                            {
//                                value : [1, 0, 0, 0],
//                                name : '2营'
//                            },
                        ]
                    }]
                },


            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods: {
            queryData() {
                this.http.get(this.ports.four.centerBottom, (res) => {
                    console.log('教育学习情况-fiveRightBottom:', res);
                    if (res.error_msg == '成功') {
                        let data = res.data;
                        Object.keys(data).forEach(p => {
                            this.option.legend.data.push(p);
                            this.option.series[0].data.push({value: [0,0,0,0], name: p});
                            Object.keys(data[p]).forEach(k => {
                                if(data[p][k] > this.maxNum){
                                    this.maxNum = data[p][k];
                                }
                                if(k=='军事理论学习'){
                                    this.option.series[0].data[this.option.series[0].data.length-1].value[0]=data[p][k];
                                }else if(k=='思想政治教育'){
                                    this.option.series[0].data[this.option.series[0].data.length-1].value[1]=data[p][k];
                                }else if(k=='安全常识学习'){
                                    this.option.series[0].data[this.option.series[0].data.length-1].value[2]=data[p][k];
                                }else if(k=='法规制度学习'){
                                    this.option.series[0].data[this.option.series[0].data.length-1].value[3]=data[p][k];
                                }

                            })
                        })
                    }
                    this.option.radar.indicator[0].max = this.maxNum;
                    this.option.radar.indicator[1].max = this.maxNum;
                    this.option.radar.indicator[2].max = this.maxNum;
                    this.option.radar.indicator[3].max = this.maxNum;
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            }
        },
        computed: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        height: 100%;
    }
</style>
