const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolveLoader: {
    modules: [
      // 优先去这里找loader
      path.join(__dirname, '../loaders'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: [
          path.join(__dirname, '../src')
        ],
        use: [
          // path.join(__dirname, '../loaders/replace.js')
          'only-console',
          {
            // loader: 'replace',  // 替换文本
            // loader: 'return-more-info',  // 返回多个数据
            loader: 'async-loader',       // 异步loader
            options: {
              params: {
                name: 'Zack',
                position: '切图仔'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 这个要放最后
    new CleanWebpackPlugin()
  ]
};
