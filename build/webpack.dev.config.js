const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.config');
const webpack = require('webpack');
const path = require('path');
module.exports = webpackMerge(base,{
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
