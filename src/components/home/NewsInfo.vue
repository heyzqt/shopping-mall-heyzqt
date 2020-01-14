<template>
    <div class="news-container" v-if="newsinfo">
        <div class="news-header">
            <div class="title">{{newsinfo.title}}</div>
            <div class="info"><span>发表时间：{{newsinfo.time | dateFormat('YYYY-MM-DD')}}</span><span>点击{{newsinfo.count}}次</span></div>
        </div>
        <div v-html="newsinfo.content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id, //拿到route中的参数
            newsinfo: null
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.axios
            .get('./src/static/newsinfo1.json') //实际这里应该根据id的值来查询新闻详情
            .then(resp => {
                console.log(resp);
                if (resp.status == 200) {
                    console.log('request success');
                    console.log('获取新闻数据:');
                    console.log(resp.data);
                    this.newsinfo = resp.data;
                } else {
                    console.log('request failed');
                }
            })
        }
    }
}
</script>
<style lang="scss">
.info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
</style>