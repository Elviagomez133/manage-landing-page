webpackHotUpdate_N_E("pages/index",{

/***/ "./app/components/elements/form.js":
/*!*****************************************!*\
  !*** ./app/components/elements/form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.module.css */ \"./app/components/elements/form.module.css\");\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/elviagomez/Documents/Software/manage-landing-page-master/app/components/elements/form.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      mail = _useState[0],\n      setMail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var emailReg = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n  var handleChangeMail = function handleChangeMail(e) {\n    var email = e.target.value;\n\n    if (emailReg.test(email)) {\n      setMail(email);\n      setMessage('');\n      console.log(\"hi\");\n    } else {\n      setMail('');\n      setMessage(\"Please insert a valid email\");\n    }\n  };\n\n  function handleSubmit(e) {\n    e.preventDefault();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"email\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n      type: \"email\",\n      placeholder: \"Updates in your inbox\\u2026\",\n      value: mail,\n      onChange: handleChangeMail\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n      type: \"submit\",\n      children: \"Go\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.msg,\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Form, \"L7toWi7uJp3955A8qMkHVq+zNH0=\");\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS5qcz84MTk4Il0sIm5hbWVzIjpbIkZvcm0iLCJ1c2VTdGF0ZSIsIm1haWwiLCJzZXRNYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbFJlZyIsImhhbmRsZUNoYW5nZU1haWwiLCJlIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJpbnB1dCIsImJ1dHRvbiIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBRUZDLHNEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUEsTUFFbkJDLElBRm1CO0FBQUEsTUFFYkMsT0FGYTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUduQkcsT0FIbUI7QUFBQSxNQUdWQyxVQUhVOztBQUszQixNQUFNQyxRQUFRLEdBQUcsd0pBQWpCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzFCLFFBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXZCOztBQUNBLFFBQUdMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjSCxLQUFkLENBQUgsRUFBeUI7QUFDckJOLGFBQU8sQ0FBQ00sS0FBRCxDQUFQO0FBQ0FKLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDSCxLQUpELE1BSU87QUFDSFgsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBRSxnQkFBVSxDQUFDLDZCQUFELENBQVY7QUFDSDtBQUNKLEdBVkQ7O0FBWUEsV0FBU1UsWUFBVCxDQUFzQlAsQ0FBdEIsRUFBeUI7QUFDckJBLEtBQUMsQ0FBQ1EsY0FBRjtBQUNIOztBQUVELHNCQUNJO0FBQU0sYUFBUyxFQUFFQyx1REFBTSxDQUFDQyxTQUF4QjtBQUFtQyxZQUFRLEVBQUVILFlBQTdDO0FBQUEsNEJBQ0k7QUFBTyxhQUFPLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUNBLGVBQVMsRUFBRUUsdURBQU0sQ0FBQ0UsS0FEbEI7QUFFQSxVQUFJLEVBQUMsT0FGTDtBQUdBLGlCQUFXLEVBQUMsNkJBSFo7QUFJQSxXQUFLLEVBQUVqQixJQUpQO0FBS0EsY0FBUSxFQUFFSztBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQVNJO0FBQVEsZUFBUyxFQUFFVSx1REFBTSxDQUFDRyxNQUExQjtBQUFrQyxVQUFJLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVVJO0FBQUssZUFBUyxFQUFFSCx1REFBTSxDQUFDSSxHQUF2QjtBQUFBLGdCQUNLakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBdkN1QkosSTs7S0FBQUEsSSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Zvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IFsgbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgWyBtZXNzYWdlLCBzZXRNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBlbWFpbFJlZyA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTWFpbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZihlbWFpbFJlZy50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgc2V0TWFpbChlbWFpbClcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWFpbCgnJyk7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVtYWlsXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwZGF0ZXMgaW4geW91ciBpbmJveOKAplwiXG4gICAgICAgICAgICB2YWx1ZT17bWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXNnfT5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/elements/form.js\n");

/***/ })

})