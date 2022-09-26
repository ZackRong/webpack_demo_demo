// 整个项目根入口
import { createApp } from 'vue';

import App from './App.vue';

const chunk = import('./user');

console.log(chunk);

const app = createApp(App);


app.mount('#app');

export default app;
