<template>
  <div class="numbox">
    <div class="num-btn left" @click="subNum()">-</div>
    <div class="num">{{ count }}</div>
    <div class="num-btn right" @click="addNum()">+</div>
  </div>
</template>
<script>
export default {
    props: ['max'],
    data() {
        return {
            count: 1
        }
    },
    methods: {
        subNum() {
            let temp = this.count - 1;
            if (temp < 0) {
                alert("商品已经不能再减少了");
            } else {
                this.count--;
            }
        },
        addNum() {
            if (this.count < this.max) {
                this.count++;
            } else {
                alert("商品已经不能再增多了");
            }
        },
    },
    watch: {
        count(val){
            this.$emit('get_num', val);
        },
        max: function(newval, oldval) {
            console.log(newval, " , old value: ", oldval);
        }
    }
}
</script>
<style lang="scss">
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
</style>
