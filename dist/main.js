/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((module) => {

eval("const Inbox = {\n\n    render: function() {\n        var message = document.createElement('ul');\n        message.innerHTML = \"An Inbox Message\";\n        return message;\n    }\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack://dom-mail/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nconst Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\nconst routes = {\n    inbox: Inbox\n}\n\nwindow.addEventListener('DOMContentLoaded', (e) => {\n    var content = document.querySelector(\".content\");\n    let router = new Router(content, routes);\n    router.start();\n    var sidebar = document.querySelectorAll(\".sidebar-nav li\")\n    sidebar.forEach((node) => {\n        node.addEventListener(\"click\", (e) => {\n            let loc = node.innerText.toLowerCase();\n            window.location.hash = loc;\n        })\n    })\n})\n\n//# sourceURL=webpack://dom-mail/./src/index.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n    constructor(node, routes) {\n        this.node = node;\n        this.routes = routes;\n    }\n\n    start() {\n        this.render();\n        window.addEventListener(\"hashchange\", this.render.bind(this))\n    }\n\n    activeRoute() {\n        let frag = window.location.hash;\n        frag = frag.split('#')[1];\n        return this.routes[frag];\n    }\n\n    render() {\n        this.node.innerHTML = \"\";\n        let component = this.activeRoute();\n        if (component) {\n            this.node.innerHTML = \"\";\n            let p = document.createElement(\"p\");\n            p.innerHTML = component.render().outerHTML\n            this.node.appendChild(p);\n        }\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://dom-mail/./src/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;