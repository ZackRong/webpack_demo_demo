module.exports = function(source, ...rest) {
  console.log('开始执行only-console-loader');
  console.log('----------');
  console.log(source);
  console.log(rest);
  console.log('----------');
  return source;
}
