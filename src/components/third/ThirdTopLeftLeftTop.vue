<template>
  <div class="content">
    <div class="conTxt">
      <LegendNum :num="totalNum" word="总数"></LegendNum>
    </div>
    <div class="conTxt">
      <LegendNumNoBg :num="inNum" word="在位数"></LegendNumNoBg>
    </div>
    <div class="conTxt">
      <LegendNumNoBg :num="outNum" word="在外数"></LegendNumNoBg>
    </div>
    <div class="conChart">
      <chart  ref="chart"
              style="height: 100%;width: 100%"
              :options="option"
              :autoresize=true
      ></chart>
    </div>
  </div>
</template>
<script>
  import LegendNum from '../LegendNum'
  import LegendNumNoBg from '../LegendNumNoBg'
    export default {
        data () {
            return {
                totalNum:0,
                inNum:0,
                outNum:0,
                option: {

                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 8
                    },
                    title: {
                        text: '主官在位率',
                        left: 'center',
                        bottom: '2%',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 12
                        }
                    },
                    //backgroundColor: "#062a44",
                    series: [{
                        name: '刻度1',
                        type: 'gauge',
                        radius: '80%',
                        min:0,//最小刻度
                        max:100,//最大刻度
                        splitNumber: 10, //刻度数量
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: [[1,'rgba(0,0,0,0)']]
                            }
                        },//仪表盘轴线
                        axisLabel: {
                            show: true,
                            color: '#ffffff',
                            distance:10,
                            formatter:function(v){
                                switch (v + '') {
                                    case '0' : return '0';
                                    case '10' : return '10';
                                    case '20' : return '20';
                                    case '30' : return '30';
                                    case '40' : return '40';
                                    case '50' : return '50';
                                    case '60' : return '60';
                                    case '70' : return '70';
                                    case '80' : return '80';
                                    case '90' : return '90';
                                    case '100' : return '100';
                                }
                            }
                        },//刻度标签。
                        axisTick: {
                            show: true,
                            splitNumber: 3,
                            lineStyle: {
                                color: '#0a6093',  //用颜色渐变函数不起作用
                                width: 1,
                            },
                            length: -3
                        },//刻度样式
                        splitLine: {
                            show: true,
                            length: -8,
                            lineStyle: {
                                color: '#0a6093',  //用颜色渐变函数不起作用
                            }
                        },//分隔线样式
                        detail: {
                            show: false
                        },
                        pointer: {
                            show: false
                        }
                    },
                        {
                            "name": "仪表盘1",
                            "type": "gauge",
                            radius: '55%',
                            "splitNumber": 10,
                            "axisLine": {
                                "lineStyle": {
                                    "color": [
                                        //设置进度条的百分比值
                                        [ 0.8, '#2af7fa'],
                                        [1, "#111F42"]
                                    ],
                                    "width": 4
                                }
                            },
                            axisLabel: {
                                show: false,
                            },
                            "axisTick": {
                                show: false,

                            },
                            "splitLine": {
                                "show": false,
                            },
                            "itemStyle": {
                                show: false,
                            },
                            "detail": {
                                "formatter": function(value) {
                                    if (value !== 0) {
                                        var num = Math.round(value ) ;
                                        return parseInt(num).toFixed(0)+"%";
                                    } else {
                                        return 0;
                                    }
                                },
                                //"offsetCenter": [0, "20%"],
                                "textStyle": {
                                    padding: [0, 0, 30, 0],
                                    "fontSize": 20,
                                    fontWeight: '700',
                                    "color":  '#2af7fa'
                                }
                            },
                            "title": {
                                color: '#ffffff',
                                "fontSize": 10,
                                "offsetCenter": [0, "-25%"]
                            },
                            data: [{
                                //设置中间数字百分比
                                value: 0,
                            }],
                            pointer: {
                                show: false,
                                length: '75%',
                                width: 20, //指针粗细
                            },
                        },

                    ]
                }
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
        },
        methods: {
            queryData(){
                this.http.get(this.ports.manage.superiorOn, (res) => {
                    if(res.success) {
                        let data = res.data;
                        this.totalNum=data.sum;
                        this.inNum=data.onSum;
                        this.outNum=data.offSum;
                        this.option.series[1].data[0].value = data.onPrivier;
                        this.option.series[1].axisLine.lineStyle.color[0][0] = data.onPrivier/100;
//                            data.onSum;
//                            data.sum;
//                            data.offSum;
//                            data.onPrivier;
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            },

        },
        components:{
            'LegendNum':LegendNum,
            'LegendNumNoBg':LegendNumNoBg
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    /*border: 1px solid red;*/
    height: 82%;
  }
  .conTxt{
    float: left;
    margin-top: 10%;
    margin-left: 5%;
    width:15%;
  }
  .conChart{
    float: left;
    margin-top: 5%;
    margin-left: 5%;
  }
</style>
