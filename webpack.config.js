const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer: {
        port:3000,
        hot:true,
        contentBase:'src',
        open:false
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss/,
                use:['style-loader','css-loader','less-loader','sass-loader']
            },
            {
                test:/\.(png|gif|bmp|jpeg)$/,
                use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]',
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader'
            },
            /*{
                test:/\.js$/,
                use:'babel-loader',
                exclude: /node-modules/, //配置babel来转化高级的es语法
            }*/
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins:["transform-runtime"]
                    }
                }
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    /*resolve:{
        alias:{
            "vue$":"vue/dist/vue.js" //修改vue包的导入路径
        }
    }*/
};
