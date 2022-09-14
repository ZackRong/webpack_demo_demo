const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.js'),
    test: path.join(__dirname, '../src/test.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    // vue-loader插件，允许用.vue单文件写vue
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
};
