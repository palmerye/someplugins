<template>
    <div id="countdown" v-if="show">
        <div class="zindex">
            <router-view></router-view>
        </div>
        <img src="../../../static/assets/images/countdown_img.png" class="img_cd">
        <span class="close" @click="show = false">×</span>
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
            var self = this;
            
        },
        data() {
            return {
                show: true
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

        },
        watch: {
            
        }
}
</script>
<style scoped lang='scss'>
#countdown {
    position: relative;
    /*margin-top: 50%;*/
    margin: 50% auto;
    width: 230px;
    height: 230px;
    background-image: -webkit-linear-gradient(#F13271, #EE1040);
    background-image: -o-linear-gradient(#F13271, #EE1040);
    background-image: linear-gradient(#F13271, #EE1040);
    border-radius: 20px;
    z-index: 0;
}
.zindex {
    z-index: 999;
}
.img_cd {
    position: absolute;
    width: 310px;
    height: 230px;
    bottom: -20px;
    left: -40px;
    z-index: -1;
}
.close {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    line-height: 30px;
    background-color: #fff;
    text-align: center;
    border-radius: 30px;
    font-size: 30px;
    box-shadow: 0 0 2px #000;
}
</style>
