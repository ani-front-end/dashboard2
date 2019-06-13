<template>
    <div class="content">
        <div class="container">
            <div class="div-item"
                 v-for="(item,index) in divs"
                 :key="index"
            >
                <div class="div-main" v-if="item.isShow"
                     :style="backgroundColorObj"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'CenterBottomCenter',
                privacy:8,
                num: 0,
                backgroundColorObj:{
                    background:'#80e95b',
                },
                divs: [
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}},
                    {isShow: false, classObject: {active: true}}
                ]
            }
        },
        props: [
            'title',
        ],
        watch: {
            num(val) {
                for (let i = 0; i < val; i++) {
                    this.divs[9 - i].isShow = true;
                }
            }
        },
        mounted() {
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.securityEquipment, (res) => {
                    if(res.success){
                        let data = res.data;
                        this.privacy = data.alarmNum-1;
                        if(this.privacy<3){
                            this.backgroundColorObj.background = '#be0625'
                        }else if(this.privacy>=3 && this.privacy<7){
                            this.backgroundColorObj.background = '#b48e23'
                        }
                        let interval = setInterval(() => {
                            this.num++;
                            if(this.num>this.privacy){
                                clearInterval(interval);
//                    this.divs.forEach(p => {
//                        p.isShow = false;
//                    })
//                    this.num = 0;
                            }
                        }, 150)
                    }
//                    let newOptions = Object.assign({}, this.option);
//                    this.option = newOptions;
                })
            }
        },
        computed: {
            getColorClass () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        height: 90%;
        width: 98%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .container {
            width: 45%;
            height: 65%;
            border: 6px solid #222541;
            border-radius: 8%;
            padding: 0 0 3% 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .div-item {
                margin-top: 9%;
                width: 90%;
                /*height: 0.07rem;*/
                height: 5.5%;
                .div-main {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
