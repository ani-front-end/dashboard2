<template>
    <div class="content">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
                @click="onClick"
        ></chart>
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
                        训练伤情况
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
    export default {
        data () {
            return {
                option:{
                    grid: {
                        x:50,
                        y:20,
                        x2:1,
                        y2:50
                    },
                    title : {
                        textStyle: {
                            color: '#fff',
                            fontSize: 29,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        top: 'top',
                        itemGap: 60,
                        text: '训练伤情况',
//                        subtext: '纯属虚构',
                        x:'top'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['基础课目训练','专项课目训练','专业训练'],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    series : [
                        {
                            name: '训练伤情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            label: {
                                normal: {
                                    formatter: "{b|{b}：}{c}({d}%)",
                                    backgroundColor: {
//                                        image: 'https://www.baidu.com/favicon.ico'
                                    },
//                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
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
                            data:[
                                {value:0, name:'基础课目训练'},
                                {value:0, name:'专项课目训练'},
                                {value:0, name:'专业训练'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{
                                    color:function(params) {
                                        var colorList = [
                                            '#ea30d5','#FF7243','#7fc8fd'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                },
                name:'',
                seriesName:'',
                centerDialogVisible:false,
                value1:0,
                dialogOptions:[],
                value2:0,
                dialogOption:{
                    grid: {
                        x:50,
                        y:20,
                        x2:1,
                        y2:50
                    },
                    title : {
                        textStyle: {
                            color: '#fff',
                            fontSize: 29,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        top: 'top',
                        itemGap: 60,
                        text: '训练伤情况',
//                        subtext: '纯属虚构',
                        x:'top'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: [],
                        textStyle: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    series : [
                        {
                            name: '训练伤情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            label: {
                                normal: {
                                    formatter: "{b|{b}：}{c}({d}%)",
                                    backgroundColor: {
//                                        image: 'https://www.baidu.com/favicon.ico'
                                    },
//                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
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
                            data:[
                                // {value:0, name:'基础课目训练'},
                                // {value:0, name:'专项课目训练'},
                                // {value:0, name:'专业训练'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{
                                    color:function(params) {
                                        var colorList = [
                                            '#ea30d5','#FF7243','#7fc8fd'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                },
                autoplay:true,
                autoplaySpeed:10000,
            }
        },
        props: [
        ],
        created() {
           this.queryData();
        },
        methods:{
            onClick(event){
                this.value2 = 0;
                let name = event.name;
                let seriesName = event.seriesName;
                if(name){
                    this.name = name;
                    this.seriesName = seriesName;
                    this.centerDialogVisible = true;
                    //console.log(name);
                    let checkType;
                    if(name=='专业训练'){
                        checkType=1;
                    }else if(name=='基础课目训练'){
                        checkType=2
                    }else if(name=='专项课目训练'){
                        checkType=3
                    }
                    this.dialogOption.legend.data=[];
                    this.dialogOption.series[0].data=[];
                    this.http.get(this.ports.four.centerTopSecond+'/'+checkType, (res) => {
                        console.log('训练伤情况:',res);
                        if(res.error_msg=='成功') {
                            let data = res.data;
                            Object.keys(data).forEach(p=>{
                                this.dialogOption.legend.data.push(p);
                                this.dialogOption.series[0].data.push({value:data[p], name:p})
                            })

                        }
                    })

                }

            },
            queryData(){
                this.http.get(this.ports.four.centerTop, (res) => {
                    console.log('centerTop:',res);
                    if(res.error_msg=='成功') {
                        this.option.series[0].data[0].value=res.data.基础课目训练;
                        this.option.series[0].data[1].value=res.data.专项课目训练;
                        this.option.series[0].data[2].value=res.data.专业训练;
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
        height: 100%;
    }
    .left2{
        font-size: 0.25rem !important;
    }
</style>
