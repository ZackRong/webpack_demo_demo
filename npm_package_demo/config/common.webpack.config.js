const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, '../src/math.js')],
  // entry: ['@babel/polyfill', path.join(__dirname, '../src/index.js')],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].min.js',
    chunkFilename: '[id].[contenthash:8].chunk.js',
    library: 'MyLibrary',
    // libraryTarget: 'umd',
    // libraryTarget: 'window',
    libraryTarget: 'var',
    // auxiliaryComment: 'Test Comment',
    // libraryExport: 'default',
    // 只导出 add 方法
    // libraryExport: ['add']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                // 按需进行语法转换
                useBuiltIns: 'usage'
              }]]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.wasm', '.mjs', '.json']
  },
  plugins: [
    // 这个要放最后
    new CleanWebpackPlugin()
  ]
};
