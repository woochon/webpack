const devModule = require('../build/webpack.dev.config');
const proModule = require('../build/webpack.pro.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let finalModule = {};

let ENV = process.env.NODE_ENV;  //此处的NODE_ENV可更换名称，由命令行传参得到
if(ENV !== 'production'){
    console.log('dev');
    finalModule = devModule;
}else{
    console.log('pro');
    finalModule = proModule;
}

module.exports = finalModule;
