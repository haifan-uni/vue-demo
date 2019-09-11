var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output: {//输出文件
        path: path.join(__dirname, './dist'),//输出路径
        filename: 'bundle.js'//输出文件名称
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板文件路径
            filename: 'index.html'//设置生成内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:
    {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader',] },
            { test: /\.(jpg|png|gif|jpeg)$/, use: ['url-loader'] },
            { test: /\.(ttf|eot|woff|woff2|svg)$/, use: ['url-loader'] },
            {test:/\.vue$/,use:['vue-loader']},
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }

}