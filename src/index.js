/**
 * Created by rongzhx on 2017/7/12 0012.
 */

// 引入作为全局对象存储空间的global.js
import g from './global'

// 引入页面文件
import foo from './views/foo'
import bar from './views/bar'

const routes = {
    '/foo':foo,
    '/bar':bar
}

// Router类，用来控制页面根据当前URL切换
class Router {
    start() {
        // 点击浏览器前进/后退按钮，会触发window.onpopstate事件，可以在这时切换相应的页面
        // https://developer.mozilla.org/en-US/docs/Web/Events/popstate
        window.addEventListener('popstate', () => {
            this.load(location.pathname);
        });

        // 打开页面时加载当前页面
        this.load(location.pathname);
    }

    // 前往path，会变更地址栏URL，并加载相应页面
    go(path) {
        // 变更地址栏URL
        history.pushState({}, '', path);
        // 加载相应页面
        this.load(path);
    }

    // 加载path路径的页面
    load(path) {
        // 创建页面实例
        const view = new routes[path]();
        // 调用页面方法，加载页面到document.body
        view.mount(document.body);
    }
}

// 新建路由对象，并赋给全局对象g，作为g.router，这样可以在所有页面访问
g.router = new Router();

// 启用
g.router.start();
