const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: {
    app: path.join(__dirname, './src/print.js'),
    main: path.join(__dirname, './src/index.js'),
  },
  output:{
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出2',
      filename: 'html/index.html',
      template: path.join(__dirname, './src/index.html'),
      chunksSortMode: function(...args) {
        console.log(args)
      }
    }),
  ]
};

module.exports = config;