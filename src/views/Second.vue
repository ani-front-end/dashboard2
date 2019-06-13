<template>
  <div class="second">
    <div class="top">
      <div class="top-left">
        <CardHeaderSlantWithArrow titleWord="同期各种问题类型间数量对比" titleWidth=23></CardHeaderSlantWithArrow>
        <SecondTopLeft></SecondTopLeft>
      </div>
      <div class="top-right">
        <CardHeaderSlantWithArrow titleWord="各单位间问题数量对比" titleWidth=28></CardHeaderSlantWithArrow>
        <SecondTopRight></SecondTopRight>
      </div>
    </div>
    <div class="bottom">
      <CardHeaderSlantWithArrow titleWord="各单位不同时间问题数量对比" titleWidth=13></CardHeaderSlantWithArrow>
      <SecondBottom></SecondBottom>
    </div>
  </div>
</template>
<script>
    import SecondTopLeft from '../components/second/SecondTopLeft'
    import SecondTopRight from '../components/second/SecondTopRight'
    import SecondBottom from '../components/second/SecondBottom'
    import CardHeaderSlantWithArrow from '../components/CardHeaderSlantWithArrow'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            'SecondTopLeft':SecondTopLeft,
            'SecondTopRight':SecondTopRight,
            'SecondBottom':SecondBottom,
            'CardHeaderSlantWithArrow':CardHeaderSlantWithArrow
        },
        mounted(){
        },
        methods: {
        }
    }
</script>
<style scoped lang="less">
  @centerBorder:1px solid rgba(0,131,179,0.23);
  .second {
    width: 100%;
    height: 91%;
    font-size: 0.25rem;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      height: 45%;
      .top-left {
        background-image: url("../assets/images/first-center-top.png");
        margin: 0.1rem 0.05rem 0rem 0.1rem;
        border: @centerBorder;
        box-shadow: 1px 1px 1px #0e3367 inset,
          -1px -1px 1px #0e3367 inset;
        width: 60%;
        .top-left-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
      .top-right{
        background-image: url("../assets/images/first-center-top.png");

        margin: 0.1rem 0.1rem 0rem 0.05rem;
        border: @centerBorder;
        box-shadow: 1px 1px 1px #0e3367 inset,
          -1px -1px 1px #0e3367 inset;
        width: 40%;
        .top-right-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
    }
    .bottom{
      background-image: url("../assets/images/first-center-top.png");

      margin: 0.1rem 0.1rem 0.1rem 0.1rem;
      border: @centerBorder;
      height: 53%;
      box-shadow: 1px 1px 1px #0e3367 inset,
        -1px -1px 1px #0e3367 inset;
      .bottom-header{
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.34rem;
        background: #102c62;
        font-size: 0.1rem;
      }
    }
  }
</style>