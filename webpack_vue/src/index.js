// 整个项目根入口
import Vue from 'vue';

import App from './App.vue';

const el = document.createElement('div');
document.body.appendChild(el);

const mainApp = new Vue({
  el,
  components: { App }
});

export default mainApp;
