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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.scss */ \"./styles/home.module.scss\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/paulabonini/bexs/ts-studies/overtime/pages/index.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Home() {\n  let {\n    0: salary,\n    1: setSalary\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    adicional: 0,\n    base: 0,\n    total: 0\n  });\n  let {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    time: 0,\n    price: 0\n  });\n\n  const handleChange = event => {\n    let value = event.target.value;\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      [event.target.name]: value\n    }));\n  };\n\n  const calcSalary = event => {\n    event.preventDefault();\n    const adicional = (state.time - 8) * (state.price * 1.5);\n    const base = state.price * 8;\n    const total = base + adicional;\n    setSalary({\n      adicional,\n      base,\n      total\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"C\\xE1lculo de horas trabalhadas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      id: \"form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formFields,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.field,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"time\",\n            children: \"Horas trabalhadas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            id: \"time\",\n            name: \"time\",\n            min: 8,\n            value: state.time,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.field,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"price\",\n            children: \"Valor Hora\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            id: \"price\",\n            name: \"price\",\n            min: 20,\n            value: state.price,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: calcSalary,\n        children: \"Calcular\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tableContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Base\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Adicional\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Total\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: `${salary.base.toLocaleString(\"pt-br\", {\n              style: \"currency\",\n              currency: \"BRL\"\n            })}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: `${salary.adicional.toLocaleString(\"pt-br\", {\n              style: \"currency\",\n              currency: \"BRL\"\n            })}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: `${salary.total.toLocaleString(\"pt-br\", {\n              style: \"currency\",\n              currency: \"BRL\"\n            })}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic2FsYXJ5Iiwic2V0U2FsYXJ5IiwidXNlU3RhdGUiLCJhZGljaW9uYWwiLCJiYXNlIiwidG90YWwiLCJzdGF0ZSIsInNldFN0YXRlIiwidGltZSIsInByaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm5hbWUiLCJjYWxjU2FsYXJ5IiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJmb3JtRmllbGRzIiwiZmllbGQiLCJ0YWJsZUNvbnRhaW5lciIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixNQUFJO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUM7QUFDakNDLGFBQVMsRUFBRSxDQURzQjtBQUVqQ0MsUUFBSSxFQUFFLENBRjJCO0FBR2pDQyxTQUFLLEVBQUU7QUFIMEIsR0FBRCxDQUFsQztBQU1BLE1BQUk7QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkwsc0RBQVEsQ0FBQztBQUMvQk0sUUFBSSxFQUFFLENBRHlCO0FBRS9CQyxTQUFLLEVBQUU7QUFGd0IsR0FBRCxDQUFoQzs7QUFLQSxRQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QixRQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxLQUF6QjtBQUVBTCxZQUFRLGlDQUNIRCxLQURHO0FBRU4sT0FBQ0ssS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBQWQsR0FBcUJGO0FBRmYsT0FBUjtBQUlELEdBUEQ7O0FBU0EsUUFBTUcsVUFBVSxHQUFJSixLQUFELElBQVc7QUFDNUJBLFNBQUssQ0FBQ0ssY0FBTjtBQUVBLFVBQU1i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QixjQUFiLENBQTRCLE9BQTVCLEVBQXFDO0FBQzNDQyxtQkFBSyxFQUFFLFVBRG9DO0FBRTNDQyxzQkFBUSxFQUFFO0FBRmlDLGFBQXJDLENBR0w7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0REQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgW3NhbGFyeSwgc2V0U2FsYXJ5XSA9IHVzZVN0YXRlKHtcbiAgICBhZGljaW9uYWw6IDAsXG4gICAgYmFzZTogMCxcbiAgICB0b3RhbDogMCxcbiAgfSk7XG5cbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHRpbWU6IDAsXG4gICAgcHJpY2U6IDAsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2FsY1NhbGFyeSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhZGljaW9uYWwgPSAoc3RhdGUudGltZSAtIDgpICogKHN0YXRlLnByaWNlICogMS41KTtcbiAgICBjb25zdCBiYXNlID0gc3RhdGUucHJpY2UgKiA4O1xuICAgIGNvbnN0IHRvdGFsID0gYmFzZSArIGFkaWNpb25hbDtcblxuICAgIHNldFNhbGFyeSh7XG4gICAgICBhZGljaW9uYWwsXG4gICAgICBiYXNlLFxuICAgICAgdG90YWwsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDE+Q8OhbGN1bG8gZGUgaG9yYXMgdHJhYmFsaGFkYXM8L2gxPlxuICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUZpZWxkc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVcIj5Ib3JhcyB0cmFiYWxoYWRhczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGlkPVwidGltZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgbWluPXs4fVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUudGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+VmFsb3IgSG9yYTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICBtaW49ezIwfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucHJpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjYWxjU2FsYXJ5fT5cbiAgICAgICAgICBDYWxjdWxhclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbnRhaW5lcn0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+QmFzZTwvdGg+XG4gICAgICAgICAgICA8dGg+QWRpY2lvbmFsPC90aD5cbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD57YCR7c2FsYXJ5LmJhc2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkJSTFwiLFxuICAgICAgICAgICAgfSl9YH08L3RkPlxuICAgICAgICAgICAgPHRkPntgJHtzYWxhcnkuYWRpY2lvbmFsLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIiwge1xuICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIixcbiAgICAgICAgICAgIH0pfWB9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57YCR7c2FsYXJ5LnRvdGFsLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIiwge1xuICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIixcbiAgICAgICAgICAgIH0pfWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/home.module.scss":
/*!*********************************!*\
  !*** ./styles/home.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"home_container__2W4JU\",\n\t\"formFields\": \"home_formFields__2t9y2\",\n\t\"field\": \"home_field__3Zg6A\",\n\t\"tableContainer\": \"home_tableContainer__1m6eu\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzcz9lNjI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJob21lX2NvbnRhaW5lcl9fMlc0SlVcIixcblx0XCJmb3JtRmllbGRzXCI6IFwiaG9tZV9mb3JtRmllbGRzX18ydDl5MlwiLFxuXHRcImZpZWxkXCI6IFwiaG9tZV9maWVsZF9fM1pnNkFcIixcblx0XCJ0YWJsZUNvbnRhaW5lclwiOiBcImhvbWVfdGFibGVDb250YWluZXJfXzFtNmV1XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/home.module.scss\n");

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

/***/ })

/******/ });