<template>
    <div id="result">
        <div id="yes" v-if="Results">
            <p>恭喜你！中奖啦！</p>
            <p>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiaolian"></use>
                </svg>
            </p>
            <p>请与客服联系获取奖品</p>
        </div>
        <div id="nono" v-else>
            <p class="title">很遗憾！没中奖哦~</p>
            <p class="title">看直播最重要是开心！</p>
            <div class="myhr">
                <p class="hr"></p>
                <p>中奖名单</p>
                <p class="hr"></p>
            </div>
            <div class="name">
                <span>asfsf</span>
                <span>asfsf</span>
                <span>asfsf</span>
            </div>
        </div>
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
            this.Results = this.getRandomNum(0, 1);
        },
        data() {
            return {
                Results: 1
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
            getRandomNum: function(lbound, ubound) {
                // return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
                return (parseInt(Math.random() * (ubound - lbound + 1)));
                // return Math.random();
            }
        },
        watch: {
        }
}
</script>
<style scoped lang='scss'>
#result {
    text-align: center;
    color: #fff;
    font-size: 16px;
    padding-top: 20px;
}
#yes {
    p:nth-child(2) {
        font-size: 60px;
        color: #F8E71C;
    }
    p:nth-child(3) {
        font-size: 12px;
    }
}
.myhr {
    display: flex;
    align-items: center;
    margin: 10px 10px 0px;
    p {
        flex: auto;
        font-size: 12px;
    }
    .hr {
        border-bottom: .5px solid #fff;
    }
    p:nth-child(2) {
        width: 20px !important;
    }
}
.name {
    margin: 0px 10px;
    text-align: left;
    font-size: 12px;
    span {
        margin: 5px;
    }
}
</style>
