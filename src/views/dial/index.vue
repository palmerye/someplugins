<template>
	<div>
        <div class="content">
            <div class="wheel">
                <canvas class="item" id="wheelCanvas" width="422px" height="422px"></canvas>
                <img class="pointer" src="../../../static/assets/images/wheel-pointer.png" @click="begin()"/>
            </div>
        </div>
        <div class="tips">
            <span id="tip" style="font-size: 30px;">{{resultReward}}</span>
        </div>   
    </div>
</template>
<script>
export default {
    created () {
    },
    vuex: {
        actions: {
        },
        getters: {
        }
    },
    ready: function () {
        var self = this;
        self.drawWheelCanvas();
        // 图片信息
        // var imgQb = new Image();
        // imgQb.src = "../../../static/assets/images/qb.png";
        // var imgSorry = new Image();
        // imgSorry.src = "../../../static/assets/images/2.png";

        // 页面所有元素加载完毕后执行drawWheelCanvas()方法对转盘进行渲染
        // window.onload = function () {
        //     self.drawWheelCanvas();
        // };
     },
    data() {
        return {
            turnWheel: {
                rewardNames: ["华哥","张总","黄老师","饭饭姐","铭铭","小仪","沁怡","啊咩","黑肥羊","端端","菊花","龙王","财神","思哲","彭跃成","邢姐", "超哥"],             // 转盘奖品名称数组
                colors: [" #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #FCF6C3 "," #ffffff "," #B8F6C3 "],                  // 转盘奖品区块对应背景颜色
                outsideRadius: 192,          // 转盘外圆的半径
                textRadius: 155,             // 转盘奖品位置距离圆心的距离
                insideRadius: 68,            // 转盘内圆的半径
                startAngle: 0,               // 开始角度
                bRotate: false               // false:停止;ture:旋转
            },
            resultReward: '看这里'
        }
    },
    route: {
        data(transition) {
            
        }
    },
    components: {
        
    },
    events: {
        
    },
    methods: {
        // 返回在n和m之间的随机整数
        randomNum: function(n, m) {
            /* Math.floor(Math.random()*10);时，可均衡获取0到9的随机整数。 */
            var random = Math.floor(Math.random() * (m - n)) + n;
            return random;
        },
        // 旋转转盘 item:奖品序号，从0开始的; txt：提示语 ,count 奖品的总数量
        rotateFunc: function (item, tip, count) {
            var self = this;
            // 应该旋转的角度，旋转插件角度参数是角度制。
            var baseAngle = 360 / count;
            // 旋转角度 == 270°（当前第一个角度和指针位置的偏移量） - 奖品的位置 * 每块所占的角度 - 每块所占的角度的一半(指针指向区域的中间)
            var angles = 360 * 3 / 4 - (item * baseAngle) - baseAngle / 2; 
            // 因为第一个奖品是从0°开始的，即水平向右方向
            $('#wheelCanvas').stopRotate();
            // 注意，jqueryrotate 插件传递的角度不是弧度制。
            // 哪个标签调用方法，旋转哪个控件
            $('#wheelCanvas').rotate({
                angle:0,
                animateTo:angles + 360 * 5, // 这里多旋转了5圈，圈数越多，转的越快
                duration:8000,
                callback:function () { // 回调方法
                    // $("#tip").text(tip);
                    self.resultReward = tip;
                    self.turnWheel.bRotate = !self.turnWheel.bRotate;
                }
            });
        },
        // 渲染转盘
        drawWheelCanvas: function() {
            var self = this;
            // 获取canvas画板，相当于layer？？
            var canvas = document.getElementById("wheelCanvas");
            // var canvas = ($("#wheelCanvas")).get()[0]; 
            // 注意，jQuery获取的是包装过的对象，不是DOM对象,可以进行转换
            // 计算每块占的角度，弧度制
            var baseAngle = Math.PI * 2 / (self.turnWheel.rewardNames.length);
            // 获取上下文
            var ctx = canvas.getContext("2d");

            var canvasW = canvas.width; // 画板的高度
            var canvasH = canvas.height; // 画板的宽度
            // 在给定矩形内清空一个矩形
            ctx.clearRect(0,0,canvasW,canvasH);

            // strokeStyle 绘制颜色
            ctx.strokeStyle = "#FFBE04"; // 红色
            // font 画布上文本内容的当前字体属性
            ctx.font = '16px Microsoft YaHei';

            // 注意，开始画的位置是从0°角的位置开始画的。也就是水平向右的方向。
            // 画具体内容
            for (var index = 0; index < self.turnWheel.rewardNames.length; index++) {
                // 当前的角度
                var angle = self.turnWheel.startAngle + index * baseAngle;
                // 填充颜色
                ctx.fillStyle = self.turnWheel.colors[index];

                // 开始画内容
                // ---------基本的背景颜色----------
                ctx.beginPath();
                /*
                 * 画圆弧，和IOS的Quartz2D类似
                 * context.arc(x,y,r,sAngle,eAngle,counterclockwise);
                 * x :圆的中心点x
                 * y :圆的中心点x
                 * sAngle,eAngle :起始角度、结束角度
                 * counterclockwise : 绘制方向,可选，False = 顺时针，true = 逆时针
                 * */
                ctx.arc(canvasW * 0.5, canvasH * 0.5, self.turnWheel.outsideRadius, angle, angle + baseAngle, false);
                ctx.arc(canvasW * 0.5, canvasH * 0.5, self.turnWheel.insideRadius, angle + baseAngle, angle, true);
                ctx.stroke();
                ctx.fill();
                // 保存画布的状态，和图形上下文栈类似，后面可以Restore还原状态（坐标还原为当前的0，0），
                ctx.save();

                /* ----绘制奖品内容----重点----*/
                // 红色字体
                ctx.fillStyle = "#000";
                var rewardName = self.turnWheel.rewardNames[index];
                var line_height = 17;
                // translate方法重新映射画布上的 (0,0) 位置
                // context.translate(x,y);
                // 见PPT图片，
                var translateX =  canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * self.turnWheel.textRadius;
                var translateY =  canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * self.turnWheel.textRadius;
                ctx.translate(translateX,translateY);

                // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
                // angle，当前扇形自身旋转的角度 +  baseAngle / 2 中心线多旋转的角度  + 垂直的角度90°
                ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);

                /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
                // canvas 的 measureText() 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。
                // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色. fillStyle 属性以另一种颜色/渐变来渲染文本
                /*
                 * context.fillText(text,x,y,maxWidth);
                 * 注意！！！y是文字的最底部的值，并不是top的值！！！
                 * */
                if (rewardName.indexOf("M") > 0) {
                // 查询是否包含字段 流量包
                    var rewardNames = rewardName.split("M");
                    for (var j = 0; j < rewardNames.length; j++) {
                        ctx.font = (j === 0) ? 'bold 20px Microsoft YaHei' : '16px Microsoft YaHei';
                        if (j === 0) {
                            ctx.fillText(rewardNames[j] + "M", -ctx.measureText(rewardNames[j] + "M").width / 2, j * line_height);
                        } else {
                            ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
                        }
                    }
                } else if (rewardName.indexOf("M") === -1 && rewardName.length > 6) {
                // 奖品名称长度超过一定范围
                    rewardName = rewardName.substring(0,6) + "||" + rewardName.substring(6);
                    var rewardNames_p = rewardName.split("||");
                    for (var jj = 0; jj < rewardNames_p.length; jj++) {
                        ctx.fillText(rewardNames_p[jj], -ctx.measureText(rewardNames_p[jj]).width / 2, jj * line_height);
                    }
                } else {
                    // 在画布上绘制填色的文本。文本的默认颜色是黑色
                    ctx.fillText(rewardName, -ctx.measureText(rewardName).width / 2, 0);
                }

                // 添加对应图标
                // if (rewardName.indexOf("Q币") > 0) {
                //     // 注意，这里要等到img加载完成才能绘制
                //     imgQb.onload = function() {
                //         ctx.drawImage(imgQb, -15, 10);
                //     };
                //     ctx.drawImage(imgQb, -15, 10);

                // } else if (rewardName.indexOf("谢谢参与") >= 0) {
                //     imgSorry.onload = function() {
                //         ctx.drawImage(imgSorry, -15, 10);
                //     };
                //     ctx.drawImage(imgSorry, -15,  10);
                // }
                // 还原画板的状态到上一个save()状态之前
                ctx.restore();

                /* ----绘制奖品结束----*/

            }
        },
        // 点击渲染
        begin: function() {
            var self = this;
            console.log(self.turnWheel);
            if (self.turnWheel.bRotate) return;
            self.turnWheel.bRotate = !self.turnWheel.bRotate;
            var count = self.turnWheel.rewardNames.length;
            // 这里应该是从服务器获取用户真实的获奖信息（对应的获奖序号）
            // 简单模拟随机获取奖品的序号(奖品个数范围内)
            var item = self.randomNum(0, count - 1);
            // 开始抽奖
            self.rotateFunc(item, self.turnWheel.rewardNames[item], count);
        }
    },
    watch: {
        
    }
}	
</script>
<style scoped lang='scss'>
/* 大转盘样式 */
.content{
    display:block;
    width:95%;
    /*居中显示*/
    margin: 30px auto;
}

.content .wheel{
    display:block;
    width:100%;
    position:relative;
    /*转盘的背景*/
    background-image:url(../../../static/assets/images/wheel-bg.png);
    background-size:100% 100%;

}

.content .wheel canvas.item{
    width:100%;
}

.content .wheel img.pointer{
    position:absolute;
    width:31.5%;
    height:42.5%;
    left:34.6%;
    top:23%;
}

.tips{
    text-align:center;
    margin:20px 0;
    font:normal 24px 'MicroSoft YaHei';
    color: #fff;
}
	
</style>