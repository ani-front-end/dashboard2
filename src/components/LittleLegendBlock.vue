<template>
    <div class="block">
        <div class="block-item" v-for="(item,index) in dataList" :key="index">
            <div class="item-left" :style="{background:item.colorStyle,opacity:item.opacityStyle}"></div>
            <div class="item-right">{{item.word}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dataList:[
                    {
                        colorStyle:'#2af7fa',
                        opacityStyle:1,
                        word:this.word1

                    },
                    {
                        colorStyle:'#55cdd6',
                        opacityStyle:0.28,
                        word:this.word2
                    }
                ]
            }
        },
        props: [
            'word1',
            'word2'
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
            width: 70%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .item-left{
                width: 15px;
                height: 8px;
                border: 1px solid #08ceef;
                margin-right: 5px;
            }
            .item-right{
                font-size: 12px;
                color: #ffffff;
                opacity: 0.6;
            }
        }
    }
</style>
