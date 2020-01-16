<template>
    <div class="photoinfo-container" v-if="photo">
        <div class="header">
            <div class="title">{{photo.title}}</div>
            <div class="time-box"><span>发表时间：{{photo.time | dateFormat}}</span><span>点击：{{photo.count}}</span></div>
            <div class="split"></div>
        </div>
        <!-- todo 图片缩略图预览 -->
        <div class="square">
            <!-- <vue-preview :slides="slide1" @close="handleClose"></vue-preview> -->
            <ul class="square-inner clearfix flex">
                <li v-for="(item, index) in thumbs" :key="index" class="wrapper">
                    <img :src="item.msrc" alt="" class="thumbs-img" @click="openPreview()"/>
                </li>
            </ul>
            <!-- <dialog v-if="showImgDialog">
                <vue-preview :slides="thumbs" @close="handleClose"></vue-preview>
            </dialog> -->
        </div>
        <div>
            {{photo.content}}
        </div>
        <t-comments></t-comments>
    </div>
</template>
<script>
import comments from './comments';

export default {
    data() {
        return {
            photo: {},
            thumbs: [] 
        }
    },
    created() {
        this.getData();
        this.getThumbs();
    },
    methods: {
        getData() {
            this.axios
                .get('./src/static/photoinfo.json')
                .then(resp => {
                    if (resp.status == 200) {
                        console.log(resp);
                        this.photo = resp.data;
                    }else {
                        alert('获取数据失败');
                    }
                });
        },
        getThumbs() {
            this.axios
             .get('./src/static/photothumbs.json')
             .then(resp => {
                 if(resp.status == 200) {
                    console.log('获取缩略图信息:');
                    console.log(resp);
                    this.thumbs = resp.data.thumbs;
                 } else {
                     alert('获取数据失败');
                 }
             })
        },
        handleClose () {
            console.log('close event')
        },
        openPreview() {        
            // var pswpElement = document.querySelectorAll('.pswp')[0];

            // // build items array
            // var items = [
            //     {
            //         src: 'https://placekitten.com/600/400',
            //         w: 600,
            //         h: 400
            //     },
            //     {
            //         src: 'https://placekitten.com/1200/900',
            //         w: 1200,
            //         h: 900
            //     }
            // ];

            // define options (if needed)
            var options = {
            // optionName: 'option value'
            // for example:
                index: 0 // start at first slide
            };

            // Initializes and opens PhotoSwipe
            // var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.thumbs, options);
            // gallery.init();
        }
    },
    components: {
        "t-comments": comments
    }
}
</script>
<style lang="scss">
.photoinfo-container {
    .header {
        padding-top: 10px;
        padding-bottom: 10px;

        .title {
            font-size: 13px;
            line-height: 20px;
            color: #ffaaaa;
            text-align: center;
        }

        .time-box {
            font-size: 12px;
            color: #888888;
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
        }

        .split {
            height: 0.5px;
            background-color: #888888;
            margin-top: 10px;
        }
    }

    .square {

        .wrapper {
            float: left;
        }
        
        .thumbs-img {
            width: 100px;
            height: 100px;
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    // .thumbs-box {
    //     width: 100%;

    //     .wrapper {
    //         width: 100%;
    //     }

    //     .thumbs-img {
    //         width: calc(98% / 3);
    //         height: calc(98% / 3);
    //         margin: 1%;
    //     }
    // }

    // .flex {
    //     display: flex;
    // }

    // .square{
    //     position: relative;
    //     width: 100%;
    //     height: 0;
    //     padding-bottom: 100%; /* padding百分比是相对父元素宽度计算的 */
    //     margin-bottom: 30px;
    //     }
    //     .square-inner{
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%; /* 铺满父元素容器，这时候宽高就始终相等了 */
    //     }
    //     .square-inner>li{
    //     width: calc(98% / 3);  /* calc里面的运算符两边要空格 */
    //     height: calc(98% / 3);
    //     margin-right: 1%;
    //     margin-bottom: 1%;
    //     overflow: hidden;
    // }

    // .flex{
    //     display: flex;
    //     flex-wrap: wrap;
    // }
    // .flex>li{
    //     flex-grow: 1; /* 子元素按1/n的比例进行拉伸 */
    //     background-color: #4d839c;
    //     text-align: center;
    //     color: #fff;
    //     font-size: 50px;
    //     line-height: 2;
    // }
    // .flex>li:nth-of-type(3n){ /* 选择个数是3的倍数的元素 */
    //     margin-right: 0;
    // }
    // .flex>li:nth-of-type(n+7){  /* 选择倒数的三个元素，n可以取0 */
    //     margin-bottom: 0;
    // }
}
</style>