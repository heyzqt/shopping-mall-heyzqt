<template>
  <div>
    <mt-header fixed title="新闻页练手项目"></mt-header>
    <div class="container">
    </div>
    <mt-tabbar class="bottom-bar">
      <router-link to="/home" class="tab-item" @click.native="chooseIndicator('home')">
        <mt-tab-item>
          <img id="home" slot="icon" :src="homeurl" to="/home" />
          首页
        </mt-tab-item>
      </router-link>
      <router-link to="/member" class="tab-item" @click.native="chooseIndicator('member')">
        <mt-tab-item>
          <img id="member" slot="icon" :src="memberurl" />
          会员
        </mt-tab-item>
      </router-link>
      <router-link to="/cart" class="tab-item" @click.native="chooseIndicator('cart')">
        <mt-tab-item>
          <img id="cart" slot="icon" :src="carturl" />
          购物车
        </mt-tab-item>
      </router-link>
      <router-link to="/search" class="tab-item" @click.native="chooseIndicator('search')">
        <mt-tab-item>
          <img id="search" slot="icon" :src="searchurl" />
          搜索
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template>
<style lang="scss">
@import "./css/public.css";
</style>
<script>

var homeIndicator = ['home', 'member', 'cart', 'search'];
export default {
  data() {
    return {
      defaultChoose: 'home', //底部工具栏默认选中的Tab
      home: require('./assets/icon-home.png'),
      homeActive: require('./assets/icon-home-active.png'),
      homeurl: null,
      member: require('./assets/icon-member.png'),
      memberActive: require('./assets/icon-member-active.png'),
      memberurl: null,
      cart: require('./assets/icon-cart.png'),
      cartActive: require('./assets/icon-cart-active.png'),
      carturl: null,
      search: require('./assets/icon-search.png'),
      searchActive: require('./assets/icon-search-active.png'),
      searchurl: null
    }
  },
  created(){
    this.homeurl = this.home;
    this.memberurl = this.member;
    this.carturl = this.cart;
    this.searchurl = this.search;
    // this.chooseIndicator('home');
  },
  methods: {
    chooseIndicator(id) {
      homeIndicator.forEach(item => {
        switch(id){
          case 'home':
            this.homeurl = this.homeActive;
            this.memberurl = this.member;
            this.carturl = this.cart;
            this.searchurl = this.search;
            break
          case 'member':
            this.homeurl = this.home;
            this.memberurl = this.memberActive;
            this.carturl = this.cart;
            this.searchurl = this.search;
            break
          case 'cart':
            this.homeurl = this.home;
            this.memberurl = this.member;
            this.carturl = this.cartActive;
            this.searchurl = this.search;
            break
          case 'search':
            this.homeurl = this.home;
            this.memberurl = this.member;
            this.carturl = this.cart;
            this.searchurl = this.searchActive;
            break               
        }
      });
    }
  }
}
</script>
