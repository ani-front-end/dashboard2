
import properties from '../../services/properties'

export default {
    data () {
        return {
            optionLeftTop: {
                grid: {
                    left: '53%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                title: {
                    text: "50/54",
                    textStyle: {
                        color: '#00d8ff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        shadowColor: '#fff',
                        shadowBlur: 50,
                    },
                    left: 'center',
                    bottom: '20%',
                    itemGap: 60,
                },

                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: [0, '10%'],
                        itemStyle: {
                            color: '#ffffff',
                            opacity: 0
                        },
                        label: {
                            normal: {
                                formatter: '{abg|}   ',
                                position: 'center',
                                fontSize: 60,
                                backgroundColor: {
                                    image: 'img/icon-top-left.png'
                                },
                                //更改数值以更改图片大小，适应不同屏幕
                                width: 60,
                                hight: 50,
                                rich: {
                                    abg: {
                                        width: 10,
                                        align: 'center',
                                        height: 0
                                    },
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'背景色'},
                        ]
                    },
                    {
                        //null, dont't dispaly,used for show lable
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                color: '#ffffff',
                                padding: [-20, -50, 0, 0],
                                height: 50,
                                fontSize: 12,
                                align: 'center',
                                //show: false,
                                // formatter:'{cate|{b}\n{d}%}',
                                // rich: {
                                //     cate: {
                                //         color: '#ffffff'
                                //     }
                                // },
                            }

                            // formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            // normal: {
                            //     show: true,
                            //     position: 'outside',
                            //     fontSize: 40,
                            // },
                            // emphasis: {
                            //     show: false,
                            //     textStyle: {
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {
                                value:200,
                                name:'',
                                itemStyle: {
                                    color: '#cccccc',
                                    opacity: 0
                                },
                                lable: {
                                    normal: {
                                        show: false,
                                        formatter:'',
                                    },
                                    emphasis: {
                                        show: false
                                    }

                                },
                                labelLine: {
                                    normal: {


                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },


                            },
                            {
                                value:200,
                                name:'事项记录：93%',
                                itemStyle: {
                                    color: '#14182e'
                                },
                                lable:{
                                    normal: {
                                        padding: [0, -80],
                                        height: 100,
                                        fontSize: 8,
                                        align: 'center',
                                        show: false,
                                        //formatter: 'ccc',
                                        color: '#bf025e',
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true,
                                        length: 30,
                                        //length2: 10,
                                        lineStyle: {
                                            color: '#bf025e',
                                            type: 'solid'
                                        }

                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                            },
                        ]
                    },
                    {
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            normal: {
                                show: false,
                                position: 'center',
                                fontSize: 40,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:54, name:'直接访问', itemStyle: {color: '#bf025e'}},
                            {value:4, name:'11', itemStyle: {color: '#14182e'}},
                        ]
                    },


                ]
            },
            optionLeftBottom: {
                title: {
                    text: "1/1",
                    textStyle: {
                        color: '#00d8ff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        shadowColor: '#fff',
                        shadowBlur: 50,
                    },
                    left: 'center',
                    bottom: '20%',
                    itemGap: 60,
                },

                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: [0, '10%'],
                        itemStyle: {
                            color: '#ffffff',
                            opacity: 0
                        },
                        label: {
                            normal: {
                                formatter: '{abg|}   ',
                                position: 'center',
                                fontSize: 60,
                                backgroundColor: {
                                    image: 'img/icon-bottom-left.png'
                                },
                                rich: {
                                    abg: {
                                        width: 10,
                                        align: 'center',
                                        height: 0
                                    },
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'背景色'},
                        ]
                    },
                    {
                        //null, dont't dispaly,used for show lable
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                color: '#ffffff',
                                padding: [-20, -50, 0, 0],
                                height: 50,
                                fontSize: 12,
                                align: 'center',
                                //formatter:'{cate|{b}\n{d}%}',
                                // rich: {
                                //     cate: {
                                //         color: '#ffffff'
                                //     }
                                // },
                            }

                            // formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            // normal: {
                            //     show: true,
                            //     position: 'outside',
                            //     fontSize: 40,
                            // },
                            // emphasis: {
                            //     show: false,
                            //     textStyle: {
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {
                                value:200,
                                name:'',
                                itemStyle: {
                                    color: '#cccccc',
                                    opacity: 0
                                },
                                lable: {
                                    normal: {
                                        show: false,
                                        formatter:'',
                                    },
                                    emphasis: {
                                        show: false
                                    }

                                },
                                labelLine: {
                                    normal: {


                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },


                            },
                            {
                                value:200,
                                name:'报警设备：100%',
                                itemStyle: {
                                    color: '#14182e'
                                },
                                lable:{
                                    normal: {
                                        show: true,
                                        //formatter: 'ccc',
                                        //color: '#bf025e',
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true,
                                        length: 30,
                                        lineStyle: {
                                            color: '#41a9e0'
                                        }

                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                            },
                        ]
                    },
                    {
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            normal: {
                                show: false,
                                position: 'center',
                                fontSize: 40,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:1, name:'直接访问', itemStyle: {color: '#41a9e0'}},
                            {value:0, name:'', itemStyle: {color: '#14182e'}},
                        ]
                    }
                ]
            },
            optionRightTop: {
                title: {
                    text: "144/173",
                    textStyle: {
                        color: '#00d8ff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        shadowColor: '#fff',
                        shadowBlur: 50,
                    },
                    left: 'center',
                    bottom: '20%',
                    itemGap: 60,
                },

                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: [0, '10%'],
                        itemStyle: {
                            color: '#ffffff',
                            opacity: 0
                        },
                        label: {
                            normal: {
                                formatter: '{abg|}   ',
                                position: 'center',
                                fontSize: 60,
                                backgroundColor: {
                                    image: 'img/icon-top-right.png'
                                },
                                rich: {
                                    abg: {
                                        width: 10,
                                        align: 'center',
                                        height: 0
                                    },
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'背景色'},
                        ]
                    },
                    {
                        //null, dont't dispaly,used for show lable
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                color: '#ffffff',
                                padding: [-20, 0, 0, -50],
                                height: 50,
                                fontSize: 12,
                                align: 'center',
                                // formatter:'{cate|{b}\n{d}%}',
                                // rich: {
                                //     cate: {
                                //         color: '#ffffff'
                                //     }
                                // },
                            }

                            // formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            // normal: {
                            //     show: true,
                            //     position: 'outside',
                            //     fontSize: 40,
                            // },
                            // emphasis: {
                            //     show: false,
                            //     textStyle: {
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {
                                value:200,
                                name:'监控设备:83%',
                                itemStyle: {
                                    color: '#14182e'
                                },
                                lable:{
                                    normal: {
                                        show: true,
                                        //formatter: 'ccc',
                                        //color: '#bf025e',
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true,
                                        length: 30,
                                        lineStyle: {
                                            color: '#be0320'
                                        }

                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                            },
                            {
                                value:200,
                                name:'',
                                itemStyle: {
                                    color: '#cccccc',
                                    opacity: 0
                                },
                                lable: {
                                    normal: {
                                        show: false,
                                        formatter:'',
                                    },
                                    emphasis: {
                                        show: false
                                    }

                                },
                                labelLine: {
                                    normal: {


                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },

                            },

                        ]
                    },
                    {
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            normal: {
                                show: false,
                                position: 'center',
                                fontSize: 40,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:173, name:'直接访问', itemStyle: {color: '#be0320'}},
                            {value:31, name:'', itemStyle: {color: '#14182e'}},
                        ]
                    }
                ]
            },
            optionRightBottom: {
                title: {
                    text: "10/12",
                    textStyle: {
                        color: '#00d8ff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        shadowColor: '#fff',
                        shadowBlur: 50,
                    },
                    left: 'center',
                    bottom: '20%',
                    itemGap: 60,
                },

                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: [0, '10%'],
                        itemStyle: {
                            color: '#ffffff',
                            opacity: 0
                        },
                        label: {
                            normal: {
                                formatter: '{abg|}   ',
                                position: 'center',
                                fontSize: 60,
                                backgroundColor: {
                                    image: 'img/icon-bottom-right.png'
                                },
                                rich: {
                                    abg: {
                                        width: 10,
                                        align: 'center',
                                        height: 0
                                    },
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'背景色'},
                        ]
                    },
                    {
                        //null, dont't dispaly,used for show lable
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                color: '#ffffff',
                                padding: [-20, 0, 0, -50],
                                height: 50,
                                fontSize: 12,
                                align: 'center',
                                // formatter:'{cate|{b}\n{d}%}',
                                // rich: {
                                //     cate: {
                                //         color: '#ffffff'
                                //     }
                                // },
                            }

                            // formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            // normal: {
                            //     show: true,
                            //     position: 'outside',
                            //     fontSize: 40,
                            // },
                            // emphasis: {
                            //     show: false,
                            //     textStyle: {
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {
                                value:200,
                                name:'存储设备:83%',
                                itemStyle: {
                                    color: '#14182e'
                                },
                                lable:{
                                    normal: {
                                        show: true,
                                        //formatter: 'ccc',
                                        //color: '#bf025e',
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true,
                                        length: 30,
                                        lineStyle: {
                                            color: '#20cad7'
                                        }

                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                            },
                            {
                                value:200,
                                name:'',
                                itemStyle: {
                                    color: '#',
                                    opacity: 0
                                },
                                lable: {
                                    normal: {
                                        show: false,
                                        formatter:'',
                                    },
                                    emphasis: {
                                        show: false
                                    }

                                },
                                labelLine: {
                                    normal: {


                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },

                            },

                        ]
                    },
                    {
                        type:'pie',
                        radius: ['62%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            formatter: '{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            normal: {
                                show: false,
                                position: 'center',
                                fontSize: 40,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:12, name:'直接访问', itemStyle: {color: '#20cad7'}},
                            {value:2, name:'',itemStyle: {color: '#14182e'}},
                        ]
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
        // setInterval(() => {
        //     this.queryData();
        // },properties.QUERY_TIME_SPACE)
    },
    methods:{
        queryData(){
            this.http.get(this.ports.manage.securityEquipment, (res) => {
                if(res.success){
                    let data = res.data;
                    this.optionLeftTop.series[2].data[0].value=data.item.noOnline;
                    this.optionLeftTop.series[2].data[1].value=data.item.sum-data.item.noOnline;
                    this.optionLeftTop.series[1].data[1].name='事项记录:'+data.item.division;

                    this.optionRightTop.series[2].data[0].value=data.video.noOnline;
                    this.optionRightTop.series[2].data[1].value=data.video.sum-data.video.noOnline;
                    this.optionRightTop.series[1].data[0].name='监控设备:'+data.video.division;

                    // this.optionLeftBottom.series[2].data[0].value=data.nvr.noOnline;
                    // this.optionLeftBottom.series[2].data[1].value=data.nvr.sum-data.nvr.noOnline;
                    // this.optionLeftBottom.series[1].data[1].name='报警设备:'+data.nvr.division;

                    this.optionRightBottom.series[2].data[0].value=data.alarm.noOnline;
                    this.optionRightBottom.series[2].data[1].value=data.alarm.sum-data.alarm.noOnline;
                    this.optionRightBottom.series[1].data[0].name='存储设备:'+data.alarm.division;



                    this.optionLeftTop.title.text = data.item.noOnline+ '/' + data.item.sum;
                    this.optionRightTop.title.text = data.video.noOnline+ '/' + data.video.sum;
                    // this.optionLeftBottom.title.text = data.nvr.noOnline+ '/' + data.nvr.sum;
                    this.optionRightBottom.title.text = data.alarm.noOnline+ '/' + data.alarm.sum;
                    let newOptions = Object.assign({}, this.option);
                    this.option = newOptions;

                }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
            })
        }
    },
    computed: {
        getColorClass: function () {
            return {
                'title-color': this.isBlue,
            }
        }
    }
}