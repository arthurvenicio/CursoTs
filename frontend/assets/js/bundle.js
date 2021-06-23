/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0020-this-arrow/form-control.ts":
/*!**********************************************!*\
  !*** ./src/A0020-this-arrow/form-control.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkForEmptyFileds = void 0;
var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
var submitEventFn = function (event) {
    event.preventDefault();
    var target = event.target;
    hideErrorMessages(target);
    checkForEmptyFileds(username, email, password, password2);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(target))
        console.log('forms enviado');
};
form.addEventListener('submit', submitEventFn);
function checkForEmptyFileds() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    inputs.forEach(function (input) {
        if (!input.value)
            showErrorMessages(input, 'Campo não pode ficar vazio');
    });
}
exports.checkForEmptyFileds = checkForEmptyFileds;
function checkEqualPasswords(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessages(password2, 'Senhas não batem');
    }
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function (item) {
        return item.classList.remove(SHOW_ERROR_MESSAGES);
    });
}
function showErrorMessages(input, msg) {
    var formFields = input.parentElement;
    var errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function shouldSendForm(form) {
    var send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function () { return (send = false); });
    return send;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************************************!*\
  !*** ./src/A0020-this-arrow/A0020-exercicio.ts ***!
  \*************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0020-this-arrow/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map