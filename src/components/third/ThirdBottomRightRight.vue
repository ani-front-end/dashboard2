<template>
  <div class="content">
    <div class="content-top">
      <div class="top-main">
        <div class="main">
          <LegendNum :num=totalNum word="总数"></LegendNum>
        </div>
        <div class="main">
          <LegendNumNoBg :num=shemiNum word="涉密消息"></LegendNumNoBg>
        </div>
        <div class="main">
          <LegendNumNoBg :num=disuNum word="低俗消息"></LegendNumNoBg>
        </div>
        <div class="main">
          <LegendNumNoBg :num=otherNum word="其他"></LegendNumNoBg>
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
    export default {
        data () {
            return {
                totalNum:0,
                shemiNum:0,
                disuNum:0,
                otherNum:0,
                option: {
                    grid:{
                        x:0,
                        y:0,
                        x2:0,
                        y2:0
                    },
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12
                    },
                    color: ['#0c9afd', '#bf29fe', '#faab1b'],
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
                                {value:50, name:'低俗信息', itemStyle: { borderColor:'#01deff'}},
                                {value:25, name:'涉密消息',  itemStyle: { borderColor:'#b401ff'}},
                                {value:25, name:'其他', itemStyle: { borderColor:'#ffba01'}}
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
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.phoneDefy, (res) => {
                    if(res.success){
                        let data = res.data;
                        this.totalNum = data.sum
                        this.shemiNum = data.secretNum
                        this.disuNum = data.lowSum
                        this.otherNum = data.otherSum
                        this.option.series[0].data[0]=this.disuNum;
                        this.option.series[0].data[1]=this.shemiNum;
                        this.option.series[0].data[2]=this.otherNum;
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