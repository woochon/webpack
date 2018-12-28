## 添加忽略文件
- .gitignore防止提交代码的时候,提交过多的内容

## 修改webpack.config.js文件路径
- 在package.json文件中修改配置环境的路径  --config '文件路径'是指定webpack.config.js文件的路径
- 在webpack.config.js文件中修改入口路径，出口路径，以及指定的模板路径
```
new HtmlWebpackPlugin({
   template:path.join(__dirname,'../src/index.html'),
   filename:'index.html'
})
```
## 分离打包的css文件
- 安装插件npm install extract-text-webpack-plugin --save-dev
- 可能css文件样式比较少的原因：虽然css从bundle.js文件中分离，但是只有一个main.css;
  可能存在css文件分离不彻底的

## 分离打包的js文件

## webpack.DefinePlugin作用能使项目的其他js文件使用以此来区分环境
-
```
'process.env.NODE_ENV':JSON.stringify('production')
```
- *unix和windows设置NODE_ENV的语句有所差异，此处用到了一个库cross-env以达到兼容的目的  npm install cross-env --save-dev,以此来在命令行设置环境 cross-env NODE_ENV=production
- 在vue-cli中，npm run build的环境变量是有build/build.js赋值得到的
- 用命令行得到的环境变量只能在webpack.config.js文件中使用
- webpack-merge 合并一些webpack配置

## 引入图片的时候 要加 ./   否则图片加载不出来？  引入js文件的时候也是这样
- 添加 publicPath: '/'无效
## webpack环境分离
- 新建一个build,里面专门来执行一些打包
- 每次打包前先清除dist目录及该文件夹下所有的文件, clean-webpack-plugin
- 打包的时候压缩文件 uglifyjs-webpack-plugin
- 压缩代码时，按照给定的版本的uglifyjs-webpack-plugin，采用new UglifyJSPlugin()报错;可采用new webpack.optimize.UglifyJsPlugin()
- 压缩代码时，去掉console.log()
```
new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
```

## 先羡慕中使用eslint配置时，与babel-loader的匹配冲突
- 在.eslintrc.js中添加 parser:'babel-eslint'
- 报错Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
- 安装 npm install eslint-plugin-vue --save-dev，并在.eslintrc.js文件中将parser:'babel-eslint'改成parserOptions:{parse:'babel-eslint'}，





