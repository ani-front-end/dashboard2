<template>
    <div>
        <div class="words">{{words}}</div>
        <div class="nums">{{nums}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        props: [
            'nums',
            'words'
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

<style scoped lang="less">
    .words{
        font-size: 0.1rem;
        color: #51689f;
    }
    .nums{
        font-size: 0.12rem;
    }
</style>
