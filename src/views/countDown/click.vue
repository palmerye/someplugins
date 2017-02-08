<template>
    <div id="click">
        <p @click="chous()">点击抽奖</p>
        <p>抽奖即表示同意<span>《抽奖玩法声明》</span></p>
    </div>
</template>
<script>
export default {
    created() {},
        vuex: {
            actions: {},
            getters: {}
        },
        ready: function() {
        },
        data() {
            return {
            }
        },
        route: {
            data(transition) {}
        },
        components: {

        },
        events: {

        },
        methods: {
            chous: function() {
                this.$route.router.go({ path: '/countdown/result'});
            }
        },
        watch: {
        }
}
</script>
<style scoped lang='scss'>
#click {
    padding-top: 30px;
    p:nth-child(1) {
        font-size: 24px;
        color: #E85471;
        line-height: 54px;
        background-color: #fff;
        width: 140px;
        text-align: center;
        margin: 20px auto;
        border-radius: 40px;
        box-shadow: 0px 2px 3px #333;
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
    }
    p:nth-child(2) {
        font-size: 12px;
        color: #fff;
        text-align: center;
        span {
            color: #FFB946;
        }
    }
}
</style>
