## webpack1上的代码不能保证css和js被分割成许多单独文件夹打包
- 在此先放开webpack,添加一些其他的内容，并进一步复习vue知识
- 像结合koa2使用
- 也可调过此章直接查看后续webpack的配置

## vue使用vue-router
- 去掉路径上的#号
```
const router = new Router({
  mode: 'history',
})
```
- webpack配置路由时 去掉#报错
- 解决 https://blog.csdn.net/httguangtt/article/details/84847582


## 安装normalize.css来格式化基本样式
- npm install normalize.css --save
- 100vh是指将可见视图分割成100份

## 引入子组件时，忽略后缀.vue报错
- 在resolve下面在extensions中加上 .vue
- 引入组件时前面加的 ../  ./ 等过多，   在alias中取别名,尝试了几次，没有成功，但是vue-cli中没有问题;好吧，是自己给自己挖了一个坑，测试的时候把extensions中的.vue删除了
```
resolve: {
   extensions: ['.js', '.vue', '.scss'],
   alias: {
       src: path.resolve(__dirname, '../src'),
       components:path.resolve(__dirname,'./../src/components'),
   }
},
```

## 表单中几个汉字对齐问题
- https://www.cnblogs.com/huhunet/p/6478649.html

## 根据某个值来动态的绑定不同的class
- 第一种适合2中情况
```
<i :class= "item.IsTmall? 'tmall' : 'taobao'"></i>    // 这行代码是重点
```
- 第二种可以使用于多种情况
```
:class="iconDir(item.show)"
iconDir(flag){
    return flag?'glyphicon-menu-down':'glyphicon-menu-up'
}
```

## 性能
- 估计这种写法不好
```
<div class="state">
    <span v-if="item.state===0">禁止</span>
    <span v-if="item.state===1">激活</span>
</div>
```
- 推荐
```
states:['禁止','激活']
<div class="state">
    <span>{{states[item.state]}}</span>
</div>
```

## 左侧导航二次菜单的折叠问题：
```
.fade-enter{
        height: 0px;
    }
    .fade-enter-to{
        height: 100px;
    }
    .fade-enter-active{
        transition:height 0.5s;
    }
```
- 看起来非常呆板，且样式不对
- https://blog.csdn.net/DeepLies/article/details/76696579
- 左侧导航纠结了很久，才发现是因为高度设置出现问题：应该给每一个一级菜单的li设置初始高度，然后将二级菜单的高度叠加到一级菜单上

## render函数
- https://www.cnblogs.com/moqiutao/p/8335077.html
- http://www.php.cn/js-tutorial-401997.html
- render函数，我是真的认真考了许多遍官方文档还有看了很多博客，但是真的没有很大的帮助，建议从一个例子着手，也就是usrList里面的操作渲染
- render函数相当于是.vue组件中的template


