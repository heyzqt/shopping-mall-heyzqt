<template>
  <div>
    <div>图片资讯</div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in titles"
        :key="item.id"
        @click.native="handleClickSlide(index)"
        :class="{'swiper-slide-active': nowIndex == index}"
        >{{ item.title }}</swiper-slide
      >
    </swiper>
    <!-- <swiper class="swiper-content" ref="mySwiper" :options="swiperOption1">
      <swiper-slide v-for="(item) in titles" :key="item.id">slide {{item.id}}</swiper-slide>
    </swiper> -->
    <ul class="photolist">
      <li v-for="(item, index) in list" :key="index">
        <img v-lazy="item" />
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
      list: [
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922344982,423380743&fm=26&gp=0.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg",
        "http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg",
        "http://www.littleducks.cn/uploads/allimg/1208/1688-120Q40U258.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922344982,423380743&fm=26&gp=0.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg",
        "http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg",
        "http://www.littleducks.cn/uploads/allimg/1208/1688-120Q40U258.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922344982,423380743&fm=26&gp=0.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg",
        "http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg",
        "http://www.littleducks.cn/uploads/allimg/1208/1688-120Q40U258.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922344982,423380743&fm=26&gp=0.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg",
        "http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg",
        "http://www.littleducks.cn/uploads/allimg/1208/1688-120Q40U258.jpg"
      ],
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
      },
      swiperOption1: {
        slidesPerView: 1
      }
    };
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
    },
    hello() {
      alert("hello");
    }
  }
};
</script>
<style lang="scss">
.swiper-slide {
  width: 54px;
  text-align: center;
}
.swiper-slide-active {
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
</style>
