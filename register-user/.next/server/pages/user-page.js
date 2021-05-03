module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user-page.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/UserContext.ts":
/*!*********************************!*\
  !*** ./contexts/UserContext.ts ***!
  \*********************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC50cz84NGRiIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQyIsImZpbGUiOiIuL2NvbnRleHRzL1VzZXJDb250ZXh0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgVXNlciA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYmlydGhEYXk6IHN0cmluZztcbiAgICBjcGY6IHN0cmluZztcbiAgICBwcm9mZXNzaW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIFVzZXJDb250ZXh0RGF0YSA9IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGhhbmRsZUNoYW5nZTogKGUpID0+IHZvaWQ7XG4gICAgaGFuZGxlU3VibWl0OiAoZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBVc2VyQ29udGV4dERhdGEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UserContext.ts\n");

/***/ }),

/***/ "./pages/user-page.tsx":
/*!*****************************!*\
  !*** ./pages/user-page.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.ts\");\n/* harmony import */ var _styles_user_page_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/user-page-styles */ \"./styles/user-page-styles.ts\");\n\nvar _jsxFileName = \"/home/paulabonini/bexs/ts-studies/register-user/pages/user-page.tsx\";\n\n\n\nfunction UserPage() {\n  const {\n    user\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"UserContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_user_page_styles__WEBPACK_IMPORTED_MODULE_3__[\"UserContainer\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_user_page_styles__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Ol\\xE1, \", user.name, \"!\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Bem vindo ao lado negro da for\\xE7a! Aqui est\\xE3o seus dados:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_user_page_styles__WEBPACK_IMPORTED_MODULE_3__[\"Data\"], {\n      children: [\"Data de Nascimento: \", user.birthDay, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 45\n      }, this), \"CPF: \", user.cpf, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 25\n      }, this), \"Profiss\\xE3o: \", user.profession]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyLXBhZ2UudHN4PzliMjUiXSwibmFtZXMiOlsiVXNlclBhZ2UiLCJ1c2VyIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwibmFtZSIsImJpcnRoRGF5IiwiY3BmIiwicHJvZmVzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsUUFBTTtBQUFFQztBQUFGLE1BQVdDLHdEQUFVLENBQUNDLGlFQUFELENBQTNCO0FBRUEsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFBLDhCQUNFO0FBQUEsK0JBQVVGLElBQUksQ0FBQ0csSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyw2REFBRDtBQUFBLHlDQUN1QkgsSUFBSSxDQUFDSSxRQUQ1QixvQkFDc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUR0QyxXQUVRSixJQUFJLENBQUNLLEdBRmIsb0JBRWtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGbEIsb0JBR2NMLElBQUksQ0FBQ00sVUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCIsImZpbGUiOiIuL3BhZ2VzL3VzZXItcGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgRGF0YSwgSGVhZGVyLCBVc2VyQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy91c2VyLXBhZ2Utc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKCkge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250YWluZXI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aDE+T2zDoSwge3VzZXIubmFtZX0hPC9oMT5cbiAgICAgICAgPGgyPkJlbSB2aW5kbyBhbyBsYWRvIG5lZ3JvIGRhIGZvcsOnYSEgQXF1aSBlc3TDo28gc2V1cyBkYWRvczo8L2gyPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8RGF0YT5cbiAgICAgICAgRGF0YSBkZSBOYXNjaW1lbnRvOiB7dXNlci5iaXJ0aERheX0gPGJyIC8+XG4gICAgICAgIENQRjoge3VzZXIuY3BmfSA8YnIgLz5cbiAgICAgICAgUHJvZmlzc8Ojbzoge3VzZXIucHJvZmVzc2lvbn1cbiAgICAgIDwvRGF0YT5cbiAgICA8L1VzZXJDb250YWluZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user-page.tsx\n");

/***/ }),

/***/ "./styles/user-page-styles.ts":
/*!************************************!*\
  !*** ./styles/user-page-styles.ts ***!
  \************************************/
/*! exports provided: UserContainer, Header, Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContainer\", function() { return UserContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Data\", function() { return Data; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n    background: #190A05;\n\n    box-shadow: 0 0 1em red;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 40%;\n    height: 40%;\n\n    padding: 2rem;\n\n    text-align: center;\n    line-height: 3rem;\n`;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`\n    margin: 3rem;\n\n    border-bottom: 2px solid gray;\n`;\nconst Data = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`\n    font-size: 20px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci1wYWdlLXN0eWxlcy50cz9kM2I5Il0sIm5hbWVzIjpbIlVzZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJEYXRhIiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxNQUFNQSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCTztBQW1CQSxNQUFNQyxNQUFNLEdBQUdGLHdEQUFNLENBQUNHLE1BQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FKTztBQU1BLE1BQU1DLElBQUksR0FBR0osd0RBQU0sQ0FBQ0ssQ0FBRztBQUM5QjtBQUNBLENBRk8iLCJmaWxlIjoiLi9zdHlsZXMvdXNlci1wYWdlLXN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgICBiYWNrZ3JvdW5kOiAjMTkwQTA1O1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSByZWQ7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwJTtcblxuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlciBgXG4gICAgbWFyZ2luOiAzcmVtO1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YSA9IHN0eWxlZC5wIGBcbiAgICBmb250LXNpemU6IDIwcHg7XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/user-page-styles.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });