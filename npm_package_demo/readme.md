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
[1] 以变量形式输出，可通过MyLibrary访问
[2] 需要以script标签形式引入
```
### 3，```out.libraryExport```
```
[1] 指定入口文件内的哪些模块要导出
[2] 默认是undefined，即导出整个空间。eg. default
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