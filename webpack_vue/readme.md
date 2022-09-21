<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [2022-09-14](#2022-09-14)
  - [一、基础配置](#一基础配置)
  - [二、babel说明](#二babel说明)
- [2022-09-16](#2022-09-16)
  - [一、配置](#一配置)
    - [1，```html-webpack-plugin```](#1html-webpack-plugin)
      - [1.1 作用](#11-作用)
      - [1.2 配置](#12-配置)
    - [2，```webpack-dev-server```](#2webpack-dev-server)
      - [2.1 作用](#21-作用)
      - [2.2 配置](#22-配置)
    - [3，```output.publicPath```](#3outputpublicpath)
    - [4，```HotModuleReplacementPlugin```](#4hotmodulereplacementplugin)
      - [4.1 作用](#41-作用)
- [2022-09-21](#2022-09-21)
  - [一、配置](#一配置-1)
    - [1，```context```](#1context)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 2022-09-14
## 一、基础配置
```
clean-webpack-plugin：清除打包后的文件夹
vue-loader：支持.vue单文件
webpack-cli：支持webpack命令，不然需要应用./node_modules/bin下的webpack
```
## 二、[babel说明](https://www.jiangruitao.com/babel/quick-start/)

# 2022-09-16
## 一、配置
### 1，```html-webpack-plugin```
#### 1.1 作用
```
根据提供的html模板，自动生成新的html文件，并将打包后的JS自动引入
```
#### 1.2 配置
```
title：生成的html标题，html模板内需要通过[htmlWebpackPlugin.options.title]进行引用
filename：生成的html文件名，可以指定路径
template：指明生成的模板路径
chunks：指明要引入的chunks。默认是全部
```
### 2，```webpack-dev-server```
#### 2.1 作用
```
在内存构建应用，提供本地服务器
```
#### 2.2 配置
```
port：应用端口
host：应用host
hot：是否开启热更新。开启后，打包后的文件名不能用contenthash、chunkhash，可以用hash
publicPath：内存打包后，html、静态资源(JS、CSS、图片等)的公共路径，即打完包后的整个目录(eg. dist)内容，要放在这个publicPath下。
            所以最终访问路径为：publicPath + output.path + filename。
            但这时的html里面的引入静态资源路径还是output.publicPath开头的，所以两者设置不一致，会找不到资源。
```
### 3，```output.publicPath```
```
引入静态资源时，需要添加的公共路径
```
### 4，```HotModuleReplacementPlugin```
#### 4.1 作用
```
热更新。当源代码有修改后，webpack-dev-server重新打完包后，刷新页面。
和webpack-dev-server的hot配置项，配置一个即可。
```
# 2022-09-21
## 一、配置
### 1，```context```
```
[1] 上下文路径，需要是绝对路径。entry这些是相对于它
[2] 默认：node进程的CWD
```