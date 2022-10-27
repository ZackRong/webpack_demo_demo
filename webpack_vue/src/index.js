// 整个项目根入口
import { createApp } from 'vue';
// import MyLibrary from '@rongzhx/npm_package_demo';
// import { print } from '@rongzhx/npm_package_demo/dist/main.min.js';

import App from './App.vue';

// const chunk = import('./user');

// console.log(chunk);
// console.log(print(1));

/******* 以window, var方式打包全部导出 测试开始 *******/

console.log(window.MyLibrary, 1);
setTimeout(() => {
  console.log(window.MyLibrary, MyLibrary.add(1, 2), 2);
  // window.MyLibrary.print('test');
}, 100);

/******* 以window, var方式打包全部导出 测试结束 *******/

/******* 以window, var方式打包部分导出 测试开始 *******/

console.log(window.MyLibrary, 1);
setTimeout(() => {
  console.log(window.MyLibrary, MyLibrary(1, 2), 2);
}, 100);

/******* 以window, var方式打包部分导出 测试结束 *******/

const app = createApp(App);


app.mount('#app');

export default app;
