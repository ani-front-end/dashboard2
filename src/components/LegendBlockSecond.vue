<template>
    <div class="block">
        <div class="block-item" v-for="(item,index) in dataList" :key="index">
            <div class="item-left" :style="{background:item.colorStyle,opacity:item.opacityStyle,height:heightStyle+'px'}"></div>
            <div class="item-right">{{item.word}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
//                dataList:[
//                    {
//                        colorStyle:'#fb0d7d',
//                        opacityStyle:0.45,
//                        word:'人员管理',
//                    },
//                    {
//                        colorStyle:'#bf29fe',
//                        opacityStyle:0.45,
//                        word:'车辆管理',
//                    },
//                    {
//                        colorStyle:'#0c9afd',
//                        opacityStyle:0.45,
//                        word:'枪弹管理',
//                    },
//                    {
//                        colorStyle:'#feb529',
//                        opacityStyle:0.45,
//                        word:'涉密载体管理',
//                    },
//                ],
            }
        },
        props: [
            'heightStyle',
            'dataList'
        ],
        mounted(){
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .block{
        width: 100%;
        height: 100%;
        background-image: url("../assets/images/little-around.png");
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5% 0 5% 0;
        .block-item{
            width: 80%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .item-left{
                width: 20%;
                border-radius: 2px;
                /*opacity: 0.1;*/
                /*border:1px solid #ff019c;*/
            }
            .item-right{
                font-size: 12px;
                color: #ffffff;
                opacity: 0.6;
            }
        }
    }
</style>
