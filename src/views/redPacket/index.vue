<template>
    <div id="redPacket_div">
        <div id="redPacket" v-if="redPacket">
            <p class="close" @click="redPacket = false">X</p>
            <p class="title">彩虹包</p>
            <p class="btn" v-bind:class="{ 'rotate': turnRun}" @click="turnRun = true">拆</p>
        </div>
        <div id="icon_div" v-if="jump">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hb2"></use>
            </svg>
        </div>
    </div>
</template>
<script>
import Vue from 'Vue'

export default {
    ready: function() {

    },
    data() {
        return {
            turnRun: false,
            redPacket: true,
            jump: false
        }
    },
    methods: {

    },
    watch: {
        'turnRun': function() {
            var self = this;
            // this.jump = true;
            setTimeout(function() {
                self.jump = true;
            }, 4000);
        }
    }
} 
</script>
<style scoped lang='scss'>
#redPacket_div {
    height: 100vh;
    width: 100vw;
    position: relative;
}
#redPacket {
    height: 80%;
    width: 80%;
    background-color: #8C302A;
    border-radius: 20px;
    margin: 0% 10%;
    top: 10%;
    position: absolute;
    text-align: center;
    .close {
        font-size: 25px;
        color: #000;
        text-align: right;
        padding: 10px;
    }
    .title {
        font-size: 30px;
        color: #fff;
    }
    .btn {
        width: 80px;
        line-height: 80px;
        background-color: #C07817;
        border-radius: 50px;
        font-size: 30px;
        color: #fff;
        box-shadow: 0px 1px 5px #000;
        margin: 150px auto;
    }
}
#icon_div {
    background-color: rgba(255,255,255,0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .icon {
        font-size: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -125px;
        margin-left: -125px;
    }
}
.jumpclass {
    display: block;
}
.rotate {
    -webkit-animation: anim linear 4s 1 alternate;
    -ms-animation: anim linear 4s 1 alternate;
    animation: anim linear 4s 1 alternate;
}
@-webkit-keyframes anim {
    from { -webkit-transform: rotateY(180deg); }
    25% { -webkit-transform: rotateY(540deg); }
    50% { -webkit-transform: rotateY(1260deg); }
    75% { -webkit-transform: rotateY(2700deg); }
    to { -webkit-transform: rotateY(3060deg); }
}
@-ms-keyframes anim {
    from { -ms-transform: rotateY(180deg); }
    25% { -ms-transform: rotateY(540deg); }
    50% { -ms-transform: rotateY(1260deg); }
    75% { -ms-transform: rotateY(2700deg); }
    to { -ms-transform: rotateY(3060deg); }
}
@keyframes anim {
    from { transform: rotateY(180deg); }
    25% { transform: rotateY(540deg); }
    50% { transform: rotateY(1260deg); }
    75% { transform: rotateY(2700deg); }
    to { transform: rotateY(3060deg); }
}
</style>