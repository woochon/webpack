const devModule = require('../build/webpack.dev.config');
const proModule = require('../build/webpack.pro.config');

let finalModule = {};

let ENV = process.env.NODE_ENV;
if(ENV !== 'production'){
    finalModule = devModule;
}else{
    finalModule = proModule;
}

module.exports = finalModule;