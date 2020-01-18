<template>
    <div v-if="goodsdes" class="goods-container">
        <h4>{{goodsdes.title}}</h4>
        <div class="line"></div>
        <div v-html="goodsdes.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodsdes: null
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.axios
                .get('./src/static/goodsdes.json')
                .then(resp => {
                    if(resp.status == 200) {
                        console.log(resp)
                        this.goodsdes = resp.data;
                    }
                })
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-container {
    padding: 20px;
    text-align: center;
    background-color: #fff;
}
</style>
