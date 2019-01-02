const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.config');
const webpack = require('webpack');
const path = require('path');
module.exports = webpackMerge(base,{
    output:{
        publicPath: '/'
    },
    devServer: {
        port:8000,
        hot:true,
        contentBase:'src',
        open:false,
        historyApiFallback: {
            index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
        }
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.esm.js" //修改vue包的导入路径
        }
    },
    devtool:'eval-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development'),
        }),
    ]

});
