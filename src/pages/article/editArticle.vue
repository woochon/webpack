<template>
    <div class="add-article">
        <h2>编辑文章</h2>
        <ul class="title-wrapper">
            <li v-for="(item,index) in titleGroup"  :key="index" :class="{active:index===currentIndex}" @click="toggle(index)" class="item">{{item}}</li>
        </ul>
        <div class="main-wrapper">
            <div v-show="currentIndex===0">
                <h3>基本设置</h3>
                <div class="item">
                    <label for="parent_category"><span>所属分类</span></label>
                    <select v-model="categoryName" id="parent_category" class="long input-info">
                        <option v-for="(item,index) in categoryGroup" :value="item.value" :key="index">{{item.label}}</option>
                    </select>
                </div>
                <div class="item">
                    <label for="articleName"><span class="w2">标题</span></label>
                    <input type="text"  class="theme input-info" id="articleName" placeholder="请输入标题" v-model="articleName">
                </div>
                <div class="item">
                    <label><span class="w3">封面图</span></label>
                    <input type="file" class="theme special" @change="handleChange($event)">
                </div>
                <div style="padding-left: 84px;">
                    <p>请上传宽度为300px,高度为180px的图片且图片大小不能超过2MB</p>
                    <img :src="tmpImg"  ref="uploadImg" style="width: 300px" alt="请上传图片">
                </div>
                <div class="item">
                    <label for="author"><span class="w2">作者</span></label>
                    <input v-model="authorName" type="text" id="author" class="theme input-info" placeholder="请输入作者名">
                </div>
                <div class="item">
                    <label><span>加入推荐</span></label>
                    <input type="checkbox" value="best" v-model="recommend">精品
                    <input type="checkbox" value="hot" class="distance" v-model="recommend">热门
                    <input type="checkbox" value="new" class="distance" v-model="recommend">最新
                </div>
                <div class="item">
                    <div class="my-btn-long extra-btn" @click="firstNext()">下一步</div>
                </div>
            </div>
            <div v-show="currentIndex===1">
                <h3>内容设置</h3>
                <div class="item">
                    <label for="email">分类名称</label>
                    <input type="text" id="email" class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">上级分类</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="re_PWD">关键字</label>
                    <input type="text"  class="theme special" placeholder="请输入邮箱">
                    <!--<img src="../images/tmp.png" alt="" class="identify">-->
                    <span class="identify"></span>
                </div>
                <div class="item">
                    <label for="pwd">状态</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">描述</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
            </div>
            <div v-show="currentIndex===2">
                <h3>SEO设置</h3>
                <div class="item">
                    <label for="email">分类名称</label>
                    <input type="text" class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">上级分类</label>
                    <input type="text" id="pwd" class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="re_PWD">关键字</label>
                    <input type="text" id="re_PWD" class="theme special" placeholder="请输入邮箱">
                    <!--<img src="../images/tmp.png" alt="" class="identify">-->
                    <span class="identify"></span>
                </div>
                <div class="item">
                    <label for="pwd">状态</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">描述</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
            </div>
            <div class="btn-wrapper">
                <div class="my-btn-long extra-btn" @click="postInfo">提交</div>
            </div>
        </div>
        <Dialogs v-model="showDialog">
            <div slot="contents">
                <p class="dialog-p">{{msg}}</p>
            </div>
            <div slot="footers">
                <div class="my-btn-long extra-cancel" @click="cancelDialogs">确定</div>
            </div>
        </Dialogs>
    </div>
