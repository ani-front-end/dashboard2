<!--
    当前版本 v2.0
    更新日期 2019-03-08
-->

<template>
    <div id="app">
        <div class="app-header">
            <div class="app-header-left">
                <div class="left-title-div">
                    <span class="left-title">{{title}}</span>
                </div>
            </div>
            <div class="app-header-nav">
                <router-link to="/four" class="banner-title-div"><div :class="fourTitle" class="title">页面一</div></router-link>
                <router-link to="/five" class="banner-title-div"><div :class="fiveTitle" class="title">页面二</div></router-link>
                <!--<router-link to="/third" class="banner-title-div"><div :class="thirdTitle" class="title">重要信息展示</div></router-link>-->
                <!--<router-link to="/four" class="banner-title-div"><div :class="firstTitle" class="title">页面一</div></router-link>-->
                <!--<router-link to="/five" class="banner-title-div"><div :class="firstTitle" class="title">页面二</div></router-link>-->
            </div>
            <div class="app-header-right" style="position: relative">
                <span class="right-title">{{nowTime}}</span>
                <!--<el-button type="text" style="position: absolute;right: 10%;" @click="logout()">退出登录</el-button>-->
                <el-button type="text" style="position: absolute;right: 50%;top:80%; color: #fff">{{userid}}</el-button>
            </div>
        </div>

        <router-view/>
    </div>
</template>
<script>
//    import axios from 'axios'
    import properties from './services/properties'
import BASE_URL from './services/api'
    export default {
        data(){
            return {
                userid:'',
                nowTime:'',
                currentRoute: 'four',
                title: '问题页面一'
            }
        },
        created() { //这里是测试URL代码
//            this.getLogin();
            this.getProperties();
        },
        mounted(){
            this.getTimeInterval();
        },
        watch:{
            $route(val){
                this.currentRoute = val.name;
                if(val.name == 'first'){
                    this.title= '安全管理问题状态'
                }else if(val.name == 'second'){
                    this.title= '安全管理趋势分析'
                }else if(val.name == 'third'){
                    this.title= '安全管理动态'
                }else if(val.name == 'four'){
                    this.title= '问题页面一'
                }else {
                    this.title= '问题页面二'
                }
            }
        },
        methods:{

            getProperties(){

                this.http.get(this.ports.manage.properties1, (res) => {
                    if(res){
                        properties.setBaseUrl(res)
                        console.log('properties')
                        console.log(properties)
                    }
                });
            },
            getTimeInterval(){
                setInterval(() => {
                    let date = new Date();
                    var reg = new RegExp( '/' , "g" )
                    this.nowTime=date.toLocaleString('chinese',{hour12:false}).replace(reg,'.');
                },1000)
            },
            logout(){
//                this.http.get(this.ports.auth.SsOauthDestory,(res) => {
//                    console.log('logout返回值')
//                    console.log(res)
//                    window.location.href = 'http://192.168.15.164:9083'
                    window.location.href = BASE_URL+this.ports.auth.SsOauthDestory
//                })
            },
            getLogin(){
                let state = this.$route.query.state;
                let userid = this.$route.query.userid;
                console.log('this.$route')
                console.log(this.$route)
                console.log('state')
                console.log(state)
                if(userid){
                    this.userid=userid;
                }
                if(state == 0){

                }else if(state == 1){
                    this.open2();
                }else{
                    this.http.get(`${this.ports.auth.isCheckOauth}/null`,(res) => {
                        console.log('oauth返回值')
                        console.log(res)
                        if(res.success){
                            if(res.data == 1){
                                window.location.href = 'http://192.168.15.164:9083/sso/verify/login?client_id=d78d2fb9d9bb53e5&redirect_uri=http%3A%2F%2F192.168.12.131%3A8085%2Fpatrol%2Fnotice%2FcheckOauthOne&state=sjuujnnfjjckksju'
                            }else if(res.data == 2){

                            }else{
                                this.open2();
                            }
                        }
                    })
                }
                setInterval(() => {
                    this.http.get(this.ports.auth.checkOauthFresh,(res) => {
                        console.log(res)
                    })
                },1000*600)
            },
            open2() {
                this.$confirm('跳转登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                    window.location.href = 'http://192.168.15.164:9083'
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        },
        computed:{
            firstTitle(){
                return {title1:this.currentRoute === 'first'}
            },
            secondTitle(){
                return {title2:this.currentRoute === 'second'}
            },
            thirdTitle(){
                return {title3:this.currentRoute === 'third'}
            },
            fourTitle(){
                return {title4:this.currentRoute === 'four'}
            },
            fiveTitle(){
                return {title5:this.currentRoute === 'five'}
            }
        }
    }
</script>
<style lang="less">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff !important;
        width: 99%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .app-header {
        width: 100%;
        height: 0.7rem;
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        .app-header-left{
            height: 0.65rem;
            width: 23.5%;
            /*border:1px solid red;*/
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding-top:0.5%;
            .left-title-div{
                width: 2.65rem;
                height: 0.37rem;
                /*border: 1px solid black;*/
                background-image: url("./assets/images/title-left-border.png");
                background-size: 100% 100%;
                .left-title{
                    font-size: 0.2rem;
                    font-weight: bold;
                    color: #02eeff;
                    line-height: 0.39rem;
                }
            }
        }
        .app-header-nav {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            /*border:1px solid red;*/

            /*padding: 30px;*/
            a {
                font-size: 0.15rem;
                font-weight: normal;
                text-decoration: none;
                color: #fff;
                &.router-link-exact-active {
                    font-weight: bold;
                    color: #5fd8e8;
                }
            }
        }
        .app-header-right{
            height: 100%;
            width: 23%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            /*border:1px solid red;*/

            .right-title{
                font-size: 0.15rem;
                color: #5fd8e8;
                font-family: 'DigifaceWide';
                font-weight: bold;
            }
        }
    }

    .banner-title-div {
        cursor: pointer;
        color: #ffffff;
        width: 30%;
        height: 50%;
        line-height: 190%;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .title{
        font-size: 0.12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title1{
        width: 65%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title2{
        width: 65%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title3{
        width: 90%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title4{
        width: 90%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title5{
        width: 90%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
</style>
