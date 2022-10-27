# 发布一个NPM包流程
## 一、代码开发
```
1，webpack-merge：合并webpack配置，便于将公共配置提取
2，@babel/preset-env：可通过options.useBuiltIns配置项，决定进行语法转换的范围
```
## 二、配置
### 1，```output.library```
```
输出的名字，eg. MyLibrary
```
### 2，```out.libraryTarget```
#### 2.1 ```var```
```
[1] 以变量形式输出，可通过window.MyLibrary访问
[2] 需要以script标签形式引入
```
#### 2.2 ```window```
```
[1] 变量挂载在window下
[2] 需要以script标签形式引入
[3] 需要保证访问变量的脚本在组件脚本引入之后
```
### 3，```out.libraryExport```
```
[1] 指定入口文件内的哪些模块要导出
[2] 默认是undefined，即导出整个空间。eg. default
[3] 如果导出是默认导出，即：export default，建议配置上
[4] 可以配置数组。eg. ['module', 'subModule1']，则导出 module.subModule1
[5] 入口导出为export时，['module'] 表示导出入口里面的 module 属性
```
### 4，导出方式
```
[1] 暴露为变量、通过在对象上赋值暴露：用script方式引入
[2] 模块定义方式暴露：可以以模块方式引入
```
## 三、发布
### 1，切换为npm源
```
nrm use npm
```
### 2，登陆npm
```
npm login
```
### 3，发布
> 包名为 @scope/package_name形式的，表示该包为私有作用域的。发布时有两种处理方法：
> - 购买私有服务
> - 发布时指定公开发布，加上 --access public
#### 3.1 测试包
```
[1] package.json/version 加beta标识
[2] npm publish --access public --tag=beta
```
#### 3.2 正式包
```
npm publish --access public
```
### 4，本地包修改测试
```
[1] 本地包(A)的路径下npm link一下，将本地包link到全局(B)
[2] 使用到该包目录下(C)，npm link packageName，将使用的包link到全局(B)，再通过全局link到(A)
[3] 修改A并重新打包，可以在C下同步
[4] 结束：npm unlink <packageName> 解除绑定
```