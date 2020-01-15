<template>
    <div v-if="comments && comments.length > 0">
        <h3>发表评论</h3>
        <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120" v-model="commentData"></textarea>
        <mt-button type="primary" size="large" @click="postComment()">发表评论</mt-button>
        <div class="comment-box" v-for="(item, index) in comments" :key="index">
            <div class="comment-title">第{{index + 1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;&nbsp;发表时间：{{item.addtime | dateFormat}}</div>
            <div class="comment-content">{{item.content == '' || item.content == 'undefined' ? '这个用户有点懒' : item.content}}</div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            pageIndex: 1, //默认加载第1页的数据
            comments: [],
            commentData: ''
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            axios
                .get('src/static/comments.json')
                .then(resp => {
                    console.log(resp);
                    if (resp.status == 200) {
                        console.log('请求评论数据成功');
                        this.comments = resp.data.comments;
                        console.log(this.comments);
                    } else {
                        console.log('请求评论数据失败');
                    }
                })
        },
        getMore() {
            this.pageIndex++;   //实际上是根据pageIndex来加载分页的数据
            axios
                .get('src/static/comments.json')
                .then(resp => {
                    console.log(resp);
                    if (resp.status == 200) {
                        console.log('加载更多评论数据成功');
                        this.comments = this.comments.concat(resp.data.comments);
                    } else {
                        console.log('加载更多评论数据失败');
                    }
                })
        },
        postComment() {
            if (this.commentData == '') {
                alert('请输入评论内容');
            } else {
                // axios
                // .post('提交的网址', {
                //     "username": "张三",
                //     "addtime": Date().now,
                //     "content": this.commentData
                // })
                // .then(res => {
                //     console.log("post comment success");
                //     //手动将发送成功的内容添加到评论列表中
                //     let comment = {
                //         username: '张三',
                //         addtime: Date().now,
                //         content: this.commentData
                //     }
                //     this.comments.unshift(comment);
                //     this.commentData = "";
                // })
                    console.log("post comment success");
                    //手动将发送成功的内容添加到评论列表中
                    let comment = {
                        username: '张三',
                        addtime: Date().now,
                        content: this.commentData
                    }
                    this.comments.unshift(comment);
                    this.commentData = "";
            }
        }
    }
}
</script>
<style lang="scss">
textarea {
    width: 100%;
    height: 100px;
    font-size: 14px;
    border: 1px solid gray;
    box-sizing: border-box;
    padding: 5px 10px;
}

.comment-box {
    font-size: 14px;

    .comment-title {
        background-color: gray;
        line-height: 30px;
        font-size: 13px;
    }

    .comment-content {
        line-height: 35px;
        text-indent: 2em;
    }
}
</style>