<template>
  <div class="app-container">

    <!-- title bar -->
    <mt-header fixed title="新闻页练手项目">
      <span slot="left" @click="goBack()" v-show="flag">
        <mt-button icon="back">back</mt-button>
      </span>
    </mt-header>

    <!-- main content -->
    <transition>
        <router-view :banner="bannerList" :newsList="newsList" class="container"></router-view>
    </transition>

    <!-- bottom bar -->
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
        <mt-tab-item class="cart-box">
          <mt-badge type="error" size="small" class="cart-num">{{this.$store.getters.getAllCartCount}}</mt-badge>
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
<script>
import Vue from "vue";
import axios from 'axios'
var homeIndicator = ['home', 'member', 'cart', 'search'];
Vue.prototype.axios = axios;

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
      searchurl: null,
      bannerList: null,
      newsList: null,
      flag: false
    }
  },
  created(){
    this.homeurl = this.home;
    this.memberurl = this.member;
    this.carturl = this.cart;
    this.searchurl = this.search;
    this.flag = !(this.$route.path === '/home')
    this.getData();
    localStorage.a = '111';
    localStorage['b'] = '222';
    localStorage.setItem('c', JSON.stringify({id: 2, name: 'aaa'}));

    console.log('local storage 读取数据', localStorage.a, ', ', localStorage['b'], localStorage.getItem('aaa'));
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
    },
    getData() {
      //获取banner的数据
      this.axios
      .get('./src/static/banner.json')
      .then(resp => {
        console.log(resp.data.message);
        this.bannerList = resp.data.message;
        });

      //获取新闻数据
      this.axios
      .get('./src/static/news.json')
      .then(resp => {
        console.log('获取新闻数据:');
        console.log(resp.data.news);
        this.newsList = resp.data.news;
      })
    },
    goBack() {
      console.log('go');
      this.$router.go(-1);
    }
  },
  watch: {
    '$route.path'(newval) {
      console.log('route path: ', newval);
      this.flag = !(newval === '/home');
    }
  }
}
</script>
<style lang="scss" >
@import "./css/public.scss";

.mint-header {

  &.is-fixed {
    z-index: 99;
  }
}

.app-container {
  overflow: hidden;
  min-height: 100%;
  padding-bottom: 55px;
}

// 右进左出
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

// 左进右出
// .v-enter {
//   opacity: 0;
//   transform: translateX(-100%);
// }
// .v-leave-to {
//   opacity: 0;
//   transform: translateX(100%);
//   position: absolute;
// }

.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
}

.bottom-bar {
  position: fixed; //相对当前浏览器窗口固定在底部
  bottom: 0;
}
</style>
