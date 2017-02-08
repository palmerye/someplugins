<template>
    <div id="time">
        <p class="title">{{number}}秒后开抢</p>
        <p class="timeshow">{{number}}</p>
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
            this.countDown();
        },
        data() {
            return {
                number: 5,
                settime: Object()
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
            countDown: function() {
                var self = this;
                setInterval(function() {
                    self.number--;
                }, 1000);
            }
        },
        watch: {
            'number': function(t) {
                var self = this;
                if (t === 0) {
                    self.$route.router.go({ path: '/countdown/click'});
                }
            }
        }
}
</script>
<style scoped lang='scss'>
#time {
    text-align: center;
    .title {
        font-size: 16px;
        color: #fff;
        line-height: 50px;
        margin-bottom: 10px;
    }
    .timeshow {
        line-height: 80px;
        width: 80px;
        margin: 0px auto;
        font-size: 50px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 50px;
    }
}
</style>
