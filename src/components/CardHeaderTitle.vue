<template>
    <div class="header">
        <span :class="getColorClass">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
//                isBlue: false,
            }
        },
        props: [
            'title',
            'isBlue'
        ],
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
    .title-color{
        color:#c8f7fe;
    }
    .header {
        width: 100%;
        height: 0.32rem;
        /*background: #102e5d;*/
        background: rgba(30,88,153,0.45);
        font-size: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
