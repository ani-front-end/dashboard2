<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
            style="height: 1.5rem;width: 2.3rem"
            :options="option"
            :autoresize=true
    ></chart>
  </div>
</template>
<script>
    import properties from '../../services/properties'
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
                        //formatter: "{a} <br/>{b}: {c} ({d}%)",
                        text: '0',
                        textStyle: {
                            color: '#00d8ff',
                            fontSize: 25,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        bottom: 'center',
                        itemGap: 60,
                    },
                    color:['#376d3f', '#6b135d', '#1b77d4', '#9b784c'],
                    // tooltip: {
                    //     trigger: 'item',
                    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                    // },
                    series: [
                        {
                            color:['#0493e4', '#1b3667'],
                            //name:'访问来源',
                            type:'pie',
                            radius: ['40%', '52%'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:11, name:'已处置', itemStyle: {borderColor:'#01deff', borderWidth: 1}},
                                {value:10, name:'未处置'}

                            ]
                        },
                        {
                            name:'',
                            color:['#c5236f', '#376c3e', '#12275c'],
                            type:'pie',
                            radius: ['50%', '60%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                opacity: 0.7
                            },
                            label: {
                                normal: {
                                    formatter: '{b}: {c}',
                                    show: true,
                                    position: 'outside',
                                    textStyle: {
                                        color: '#ffffff'
                                    }
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show:false
                                }
                            },
                            data:[
                                {value:335, name:'真警', itemStyle: {borderColor:'#ff019c', borderWidth: 1}},
                                {value:310, name:'误报', itemStyle: {borderColor:'#78db5d', borderWidth: 1}},
                                {value:135, name:'未处置', itemStyle: {borderColor:'#851264', borderWidth: 0}},
                            ]
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
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.findAlarmStatic, (res) => {
                    if(res.success){
                        let data = res.data;
                        this.option.series[1].data[0].value=data.AlarmCount;
                        this.option.series[1].data[1].value=data.Alarmdispose;
                        this.option.series[1].data[2].value=data.unAlarmdispose;

                        this.option.series[0].data[0].value=data.AlarmCount + data.Alarmdispose;
                        this.option.series[0].data[1].value=data.unAlarmdispose;
                        this.option.title.text = data.AlarmSum;
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

</style>
