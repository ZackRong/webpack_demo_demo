# 2022-09-14
### 一、基础配置
```
clean-webpack-plugin：清除打包后的文件夹
vue-loader：支持.vue单文件
webpack-cli：支持webpack命令，不然需要应用./node_modules/bin下的webpack
```
### 二、[babel说明](https://www.jiangruitao.com/babel/quick-start/)

# 2022-09-16
### 一、配置
#### 1，```html-webpack-plugin```
```
作用：根据提供的html模板，自动生成新的html文件，并将打包后的JS自动引入
配置：
  title：生成的html标题，html模板内需要通过[htmlWebpackPlugin.options.title]进行引用
  filename：生成的html文件名，可以指定路径
  template：指明生成的模板路径
  chunks：指明要引入的chunks。默认是全部
```
#### 2，```webpack-dev-server```
```
作用：在内存构建应用，提供本地服务器
配置：
  port：应用端口
  host：应用host
  hot：是否开启热更新。开启后，打包后的文件名不能用contenthash、chunkhash，可以用hash
  publicPath：内存打包后，静态资源(JS、CSS、图片等)的公共路径，即打完包后的整个目录(eg. dist)，要放在这个publicPath下。
              所以最终访问路径为：output.publicPath + output.path + publicPath + filename
```
#### 3，```output.publicPath```
```
引入静态资源时，需要添加的公共路径
```