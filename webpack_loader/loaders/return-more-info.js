const { getOptions } = require('loader-utils');

module.exports = function(source) {
  console.log('开始执行return-more-info-loader');
  // 获取配置项
  const options = getOptions(this) || {};
  const { params = {} } = options;
  // const { name = 'Zack', position = '切图仔' } = params;
  // const target = source.replace(/\{\{name\}\}/, name).replace(/\{\{position\}\}/, position);
  const target = source.replace(/{{\s*(\w+)\s*}}/g, (match, group) => {
    return params[group] || 'empty';
  });
  // return target;
  return this.callback(null, target, 'a', 'b');
};
