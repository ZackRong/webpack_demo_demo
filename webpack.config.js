/**
 * Created by rongzhx on 2017/7/12 0012.
 */
/**
 * 如果webpack.config.js导出的是一个函数，那么webpack会执行它，并把返回的结果作为配置对象
 *
 * module.exports = (options = {}) => {
 *  return {
 *   // 配置内容
 *  }
 * }
 *
 * 该函数接受一个参数，参数值由命令行传入，如，当执行：
 * webpack --env.dev --env.server localhost
 * 那么，options值为{dev:true, server:localhost}
 *
 * 该参数对webpack-dev-server命令同样有效
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 配置入口js文件
  entry:'./src/index.js',

  // 配置打包输出
  output:{
      // 打包输出的目录
      path: resolve(__dirname, 'dist'),

      // 资源文件访问的公共目录。访问时通过这个目录访问
      publicPath:'/assets/',

      // 入口js打包输出的文件名
      filename:'index.js',

      /**
       * 使用import（）加载的文件会被分别打包，我们称这个包为chunk，chunkFilename用于配置
       * 这个chunk输出的文件名
       *
       * [id]：编译时每个chunk会有一个id，
       * [chunkhash]：这个chunk的hash值，文件发生变化时该值也会变，文件名加上该值可以
       * 防止浏览器读取旧的缓存文件
       */
      chunkFilename:'[id].js?[chunkhash]'
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
  },

  /**
   * 配置webpack插件
   * plugin和loader区别是：loader是在import时根据不同的文件，匹配不同的loader对这个文件进行处理
   * plugin，关注的不是文件格式，而是在编译的各个阶段，会触发不同的事件，可以干预每个编译阶段
     */
  plugins:[
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ],
  /**
   * 配置开发时的服务器，以可以用http://127.0.0.1:8080这样的URL打开页面调试
   * 并且带热更新的功能，打代码时保存一下，浏览器自动更新
   * 如果修改CSS，不需要刷新页面可以直接生效
   */
  devServer:{
      port:8080,

      /**
       * historyApiFallback用于配置页面重定向
       *
       * SPA入口是一个统一的html页面，比如：
       * http://localhost:8080/foo
       * 我们要返回给它
       * http://localhost:8080/index.html
       * 这个文件
       *
       * 配置为true，当访问的文件不存在时，返回根目录下的index.html文件
       * 指定index.html文件的路径
       */
      historyApiFallback:{
          index:'/assets/'
      }
  }
};