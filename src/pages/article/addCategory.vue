<template>
    <div class="add-article">
        <h2>添加文章分类</h2>
        <div class="main-wrapper">
            <div class="item">
                <label for="email">分类名称</label>
                <input type="text" id="email" class="theme" placeholder="请输入邮箱">
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
            <div class="btn-wrapper">
                <div class="my-btn">提交</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'add-article',
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
