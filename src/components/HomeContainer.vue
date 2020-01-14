<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in $attrs.banner" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <div class="box-container">
            <router-link class="box" to="/home/news">
                <img src="../images/image1.png" alt="" />
                <div>新闻资讯</div>
            </router-link>
            <div class="box">
                <img src="../images/image2.png" alt="" />
                <div>图片分享</div>
            </div>
            <div class="box">
                <img src="../images/image3.png" alt="" />
                <div>商品购买</div>
            </div>
        </div>
        <div class="box-container">
            <div class="box">
                <img src="../images/image4.png" alt="" />
                <div>留言反馈</div>
            </div>
            <div class="box">
                <img src="../images/image5.png" alt="" />
                <div>视频专区</div>
            </div>
            <div class="box">
                <img src="../images/image6.png" alt="" />
                <div>联系我们</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
}

img {
    width: 100%;
    height: 100%;
}

.box-container {
    display: flex;
    margin-top: 20px;

    .box {
        flex: 1;
        // background-color: olivedrab;
        text-align: center;  //text-align可以设置图片文字的对齐方式

        img {
            width: 60px;
            height: 60px;
        }
    }
}
</style>