</template>
<script>
    import {isEmpty} from "common/js/dom";
    import Dialogs from 'components/dialogs';
    export default{
        name:'add-article',
        data(){
            return {
                titleGroup:['基本设置','内容设置','SEO设置'],
                currentIndex:0,
                categoryName:'top',
                categoryGroup:[
                    {
                        value:'top',
                        label:'顶层分类'
                    },
                    {
                        value:'koa2',
                        label:'后端'
                    },
                    {
                        value:'vue',
                        label:'前端'
                    }
                ],
                articleName:'',
                recommend:[],
                msg:'',
                authorName:'',
                showDialog:false,
                tmpImg:'../images/tmp.png',
            }
        },
        components:{
            Dialogs
        },
        methods:{
            toggle(index){
                this.currentIndex=index;
            },
            postInfo(){
                console.log(isEmpty(this.articleName));
                if(isEmpty(this.articleName)){
                    this.msg='标题不能为空';
                    this.showDialog=true;
                    return ;
                }
                if(isEmpty(this.authorName)){
                    this.msg='作者名不能为空';
                    this.showDialog=true;
                    return ;
                }
            },
            cancelDialogs(){
                this.msg='';
                this.showDialog=false;
            },
            handleChange(e){
                /*https://blog.csdn.net/huangxin112/article/details/74956462*/
                /*https://blog.csdn.net/yudldl/article/details/83090021*/
                console.log(e.target.files);
                let file = e.target.files[0];
                if(file.size>1024*1024){
                    console.log('图片大小不能超过2MB!');
                    return ;
                }
                // 创建url
                let imgUrl=window.URL.createObjectURL(file);
                this.tmpImg=imgUrl;
                this.$refs.uploadImg.onload=function(){
                    console.log('图片加载成功');
                    URL.revokeObjectURL(imgUrl);
                }
            },
            firstNext(){
                if(isEmpty(this.articleName)){
                    this.msg='标题不能为空';
                    this.showDialog=true;
                    return ;
                }
                if(isEmpty(this.tmpImg)||this.tmpImg==='../images/tmp.png'){
                    this.msg='封面图不能为空';
                    this.showDialog=true;
                    return ;
                }
                if(isEmpty(this.authorName)){
                    this.msg='作者名不能为空';
                    this.showDialog=true;
                    return ;
                }
                console.log(this.$refs.uploadImg.width);
                /*let tmp=this.$refs.uploadImg;
                if(tmp.width!==300||tmp.height!==150){
                    this.msg='请上传符合尺寸的图片';
                    this.showDialog=true;
                    return ;
                }*/
                console.log(this.recommend);
                this.currentIndex=1;
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../../common/scss/variable';
    .add-article{
        padding: 0 40px;
        .title-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            .item{
                flex: 1;
                text-align: center;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                background-color:lightblue;
                &.active{
                    color: $color-sub-theme;
                    background-color: gray;
                }
            }
        }
        .main-wrapper{
            &>div{
                width: 900px;
                .item{
                    width: 100%;
                    padding: 15px 0;
                    display: flex;
                    label{
                        width: 4em;
                        font-weight: normal;
                        margin-right: 2em;
                        .w2{
                            letter-spacing: 2em;
                            margin-right: -2em;
                        }
                        .w3{
                            letter-spacing: 0.5em;
                            margin-right: -0.5em;
                        }
                    }
                    .input-info{
                        border:1px solid #666;
                        outline:none;
                        width: 300px;
                        padding-left: 1em;
                        &:active{/*文本框获取激活时的样式*/
                            border:1px solid #d93f30;
                        }
                        &:focus{/*文本框获取焦点时的样式*/
                            border:1px solid #d93f30;
                        }
                    }
                    .distance{
                        margin-left: 30px;
                    }
                    .btn-step{
                        color: red;
                        background-color: blue;
                        width: 100%;
                    }
                }
            }
            .extra-btn{
                width: 100%;
                height: 40px;
                line-height: 40px;
                background-color: $color-sub-theme;
            }
        }
        /deep/ .dialog-wrapper{
            width: 400px;
            height: 120px;
            background-color: pink;
            padding: 20px 60px;
        }
        .extra-cancel{
            height: 40px;
            line-height: 40px;
            background-color: $color-sub-theme;
        }
        .dialog-p{
            line-height: 40px;
            margin-bottom: 0;
        }
    }
</style>
