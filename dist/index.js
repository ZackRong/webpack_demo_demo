/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by rongzhx on 2017/7/12 0012.
 */

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_foo__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_bar__ = __webpack_require__(4);
/**
 * Created by rongzhx on 2017/7/12 0012.
 */

// 引入作为全局对象存储空间的global.js


// 引入页面文件



const routes = {
    '/foo': __WEBPACK_IMPORTED_MODULE_1__views_foo__["a" /* default */],
    '/bar': __WEBPACK_IMPORTED_MODULE_2__views_bar__["a" /* default */]

    // Router类，用来控制页面根据当前URL切换
};class Router {
    start() {
        // 点击浏览器前进/后退按钮，会触发window.onpopstate事件，可以在这时切换相应的页面
        // https://developer.mozilla.org/en-US/docs/Web/Events/popstate
        window.addEventListener('popstate', function () {
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
__WEBPACK_IMPORTED_MODULE_0__global___default.a.router = new Router();

// 启用
__WEBPACK_IMPORTED_MODULE_0__global___default.a.router.start();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_html__);
/**
 * Created by rongzhx on 2017/7/12 0012.
 */



// 导出类
/* harmony default export */ __webpack_exports__["a"] = (class {
    mount(container) {
        container.innerHTML = __WEBPACK_IMPORTED_MODULE_1__index_html___default.a;
        container.querySelector('.gotoBar').addEventListener('click', function () {
            // 调到bar页面
            __WEBPACK_IMPORTED_MODULE_0__global___default.a.router.go('/bar');
        });
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = " <!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <title>foo</title> </head> <body> <p>This is Foo!!!</p> <button class=gotoBar>Go to Bar</button> </body> </html>";

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_html__);
/**
 * Created by rongzhx on 2017/7/12 0012.
 */




// 导出类
/* harmony default export */ __webpack_exports__["a"] = (class {
    mount(container) {
        container.innerHTML = __WEBPACK_IMPORTED_MODULE_1__index_html___default.a;
        container.querySelector('.gotoFoo').addEventListener('click', function () {
            // 调到foo页面
            __WEBPACK_IMPORTED_MODULE_0__global___default.a.router.go('/foo');
        });
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = " <!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <title>bar</title> </head> <body> <p>This is Bar!!!</p> <button class=gotoFoo>Go to Foo</button> </body> </html>";

/***/ })
/******/ ]);