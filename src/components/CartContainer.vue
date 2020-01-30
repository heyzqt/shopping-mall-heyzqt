<template>
    <div class="goods-container">
        <div class="card-box good-item-box" v-for="item in $store.state.cart" :key="item.id" >
            <mt-switch v-model="$store.getters.getSelectedState[item.id]" @change="updateSelectedState(item.id, $store.getters.getSelectedState[item.id])"></mt-switch>
            <img class="good-img" :src="item.url" alt="">
            <div style="margin-left: 10px;">
                <div class="title">{{item.title}}</div>
                <div>
                    <span class="remind font">￥{{item.price}}</span>
                    <numbox @get_num="getNumberOfProducts" :initial="item.count" :max="item.max" @click.native="recordGoodsInfo(item)"></numbox>
                    <a href="#" @click="deleteGoods(item.id)">删除</a>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="card-box settle-info-box">
            <div>
                <div>总计（不含运费）</div>
                <div>已勾选商品<span class="remind">{{updateSelectedCount}}</span>件，总价：<span class="remind">￥{{settlementAmount}}</span></div>
            </div>
            <div class="settle-btn">去结算</div>
        </div>
    </div>
</template>
<script>
import numbox from "./custom/NumBox";
export default {
    data() {
        return {
            value: true,
            currentClickGoods: null,
            currentCount: 0
        }
    },
    methods: {
        getNumberOfProducts(count) {
            //需要知道当前的商品信息，然后把count值加上，再添加到local storage中去
            //getNumberOfProducts执行顺序在recordGoodsInfo之前
            this.currentCount = count;
        },
        recordGoodsInfo(item) {
            this.currentClickGoods = item;
            this.currentClickGoods.count = this.currentCount;
            this.$store.commit('updateGoods', this.currentClickGoods);
        },
        deleteGoods(id) {
            this.$store.commit('deleteGoods', id);
        },
        updateSelectedState(id, selected) {
            this.$store.commit('updateSelectedState', {id, selected});
        }
    },
    computed: {
        updateSelectedCount(){
            let count = 0;
            this.$store.state.cart.forEach(item => {
                if (item.selected) {
                    count++;
                }
            })
            return count;
        },
        settlementAmount(){
            let sum = 0;
            this.$store.state.cart.forEach(item => {
                if (item.selected) {
                    sum += (item.price * item.count)
                }
            })
            return sum;
        }
    },
    components: {
        numbox
    }
}
</script>
<style lang="scss">
.good-img {
    width: 60px;
    height: 70px;
    margin-left: 10px;
}

.good-item-box {
    display: flex;
    align-items: center;
    font-size: 13px;

    .title {
        font-weight: bold;
    }

    .font{
        font-size: 13px !important;
    }
}

.settle-info-box {
    display: flex;
    align-items: center;
    color: #888;
    justify-content: space-between;
    font-size: 12px;
}

.settle-btn {
    background-color: rgb(223, 72, 49);
    color: #fff;
    font-size: 18px;
    display: inline-block;
    padding: 5px 20px; 
    border-radius: 5px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>