<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">
      <div class="top-left">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="optionLeftTop"
                :autoresize=true
        ></chart>
      </div>
      <div class="top-right">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="optionRightTop"
                :autoresize=true
        ></chart>
      </div>
    </div>
    <div class="content-bottom">
      <div class="bottom-left">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="optionLeftBottom"
                :autoresize=true
        ></chart>
      </div>
      <div class="bottom-right">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="optionRightBottom"
                :autoresize=true
        ></chart>
      </div>
    </div>
  </div>
</template>
<script src="../service/FirstCenterBottomRight.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 90%;
    /*border: 1px solid grey;*/
    .content-top{
      width:100%;
      height: 50%;
      /*border: 1px solid red;*/
      position: relative;
      /*display: flex;*/
      /*justify-content: center;*/
      .top-left{
        position: absolute;
        top:0px;
        left:0%;
        width: 70%;
        height: 100%;
        /*border: 1px solid green;*/
      }
      .top-right{
        position: absolute;
        top:0px;
        left:35%;
        width: 65%;
        height: 100%;
        /*border: 1px solid grey;*/
      }
    }
    .content-bottom{
      width:100%;
      height: 50%;
      /*border: 1px solid red;*/
      position: relative;
      /*border: 1px solid grey;*/
      display: flex;
      justify-content: center;
      .bottom-left{
        position: absolute;
        top:0px;
        left:0%;
        width: 70%;
        height: 100%;
        /*border: 1px solid green;*/
        /*border: 1px solid grey;*/
      }
      .bottom-right{
        position: absolute;
        top:0px;
        left:35%;
        width: 65%;
        height: 100%;
        /*border: 1px solid grey;*/
        /*border: 1px solid grey;*/
      }
    }
  }
</style>
