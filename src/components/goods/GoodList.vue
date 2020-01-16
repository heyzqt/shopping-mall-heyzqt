<template>
    <div>
        <div class="goods-list">
            <div class="goods-item">
                <img src="https://img1.360buyimg.com/n6/jfs/t2656/295/34058120/362134/d92995e5/56fc835dNe349b797.jpg" alt="">
                <h1 class="title">佳能（Canon）EOS 800D 单反相机 单反机身 单反套机 （EF-S 18-55mm f/4-5.6 IS STM 单反镜头）</h1>
                <div class="price">
                    <div><span class="now">￥899</span><span class="old">￥999</span></div>
                    <div class="sale-box">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </div>
                </div>
            </div>
                        <div class="goods-item">
                <img src="https://img1.360buyimg.com/n6/jfs/t1/86044/25/10192/174904/5e16c340E3902b7a9/cc266dcb26f5c317.jpg" alt="">
                <h1 class="title">佳能（Canon） 买就送礼包佳能EOS 80D单反相机数码相机全新正品国行佳能80D套机 腾龙18-400mm 防抖长焦镜头</h1>
                <div class="price">
                    <div><span class="now">￥899</span><span class="old">￥999</span></div>
                    <div class="sale-box">
                        <span>热卖中</span>
                        <span>剩10件</span>
                    </div>
                </div>
            </div>
                        <div class="goods-item">
                <img src="https://img1.360buyimg.com/n6/jfs/t2656/295/34058120/362134/d92995e5/56fc835dNe349b797.jpg" alt="">
                <h1 class="title">佳能（Canon）EOS 800D 单反相机 单反机身 单反套机 （EF-S 18-55mm f/4-5.6 IS STM 单反镜头）</h1>
                <div class="price">
                    <div><span class="now">￥899</span><span class="old">￥999</span></div>
                    <div class="sale-box">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
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