<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">
      <div class="content-top-left">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
    </div>
   </div>
</template>
<!--<script src="../service/FirstLeftBottom.js"></script>-->
<script>
  export default{
    data(){
      return {
        option : {
          title : {
            text: '人员不在位原因及数量',
            textStyle:{color:'#fff'},
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            x : 'center',
            y : 'bottom',
            data:[],
            textStyle:{color:'#fff'}
          },
          series : [
            {
              name:'人员不在位原因及数量',
              type:'pie',
              radius : [20, 70],
              center: ['50%', '60%'],
              roseType : 'area',
              label: {
                normal: {
                  formatter: '{b|{b}：}{c}',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 12,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                  color:function(params) {
                    var colorList = [
                      '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed'
                    ];
                    return colorList[params.dataIndex]
                  }
                }
              },
              data:[]
            }
          ]
        },
      }
    },
    created() {
      this.queryData();

    },
    methods:{
      queryData(){
        this.http.get(this.ports.four.leftBottom, (res) => {
          console.log('人员不在位原因及数量-fiveLeftBottom:',res);
          if(res.error_msg=='成功') {
            let data=res.data;
            Object.keys(data).forEach(p=>{
              this.option.legend.data.push(p);
              this.option.series[0].data.push({value:data[p], name:p})
            })

          }
        })
      }
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 100%;
    .content-top{
      height: 100%;
      width: 100%;
      /*border: 1px solid grey;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-top-left{
        height: 100%;
        width: 100%;
        padding: 0.1rem;
        /*border: 1px solid grey;*/
      }
    }
  }
</style>
