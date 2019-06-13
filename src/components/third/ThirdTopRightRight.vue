<template>
  <div class="content">
    <chart  ref="chart"
            style="height: 100%;width: 100%"
            :options="option"
            :autoresize=true
    ></chart>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                option : {
                    color:['#0c9afd', '#6e39cd', '#c5236f', '#b98e3c','#0c9afd', '#6e39cd', '#c5236f', '#b98e3c'],
                    title: {
                        text: "0",
                        textStyle: {
                            color: '#00d8ff',
                            fontSize: 29,
                            fontWeight: 'bold',
                            shadowColor: '#fff',
                            shadowBlur: 50,
                        },
                        left: 'center',
                        bottom: 'center',
                        itemGap: 60,
                    },
                    series: [
                        {
                            name:'',
                            type:'pie',
                            radius: ['40%', '50%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                opacity: 0.7
                            },
                            label: {
                                normal: {
                                    formatter: '{b|{b}：}{c}  ',
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
//                                {value:3000, name:'手枪式 7.62mm', itemStyle: {borderColor:'#01deff', opacity: 0.7}},
//                                {value:5436, name:'手枪式 5.45mm', itemStyle: {borderColor:'#b401ff', opacity: 0.7}},
//                                {value:4120, name:'53式 7.62mm', itemStyle: {borderColor:'#ff019c', opacity: 0.7}},
//                                {value:3105, name:'54式 12.7mm', itemStyle: {borderColor:'#ffba01', opacity: 0.7}},
//                                {value:3105, name:'54式 12.7mm', itemStyle: {borderColor:'#ffba01', opacity: 0.7}},
//                                {value:3105, name:'54式 12.7mm', itemStyle: {borderColor:'#ffba01', opacity: 0.7}},
//                                {value:3105, name:'54式 12.7mm', itemStyle: {borderColor:'#ffba01', opacity: 0.7}},
                            ]
                        }
                    ]
                }
            }
        },
        props: [
        ],
        mounted() {
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.ammConsumption, (res) => {
                    if(res.success){
                        let data = res.data;
                        let num = 0;
                        this.option.title.text=data.sum;
                        Object.keys(data).forEach(p => {
                            if(p == 'sum'){
//                                return true;
                            }else{
                                this.option.series[0].data.push({value:data[p], name:p, itemStyle: {borderColor:this.option.color[num], opacity: 0.7}})
                                num++;
                            }

                        })
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
    height: 50%;
    margin-top: 20%;
  }
</style>
