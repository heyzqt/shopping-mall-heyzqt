<template>
  <div class="goods-container" v-if="goodsinfo">
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
        <div class="numbox">
          <div class="num-btn left" @click="subNum()">-</div>
          <div class="num">{{ count }}</div>
          <div class="num-btn right" @click="addNum()">+</div>
        </div>
      </div>
      <div>
        <mt-button type="primary" size="small" @click="buy()"
          >立即购买</mt-button
        >
        <mt-button type="danger" size="small" @click="addCart()"
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
      <mt-button type="primary" size="large" plain class="btn-goods-info"
          >图文介绍</mt-button
        >
        <mt-button type="danger" size="large" plain class="btn-goods-info"
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

  .numbox {
    display: inline-block;

    .num {
      background-color: #fff;
      display: inline-block;
      border: 1px solid #eee;
      padding-left: 10px;
      padding-right: 10px;
    }

    .num-btn {
      width: 30px;
      background-color: #f4f2f5;
      display: inline-block;
      text-align: center;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;

      &.left {
        border-left: 1px solid #efefef;
      }

      &.right {
        border-right: 1px solid #efefef;
      }
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
</style>
<script>
import swiper from "../custom/swiper";
export default {
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      goodsinfo: null
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
    subNum() {
      let temp = this.count - 1;
      if (temp < 0) {
        alert("商品已经不能再减少了");
      } else {
        this.count--;
      }
    },
    addNum() {
      this.count++;
    },
    buy() {
      alert("立即购买");
    },
    addCart() {
      alert("加入购物车");
    }
  },
  components: {
    swiper
  }
};
</script>
