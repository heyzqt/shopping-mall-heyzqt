<template>
    <div>
        <!-- 轮播图 -->
        <swiper :list="$attrs.banner" :isfull="true"></swiper>

        <!-- 九宫格 -->
        <div class="box-container">
            <router-link class="box" to="/home/news">
                <img src="../images/image1.png" alt="" />
                <div>新闻资讯</div>
            </router-link>
            <router-link class="box" to="/home/photos">
                <img src="../images/image2.png" alt="" />
                <div>图片分享</div>
            </router-link>
            <router-link  class="box" to="/home/goodlist">
                <img src="../images/image3.png" alt="" />
                <div>商品购买</div>
            </router-link >
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
<script>
import swiper from './custom/swiper'
export default {
    components: {
        swiper
    }
}
</script>
<style lang="scss" scoped>

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