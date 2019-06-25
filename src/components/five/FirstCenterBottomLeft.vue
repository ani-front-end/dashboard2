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
    import properties from "../../services/properties";
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
                    data: [],
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
                    data: [],
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
        created() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
//              this.http.get(this.ports.five.centerBottom, (res) => {
//                console.log('卫生防疫-sixCenterBottom:',res);
//                if (res.error_msg == '成功') {
//                  let data=res.data;
                    //静态数据
                  let data = properties.static4;
                console.log('卫生防疫-static-sixCenterBottom:',data);
                  Object.keys(data).forEach(p=>{
                    this.option.xAxis.data.unshift(p);
                    this.option.series[0].data.unshift(data[p])
                  })

//                }
//              });
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
