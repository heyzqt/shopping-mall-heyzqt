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
## 2020.1.16 知识点
    + Swiper轮播控件
    + PhotoSwipe缩略图预览控件
    + 9宫格图片的实现
        + 需求：
            + 1.图片数据由服务器返回（图片数量不定，最多9张，最少1张）
            + 2.图片宽高一致
            + 3.每行最多只能放3个图片
        + 暂时实现
            + 使用float和设置固定宽高来实现
    + 等高瀑布流的实现
        + 多行文本超过高度时，用省略号省略多余文本
            display: -webkit-box; //类似flex布局
            -webkit-box-orient: vertical; //类似flex-direction，设置子元素的排列方向
            -webkit-line-clamp: 4; //line-clamp限制一个块元素显示的文本行数
            text-overflow: ellipsis; //用省略号隐藏溢出的文本
            overflow: hidden; //也需要添加，文本可能过长
    + 在Android手机端测试网页
        + step 1:
            手机和电脑连接同一个wifi，查看当前电脑的ip地址
        + step 2：
            在package.json的scripts中复制一份dev脚本修改
            + 在原脚本中添加port和当前的ip地址
            "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
            "mobile": "cross-env NODE_ENV=development webpack-dev-server --open --port 3000 --hot --host 192.168.x.xx",
        + step 3:
            npm run mobile后，在手机端登录对应的地址即可
    + 网页中的2种跳转方式
        + 方式一：a标签跳转
        + 方式二：使用window.location.href的形式的叫编程式跳转，即使用js代码进行跳转
    + 使用编程式导航，router.push的三种跳转方式
        + 方式一： router.push('xxx');
        + 方式二： router.push({path: 'xxx'});
        + 方式三： router.push(
            name: xxx,
            params: {
                id: 100
            }
        );
        + 方式四： 带查询参数的方式

## 2020.1.17 知识点
    + width 100% 和margin-right冲突问题
        + 情况：父元素div嵌套子元素div，当子元素设置宽度100%，margin:10px;时，会发现margin-right能检查到，但实际上看不到
        + 原因：因为浏览器是从左向右渲染元素的，子元素宽度设置为100%，此时margin-right无效，会被子元素给覆盖
        + 解决办法:
            + 不设置width
            + 设置width: auto

## 2020.1.18 知识点
    + click添加多个点击事件的方法
    + transition标签动画的几个事件 todo

## 2020.1.25 知识点
    + 添加transition动画，小球一直不显示的bug
        + 知识点：transition动画在进行时有6个动画
            + v-enter/v-enter-active/v-enter-to
            + v-leave/v-leave-active/v-leave-to
            + 以上默认动画类中有一些默认的样式如下：
            + v-enter
                opacity: 0;
            + v-enter-to
                opacity: 1;
            + v-leave
                opacity: 1;
            + v-leave-to
                opacity: 0;
            
            如下： 
            .v-leave-to {
                opacity: 0;
                transform: translateX(-100%);
                position: absolute;
            }

            .v-enter-active, .v-leave-active {
                transition: all .5s ease;
            }
        + 问题原因：在小球移动时，小球的opacity属性一直被v-leave-to设置为0，所以小球一直不显示
        + 解决办法：
            + 办法一：在钩子函数beforeEnter和enter中，设置opacity为1
            + 办法二：设置transition自带的类的opacity为1
                .v-enter,
                .v-leave-to {
                    opacity: 1;
                }
    + ref和refs的使用
        + 干嘛用？在vue中用来操作dom的关键字
        + ref用来注册子控件，注册后$refs就可以拿到注册后的子控件并操作
        + refs拿到子组件后，还能通过子组件对象使用子组件中的data数据或者methods方法

## 2020.1.26 知识点
    + 子组件和父组件之间进行通信
        + 父组件可通过props传值给子组件
        + 父组件也可直接通过:value的方式传递给子组件数据，子组件使用$attrs取值
        + 子组件可通过$emit调用父组件的自定义方法
            + 父组件v-on / @ method , 比如@get_num定义别名
            + @get_num="getNumberOfProducts"定义调用父组件中的方法名
            + 子组件中，this.$emit('get_num', val);第1个参数是方法名，第二个参数是需要传过去的值


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
