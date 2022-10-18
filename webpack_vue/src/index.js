// 整个项目根入口
import { createApp } from 'vue';
// import * as MyLibrary from '@rongzhx/npm_package_demo';
import '@rongzhx/npm_package_demo/dist/main.min.js';

import App from './App.vue';

const chunk = import('./user');

// console.log(chunk);
console.log(this);

const app = createApp(App);


app.mount('#app');

export default app;
