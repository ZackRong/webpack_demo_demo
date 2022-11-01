const { merge } = require('webpack-merge');
const commonConfig = require('./common.webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
});
