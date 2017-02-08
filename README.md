## Demo
![image](http://ohce3yxd6.bkt.clouddn.com/someplugins/demo.png)

url: http://plugins.leanapp.cn/

Hint: 在微信里打开的时候，偶尔会打不开（如果莫名其妙被人举报）

#### 如首页所示，四个插件
- Dial 抽奖转盘
- Scratch Card 刮刮卡
- Red Packet 红包
- Count Down 抽奖倒计时
- ~~也许~~以后会堆一些好玩的

![image](http://ohce3yxd6.bkt.clouddn.com/someplugins/1.gif?imageView2/2/w/200/h/500/interlace/0/q/100)
![image](http://ohce3yxd6.bkt.clouddn.com/someplugins/2.gif?imageView2/2/w/200/h/500/interlace/0/q/100)
![image](http://ohce3yxd6.bkt.clouddn.com/someplugins/3.gif?imageView2/2/w/200/h/500/interlace/0/q/100)
![image](http://ohce3yxd6.bkt.clouddn.com/someplugins/4.gif?imageView2/2/w/200/h/500/interlace/0/q/100)

## 项目结构
vue全家桶 + webpack + sass

```
安装依赖

npm install
```
```
跑工程

npm run dev
```
```
项目打包
(呈现形式为一个入口index.html和静态资源文件夹static)
npm run build
```
e.g. 我是部署在[leancloud](https://leancloud.cn)上的，感谢leancloud，为个人开发者提供了很好的平台。

> 可以在webpack配置里修改build的文件路径

```
config/index.js

...
index: path.resolve(__dirname, '../leancloud/views/index.ejs'), // index.html(.ejs)的生成路径
    assetsRoot: path.resolve(__dirname, '../leancloud/views'), // 静态资源static文件夹的生成路径
    assetsSubDirectory: 'static', // 静态资源文件夹的name
    assetsPublicPath: '/' // 静态资源引用路径
... 
```

温故而知新，~~可以为师也~~

也欢迎来[我的blog](http://palmerye.online)转转，[Repository](https://github.com/palmerye/palmer-blog)也放在github上
