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
      <div class="content-top-right">
        <LittleLegendBlock word1="实检" word2="应检"></LittleLegendBlock>
      </div>
    </div>
    <div class="content-bottom"  @mouseover="mouseOver()" @mouseout="mouseOut()">

      <Carousel v-model="value1"
                :autoplay=autoplay
                :autoplay-speed=autoplaySpeed
                arrow="never"
                :radius-dot=true
                height="1.42rem"
                style="height:100%;"

      >
        <CarouselItem style="" v-for="(item,index) in options" :key="index">
          <chart  ref="chart1"
                  style="height:100%;width: 100%"
                  :options="item"
                  :autoresize=true
                  @click="onClick"

          ></chart>
        </CarouselItem>
      </Carousel>
    </div>
    <el-dialog
            title="11"
            :visible.sync="centerDialogVisible"
            width="60%"
            center>
      <div class="dialog-content" style="position: relative">
        <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer" class="close2" width="40" src="../../assets/images/close2.png" alt="">
        <img @click="centerDialogVisible = false" style="position: absolute;top:15px;right:-2px;cursor: pointer" class="close1" width="40" src="../../assets/images/close1.png" alt="">

        <div class="dialog-top">
          <div class="top-left">

          </div>
          <div class="top-right">
            机关人员履职情况
          </div>
        </div>
        <div class="dialog-bottom">
          <div class="bottom-left">
            <div class="left1">{{name}}</div>
            <div class="left2">履职情况</div>
          </div>
          <div class="bottom-center">

          </div>
          <div class="bottom-right">
            <div class="right1">
              <Carousel v-model="value2"
                        :autoplay=autoplay
                        :autoplay-speed=autoplaySpeed
                        arrow="never"
                        :radius-dot=true
                        height="1.42rem"
                        style="height:100%;"

              >
                <CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">
                  <chart ref="chart1"
                         style="height: 100%;width: 100%"
                         :options="item"
                         :autoresize=true
                  ></chart>
                </CarouselItem>
              </Carousel>
            </div>
            <div class="right2">
              <div class="right2-top">
                <LittleLegendBlock word1="实检" word2="应检"></LittleLegendBlock>
              </div>
              <div class="right2-middle">
                <chart  ref="chart"
                        style="height: 100%;width: 100%"
                        :options="dialogOptionRound"
                        :autoresize=true
                ></chart>
              </div>
              <div class="right2-bottom">
                {{name}}检查完成率
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
   </div>
</template>
<script src="../service/FirstLeftBottom.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .bottom-left{
    align-items: center !important;
  }
  .left1{
    font-size: 0.3rem;
  }
  .bottom-right{
    width: 80%!important;
    display: flex;
    /*border: 1px solid red;*/
  }
  .right1{
    width: 75%;
  }
  .right2{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .right2-top{
      height: 15%;
      width: 70%;

    }
    .right2-middle{
      height: 85%;
      width: 100%;
    }
    .right2-bottom{
      height: 3%;
      width: 100%;
      position: absolute;
      bottom:20%;
      text-align: center;
      color: #fff;
    }
  }
  .content{
    width: 100%;
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .content-top{
      height: 40%;
      width: 100%;
      /*border: 1px solid grey;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-top-left{
        height: 100%;
        width: 70%;
        /*border: 1px solid grey;*/
      }
      .content-top-right{
        height: 44%;
        width: 18%;
        /*border: 1px solid grey;*/
      }
    }
    .content-bottom{
      height: 60%;
      /*border: 1px solid grey;*/
      width: 90%;
    }
  }
</style>
