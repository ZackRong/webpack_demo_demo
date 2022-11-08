module.exports = function(source, ...rest) {
  console.log('开始执行only-console-loader');
  console.log('----------');
  console.log(source);
  console.log(rest);
  console.log('----------');
  return source;
}

module.exports.pitch = function (remainingRequest, previousRequest, data) {
  console.log('----------');
  console.log('开始执行only-console pitch');
  console.log('remainingRequest: ', remainingRequest);
  console.log('previousRequest: ', previousRequest);
  const script = `
    import content from "!!${remainingRequest}";
  `;
  console.log('script: ', script);
  console.log('----------');
  return script;
}