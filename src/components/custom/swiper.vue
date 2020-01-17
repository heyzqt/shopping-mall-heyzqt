<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in $attrs.list" :key="item.url">
        <img :src="item.img" alt="" :class="{full: $attrs.isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="scss">
.mint-swipe {
  height: 200px;
  background: #fff;

  .mint-swipe-item {
    text-align: center;
  }

  img {
    height: 100%;

    &.full {
      width: 100%;
    }
  }
}
</style>
