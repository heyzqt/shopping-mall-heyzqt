<template>
    <div>
        <router-link class="item-box" :to="'/home/newsinfo/' + $attrs.item.id">
            <img class="news-img" :src="$attrs.item.url" alt="" />
            <div class="content">
                <div class="title">{{$attrs.item.title}}</div>
                <div class="info"><span>发表时间：{{$attrs.item.time | dateFormat}}</span><span>点击：{{$attrs.item.count}}次</span></div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss">
.item-box {
    display: flex;
    padding: 10px 10px 5px 10px;
    border-bottom: 1px solid #9E9E9E;
    color: black;
}
.news-img {
    width: 60px;
    height: 60px;
}
.title,
.info {
    width: 100%;
}
.info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
.content {
    width: 100%;
    font-size: 14px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>