import LittleLegendBlock from '../LittleLegendBlock.vue'
import properties from '../../services/properties'
export default {
    data () {
        return {
            option : {
                title : {
                    text: '南丁格尔玫瑰图',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'面积模式',
                        type:'pie',
                        radius : [30, 110],
                        center : ['75%', '50%'],
                        roseType : 'area',
                        data:[
                            {value:10, name:'rose1'},
                            {value:5, name:'rose2'},
                            {value:15, name:'rose3'},
                            {value:25, name:'rose4'},
                            {value:20, name:'rose5'},
                            {value:35, name:'rose6'},
                            {value:30, name:'rose7'},
                            {value:40, name:'rose8'}
                        ]
                    }
                ]
            },

            option1: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                color: ['#53d3d9', '#1f5081'],
                grid: {
                    top: '2%',
                    left: '5%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    show: false,
                    type: 'value',
                    borderWidth: 0,

                },
                yAxis: {
                    minInterval:1,
                    type: 'category',
                    axisLabel: {
                        color: '#ffffff'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    data: ['督导组', '部队管理科']
                },
                series: [
                    {
                        //name: '直接访问',

                        type: 'bar',
                        stack: '总量',
                        barWidth: '30%',
                        label: {
                            normal: {
                                formatter:'{c|{c}}',
                                rich: {
                                    c:{
                                        color:'#ffffff',
                                        //fontSize: 30,
                                        opacity: 1
                                    }
                                },
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#ffffff',
                                    opacity: 1
                                }

                            }
                        },
                        data: [128, 136, 301, 334, 404],
                        itemStyle:{
                            borderColor:'#08ceef',
                            borderWidth:1
                        }
                    },
                    {
                        //name: '邮件营销',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                            },
                            //opacity: 1
                        },
                        data: [132, 140, 101, 134, 90],
                        itemStyle:{
                            color:'#1f4f80',
                            borderColor:'3#0eafd4',
                            borderWidth:1,
                            //opacity: 0.28
                        },
                    },
                ]
            },
            options:[],
            value1:0,
            dialogOption:{
                textStyle: {
                    fontFamily: 'monospace',
                },

                grid: {
                    x:50,
                    y:20,
                    x2:1,
                    y2:100
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],
                        axisTick: {
                            alignWithLabel: true
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#edf1f4',
                            fontSize: 15,
                            interval: 0,
                            formatter: function (value) {
                                //x轴的文字改为竖版显示
                                var str = value.split("");
                                return str.join("\n");
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                                shadowColor: '#4d648f',
                                shadowBlur: 10
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        minInterval:1,
                        type: 'value',
                        boundaryGap: ['0%', '20%'],
                        axisLabel: {
                            color: '#edf1f4',
                            fontSize: 10,
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: ['#333']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                                shadowColor: '#4d648f',
                                shadowBlur: 10
                            }
                        }
                    }
                ],
                series: [
                    {
                        //name: '邮件营销',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                color: '#fff',

                            },
                            //opacity: 1
                        },
                        data: [],
                        itemStyle:{
                            borderWidth: 1,
                            color: '#08ceef',
                            borderColor: '#47cdee',
                        }

                    },
                    {
                        //name: '直接访问',

                        type: 'bar',
                        stack: '总量',
                        barWidth: 10,
                        label: {
                            normal: {
                                formatter:'{c|{c}}',
                                rich: {
                                    c:{
                                        color:'#ffffff',
                                        opacity: 1
                                    }
                                },
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#ffffff',
                                    opacity: 1
                                }

                            }
                        },
                        data: [],
                        itemStyle:{
                            color:'#1f4f80',
                            borderColor:'#0eafd4',
                            borderWidth: 1,
                            opacity: 1
                            //opacity: 0.28
                        },
                    },
                ]
            },
            dialogOptionRound: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                title: {
                    text: "0/0",
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 25,
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
                        color:['#ad7319'],
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: ['62%', '63%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        itemStyle: {
                            // color: '#ad7319',
                            // borderColor:'#ad7319'

                        },
                        data:[
                            {value:645, name:''},
                        ]
                    },
                    {
                        name:'',
                        color:['#ad7319'],
                        type:'pie',
                        radius: ['60%', '73%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },

                        itemStyle: {
                            opacity: 0.5
                        },

                        data:[
                            {value:1209, name:'已完成'},
                            {value:1310,
                                name:'未完成',
                                itemStyle: {
                                    opacity: 0
                                }
                            }
                        ]
                    }
                ]
            },
            name:'',
            centerDialogVisible:false,
            dialogOptions:[],
            value2:0,


            autoplay:true,
            autoplaySpeed:10000,
            pageNums:5,
            barWidth:40,
            barColor:'#fff',
            barBorderColor:'#fff',
            secondBarColor:'#fff',
            secondBarBorderColor:'#fff',
            factColor:'#fff',
            factBorderColor:'#fff',
            shouldColor:'#fff',
            shouldBorderColor:'#fff'
        }
    },
    components:{
        'LittleLegendBlock':LittleLegendBlock
    },
    props: [
        'title',
    ],
    mounted() {
        setTimeout(() => {
            //进行一级页面颜色动态配置
            this.autoplay=Boolean(properties.OFFICE_PERSON_AUTO_PLAY);
            this.autoplaySpeed=Number(properties.OFFICE_PERSON_CHANGE_TIMES);
            this.pageNums=Number(properties.OFFICE_PERSON_NUMS)-1;
            this.barWidth=Number(properties.OFFICE_PERSON_BAR_WIDTH);
            this.barColor=properties.BAR_COLOR;
            this.barBorderColor=properties.BAR_BORDER_COLOR;
            this.secondBarColor=properties.SECOND_BAR_COLOR;
            this.secondBarBorderColor=properties.SECOND_BAR_BORDER_COLOR;
            this.secondPageNums=properties.SECOND_PAGE_NUMS;

            this.factColor = properties.FACT_COLOR;
            this.factBorderColor = properties.FACT_BORDER_COLOR;
            this.shouldColor = properties.SHOULD_COLOR;
            this.shouldBorderColor = properties.SHOULD_BORDER_COLOR;
            this.queryData();
            // setInterval(() => {
            //     this.queryData();
            // },properties.QUERY_TIME_SPACE)
        },properties.LOOP_WAIT_TIME)

    },
    methods: {
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
            let name = event.name;
            if(name){
                this.name = name;
                this.openDialog()
                this.http.get(`${this.ports.second.officePatrolSecond}/${name}`, (res) => {
                    console.log('firstLeftBottom2')
                    console.log(res)
                    if(res.success){
                        let data = res.data;
                        let pageNum = 0;
                        let num = 0;
                        this.dialogOptions=[];
                        this.dialogOptions.push({
                            textStyle: {
                                fontFamily: 'monospace',
                            },

                            grid: {
                                x:50,
                                y:20,
                                x2:1,
                                y2:100
                            },
                            xAxis: [
                                {
                                    minInterval:1,
                                    type: 'category',
                                    data: [],
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        color: '#edf1f4',
                                        fontSize: 15,
                                        interval: 0,
                                        formatter: function (value) {
                                            //x轴的文字改为竖版显示
                                            var str = value.split("");
                                            return str.join("\n");
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#fff',
                                            width: 1,
                                            shadowColor: '#4d648f',
                                            shadowBlur: 10
                                        }
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    minInterval:1,
                                    type: 'value',
                                    boundaryGap: ['0%', '20%'],
                                    axisLabel: {
                                        color: '#edf1f4',
                                        fontSize: 10,
                                    },
                                    splitLine: {
                                        show: false,
                                        lineStyle: {
                                            color: ['#333']
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#fff',
                                            width: 1,
                                            shadowColor: '#4d648f',
                                            shadowBlur: 10
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    //name: '邮件营销',
                                    type: 'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideRight',
                                            color: '#fff',

                                        },
                                        //opacity: 1
                                    },
                                    data: [],
                                    itemStyle:{
                                        borderWidth: 1,
                                        color: this.factColor,
                                        borderColor: this.factBorderColor,
                                    }

                                },
                                {
                                    //name: '直接访问',

                                    type: 'bar',
                                    stack: '总量',
                                    barWidth: this.barWidth,
                                    label: {
                                        normal: {
                                            formatter:'{c|{c}}',
                                            rich: {
                                                c:{
                                                    color:'#ffffff',
                                                    opacity: 1
                                                }
                                            },
                                            show: true,
                                            position: 'top',
                                            textStyle: {
                                                color: '#ffffff',
                                                opacity: 1
                                            }

                                        }
                                    },
                                    data: [],
                                    itemStyle:{
                                        color: this.shouldColor,
                                        borderColor: this.shouldBorderColor,
                                        borderWidth: 1,
                                        opacity: 1
                                        //opacity: 0.28
                                    },
                                },
                            ]
                        });
                        // this.dialogOption.xAxis[0].data=[];
                        // this.dialogOption.series[0].data=[];
                        // this.dialogOption.series[1].data=[];
                        // this.dialogOption.series[1].data=[];
//
                        Object.keys(data).forEach(p => {
                            if(p == 'factAll' || p == 'shouldAll' || p == 'division'){
                                // return true;
                            }else{
                                this.dialogOptions[pageNum].xAxis[0].data.push(p)
                                this.dialogOptions[pageNum].series[0].data.push(data[p].factAll)
                                this.dialogOptions[pageNum].series[1].data.push(data[p].shouldAll - data[p].factAll)
                                num++;
                                if(num > this.secondPageNums) {
                                    num = 0;
                                    this.dialogOptions.push({
                                        textStyle: {
                                            fontFamily: 'monospace',
                                        },

                                        grid: {
                                            x:50,
                                            y:20,
                                            x2:1,
                                            y2:100
                                        },
                                        xAxis: [
                                            {
                                                minInterval:1,
                                                type: 'category',
                                                data: [],
                                                axisTick: {
                                                    alignWithLabel: true
                                                },
                                                splitLine: {
                                                    show: false
                                                },
                                                axisLabel: {
                                                    color: '#edf1f4',
                                                    fontSize: 15,
                                                    interval: 0,
                                                    formatter: function (value) {
                                                        //x轴的文字改为竖版显示
                                                        var str = value.split("");
                                                        return str.join("\n");
                                                    }
                                                },
                                                axisLine: {
                                                    lineStyle: {
                                                        color: '#fff',
                                                        width: 1,
                                                        shadowColor: '#4d648f',
                                                        shadowBlur: 10
                                                    }
                                                }
                                            }
                                        ],
                                        yAxis: [
                                            {
                                                minInterval:1,
                                                type: 'value',
                                                boundaryGap: ['0%', '20%'],
                                                axisLabel: {
                                                    color: '#edf1f4',
                                                    fontSize: 10,
                                                },
                                                splitLine: {
                                                    show: false,
                                                    lineStyle: {
                                                        color: ['#333']
                                                    }
                                                },
                                                axisLine: {
                                                    lineStyle: {
                                                        color: '#fff',
                                                        width: 1,
                                                        shadowColor: '#4d648f',
                                                        shadowBlur: 10
                                                    }
                                                }
                                            }
                                        ],
                                        series: [
                                            {
                                                //name: '邮件营销',
                                                type: 'bar',
                                                stack: '总量',
                                                label: {
                                                    normal: {
                                                        show: true,
                                                        position: 'insideRight',
                                                        color: '#fff',

                                                    },
                                                    //opacity: 1
                                                },
                                                data: [],
                                                itemStyle:{
                                                    borderWidth: 1,
                                                    color: this.factColor,
                                                    borderColor: this.factBorderColor,
                                                }

                                            },
                                            {
                                                //name: '直接访问',

                                                type: 'bar',
                                                stack: '总量',
                                                barWidth: this.barWidth,
                                                label: {
                                                    normal: {
                                                        formatter:'{c|{c}}',
                                                        rich: {
                                                            c:{
                                                                color:'#ffffff',
                                                                opacity: 1
                                                            }
                                                        },
                                                        show: true,
                                                        position: 'top',
                                                        textStyle: {
                                                            color: '#ffffff',
                                                            opacity: 1
                                                        }

                                                    }
                                                },
                                                data: [],
                                                itemStyle:{
                                                    color: this.shouldColor,
                                                    borderColor: this.shouldBorderColor,
                                                    borderWidth: 1,
                                                    opacity: 1
                                                    //opacity: 0.28
                                                },
                                            },
                                        ]
                                    })
                                    pageNum++;
                                }
                            }


                            // this.dialogOptions[pageNum].series[0].itemStyle.color=properties.FACT_COLOR;
                            // this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.FACT_BORDER_COLOR;
                            // this.dialogOptions[pageNum].series[1].itemStyle.color=properties.SHOULD_COLOR;
                            // this.dialogOptions[pageNum].series[1].itemStyle.borderColor=properties.SHOULD_BORDER_COLOR;
                        })
                        // color: '#08ceef',  实检
                        //     borderColor: '#47cdee',
                        // color:'#1f4f80',  应检
                        //     borderColor:'#0eafd4',

                        if(this.dialogOptions[this.dialogOptions.length-1].xAxis[0].data.length == 0){
                            this.dialogOptions.pop();
                        }
                        this.dialogOptionRound.title.text = data.division;
                        this.dialogOptionRound.series[1].data[0].value = data.factAll;
                        this.dialogOptionRound.series[1].data[1].value = data.shouldAll - data.factAll;
                        //                        let newOptions = Object.assign({},this.dialogOption);
                        //                        this.dialogOption = newOptions;
                    }
                })
            }
        },
        queryData(){
            this.value1 = 0;
            this.options= [];
            this.http.get(this.ports.manage.officePatrol, (res) => {
                console.log('firstLeftBottom1')
                console.log(res)
                if(res.success){
                    let data = res.data;
                    let pages = Math.ceil(Object.keys(data).length/6)
                    this.pages = pages;
                    let num = 0;
                    let pageNum = 0;
                    this.options.push({
                        textStyle: {
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 12,
                            fontWeight: 'bold',
                        },
                        color: ['#53d3d9', '#1f5081'],
                        grid: {
                            top: '2%',
                            left: '5%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis:  {
                            minInterval:1,
                            show: false,
                            type: 'value',
                            borderWidth: 0,

                        },
                        yAxis: {
                            minInterval:1,
                            type: 'category',
                            axisLabel: {
                                color: '#ffffff'
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            data: []
                        },
                        series: [
                            {
                                //name: '邮件营销',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight',
                                        color: '#fff',

                                    },
                                    //opacity: 1
                                },
                                data: [],
                                itemStyle:{
                                    borderColor:'#08ceef',
                                    borderWidth:1
                                }

                            },
                            {
                                //name: '直接访问',

                                type: 'bar',
                                stack: '总量',
                                barWidth: 10,
                                label: {
                                    normal: {
                                        formatter:'{c|{c}}',
                                        rich: {
                                            c:{
                                                color:'#ffffff',
                                                //fontSize: 30,
                                                opacity: 1
                                            }
                                        },
                                        show: true,
                                        position: 'right',
                                        textStyle: {
                                            color: '#ffffff',
                                            opacity: 1
                                        }

                                    }
                                },
                                data: [],

                                itemStyle:{
                                    color:'#1f4f80',
                                    borderColor:'#0eafd4',
                                    borderWidth:1,
                                    //opacity: 0.28
                                },
                            },


                        ]
                    })
                    Object.keys(data).forEach(p => {
                        if(p == 'division' || p == 'factAll' || p == 'shouldAll'){
                            // return true
                        }else{
                            num++;
                            this.options[pageNum].yAxis.data.push(p);
                            this.options[pageNum].series[0].data.push(data[p].factAll);
                            this.options[pageNum].series[1].data.push((data[p].shouldAll));
                            if(num>this.pageNums){
                                num = 0;
                                this.options.push({
                                    textStyle: {
                                        fontFamily: 'Microsoft YaHei',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                    },
                                    color: ['#53d3d9', '#1f5081'],
                                    grid: {
                                        top: '2%',
                                        left: '5%',
                                        right: '4%',
                                        bottom: '3%',
                                        containLabel: true
                                    },
                                    xAxis:  {
                                        minInterval:1,
                                        show: false,
                                        type: 'value',
                                        borderWidth: 0,

                                    },
                                    yAxis: {
                                        minInterval:1,
                                        type: 'category',
                                        axisLabel: {
                                            color: '#ffffff'
                                        },
                                        axisTick: {
                                            show: false
                                        },
                                        axisLine: {
                                            show: false
                                        },
                                        data: []
                                    },
                                    series: [
                                        {
                                            //name: '邮件营销',
                                            type: 'bar',
                                            stack: '总量',
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'insideRight',
                                                    color: '#fff',

                                                },
                                                //opacity: 1
                                            },
                                            data: [],
                                            itemStyle:{
                                                color:this.factColor,
                                                borderColor:this.factBorderColor,
                                                borderWidth:1
                                            }

                                        },
                                        {
                                            //name: '直接访问',

                                            type: 'bar',
                                            stack: '总量',
                                            barWidth: this.barWidth,
                                            label: {
                                                normal: {
                                                    formatter:'{c|{c}}',
                                                    rich: {
                                                        c:{
                                                            color:'#ffffff',
                                                            //fontSize: 30,
                                                            opacity: 1
                                                        }
                                                    },
                                                    show: true,
                                                    position: 'right',
                                                    textStyle: {
                                                        color: '#ffffff',
                                                        opacity: 1
                                                    }

                                                }
                                            },
                                            data: [],

                                            itemStyle:{
                                                color:this.shouldColor,
                                                borderColor:this.shouldBorderColor,
                                                borderWidth:1,
                                                //opacity: 0.28
                                            },
                                        },


                                    ]
                                })
                                pageNum++;
                            }
                        }

                    });
                    this.option.title.text = data.division;
                    this.option.series[1].data[0].value=data.factAll;
                    this.option.series[1].data[1].value=data.shouldAll - data.factAll;
                }
            });
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