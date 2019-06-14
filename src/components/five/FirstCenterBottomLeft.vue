<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
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
                  grid: {
                    show: true,
                    borderWidth: 1,
                  },
                  title : {
                    text: '卫生防疫',
                    textStyle:{color:'#fff'},
                    x:'center'
                  },
                  xAxis: {
                    type: 'category',
                    data: ['1连', '2连', '3连', '4连', '5连', '6连'],
                    axisLine: {
                      lineStyle :{
                        color : '#fff'
                      }
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: ['#fff']
                      }
                    },
                  },
                  yAxis: {
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
                    axisTick: {
                      show: true,
                      lineStyle: {
                        color: '#ffffff'
                      }
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#fff',
                        width: 1,
                      }
                    }
                  },
                  series: [{
                    data: [120, 200, 150, 80, 70, 110],
                    type: 'bar',
                    itemStyle: {
                      color: '#a5d2ff',
                    },
                    barWidth:30,
                    label: {
                      normal: {
                        show: true,
                        position: 'top',
                        color:'#fff'
                      },
                    },
                  }]
                },


            }
        },
        props: [
            'title',
        ],
        mounted() {
            //this.queryData();
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
  width: 100%;
  height: 100%;
  padding-top: 0.1rem;
}
</style>
