<template>
    <div>
        <div class="goods-list" v-if="goods.length > 0">
            <div class="goods-item" v-for="(item, index) in goods" :key="index" @click="goDetail(item.id)">
                <img :src="item.url" alt="">
                <h1 class="title">{{item.title}}</h1>
                <div class="price">
                    <div><span class="now">￥{{item.now_price}}</span><span class="old">￥{{item.ori_price}}</span></div>
                    <div class="sale-box">
                        <span>热卖中</span>
                        <span>剩{{item.remain}}件</span>
                    </div>
                </div>
            </div>
            <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goods: []
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.axios
                .get('./src/static/goods.json')
                .then(resp => {
                    if (resp.status == 200) {
                        console.log(resp);
                        this.goods = resp.data.goods;
                    } else {
                        alert('加载数据失败');
                    }
                })
        },
        getMore() {
            this.axios
                .get('./src/static/goods.json')
                .then(resp => {
                    if (resp.status == 200) {
                        console.log(resp);
                        this.goods = this.goods.concat(resp.data.goods);
                    } else {
                        alert('加载数据失败');
                    }
                })
        },
        goDetail(id) {
            //方式一：直接使用字符串
            // this.$router.push('/home/goodsinfo/' + id);

            //方式二：传递1个对象，包含path
            // this.$router.push({path: '/home/goodsinfo/' + id});

            //方式三：使用name属性和params
            this.$router.push({
                name: 'goodsinfo',
                params: {
                    id
                }
            });
        }
    }    
}
</script>
<style lang="scss">
.goods-list {
    padding: 0px 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .goods-item {
        width: 49%;
        height: 285px;
        box-shadow: 0 0 8px #ccc;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            width: 100%;
        }

        .title {
            font-size: 14px;
            line-height: 14px;
            font-weight: bold;
            margin-top: 4px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .price {
            background-color: #eee;
            font-size: 12px;
            margin: 0px 1px 1px 1px;

            .now {
                color: red;
                font-size: 15px;
                font-weight: bold;
            }

            .old {
                text-decoration: line-through;
                margin-left: 5px;
            }

            .sale-box {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>