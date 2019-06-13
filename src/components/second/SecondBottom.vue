<template>
  <div class="content" style="position: relative;">
    <div class="content-left">
      <chart  ref="chart"
              style="height: 100%;width: 100%"
              :options="option"
              :autoresize=true
      ></chart>
    </div>
    <div class="content-right" :style="{height:`${dataList.length *8.6}%`}">
      <div class="item" v-for="(item,index) in dataList" :key="index">
        <div class="item-left" :style="{backgroundImage: `url(${item.imgUrl})`}">
        </div>
        <div class="item-right">{{item.name}}</div>
      </div>
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
      <!--<div class="item" >-->
        <!--<div class="item-left" :style="{backgroundImage: `url(${dataList[0].imgUrl})`}">-->
        <!--</div>-->
        <!--<div class="item-right">我</div>-->
      <!--</div>-->
    </div>
    <img style="position: absolute;bottom:-16px;left:-2px;" src="../../assets/images/left-bottom.png" alt="">
    <img style="position: absolute;bottom:-16px;right:-2px;" src="../../assets/images/right-bottom.png" alt="">
  </div>
</template>
<script>
    import properties from "../../services/properties";
    export default {
        data () {
            return {
                option: {
                    tooltip: {},
//                    visualMap: {
//                        max: 20,
//                        // inRange: {
//                        //     color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
//                        // }
//                    },
                    xAxis3D: {
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        data: []//周
                    },
                    yAxis3D: {
                        type: 'category',
                        axisLabel: {
                            color: '#ffffff',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        data: [],//单位
                    },
                    zAxis3D: {
                        minInterval:1,
                        type: 'value',
                        axisLabel: {
                            color: '#ffffff',
                        },
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#4e6590',
                                width: 1,
                                shadowColor: '#4e6590',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#4d6093'
                            }
                        }
                    },
                    grid3D: {
                        boxWidth: 200,
                        boxHeight: 80,
                        boxDepth: 80,
                        viewControl: {
                            // projection: 'orthographic'
                        },
                        light: {
                            main: {
                                intensity: 1.2,
                                shadow: true
                            },
                            ambient: {
                                intensity: 0.3
                            }
                        }
                    },
                    series: [{
                        type: 'bar3D',
                        bevelSize: 0.2,
                        data: [],
                        shading: 'realistic',
                        itemStyle: {
                            opacity: 0.95
                        },

                        label: {
                            textStyle: {
                                fontSize: 16,
                                borderWidth: 1
                            }
                        },

                        emphasis: {
                            label: {
                                formatter: '{b}',
                                textStyle: {
                                    fontSize: 25,
                                    color: '#900',
                                    //backgroundColor: '#ffffff'
                                }
                            },
                            itemStyle: {
                                color: '#900'
                            }
                        }
                    }]
                },
                dataList:[

                ],
                tempDataList:[
                    {
                        name:'一营',
                        imgUrl:'/img/icon-one.png'
                    },
                    {
                        name:'二营',
                        imgUrl:'/img/icon-two.png'
                    },
                    {
                        name:'三营',
                        imgUrl:'/img/icon-three.png'
                    },
                    {
                        name:'四营',
                        imgUrl:'/img/icon-four.png'
                    },
                    {
                        name:'五营',
                        imgUrl:'/img/icon-five.png'
                    },
                    {
                        name:'六营',
                        imgUrl:'/img/icon-six.png'
                    },
                    {
                        name:'七营',
                        imgUrl:'/img/icon-seven.png'
                    },
                    {
                        name:'八营',
                        imgUrl:'/img/icon-eight.png'
                    },
                    {
                        name:'一营',
                        imgUrl:'/img/icon-one.png'
                    },
                    {
                        name:'二营',
                        imgUrl:'/img/icon-two.png'
                    },
                    {
                        name:'三营',
                        imgUrl:'/img/icon-three.png'
                    },
                    {
                        name:'四营',
                        imgUrl:'/img/icon-four.png'
                    },
                    {
                        name:'五营',
                        imgUrl:'/img/icon-five.png'
                    },
                    {
                        name:'六营',
                        imgUrl:'/img/icon-six.png'
                    },
                    {
                        name:'七营',
                        imgUrl:'/img/icon-seven.png'
                    },
                    {
                        name:'八营',
                        imgUrl:'/img/icon-eight.png'
                    },

                ],
                datas:[
//                    [0,0,5],
//                    [0,1,1],
//                    [0,2,0],
//                    [0,3,0],
//                    [0,4,0],
//                    [0,5,0],
//                    [1,0,7],
//                    [1,1,0],
//                    [1,2,0],
//                    [1,3,0],
//                    [1,4,0],
//                    [1,5,0],
//                    [2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],
//                    [3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],
//                    [4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],
//                    [5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],
//                    [6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],
//                    [7,0,1],[7,1,0],[7,2,0],[7,3,0],[7,4,0],[7,5,0]
                ],
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
//            setInterval(() => {
//                this.queryData();
//            },properties.QUERY_TIME_SPACE_MORE)
            let option = Object.assign({},this.option);
            this.option = option;
        },
        methods: {
            queryData(){
                //先关闭定时刷新
                this.datas = [];
                this.option.xAxis3D.data = [];
                this.option.yAxis3D.data = [];
                this.dataList = [];
//                let data = {
//                    "success": true,
//                    "data": [
//                        [0, 0, 1], [0, 1, 1], [0, 2, 2], [0, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1],
//                        [1, 0, 1], [1, 1, 1], [1, 2, 1], [1, 3, 2], [1, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1],
//                        [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 2], [2, 4, 2], [2, 5, 1], [2, 6, 1], [2, 7, 1],
//                        [3, 0, 1], [3, 1, 1], [3, 2, 1], [3, 3, 0], [3, 4, 0], [3, 5, 1], [3, 6, 1], [3, 7, 1]
//                    ],
//                    "unitList": ["一营", "三营", "二营", "四营"],
//                    "dateList": ["本周", "上周", "上二周", "上三周", "上四周", "上五周", "上六周", "上七周"]
//                }
                this.http.get(this.ports.manage.differentUnitProblem, (res) => {
                    console.log('bottom return')
                    console.log(res)
                    if(res.success){
                        let data = res.data;
                        let littleNum = 0;
                        this.datas = data.data;
                        this.option.xAxis3D.data = data.dateList;
                        data.unitList.forEach(p => {
                            this.option.yAxis3D.data.push(p)
                            //暂时限制图例长度
                            if(littleNum > 11){
                                return false;
                            }
                            this.dataList.push({
                                name:p,
                                imgUrl:this.tempDataList[littleNum].imgUrl
                            })
                            littleNum++ ;

                        })
                        let data1 = this.customItem(this.datas);
                        this.option.series[0].data = data1;
                        console.log('this.option')
                        console.log(this.option)
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            },
            customItem(data){
                return data.map(function (item) {
                    var customItem;
                    if(item[0] === 0){
                        customItem = {color: '#007fd8'}
                    }else if(item[0] === 1){
                        customItem = {color: '#00d5e2'}
                    }else if(item[0] === 2){
                        customItem = {color: '#91c185'}
                    }else if(item[0] === 3){
                        customItem = {color: '#c9cc85'}
                    }else if(item[0] === 4){
                        customItem = {color: '#cea553'}
                    }else if(item[0] === 5){
                        customItem = {color: '#ad2c6d'}
                    }else if(item[0] === 6){
                        customItem = {color: '#ad2c6d'}
                    }else if(item[0] === 7){
                        customItem = {color: '#385ad6'}
                    }else if(item[0] === 8){
                        customItem = {color: '#007fd8'}
                    }else if(item[0] === 9){
                        customItem = {color: '#00d5e2'}
                    }else if(item[0] === 10){
                        customItem = {color: '#91c185'}
                    }else if(item[0] === 11){
                        customItem = {color: '#c9cc85'}
                    }else if(item[0] === 12){
                        customItem = {color: '#cea553'}
                    }else if(item[0] === 13){
                        customItem = {color: '#ad2c6d'}
                    }else if(item[0] === 14){
                        customItem = {color: '#ad2c6d'}
                    }else if(item[0] === 15){
                        customItem = {color: '#385ad6'}
                    }
                    return {
                        name:'', //放上显示
                        value: [item[1], item[0], item[2]],
                        itemStyle: customItem
                    }
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
    width: 100%;
    height: 88%;
    /*border:1px solid grey;*/
    display: flex;
    justify-content: space-between;
    .content-left{
      width: 90%;
      height: 100%;
      /*border:1px solid grey;*/
    }
    .content-right{
      font-size: 12px !important;
      width: 7.5%;
      /*height: 65%;*/
      /*border:1px solid grey;*/
      padding-left:0.15rem;
      background-image: url("../../assets/images/little-around.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .item{
        width: 100%;
        height: 12.5%;
        /*border: 1px solid red;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-left{
          /*border: 1px solid pink;*/
          width: 25px;
          height: 15px;
          background-size: cover;

        }
        .item-right{
          /*border: 1px solid green;*/
          line-height: 100%;
          width: 70%;
          height: 100%;
          text-align: left;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
    }
  }
</style>
