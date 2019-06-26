<template>
    <div class="content" style="position: relative">
        <el-button size="mini" type="primary" style="position: absolute;top: 0.1rem;right:0.1rem;z-index: 999" @click="openScreenDialog()">全屏</el-button>

        <div class="content-left"  @mouseover="mouseOver()" @mouseout="mouseOut()">
          <!--<Carousel v-model="value1"-->
                    <!--:autoplay=autoplay-->
                    <!--:autoplay-speed=autoplaySpeed-->
                    <!--arrow="never"-->
                    <!--:radius-dot=true-->
                    <!--height="2rem"-->
                    <!--style="height:100%;"-->

          <!--&gt;-->
              <!--<CarouselItem style="" v-for="(item,index) in options" :key="index">-->
                  <chart  ref="chart1"
                          style="height: 100%;width: 100%"
                          :options="option"
                          :autoresize=true
                          @click="onClick"
                  ></chart>
              <!--</CarouselItem>-->
          <!--</Carousel>-->
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
                      人员在位情况
                  </div>
              </div>
              <div class="dialog-bottom">
                  <div class="bottom-left">
                      <div class="left1"> {{name}}</div>
                      <div class="left2">({{seriesName}})</div>
                  </div>
                  <div class="bottom-center">

                  </div>
                  <div class="bottom-right">
                      <!--<Carousel v-model="value2"-->
                                <!--:autoplay=autoplay-->
                                <!--:autoplay-speed=autoplaySpeed-->
                                <!--arrow="never"-->
                                <!--:radius-dot=true-->
                                <!--height="1.42rem"-->
                                <!--style="height:100%;"-->

                      <!--&gt;-->
                          <!--<CarouselItem class="screen-carousel" v-for="(item,index) in dialogOptions" :key="index">-->
                              <chart ref="chart1"
                                     style="height: 100%;width: 100%"
                                     :options="dialogOption"
                                     :autoresize=true
                              ></chart>
                          <!--</CarouselItem>-->
                      <!--</Carousel>-->

                  </div>
              </div>
          </div>
      </el-dialog>
  </div>
</template>
<script>
    import properties from '../../services/properties'
    export default {
        data () {
            return {
                autoplay:true,
                autoplaySpeed:10000,
                pageNums:5,
                barWidth:40,
                barColor:'#fff',
                barBorderColor:'#fff',
                secondBarColor:'#fff',
                secondBarBorderColor:'#fff',
                secondPageNums:8,

                name:'',
                seriesName:'',
                centerDialogVisible:false,
                options:[{
                    title : {
                        text: '人员在位情况',
                        x:'center',
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['在位','不在位'],
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series : [
                        {
                            name: '人员在位情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'不在位'},
                                {value:1548, name:'在位'}
                            ],
                            label: {
                                normal: {
                                    formatter: '{b|{b}：}{c} ({d}%)',
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
                                            '#7ec8fd','#FF7243',
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                }],
                value1:0,
                dialogOptions:[],
                value2:0,
                option : {
                    title : {
                        text: '人员在位情况',
                        x:'center',
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['在位','不在位'],
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series : [
                        {
                            name: '人员在位情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:0, name:'不在位'},
                                {value:0, name:'在位'}
                            ],
                            label: {
                                normal: {
                                    formatter: '{b|{b}：}{c} ({d}%)',
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
                                            '#7ec8fd','#FF7243',
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                },

                dialogOption:{
                    title : {
                        text: '',
                        x:'center',
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: [],
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series : [
                        {
                            name: '人员在位情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                // {value:0, name:'不在位'},
                                // {value:0, name:'在位'}
                            ],
                            label: {
                                normal: {
                                    formatter: '{b|{b}：}{c} ({d}%)',
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
                            }
                        }
                    ]
                },
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
            setTimeout(() => {
                //进行一级页面颜色动态配置

                this.autoplay=Boolean(properties.OFFICE_FIND_AUTO_PLAY);
                this.autoplaySpeed=Number(properties.OFFICE_FIND_CHANGE_TIMES);
                this.pageNums=Number(properties.OFFICE_FIND_NUMS)-1;
                this.barWidth=Number(properties.OFFICE_FIND_BAR_WIDTH);
                this.secondPageNums=properties.SECOND_PAGE_NUMS;

                this.barColor=properties.BAR_COLOR;
                this.barBorderColor=properties.BAR_BORDER_COLOR;
                this.secondBarColor=properties.SECOND_BAR_COLOR;
                this.secondBarBorderColor=properties.SECOND_BAR_BORDER_COLOR;
                // this.queryData();
//                setInterval(() => {
//                    this.queryData();
//                },properties.QUERY_TIME_SPACE)
            },properties.LOOP_WAIT_TIME)

        },
        methods:{
            openScreenDialog(){
                this.$emit('getChildOption',this.option)
            },
            mouseOver(){
                this.autoplay=false;
            },
            mouseOut(){
                this.autoplay=true;
            },
            openDialog(){
                this.centerDialogVisible = true
            },
            onClick(event) {
                this.value2 = 0;
                console.log(event);
                let name = event.name;
                let seriesName = event.seriesName;
                if(name){
                    this.name = name;
                    this.seriesName = seriesName;
                    this.openDialog();
                    this.dialogOption.title.text=name;
                    this.dialogOption.legend.data=[];
                    this.dialogOption.series[0].data=[];
                    if(name=='在位'){
                        this.http.get(this.ports.four.leftMiddleSecondOn, (res) => {
                            console.log('在位:',res);
                            if(res.error_msg=='成功') {
                                let data = res.data;
                                Object.keys(data).forEach(p=>{
                                    this.dialogOption.legend.data.push(p);
                                    this.dialogOption.series[0].data.push({value:data[p], name:p})
                                })

                            }
                        })
                    }else if(name=='不在位'){
                        this.http.get(this.ports.four.leftMiddleSecondUn, (res) => {
                            console.log('不在位:',res);
                            if(res.error_msg=='成功') {
                                let data = res.data;
                                Object.keys(data).forEach(p=>{
                                    this.dialogOption.legend.data.push(p);
                                    this.dialogOption.series[0].data.push({value:data[p], name:p})
                                })

                            }
                        })
                    }

                }
            },
            queryData(){
                this.value1 = 0;
                this.options=[];
                this.http.get(this.ports.four.leftMiddle, (res) => {
                    console.log('人员在位情况-fiveLeftMiddle:',res);
                    if(res.error_msg=='成功') {
                        let data = res.data;
                        this.option.series[0].data[0].value=data.不在位;
                        this.option.series[0].data[1].value=data.在位;

                    }
                })
            },
        },
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .bottom-left{
        align-items: center !important;
    }
    .left2{
        font-size: 0.25rem !important;
    }
  .content{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem;
    .content-left{
      height: 100%;
      width: 100%;
      /*border:1px solid grey;*/
    }
  }
</style>
