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

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { MessageStore } = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nconst Compose = {\n\n    render: function() {\n        let div = document.createElement(\"div\");\n        div.className = \"new-message\";\n        div.innerHTML = this.renderForm();\n        div.addEventListener(\"change\", (e) => {\n            let name = e.target.name;\n            let val = e.target.value\n            MessageStore.updateDraftField(name, val);\n        })\n        console.log(div);\n        return div;\n    },\n\n    renderForm: function() {\n        let draft = MessageStore.getMessageDraft();\n        let htmlForm = `<p class=new-message-header>New Message</p>\n        <form class=compose-form>\n            <input placeholder=Recipient name=to type=text value=${draft.to}>\n            <input placeholder=Subject name=subject type=text value=${draft.subject}>\n            <textarea name=body rows=20>${draft.body}</textarea>\n            <button type=submit class=btn btn-primary submit-message>Send</button>\n        </form>`\n        return htmlForm;\n    }\n}\n\nmodule.exports = Compose;\n\n//# sourceURL=webpack://dom-mail/./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { MessageStore } = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nconst Inbox = {\n\n    render: function() {\n        var message = document.createElement('ul');\n        let innerMessage = MessageStore.getInboxMessages();\n        innerMessage.forEach((piece) => {\n            message.appendChild(this.renderMessage(piece))\n        })\n        return message;\n    },\n\n    renderMessage: function(message) {\n        li = document.createElement('li');\n        li.className = \"message\";\n        li.innerHTML = `<span class=from>${message.from}</span><span class=subject>${message.subject}</span><span class=body>${message.body}</span>`\n        return li;\n    }\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack://dom-mail/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent */ \"./src/sent.js\")\nconst Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nconst Compose = __webpack_require__(/*! ./compose */ \"./src/compose.js\")\n\nconst routes = {\n    inbox: Inbox,\n    sent: Sent,\n    compose: Compose,\n}\n\nwindow.addEventListener('DOMContentLoaded', (e) => {\n    var content = document.querySelector(\".content\");\n    let router = new Router(content, routes);\n    router.start();\n    window.location.hash = \"#inbox\"\n    var sidebar = document.querySelectorAll(\".sidebar-nav li\")\n    sidebar.forEach((node) => {\n        node.addEventListener(\"click\", (e) => {\n            let loc = node.innerText.toLowerCase();\n            window.location.hash = loc;\n        })\n    })\n})\n\n//# sourceURL=webpack://dom-mail/./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((module) => {

eval("var messages = {\n    sent: [\n        {\n            to: \"friend@mail.com\",\n            subject: \"Check this out\",\n            body: \"It's so cool\"\n        },\n        { to: \"person@mail.com\", \n        subject: \"zzz\", \n        body: \"so booring\" }\n    ],\n    inbox: [\n        {\n            from: \"grandma@mail.com\",\n            subject: \"Fwd: Fwd: Fwd: Check this out\",\n            body:\n                \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n        },\n        {\n            from: \"person@mail.com\",\n            subject: \"Questionnaire\",\n            body: \"Take this free quiz win $1000 dollars\"\n        }\n    ]\n}\n\nconst MessageStore = {\n    getInboxMessages: function() {\n        return messages.inbox;\n    },\n\n    getSentMessages: function() {\n        return messages.sent;\n    },\n\n    updateDraftField: function(field, value) {\n        messageDraft[field] = value;\n    },\n\n    sendDraft: function() {\n        messages.sent.push(messageDraft);\n        messageDraft = new Message();\n    },\n\n    getMessageDraft: function() {\n        return messageDraft;\n    }\n\n}\n\nclass Message {\n    constructor(from = \"\", to = \"\", subject = \"\", body = \"\") {\n        this.from = from;\n        this.to = to;\n        this.subject = subject;\n        this.body = body;\n    }\n}\n\nvar messageDraft = new Message();\n\nmodule.exports = { Message, MessageStore, messageDraft };\n\n\n\n//# sourceURL=webpack://dom-mail/./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n    constructor(node, routes) {\n        this.node = node;\n        this.routes = routes;\n    }\n\n    start() {\n        this.render();\n        window.addEventListener(\"hashchange\", this.render.bind(this))\n    }\n\n    activeRoute() {\n        let frag = window.location.hash;\n        frag = frag.split('#')[1];\n        return this.routes[frag];\n    }\n\n    render() {\n        this.node.innerHTML = \"\";\n        let component = this.activeRoute();\n        if (component) {\n            this.node.appendChild(component.render())\n        }\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://dom-mail/./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { MessageStore } = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nconst Sent = {\n    render: function () {\n        var message = document.createElement('ul');\n        let innerMessage = MessageStore.getSentMessages();\n        innerMessage.forEach((piece) => {\n            message.appendChild(this.renderMessage(piece));\n        })\n        return message;\n    },\n\n    renderMessage: function (message) {\n        li = document.createElement('li');\n        li.className = \"message\";\n        li.innerHTML = `<span class=to>${message.to}</span><span class=subject>${message.subject}</span><span class=body>${message.body}</span>`\n        return li;\n    }\n}\n\nmodule.exports = Sent;\n\n//# sourceURL=webpack://dom-mail/./src/sent.js?");

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