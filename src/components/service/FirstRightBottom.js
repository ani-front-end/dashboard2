import LittleLegendBlock from '../LittleLegendBlock'
import properties from '../../services/properties'

export default {
    data () {
        return {
            option: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    fontWeight: 'bold',
                },

                title: {
                    text: "95%",
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        shadowColor: '#fff',
                        shadowBlur: 50,
                    },
                    left: 'center',
                    bottom: '40%',
                    itemGap: 60,
                },
                series: [
                    {
                        color:['#ad7319'],
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: ['60%', '63%'],
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
                        data:[
                            {value:645, name:''},
                        ]
                    },
                    {
                        name:'',
                        color:['#ad7319', '#132353'],
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
                            {value:95, name:'已完成'},
                            {value:5,
                                name:'未完成',
                                itemStyle: {
                                    opacity: 0
                                }
                            }
                        ]
                    }
                ]
            },

            option1: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    //fontWeight: 'bold',
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
                    data: ['合成一营','合成二营','炮兵营','侦察营']
                },
                series: [
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
                                position: 'insideRight',
                                textStyle: {
                                    color: '#ffffff',
                                    opacity: 1
                                }

                            }
                        },
                        data: [320, 302, 301, 334, 404],
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
                        data: [312, 320, 311, 336, 410],
                        itemStyle:{
                            color:'#1f4f80',
                            borderColor:'3#0eafd4',
                            borderWidth:1,
                            //opacity: 0.28
                        },
                    },

                ]
            },
            value1:0,
            options:[],
            totalNum:0,
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
    props: [
        'title',
    ],
    components:{
      'LittleLegendBlock':LittleLegendBlock,
    },
    mounted() {
        setTimeout(() => {
            //进行一级页面颜色动态配置

            this.autoplay=Boolean(properties.BASIC_PERSON_AUTO_PLAY);
            this.autoplaySpeed=Number(properties.BASIC_PERSON_CHANGE_TIMES);
            this.pageNums=Number(properties.BASIC_PERSON_NUMS)-1;
            this.barWidth=Number(properties.BASIC_PERSON_BAR_WIDTH);
            this.barColor=properties.BAR_COLOR;
            this.barBorderColor=properties.BAR_BORDER_COLOR;
            this.secondBarColor=properties.SECOND_BAR_COLOR;
            this.secondBarBorderColor=properties.SECOND_BAR_BORDER_COLOR;
            this.secondPageNums=(properties.SECOND_PAGE_NUMS)-1;

            this.factColor = properties.FACT_COLOR;
            this.factBorderColor = properties.FACT_BORDER_COLOR;
            this.shouldColor = properties.SHOULD_COLOR;
            this.shouldBorderColor = properties.SHOULD_BORDER_COLOR;
            this.queryData();
            // setInterval(() => {
            //     this.queryData();
            //
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
            console.log('firstRightBottomEvent')
            console.log(event)
            let name = event.name;
            if(name){
                this.name = name;
                this.openDialog()
                this.http.get(`${this.ports.second.basicPatrolSecond}/${name}`, (res) => {
                    console.log('firstRightBottom2')
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
                                            position: 'left',
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
                        })
                        // this.dialogOption.xAxis[0].data=[];
                        // this.dialogOption.series[0].data=[];
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
                                                        position: 'left',
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

                                // this.dialogOptions[pageNum].series[0].itemStyle.color=properties.FACT_COLOR;
                                // this.dialogOptions[pageNum].series[0].itemStyle.borderColor=properties.FACT_BORDER_COLOR;
                                // this.dialogOptions[pageNum].series[1].itemStyle.color=properties.SHOULD_COLOR;
                                // this.dialogOptions[pageNum].series[1].itemStyle.borderColor=properties.SHOULD_BORDER_COLOR;
                            }

                        })
                        if(this.dialogOptions[this.dialogOptions.length-1].xAxis[0].data.length == 0){
                            this.dialogOptions.pop();
                        }
                        // color: '#08ceef',  实检
                        //     borderColor: '#47cdee',
                        // color:'#1f4f80',  应检
                        //     borderColor:'#0eafd4',
                        this.dialogOptionRound.title.text = data.division;
                        this.dialogOptionRound.series[1].data[0].value = data.factAll; //0
                        this.dialogOptionRound.series[1].data[1].value = data.shouldAll - data.factAll;  //1


                        //                        let newOptions = Object.assign({},this.dialogOption);
                        //                        this.dialogOption = newOptions;
                    }
                })
            }
        },
        queryData(){
            this.value1=0;
            this.options=[];
            this.http.get(this.ports.manage.basicPatrol, (res) => {
                console.log('firstRightBottom1')
                console.log(res)
                if(res.success){
                    let data = res.data;
                    let num = 0;
                    let pageNum = 0;
                    this.options.push({
                        textStyle: {
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 12,
                            //fontWeight: 'bold',
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
                                        position: 'insideRight',
                                        textStyle: {
                                            color: '#ffffff',
                                            opacity: 1
                                        }

                                    }
                                },
                                data: [],
                                itemStyle:{
                                    color:this.factColor,
                                    borderColor:this.factBorderColor,
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
                                        position: 'right',
                                        color:'#fff'
                                    },
                                    //opacity: 1
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
                    });

                    Object.keys(data).forEach(p => {
                        if(p == 'division' || p == 'factAll' || p == 'shouldAll'){
                            // return true;
                        }else{
                            this.options[pageNum].yAxis.data.push(p);
                            this.options[pageNum].series[0].data.push(data[p].factAll);
                            this.options[pageNum].series[1].data.push(data[p].shouldAll);
                            num++;
                            if(num>this.pageNums){
                                num = 0;
                                this.options.push({
                                    textStyle: {
                                        fontFamily: 'Microsoft YaHei',
                                        fontSize: 12,
                                        //fontWeight: 'bold',
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
                                                    position: 'insideRight',
                                                    textStyle: {
                                                        color: '#ffffff',
                                                        opacity: 1
                                                    }

                                                }
                                            },
                                            data: [],
                                            itemStyle:{
                                                color:this.factColor,
                                                borderColor:this.factBorderColor,
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
                    })
                    this.option.title.text = data.division
                    this.option.series[1].data[0].value=data.factAll;
                    this.option.series[1].data[1].value=data.shouldAll-data.factAll;
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