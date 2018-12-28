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


