const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[id].[contenthash:8].bundle.js',
    chunkFilename: '[id].[contenthash:8].chunk.js'
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
