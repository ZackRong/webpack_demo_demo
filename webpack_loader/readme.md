## 2022-11-04
### 一、编写loader
```
[1] 是一个运行于Node环境的模块，导出一个函数：module.exports = function(source, sourceMap?, meta?){}
[2] 函数：接收上一个loader处理完的代码或源码
[3] 一个Loader尽量只做一件事
[4] 不能用箭头函数，因为可能要用到this
[5] 使用loader-utils工具包
[6] 获取options，借助loader-utils/getOptions(this)
```
### 二、使用loader
```
[1] 如果是本地loader的，不能直接使用：use loader名。因为use是去node_modules查找的
[2] 使用相对路径引入
[3] 要用 use loader名 模式，需要借助：resolveLoader
```
### 三、```this.callback(null|error, data, ...rest)```
```
[1] 第一个参数为null/error
[2] 传递多个数据时可以使用
```
### 四、```this.async()```
```
[1] loader内如果是异步操作，用this.async() 获取callback
const callback = this.async();
```
### 五、```raw```
```
[1] 默认情况下，资源文件会被转换为UTF-8字符串后再给loader，也就是 source 是字符串
[2] 通过设置 module.exports.raw = true，资源文件可以以Buffer形式传给loader
[3] 在哪个loader下设置这个属性，则表示是这个loader接收的数据格式，不是指传给下个loader的数据格式
```