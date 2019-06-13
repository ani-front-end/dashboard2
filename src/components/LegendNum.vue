<template>
    <div class="legend">
        <div class="legend-left-top">
            <span class="legend-top-word">{{num}}</span>
        </div>
        <div class="legend-left-bottom">
            <span class="legend-bottom-word">{{word}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        props: [
            'num',
            'word'
        ],
        mounted(){
        },
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .legend{
        height: 0.52rem;
        width: 0.35rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .legend-left-top{
            height: 0.32rem;
            width: 0.35rem;
            background-image: url("../assets/images/around.png");
            background-size: 100% 100%;
            padding-left: 0.07rem;
            padding-top: 0.03rem;
            .legend-top-word{
                display: block;
                font-size: 0.2rem;
                font-family: FreeSerif;
            }
        }

        .legend-left-bottom{
            margin-top: 0.04rem;
            width: 0.75rem;
            font-size: 0.1rem;
            /*text-align: left;*/
        }
    }
</style>
