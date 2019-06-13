export default {
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

//重点关注人员情况
//柱宽
    KEY_NOTE_PERSON_BAR_WIDTH: 10,
    //页面柱的数量
    KEY_NOTE_PERSON_NUMS: 2,
    //颜色列表
    KEY_NOTE_PERSON_COLOR_LIST: ['#aaaaaa', '#bbbbbb', '#cccccc'],
//是否自动切换
    KEY_NOTE_PERSON_AUTO_PLAY: true,
    //自动切换时间
    KEY_NOTE_PERSON_CHANGE_TIMES: 5000,

//机关发现问题统计
//柱宽
    OFFICE_FIND_BAR_WIDTH: 10,
    //页面柱的数量
    OFFICE_FIND_NUMS: 2,
    //是否自动切换
    OFFICE_FIND_AUTO_PLAY: true,
    //自动切换时间
    OFFICE_FIND_CHANGE_TIMES: 5000,

//机关人员履职情况
//柱宽
    OFFICE_PERSON_BAR_WIDTH: 10,
    //页面柱的数量
    OFFICE_PERSON_NUMS: 6,
    //是否自动切换
    OFFICE_PERSON_AUTO_PLAY: true,
    //自动切换时间
    OFFICE_PERSON_CHANGE_TIMES: 5000,

//基层发现问题统计
//柱宽
    BASIC_FIND_BAR_WIDTH: 10,
    //页面柱的数量
    BASIC_FIND_NUMS: 6,
    //是否自动切换
    BASIC_FIND_AUTO_PLAY: true,
    //自动切换时间
    BASIC_FIND_CHANGE_TIMES: 5000,

//基层人员履职情况
//柱宽
    BASIC_PERSON_BAR_WIDTH: 10,
    //页面柱的数量
    BASIC_PERSON_NUMS: 6,
    //是否自动切换
    BASIC_PERSON_AUTO_PLAY: true,
    //自动切换时间
    BASIC_PERSON_CHANGE_TIMES: 5000,

//勤务车辆情况
//颜色
    SERVICE_CAR_COLOR: '#aaa',
    //边框颜色
    SERVICE_CAR_BORDER_COLOR: '#bbb',
    setBaseUrl(val){
        this.SECOND_PAGE_NUMS = val.secondPageNums;
        this.BAR_COLOR = val.barColor;
        this.BAR_BORDER_COLOR = val.barBorderColor;
        this.BASE_URL = val.baseUrl;
        this.BAR_WIDTH = val.secondBarWidth;
        this.SECOND_BAR_COLOR = val.secondBarColor;
        this.SECOND_BAR_BORDER_COLOR = val.secondBarBorderColor;
        this.CHANGE_TIME = val.changeTime;
        this.FACT_COLOR = val.factColor;
        this.FACT_BORDER_COLOR = val.factBorderColor;
        this.SHOULD_COLOR = val.shouldColor;
        this.SHOULD_BORDER_COLOR = val.shouldBorderColor;
        this.AUTO_PLAY = val.autoPlay;
        this.PAGE_NUMS = val.pageNums;
        this.COLORS_LIST = val.colorsList;

        this.KEY_NOTE_PERSON_BAR_WIDTH = val.keyNotePersonBarWidth;
        this.KEY_NOTE_PERSON_NUMS = val.keyNotePersonNums;
        this.KEY_NOTE_PERSON_COLOR_LIST = val.keyNotePersonColorList;
        this.KEY_NOTE_PERSON_AUTO_PLAY = val.keyNotePersonAutoPlay;
        this.KEY_NOTE_PERSON_CHANGE_TIMES = val.keyNotePersonChangeTimes;



        this.OFFICE_FIND_BAR_WIDTH = val.officeFindBarWidth;
        this.OFFICE_FIND_NUMS = val.officeFindNums;
        this.OFFICE_FIND_AUTO_PLAY = val.officeFindAutoPlay;
        this.OFFICE_FIND_CHANGE_TIMES = val.officeFindChangeTimes;

        this.OFFICE_PERSON_BAR_WIDTH = val.officePersonBarWidth;
        this.OFFICE_PERSON_NUMS = val.officePersonNums;
        this.OFFICE_PERSON_AUTO_PLAY = val.officePersonAutoPlay;
        this.OFFICE_PERSON_CHANGE_TIMES = val.officePersonChangeTimes;

        this.BASIC_FIND_BAR_WIDTH = val.basicFindBarWidth;
        this.BASIC_FIND_NUMS = val.basicFindNums;
        this.BASIC_FIND_AUTO_PLAY = val.basicFindAutoPlay;
        this.BASIC_FIND_CHANGE_TIMES = val.basicFindChangeTimes;

        this.BASIC_PERSON_BAR_WIDTH = val.basicPersonBarWidth;
        this.BASIC_PERSON_NUMS = val.basicPersonNums;
        this.BASIC_PERSON_AUTO_PLAY = val.basicPersonAutoPlay;
        this.BASIC_PERSON_CHANGE_TIMES = val.basicPersonChangeTimes;

        this.SERVICE_CAR_COLOR = val.serviceCarColor;
        this.SERVICE_CAR_BORDER_COLOR = val.serviceCarBorderColor;

    }
}