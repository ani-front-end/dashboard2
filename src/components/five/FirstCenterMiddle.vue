<template>
    <div class="content" style="position: relative">
        <el-button size="mini" type="primary"
                   style="position: absolute;top: 0.1rem;right:0.1rem;z-index: 999"
                   @click="openScreenDialog()">全屏
        </el-button>
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
    import properties from "../../services/properties";
    export default{
        data(){
            return {
                option : {
                    title : {
                        text: '营房报修',
                        textStyle:{color:'#fff'},
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data:['门窗破损','道路损坏','灯泡更换','墙皮维护'],
                        textStyle:{color:'#fff'}
                    },
                    series : [
                        {
                            name:'营房报修',
                            type:'pie',
                            radius : [20, '65%'],
                            center: ['50%', '50%'],
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
            this.queryData()
        },
        methods:{
            openScreenDialog() {
                this.$emit('getChildOption', this.option)
            },
            queryData(){
//                this.http.get(this.ports.five.centerMiddle, (res) => {
//                    console.log('营房报修-sixCenterMiddle:',res);
//                    if (res.error_msg == '成功') {
//                        let data=res.data;
                        //静态数据
                        let data = properties.static3;
                        console.log('营房报修-static-sixCenterMiddle:',data);
                        Object.keys(data).forEach(p=>{
                            this.option.legend.data.push(p);
                            this.option.series[0].data.push({value:data[p], name:p})
                        })

//                    }
//                });
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
