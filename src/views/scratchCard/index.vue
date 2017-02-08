<template>
    <div id="card_tmp">
        <div class="card_content" id="top" v-if="card_content">
            <div class="info" id="prize" v-bind:class="{ 'zIndex_1': !isOk, 'zIndex_3': isOk}">
                <span id="prompt">{{prompt_content}}</span>
                <span class="btn" id="ok" v-if="btn_ok" @click="toGet()">领取奖品</span>
                <span class="btn" id="no" v-if="btn_no" @click="again()">再来一次</span>
            </div>
            <canvas id="card" class="canvas" v-bind:class="{ 'zIndex_1': isOk, 'zIndex_3': !isOk}"></canvas>
        </div>
        <div class="num" v-if="card_content">
            您还有<span class="num1">{{4 - gua_num}}</span>次刮卡机会
        </div>
        <div class="num" v-if="!card_content">今日抽奖机会已用完，明儿再来！</div>
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
            self.fontem = parseInt(window.getComputedStyle(document.documentElement, null)["font-size"]);
            // 这是为了不同分辨率上配合@media自动调节刮的宽度
            self.onload();
        },
        data() {
            return {
                reward_num: 3,
                // 标志用户是否按下鼠标或开始触摸
                ismousedown: Boolean(),
                // 标志用户是否已经刮开了一半以上
                isOk: 0,
                // 刮卡次数
                gua_num: 1,
                // canvas 画布
                card: Object(),
                // 画布内容
                ctx: Object(),
                // 自适应字体大小
                fontem: Number(),
                prompt_content: '',
                btn_ok: false,
                btn_no: false,
                card_content: true
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
                return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
            },
            eventDown: function(e) {
                e.preventDefault();
                this.ismousedown = true;
            },
            eventUp: function(e) {
                e.preventDefault();
                var num = 0;
                var datas = this.ctx.getImageData(0, 0, this.card.width, this.card.height);
                for (var i = 0; i < datas.data.length; i++) {
                    if (datas.data[i] === 0) {
                        num++;
                    };
                };
                if (num >= datas.data.length * 0.7) {
                    this.isOk = 1;
                    this.ctx.fillRect(0, 0, this.card.width, this.card.height);
                };
                this.ismousedown = false;
            },
            eventMove: function(e) {
                e.preventDefault();
                if (this.ismousedown) {
                    if (e.changedTouches) {
                        e = e.changedTouches[e.changedTouches.length - 1];
                    }
                    var topY = $("#top")[0].offsetTop;
                    var oX = this.card.offsetLeft;
                    var oY = this.card.offsetTop + topY;

                    var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0;
                    var y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;

                    // 画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
                    // 画出来是透明的
                    this.ctx.beginPath();
                    this.ctx.arc(x, y, this.fontem * 1.2, 0, Math.PI * 2, true);

                    // 下面3行代码是为了修复部分手机浏览器不支持destination-out
                    // 我也不是很清楚这样做的原理是什么
                    // card.style.display = 'none';
                    // card.offsetHeight;
                    // card.style.display = 'inherit';

                    this.ctx.fill();
                }
            },
            // 初始化所有数据并且随机产生奖品
            initialize: function() {
                // 随机数
                var r = this.getRandomNum(1, 100);
                console.log(r);

                // 初始化涂抹面积
                this.isOk = 0;

                if (r < this.gua_num * 33) {
                    this.prompt_content = '恭喜你呀！呀！'
                    this.btn_ok = true;
                } else {
                    this.prompt_content = '好可惜哦！哦！'
                    this.btn_no = true;
                }
            },
            // 初始化画布 灰色填充
            initCanvas: function() {
                this.ctx.globalCompositeOperation = "source-over";
                this.ctx.fillStyle = '#aaaaaa';
                this.ctx.fillRect(0, 0, card.clientWidth, card.clientHeight);
                this.ctx.fill();

                this.ctx.font = "Bold 30px Arial";
                this.ctx.textAlign = "center";
                this.ctx.fillStyle = "#666666";
                this.ctx.fillText("刮一刮", card.width / 2, 50);

                // 把这个属性设为这个就可以做出圆形橡皮擦的效果
                // 有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
                this.ctx.globalCompositeOperation = 'destination-out';
            },
            toGet: function() {
                // if (this.gua_num > 3) {
                //     alert('see you tomorrow ~');
                // } else {
                //     alert('我是来搞笑的。');
                //     this.gua_num++;
                //     this.btn_no = false;
                //     this.btn_ok = false;
                //     this.onload();
                //     this.initCanvas();
                // }
                alert('我是来搞笑的。');
                this.gua_num++;
                this.btn_no = false;
                this.btn_ok = false;
                this.onload();
                this.initCanvas(); 
            },
            again: function() {
                // if (this.gua_num > 3) {
                //     alert('see you tomorrow ~');
                // } else {
                //     this.gua_num++;
                //     this.btn_no = false;
                //     this.btn_ok = false;
                //     this.onload();
                //     this.initCanvas();
                // }
                this.gua_num++;
                this.btn_no = false;
                this.btn_ok = false;
                this.onload();
                this.initCanvas();
            },
            onload: function() {
                this.initialize();
                this.card = $("#card")[0];
                this.card.width = this.card.clientWidth;
                this.card.height = this.card.clientHeight;
                this.ctx = this.card.getContext("2d");

                // PC端的处理
                this.card.addEventListener("mousemove", this.eventMove, false);
                this.card.addEventListener("mousedown", this.eventDown, false);
                this.card.addEventListener("mouseup", this.eventUp, false);

                // 移动端的处理
                this.card.addEventListener('touchstart', this.eventDown, false);
                this.card.addEventListener('touchend', this.eventUp, false);
                this.card.addEventListener('touchmove', this.eventMove, false);

                // 初始化
                this.initCanvas();
                console.log(this.gua_num);
            }
        },
        watch: {
            'gua_num': function() {
                if (this.gua_num > 3) {
                    this.card_content = false;
                }
            }
        }
}
</script>
<style scoped lang='scss'>
#card_tmp {
    position: relative;
    padding-top: 200px;
}

.banner1 {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.card_content {
    position: relative;
    width: 85.6%;
    height: 90px;
    margin: -5px auto;
    background: url(../../../static/assets/images/ggl.png) no-repeat center center;
    background-size: 100% 100%;
}

.canvas {
    position: absolute;
    top: 2px;
    left: 2.5%;
    width: 95%;
    height: 82px;
    line-height: 82px;
    text-align: center;
    /*z-index: 2;*/
}

.info {
    position: absolute;
    top: 2px;
    left: 2.5%;
    width: 95%;
    height: 82px;
    text-align: center;
}

.info span {
    display: block;
    font-size: 18px;
}

#prompt {
    line-height: 40px;
}

.btn {
    position: relative;
    width: 50%;
    height: 35px;
    line-height: 35px;
    background: #df412b;
    color: #fff;
    border-radius: 5px;
    margin: 0 auto;
    /*z-index: 1;*/
}

.guize {
    display: block;
    width: 85.6%;
    height: auto;
    margin: 5% auto 10% auto;
    border-radius: 5px;
}

.num {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    margin-top: 5%;
    color: #fff;
}
.zIndex_1 {
    z-index: 1 !important;
}
.zIndex_3 {
    z-index: 3 !important;
}
</style>
