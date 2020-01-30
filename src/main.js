import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import axios from 'axios';
import VueResource from 'vue-resource';
// import { Header, Tabbar, TabItem, Button, Lazyload } from "mint-ui";
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css";
import moment from 'moment';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import MintUI from 'mint-ui';
import VuePreview from 'vue-preview';
import Vuex from 'vuex';
// import PhotoSwipe from './components/custom/PhotoView'
// import PhotoSwipe from 'photoswipe'
// import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
// import 'photoswipe/dist/photoswipe.css'
// import 'photoswipe/dist/default-skin/default-skin.css'

// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
Vue.component(swiper.name, swiper);
Vue.component(swiperSlide.name, swiperSlide);
// Vue.component(PhotoSwipe.name, PhotoSwipe);

Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(VuePreview);
Vue.use(Vuex);
Vue.prototype.axios=axios;
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  console.log('format : ' + dateStr);
  return moment(dateStr).format(pattern);
});

//每次初始化时先从数据库中取出cart的值
var cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('初始化cart：', cart);

const store = new Vuex.Store({
  state: {
    cart: cart
    //每个对象包含的信息
    //id：商品id  count：购买的数量  price: 商品单价 selected: true
  },
  mutations: {
    addToCart(state, goodsinfo) {
      var flag = false;

      //添加的商品id一致，直接添加数量
      state.cart.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      })

      if (!flag) {
        //添加的商品id不一致，添加对象
        state.cart.push(goodsinfo);
      }

      //将当前购物车数据保存到local storage中
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateGoods(state, goodsinfo){
      console.log('update Goodes');
      state.cart.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = goodsinfo.count;
          return true;
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteGoods(state, id) {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].id == id) {
          state.cart.splice(index, 1);
          break;
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateSelectedState(state, obj) {
      state.cart.forEach(item => {
        if (item.id == obj.id) {
          item.selected = obj.selected;
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  getters: {
    getAllCartCount(state) {
      var sum = 0;
      state.cart.forEach(item => {
        sum += item.count;
      })
      return sum;
    },
    getSelectedState(state) {
      let obj = {};
      state.cart.forEach(item => {
        obj[item.id] = item.selected;
      })
      return obj;
    }
  }
})

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  components: {
    swiper,
    swiperSlide
  },
  store
});
