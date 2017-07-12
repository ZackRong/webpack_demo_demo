/**
 * Created by rongzhx on 2017/7/12 0012.
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 配置入口js文件
  entry:'./src/index.js',

  // 配置打包输出
  output:{
      // 打包输出的目录
      path: resolve(_dirname, 'dist'),

      // 入口js打包输出的文件名
      name:'index.js'
  },

  module:{
      // 配置各种loader，当webpack遇到import语句时，会调用这里的loader
      rules:[
          {
              // babel-loader转换ES6到ES5
              test:/\.js$/,

              // 排除node_modules目录下的文件，npm安装的包不用编译
              exclude:/node_modules/,

              /**
               * use指定loader，值可以是字符串或数组
               * loader的处理顺序是从最后一个到第一个依次处理
               */
              use:'babel-loader'
          },

          {
            // 匹配html文件
            test:/\.html$/,
            /**
             * 使用html-loader，将html内容存为js字符串。比如当遇到
             * import htmlString from template.html
             * template.html的文件内容会被转换成一个js字符串，合并到js文件中
             */
            use:'html-loader'
          },

          {
              // 匹配.css文件
              test:/\.css$/,

              /**
               * 先使用css-loader处理，处理结果交给style-loader处理
               * css-loader将css内容存为js字符串，并且会把background，@font-face等引用的图片，字体文件交给指定的loader打包
               */
              use:['style-loader', 'css-loader']
          },

          {
              /**
               * 匹配各种格式的图片和字体文件
               */
              test:/\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,

              /**
               * 使用url-loader，它接受一个limit参数，单位为字节
               * 当文件体积小于limit时，url-loader把文件转为Data URI格式内联到引用的地方
               * 当文件体积大于limit时，url-loader会调用file-loader，把文件存储到输出目录，
               * 并把引用的文件路径改写为输出后的路径
               */
              use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:10000
                    }
                }
              ]
          }
      ]
  }
};