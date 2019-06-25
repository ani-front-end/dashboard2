export default {

    static1:'http://192.168.12.240/1.png', //今日菜谱
    static2:1942,                           //年度油耗
    static3:{                                 //营房报修
        "道路损坏": 7,
        "灯泡更换": 15,
        "门窗破损": 10,
        "墙皮维护": 8
    },
    static4:{                               //卫生防疫
        "6连": 2,
        "5连": 1,
        "4连": 3,
        "3连": 2,
        "2连": 1,
        "1连": 4
    },
    static5:{                                   //风气建设
        "6连": 1,
        "5连": 1,
        "4连": 1,
        "3连": 2,
        "2连": 2,
        "1连": 1
    },
    static6:{                                   //本月上级活动数
        "1连": {
            "上级检查": 2,
            "下达文件": 2,
            "会议次数": 1
        },
        "2连": {
            "上级检查": 1,
            "下达文件": 2,
            "会议次数": 1
        }
    },

    pageTitle1:'部队安全管理信息统计分析系统',
    pageTitle2:'部队安全管理信息统计分析系统',
    pageTitle3:'部队安全管理信息统计分析系统',
    title1:'军事训练情况',
    title2:'政治工作情况',
    title3:'后装保障情况',


    LOOP_WAIT_TIME:2000,
    QUERY_TIME_SPACE:10000,
    QUERY_TIME_SPACE_MORE:60000,
    PATH_REQUEST_URL: 'http://192.168.2.110:8080/api',
    BASE_URL: '',
    // SECOND_BAR_NUM:10,
    // SECOND_BAR_COLOR:'#3b78bf',
    // SECOND_BAR_BORDER_COLOR:'#47cdee',
    // CHANGE_TIME:5000,
    BAR_WIDTH: 40,
    BAR_COLOR: '',
    BORDER_COLOR: '',
    SECOND_BAR_COLOR: '',
    SECOND_BAR_BORDER_COLOR: '',
    CHANGE_TIME: 10000,
    FACT_COLOR: '',
    FACT_BORDER_COLOR: '',
    SHOULD_COLOR: '',
    SHOULD_BORDER_COLOR: '',
//是否自动轮播
    AUTO_PLAY: false,
//页面每页显示数目,
    PAGE_NUMS: 8,
    //二级页面每页显示数目
    SECOND_PAGE_NUMS: 8,
//通用多颜色列表
    COLORS_LIST: ['#aaaaaa', '#bbbbbb'],

}