<template>
  <div class="content">
    <div class="content-top">
      <!--<div class="conTxt">-->
        <!--<LegendNum :num=bingqiTotal word="兵器室总数"></LegendNum>-->
      <!--</div>-->
      <div class="conTxt">
        <LegendNum :num=qiangzhiTotal word="枪支总数"></LegendNum>
      </div>
      <div class="conTxt">
        <LegendNum :num=useTotal word="枪支动用总数"></LegendNum>
      </div>
    </div>
    <div class="content-bottom">
      <Carousel  v-model="value1"
                 :autoplay=true
                 :autoplay-speed=8000
                 arrow="never"
                 :radius-dot=true
                 height="2.2rem"
                 style="height:100%;"
      >
        <CarouselItem style="" class="bottom-carousel" v-for="(dataList,index) in dataLists" :key="index">
          <div class="chart"  v-for="(item,index) in dataList" :key="index">
            <ThirdTopRightLeftSon :message=item.name :num1=item.num1 :num2=item.num2></ThirdTopRightLeftSon>
          </div>
        </CarouselItem>
      </Carousel>
      <div class="footer">
        <div class="onNum">
          <div class="onSquare"></div>
          <div class="ontxt">在位数</div>
        </div>
        <div class="useNum">
          <div class="useSquare"></div>
          <div class="usetxt">动用数</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ThirdTopRightLeftSon from '../third/ThirdTopRightLeftSon'
  import LegendNum from '../LegendNum';

  export default {
    data () {
      return {
        msg: '',
        dataLists: [],
        value1: 0,
        bingqiTotal:0,
        qiangzhiTotal:0,
        useTotal:0
      }
    },
    components: {
      'ThirdTopRightLeftSon': ThirdTopRightLeftSon,
      'LegendNum': LegendNum
    },
    props: [],
    mounted() {
      this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE)
    },
    methods: {
      queryData(){
        this.dataLists = [];
//                this.http.get(this.ports.manage.gunMoveUse, (res) => {

//                    if (res.success) {
//                        let data = res.data;
        let data = {
          "合成一营": {
            "sum": 800,
            "out": 720
          },
          "合成二营": {
            "sum": 870,
            "out": 710
          },
          "合成三营": {
            "sum": 880,
            "out": 700
          },
          "合成四营": {
            "sum": 850,
            "out": 700
          },
          "炮营": {
            "sum": 800,
            "out": 750
          },
          "侦察营": {
            "sum": 800,
            "out": 720
          },

          "sum": 50,
          "out": 5200,
          "pointSum": 4320
        };
        let num = 0;
        let arr = [];
        let pageNum = 0;
        this.dataLists.push(arr)
        Object.keys(data).forEach(p => {
          if (p == 'sum' || p == 'out' || p == 'pointSum') {
//                                return true;
          }else{
            let item = {
              name: p,
              num1: data[p].sum,
              num2: data[p].out
            }
            this.dataLists[pageNum].push(item);
            num++;
            if (num > 5) {
              arr = [];
              pageNum++;
              num = 0;
              this.dataLists.push(arr);

            }
          }

        })
        //暂时去掉第二页的空白
        if(this.dataLists[this.dataLists.length-1].length == 0){
          this.dataLists.pop();
        }
        this.bingqiTotal=data.sum
        this.qiangzhiTotal=data.out
        this.useTotal=data.pointSum
        console.log('this.dataLists')
        console.log(this.dataLists)

//                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
//                })
      },

    }
  }
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content {
    /*border: 1px solid red;*/
    height: 90%;
    .content-top {
      display: flex;
      height: 20%;
      .conTxt {
        width: 50%;
        margin-left: 12%;
        margin-top: 3%;
      }
    }
    .content-bottom {
      /*border:1px solid black;*/
      height: 70%;
      width: 100%;
      .bottom-carousel {
        display: flex;
        flex-wrap: wrap;
      }
      .chart {
        width: 50%;
        height: 22%;
        /*border:1px red solid;*/
      }
      .footer {
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
        .onNum {
          width: 50%;
          height: 100%;
          font-size: 12px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .onSquare{
            width: 20px;
            height: 10px;
            background: #0eafd4;
            border: 1px solid #0eafd4;
          }
          .ontxt{
            line-height: 100%;
            width: 50px;
            height: 10px;
          }
        }
        .useNum {
          width: 50%;
          height: 100%;
          font-size: 12px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .useSquare {
            width: 20px;
            height: 10px;
            background: #1f5081;
            border: 1px solid #0eafd4;
          }
          .usetxt {
            line-height: 100%;
            width: 50px;
            height: 10px;
          }
        }
      }

    }
  }
</style>
