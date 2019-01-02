<template>
    <div class="add-article">
        <h2>编辑文章</h2>
        <p><span>基本设置</span><span>内容设置</span><span>SEO设置</span></p>
        <div class="main-wrapper">
            <div>
                <h3>基本设置</h3>
                <div class="item">
                    <label for="email">所属分类</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">名称</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="re_PWD">封面图</label>
                    <input type="text" class="theme special" placeholder="请输入邮箱">
                    <!--<img src="../images/tmp.png" alt="" class="identify">-->
                    <span class="identify"></span>
                </div>
                <div class="item">
                    <label for="pwd">作者</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="pwd">加入推荐</label>
                    <input type="text"  class="theme" placeholder="请输入邮箱">
                    <input type="checkbox">精品
                    <input type="checkbox">热门
                    <input type="checkbox">最新
                </div>
            </div>
            <div>
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
            <div>
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
