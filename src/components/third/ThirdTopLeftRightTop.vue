<template>
  <div class="content">
    <div class="contop">
      <div class="toptxt">人员总数</div>
      <div class="conTxt">
        <LegendNum :num=sum word=""></LegendNum>
      </div>
      <div class="toptxt">问题总数</div>
      <div class="conTxt">
        <LegendNum :num=problemSum word=""></LegendNum>
      </div>
    </div>
    <div class="conbot">
      <div class="conLeft">
        <div class="leftinfo"><infoNum :nums=driver words="司机"></infoNum></div>
        <div class="leftinfo"><infoNum :nums=armourer words="军械员"></infoNum></div>
        <div class="leftinfo"><infoNum :nums=storeman words="保管员"></infoNum></div>
        <div class="leftinfo"><infoNum :nums=keySecretPersonnel words="重点涉密人员"></infoNum></div>
      </div>
      <div class="conRight">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
    </div>
  </div>
</template>
<script>
    import LegendNum from '../LegendNum'
    import infoNum from '../infoNum'
    export default {
        data () {
            return {
                option: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        //type: 'dotted',
                        x: 10,
                        y: 10,
                        x2: 0,
                        y2: 25
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['司机', '军械员', '保管员', '重点涉密人员'],
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLabel: {
                                show: true,
                                color: '#ffffff',
                                fontSize: 10,
                                interval:0,
                                //rotate: 45,
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
                            show: false,
                            type: 'value',
                            boundaryGap: ['0%', '20%'],
                            axisLabel: {
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLine: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            //name:'直接访问',
                            type: 'bar',
                            barWidth: '20%',
                            label: {
                                show: true,
                                fontSize: 14,
                                position: 'top',

                            },
                            itemStyle: {
                                color: '#106bbc',
                                borderColor: '#06b9e1',
                                borderWidth: 1
                            },
                            data: []
                        },
                    ]
                },
                storeman:10,
                problemSum:10,
                driver:10,
                armourer:10,
                sum:10,
                keySecretPersonnel:10,
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();

        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.keyJobOfficeBearer, (res) => {
                    if(res.success){
                        let data = res.data;
                        this.keySecretPersonnel = data.keySecretPersonnel;
                        this.sum = data.sum;
                        this.storeman = data.storeman;
                        this.problemSum = data.problemSum;
                        this.driver = data.driver;
                        this.armourer = data.armourer;
                        this.option.series[0].data.push(this.driver);
                        this.option.series[0].data.push(this.armourer);
                        this.option.series[0].data.push(this.storeman);
                        this.option.series[0].data.push(this.keySecretPersonnel);
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            }
        },
        computed: {
        },
        components:{
            'LegendNum':LegendNum,
            'infoNum':infoNum
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    height: 82%;
    /*border:1px red solid;*/
  }
  .contop{
    height:20%;
    /*border:1px red solid;*/
  }
  .toptxt{
    float: left;
    font-size: 0.12rem;
    margin-top: 3%;
    margin-left: 5%;
  }
  .conTxt{
    float: left;
    margin-left: 3%;
    /*margin-top: 3%;*/
  }
  .conbot{
    height:80%;
    /*border:1px red solid;*/
  }
  .conLeft{
    width:45%;
    height:80%;
    float: left;
    /*border: 1px solid red;*/
    margin-top: -5%!important;
  }
  .leftinfo{
    float: left;
    width:50%;
    height:50%;
  }
  .conRight{
    width:55%;
    height:80%;
    float: left;
    /*border:1px red solid;*/
    margin-top: -5%!important;
  }
</style>
