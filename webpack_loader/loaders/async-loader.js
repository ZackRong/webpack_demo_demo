const { getOptions } = require('loader-utils');

const asyncOperate = (source, params, callback) => {
  setTimeout(() => {
    const toString = Object.prototype.toString;
    if (toString.call(source) !== ['object String'] && toString.call(params) !== '[object Object]') {
      callback(new Error('参数错误'));
    }
    const target = source.replace(/{{\s*(\w+)\s*}}/g, (match, group) => {
      return params[group] || 'empty';
    });
    callback(null, target);
  }, 100);
};

// 异步loader
module.exports = function(source) {
  console.log('开始执行async-loader');
  // 异步loader。使用this.async获取callback
  const callback = this.async();
  // 获取配置项
  const options = getOptions(this) || {};
  const { params = {} } = options;
  asyncOperate(source, params, (err, target) => {
    if (err) {
      return callback(err);
    }
    return callback(null, target, '参数2', '参数3', '参数4', '参数5');
  });
  // const target = source.replace(/{{\s*(\w+)\s*}}/g, (match, group) => {
  //   return params[group] || 'empty';
  // });
  // return callback(null, target, 'a', 'b');
};

module.exports.pitch = function (remainingRequest, previousRequest, data) {
  console.log('----------');
  console.log('开始执行async-loader pitch');
  console.log('remainingRequest: ', remainingRequest);
  console.log('previousRequest: ', previousRequest);
  console.log('----------');
}