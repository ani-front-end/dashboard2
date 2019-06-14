<template>
  <div class="content" style="border: 1px solid black;">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
            style="height: 100%;width: 100%"
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
                        data: ['1营', '2营'],
                            orient: 'vertical',
                            left: 'right',
                            top:'bottom',
                            textStyle: {
                                color: '#fff',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                    },
                    grid: {
                        x:20,
                        y:20,
                        x2:20,
                        y2:20
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
                            { name: '军事理论学习', max: 6500},
                            { name: '思想政治教育', max: 16000},
                            { name: '法律制度学习', max: 30000},
                            { name: '安全常识学习', max: 38000},
//                            { name: '研发（Development）', max: 52000},
//                            { name: '市场（Marketing）', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000],
                                name : '1营'
                            },
                            {
                                value : [5000, 14000, 28000, 31000],
                                name : '2营'
                            }
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
  .content{
    height: 100%;
  }
</style>
