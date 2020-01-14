# 知识点总结

+ mint-ui的使用
    + 安装mint-ui
    + 引入整个mint-ui或者根据需要引入对应的组件（后者项目打包时，体积会更小）
    + 在需要使用的位置使用引入的组件
+ router-link点击事件无效的原因和解决办法
    + 原因：路由跳转会阻止click事件，同理mouseover等事件也会被阻止
    + 解决办法：使用native关键字，即修改为@click.native="method()"，当父组件想接收click等事件时，可以通过添加native关键词来解决该问题，native：当我们需要直接监听一个根组件时，就可以使用该关键字
+ vue 引入图片，img动态修改图片的办法
    + 引入图片方法
        + Html的img标签的src属性直接相对路径引用图片
        + css的background标签使用url引入图片，缺点是图片不会撑开所属组件，需要设置宽高
        + 响应式设置img的src，使用require引入图片，还可以拼接图片
        + public目录下放images图片，使用绝对路径引用图片，不会被webpack打包，需要配置publicPath（该方法没有测试过）
    + img动态修改
        + 使用require在data中引入图片，根据选中图片的状态，设置不同组件的图片
+ vue-router, linkActiveClass用法
    + 在route.js文件中，添加linkActiveClass值，设置全局的router-link默认active样式
+ vue-router, main content内容由router-link和router-view来切换子组件显示
+ nth-child, 孩子选择器
    + nth-child(1):第一个孩子 nth-child(2):第二个孩子 nth-child(3):第三个孩子
    + first-child:第一个孩子, last-child：最后一个孩子
+ axios请求数据，vue-resource请求数据，都是进行网络请求的组件
    + axios请求数据
        axios
        .get('xxxxx')
        .then(resp => console.log(resp));
    + vue-resource在vue1使用，vue2及以后建议使用axios
        this.$http.get
            .then(resp => console.log(resp));
+ 请求本地json数据的路径问题
    + 使用本地数据模拟服务器数据，将数据放在static目录下，可以通过以下方式访问
      axios
      .get('./src/static/banner.json')
      .then(resp => {
        console.log(resp.data.message);
        this.bannerList = resp.data.message;
        })
    + 一定要注意路径问题！！！根目录不是从App.vue所在目录计算的，而是从index.html所在目录计算，所以banner.json的正确路径是'./src/static/banner.json'，务必理解清楚！被这个问题坑了2个小时。
    + 绝对路径是可以的：'http://localhost:8081/src/static/user.json'
      相对路径也没问题：'./src/static/banner.json'
+ props和$attrs在父子组件间通信的异同
    + props显式的声明数据后，将数据从父组件传给子组件
    + $attrs隐式的传递数据（不需要注册），简化父组件和子组件之间的传值，vue2.4之后才有$attrs
+ img图片的伸缩方式
    + contain，类似Android的fitCenter，将图片等比例拉伸到所属组件最短边的大小
    + cover，类似Android的center，等比例放大图片直到填满整个所属组件，超出部分被裁剪
+ img图片水平居中的方法
    + text-align:center
    + flex布局，justify-content: center;
    + 绝对布局
        left: 50%;
        transform: translateX(-50%);
+ transition动画，重点transform位移位置的练习
    + x轴，往右侧移动就是translateX()正数，往左侧移动就是translateX()负数
+ 把本地项目传到github上

## 2020.1.13 知识点
+ 固定底部栏，且可滑动列表始终在底部栏之上滚动，不会超出的处理方法
    + 情况一：底部栏固定在可视窗口的底部
        + 设置wrapper的min-height为100%（兼容内容太少不能撑满一页的情况）
        + 设置底部栏fixed
        + wrapper设置padding-bottom数值为底部栏的高度的数值
    + 情况二：底部栏固定在页面最底部
        + 设置container为relative
        + 设置container的min-height为100%
        + 设置底部栏absolute
        + wrapper设置padding-bottom数值为底部栏的高度的数值

## 2020.1.14 知识点
+ 关于前端时间格式
    + 前端常用的时间是时间对象格式，比如2018-02-06T11:59:22+08:00，而不是时间戳
    + 使用moment.js转换时间，时间的格式需要时间对象格式才行，如上，否则会报错无法转换时间格式数据
+ moment.js转换时间格式的使用
    + step 1：安装moment并引入
        + npm install moment -D
        + import moment from 'moment'
    + step 2: 注册全局filter
        + Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
            return moment(dataStr).format(pattern);
        })
    + step 3: 在时间的插值表达式中添加filter
        + {{item.time | dateFormat}}
        + {{item.time | dateFormat('YYYY-MM-DD')}}




# 其他
+ mockjs, 模拟服务器返回的数据，供本地调试
+ 本地模拟服务器数据的方法
    + 使用mockjs模拟数据
    + 将数据放在data中
    + 将json数据放在static目录下，通过相对路径拿到数据

# shopping-mall-heyzqt

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
