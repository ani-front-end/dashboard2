<template>
  <div class="content">
    <div class="content-top">
      <div class="top-main">
        <div class="main">
          <LegendNum :num=totalNum word="总数"></LegendNum>
        </div>
        <div class="main">
          <LegendNumNoBg :num=zaiguiNum word="在柜数"></LegendNumNoBg>
        </div>
        <div class="main">
          <LegendNumNoBg :num=useNum word="使用次数"></LegendNumNoBg>
        </div>
        <div class="main">
          <LegendNumNoBg :num=timeOutNum word="超时归还数"></LegendNumNoBg>
        </div>
      </div>
    </div>
    <div class="content-bottom">
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
    import properties from "../../services/properties";
    export default {
        data () {
            return {
                totalNum:0,
                zaiguiNum:0,
                useNum:0,
                timeOutNum:0,
                loanNumber:0,
                option : {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12
                    },
                    color: ['#0c9afd', '#e4107b'],
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:310, name:'借出数', itemStyle: { borderColor:'#01deff'}},
                                {value:55, name:'在柜数', selected:true, itemStyle: { borderColor:'#ff019c'}}
                            ],
                            label: {
                                position: 'inside',
                                //fontSize: 10,
                            },
                            itemStyle: {
                                normal: {
                                    opacity: 0.55
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',

                                }
                            }
                        }
                    ]
                }
            }
        },
        props: [
        ],
        components: {
            'LegendNum': LegendNum,
            'LegendNumNoBg': LegendNumNoBg
        },
        mounted() {
            this.queryData()
//            setInterval(() => {
//                this.queryData()
//            },properties.QUERY_TIME_SPACE)
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.secretCarrier, (res) => {
                    if(res.success){
                        let data = res.data;
                        this.timeOutNum = data.notReturnOnTime;
                        this.zaiguiNum = data.digits;
                        this.useNum = data.useTimes;
                        this.totalNum = data.carrierSum;
                        this.loanNumber = data.loanNumber;
                        this.option.series[0].data[0].value = this.loanNumber;
                        this.option.series[0].data[1].value = this.zaiguiNum;
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
    position: relative;
    /*border: 1px solid red;*/
    height: 89%;
    .content-top{
      height: 25%;
      width: 100%;
      /*border:1px solid red;*/
      font-size: 12px;
      .top-main{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        .main{
          display: flex;
          justify-content: center;
          width: 25%;
        }
      }
    }
    .content-bottom{
      top:0;
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
</style>
