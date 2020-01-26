<template>
  <div class="goods-container" v-if="goodsinfo">

    <!-- 小球动画优化思路 -->
    <!-- 1. 问题：当页面往下滑动，或者切换手机为其他手机显示时，小球会滑动到其他位置
    2. 原因：因为小球的移动动画translate()的移动距离是写死的，只适合某一种情况，所以如果分辨率改变或者页面移动，则移动位置就会变化
    3. 解决办法：获取小球的top和left值，获取购物车的top和left值，通过计算获得移动的距离
    4. 实现的技术手段：使用JS的getBoundingClientReat()（注意是不React）方法获取2个对象的top和left值后进行计算，虽然vue不建议我们直接操作dom元素，但因为这里不涉及数据的操作，只有元素动画的操作，所以是可以的。 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div ref="ball" class="ball" v-show="showBall"></div>
    </transition>

    <!-- 轮播图区域 -->
    <swiper class="card-box" :list="goodsinfo.banner" :isfull="false"></swiper>

    <!-- 商品购买区域 -->
    <div class="card-box good-buy-box">
      <h1 class="good-title">{{ goodsinfo.title }}</h1>
      <div class="line"></div>
      <div>
        市场价：<del>￥{{ goodsinfo.market_price }}</del
        >&nbsp;&nbsp;<span
          >销售价：<span class="remind"
            >￥{{ goodsinfo.sell_price }}</span
          ></span
        >
      </div>
      <div class="buy-num">
        购买数量
        <numbox @get_num="getNumberOfProducts" :max="goodsinfo.stock"></numbox>
      </div>
      <div>
        <mt-button type="primary" size="small" @click="buy()"
          >立即购买</mt-button
        >
        <mt-button type="danger" size="small" @click="[addCart(), toggleBall()]"
          >加入购物车</mt-button
        >

      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="card-box">
      <h1 class="good-title">商品参数</h1>
      <div class="line"></div>
      <div class="good-parameter">商品货号：{{ goodsinfo.goods_no }}</div>
      <div class="good-parameter">库存情况：{{ goodsinfo.stock }}</div>
      <div class="line"></div>
      <mt-button type="primary" size="large" plain class="btn-goods-info" @click="getDescripton(id)"
          >图文介绍</mt-button
        >
        <mt-button type="danger" size="large" plain class="btn-goods-info" @click="getComments(id)"
          >商品评论</mt-button
        >
    </div>
  </div>
</template>
<style lang="scss">
.goods-container {
  background-color: #eeecef;

  .card-box {
    background-color: #fff;
    margin: 10px 10px 10px 10px;
    box-shadow: 4px 4px 8px #ccc;
    padding: 10px;

    .remind {
      font-weight: bold;
      font-size: 16px;
      color: red;
    }

    .line {
      height: 1px;
      background-color: #ccc;
      margin: 5px 0px 12px 0px;
    }
  }

  .good-title {
    font-size: 16px;
  }

  .good-buy-box {
    font-size: 14px;

    .buy-num {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .good-parameter {
    color: #888;
    font-size: 14px;
    line-height: 20px;
  }

  .btn-goods-info {
      margin-top: 10px;
      font-size: 14px;
  }
}

.v-enter,
.v-leave-to {
  opacity: 1;
}
</style>
<script>
import swiper from "../custom/swiper";
import numbox from "../custom/NumBox";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsinfo: null,
      showBall: false,
      count: 1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.get("./src/static/goodsinfo.json").then(resp => {
        console.log(resp.data);
        this.goodsinfo = resp.data;
        //因为swiper拿的是img的值，所以需要手动给goodsinfo赋值img
        this.goodsinfo.banner.forEach(item => {
          item.img = item.url;
        });
        console.log(this.goodsinfo.banner);
      });
    },
    buy() {
      alert("立即购买");
    },
    addCart() {
      console.log("加入购物车");
    },
    getDescripton(id) {
        this.$router.push({name: "goodsdes", params: {id}});
    },
    getComments(id) {
        this.$router.push({name: 'goodscomments', params: {id}});
    },
    toggleBall() {
      this.showBall = !this.showBall;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)"
      // el.style.opacity = '1'
    },
    enter(el, done) {
      let ballPosition = this.$refs.ball.getBoundingClientRect();
      let cartPosition = document.getElementById('cart').getBoundingClientRect();
      let leftTransition = cartPosition.left - ballPosition.left;
      let topTransition = cartPosition.top - ballPosition.top;
      console.log(leftTransition, topTransition);
      el.offsetWidth;
      // el.style.transform = "translate(96px, 203px)";
      el.style.transform = `translate(${leftTransition}px, ${topTransition}px)`;
      el.style.transition = "all .5s cubic-bezier(.17,.67,.83,.67)";
      // el.style.opacity = '1'
      done();
    },
    afterEnter(el) {
      this.showBall = !this.showBall;
    },
    getNumberOfProducts(count) {
      this.count = count;
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>
