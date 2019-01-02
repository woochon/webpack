const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Ex = require('extract-text-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'../src/main.js'),
    // 输出的路径可以注释掉，develop环境是在内存中的，没有打包的生成
    /*output:{
        path:path.join(__dirname,'../dist'),
        filename:'js/[name]-[hash:8].js'
    },*/
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('1111'),
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../src/index.html'),
            filename:'index.html'
        }),
        new Ex('css/[name]-[hash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'commons',
            filename:'commons.js'
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
                exclude: /node_modules/,
                // use:['style-loader','css-loader','less-loader','sass-loader']
                use:Ex.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader","sass-loader"]
                })
            },
            {
                test:/\.(png|gif|bmp|jpe?g)$/i,
                // use:'url-loader?limit=1000&name=images/[hash:8]-[name].[ext]',
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'images/[name]-[hash:8].[ext]',
                        }
                    }
                ]
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader',
            },
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
    /* 起别名 */
    resolve: {
        extensions: ['.js', '.vue','.scss'],
        alias: {
            src:path.resolve(__dirname,'../src'),
            components:path.resolve(__dirname,'../src/components'),
            base:path.resolve(__dirname,'../src/base')
        }
    },
};