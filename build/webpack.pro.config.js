const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*const HtmlWebpackPlugin = require('html-webpack-plugin');*/

module.exports = webpackMerge(base,{
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'js/[name]-[hash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root:path.join(__dirname,'../'),
            verbose:true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ],
    module:{

    },
    /*resolve:{
        alias:{
            "vue$":"vue/dist/vue.js" //修改vue包的导入路径
        }
    }*/
});
