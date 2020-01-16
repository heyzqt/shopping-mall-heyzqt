<template>
  <div>
    <div>图片资讯</div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in titles"
        :key="item.id"
        @click.native="handleClickSlide(index)"
        :class="{'slide-active': nowIndex == index}"
        >{{ item.title }}</swiper-slide
      >
    </swiper>
    <!-- <swiper class="swiper-content" ref="mySwiper" :options="swiperOption1">
      <swiper-slide v-for="(item) in titles" :key="item.id">slide {{item.id}}</swiper-slide>
    </swiper> -->
    <ul class="photolist">
      <li class="photo-box" v-for="(item, index) in photos" :key="index">
        <router-link :to="'/home/photoinfo/' + item.id">
            <img v-lazy="item.url">
            <div class="info">
              <div class="info-title">{{item.title}}</div>
              <div class="info-content">{{item.content}}</div>
            </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
let vm = null;
export default {
  name: "carrousel",
  created() {
    vm = this;
  },
  data() {
    return {
      nowIndex: 0,
      titles: [
        {
          id: 1,
          title: "推荐"
        },
        {
          id: 2,
          title: "全部"
        },
        {
          id: 3,
          title: "当地"
        },
        {
          id: 4,
          title: "综合"
        },
        {
          id: 5,
          title: "经济"
        },
        {
          id: 6,
          title: "军事"
        },
        {
          id: 7,
          title: "社会"
        },
        {
          id: 8,
          title: "民生"
        },
        {
          id: 9,
          title: "娱乐"
        }
      ],
      photos: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
          //当宽度小于等于320
          320: {
            slidesPerView: "auto",
            spaceBetween: 0
          },
          //当宽度小于等于768大于320
          768: {
            slidesPerView: "auto", //根据swiper-slide的宽度来计算一行有多少个
            spaceBetween: 0
          },
          //当宽度大于等于1280
          1280: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
        // on: {
        //   click: function() {
        //     // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
        //     // console.log(this); // -> Swiper
        //     // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
        //     const realIndex = this.realIndex;
        //     // console.log(this);
        //     // vm.handleClickSlide(realIndex);
        //     console.log(this.realIndex);
        //   }
        // },
        // preventLinksPropagation: false
        // on: {
        //     click: function() {
        //         const realIndex = this.realIndex;
        //         // vm.handleClickSlide(realIndex);
        //         console.log('current read index = ' + realIndex);
        //     }
        // }
      }
    };
  },
  created() {
    this.axios
        .get('./src/static/photos.json')
        .then(resp => {
          console.log(resp);
          if (resp.status == 200) {
             this.photos = resp.data.photos;
          }else {
            alert('获取数据失败');
          }
        })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    handleClickSlide(index) {
      this.nowIndex = index;
      console.log("current read index = " + index);
      this.swiper.slideTo(index, 500, false);
    }
  }
};
</script>
<style lang="scss">
.swiper-slide {
  width: 54px;
  text-align: center;
}
.slide-active {
  color: rgb(14, 170, 197);
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img {
  width: 100%;
}
.photolist {
  background: gray;
  padding-left: 10px;
  padding-right: 10px;
}
.photo-box {
  position: relative;

  .info {
    position: absolute;
    bottom: 0;
    background: rgba(130,100,100,0.2);
    font-size: 10px;
    color: #000;
    max-height: 90px;
  }
}
</style>
