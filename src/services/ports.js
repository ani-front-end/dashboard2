//当前版本v2.0

export default {
    four: {
        leftTop: '/four/leftTop',
        leftMiddle: '/four/leftMiddle',
        leftBottom: '/four/leftBottom',
        centerTop: '/four/centerTop',
        centerMiddle: '/four/centerMiddle',
        centerBottom: '/four/centerBottom',
        rightTop: '/four/rightTop',
        rightBottom: '/four/rightBottom',

        leftMiddleSecondOn:'/four/leftMiddleSecondOn',
        leftMiddleSecondUn:'/four/leftMiddleSecondUn',
        centerTopSecond:'/four/centerTopSecond/',
        rightTopSecond:'/four/rightTopSecond/',
        rightBottomSecond:'/four/rightBottomSecond/'

    },
    five: {
        leftTop: '/five/leftTop',
        leftMiddle: '/five/leftMiddle',
        leftBottom: '/five/leftBottom',
        centerTopLeft: '/five/centerTopLeft',
        centerTopRight: '/five/centerTopRight',
        centerMiddle: '/five/centerMiddle',
        centerBottom: '/five/centerBottom',
        rightTop: '/five/rightTop',
        rightMiddle:'/five/rightMiddle',
        rightBottom: '/five/rightBottom',

        leftTopSecond:'/five/leftTopSecond/'
    },
    manage: {
        properties1: '/properties/queryProperties', //获取配置接口
        test: '/posts', // 测试接口
        allProblem: '/patrolApi/allProblem', //firstCenterTop 问题管理状态
        officeFind: '/patrolApi/officeFind', //firstLeftMiddle 机关发现问题统计
        basicDuty: '/patrolApi/basicDuty', //firstRightTop 机关检查基层问题统计
        officeDutyProblem: '/patrolApi/officeDutyProblem', //firstLeftTop 机关产生问题统计
        officePatrol: '/dutyCheckInfo/officePatrol', //firstLeftBottom 机关人员履职情况
        findAlarmStatic: '/alarmStatic/findAlarmStatic', //firstBottomLeft 报警处置情况
        securityEquipment: '/securityEquipment/querySecurityEquipment',//安防设备故障
        basicFind: '/patrolApi/basicFind', //基层发现问题统计
        basicPatrol: '/dutyCheckInfo/basicPatrol',//基层人员履职情况

        tongQiProblem: '/trendProblem/tongQiProblem',//同期各种问题类型间数量对比
        differentProblem: '/trendProblem/differentProblem',//各单位间问题数量对比
        differentUnitProblem: '/trendProblem/differentUnitProblem',//各单位不同时间问题数量对比


        superiorOn: '/safeManage/superiorOn',  //主官在位情况
        keyJobOfficeBearer: '/safeManage/keyJobOfficeBearer', //关键岗位人员情况
        focusOnPersonnel: '/safeManage/focusOnPersonnel', //重点关注人员情况
        unitOut: '/safeManage/unitOut', //各单位人员外出情况

        insertPerson: '/safeManage/insertPerson', //外来人员
        serviceCar: '/safeManage/serviceCar', //勤务车辆情况

        gunMoveUse: '/safeManage/gunMoveUse', //枪支情况
        ammConsumption: '/safeManage/ammConsumption', //弹药消耗情况

        secretCarrier: '/safeManage/secretCarrier', //涉密载体情况
        phoneDefy: '/safeManage/phoneDefy' //手机违规使用情况

    },
    second: {
        allProblemSecond: '/patrolApi/allProblemSecond',
        officeFindSecond: '/patrolApi/officeFindSecond',
        basicFindSecond: '/patrolApi/basicFindSecond',//基层发现问题统计
        officePatrolSecond: '/dutyCheckInfo/officePatrolSecond',//机关人员履职情况
        basicPatrolSecond: '/dutyCheckInfo/basicPatrolSecond',//基层人员履职情况
        officeDutyProblemSecond: '/patrolApi/officeDutyProblemSecond', //机关产生问题统计
        insertPersonSecond: '/safeManage/insertPersonSecond', //外来人员
        personOutInfo: '/safeManage/personOutInfo' //人员外出
    },
    auth: {
        verifyLogin: '/notice/checkOauth',
        isCheckOauth: '/notice/isCheckOauth',
        checkOauthFresh: '/notice/checkOauthFresh',
        SsOauthDestory: '/notice/SsOauthDestory'
    }
}