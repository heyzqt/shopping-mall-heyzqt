<template>
    <div class="goods-container" v-if="goodsinfo">
        <!-- 轮播图区域 -->
        <swiper :list="goodsinfo.banner" :isfull="false"></swiper>

        <!-- 商品购买区域 -->
        <div class="card-box">222</div>

        <!-- 商品参数区域 -->
        <div class="card-box">333</div>
    </div>
</template>
<style lang="scss">
.goods-container {
    background-color: #ccc;
    
    .card-box {
        background-color: #fff;
        height: 200px;
        margin: 10px 10px 10px 10px;
        box-shadow: 4px 4px 8px #ccc;
    }
}
</style>
<script>
import swiper from '../custom/swiper';
export default {
    data() {
        return {
            // id: this.$root.
            goodsinfo: null
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData(){
            this.axios
                .get('./src/static/goodsinfo.json')
                .then(resp => {
                    console.log(resp.data);
                    this.goodsinfo = resp.data
                    //因为swiper拿的是img的值，所以需要手动给goodsinfo赋值img
                    this.goodsinfo.banner.forEach(item => {
                        item.img = item.url;
                    });
                    console.log(this.goodsinfo.banner);
                })
        }
    },
    components: {
        swiper
    }
}
</script>