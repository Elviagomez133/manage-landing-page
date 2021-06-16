webpackHotUpdate_N_E("pages/index",{

/***/ "./app/components/elements/form.js":
/*!*****************************************!*\
  !*** ./app/components/elements/form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.module.css */ \"./app/components/elements/form.module.css\");\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/elviagomez/Documents/Software/manage-landing-page-master/app/components/elements/form.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      mail = _useState[0],\n      setMail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var emailReg = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/; // const handleChangeMail = e => {\n  //     e.preventDefault();\n  //     const email = e.target.value;\n  //     if(emailReg.test(email)) {\n  //         console.log(e)\n  //         setMail(email)\n  //         setMessage('');\n  //     } else {\n  //         setMail('');\n  //         setMessage(\"Please insert a valid email\");\n  //     }\n  // }\n\n  function handleChangeMail(e) {\n    e.preventDefault();\n    setMail(e.target.value);\n    console.log(e);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"email\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n      type: \"email\",\n      placeholder: \"Updates in your inbox\\u2026\",\n      value: mail,\n      onChange: handleChangeMail\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n      type: \"submit\",\n      children: \"Go\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.msg,\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Form, \"L7toWi7uJp3955A8qMkHVq+zNH0=\");\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS5qcz84MTk4Il0sIm5hbWVzIjpbIkZvcm0iLCJ1c2VTdGF0ZSIsIm1haWwiLCJzZXRNYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbFJlZyIsImhhbmRsZUNoYW5nZU1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJpbnB1dCIsImJ1dHRvbiIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBRUZDLHNEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUEsTUFFbkJDLElBRm1CO0FBQUEsTUFFYkMsT0FGYTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUduQkcsT0FIbUI7QUFBQSxNQUdWQyxVQUhVOztBQUszQixNQUFNQyxRQUFRLEdBQUcsd0pBQWpCLENBTDJCLENBTzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixXQUFPLENBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDSDs7QUFFRCxXQUFTTSxZQUFULENBQXNCTixDQUF0QixFQUF5QjtBQUNyQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBTSxhQUFTLEVBQUVNLHVEQUFNLENBQUNDLFNBQXhCO0FBQW1DLFlBQVEsRUFBRUYsWUFBN0M7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQ0EsZUFBUyxFQUFFQyx1REFBTSxDQUFDRSxLQURsQjtBQUVBLFVBQUksRUFBQyxPQUZMO0FBR0EsaUJBQVcsRUFBQyw2QkFIWjtBQUlBLFdBQUssRUFBRWYsSUFKUDtBQUtBLGNBQVEsRUFBRUs7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFTSTtBQUFRLGVBQVMsRUFBRVEsdURBQU0sQ0FBQ0csTUFBMUI7QUFBa0MsVUFBSSxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFVSTtBQUFLLGVBQVMsRUFBRUgsdURBQU0sQ0FBQ0ksR0FBdkI7QUFBQSxnQkFDS2Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBL0N1QkosSTs7S0FBQUEsSSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Zvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IFsgbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgWyBtZXNzYWdlLCBzZXRNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBlbWFpbFJlZyA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlTWFpbCA9IGUgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XG4gICAgLy8gICAgIGlmKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIC8vICAgICAgICAgc2V0TWFpbChlbWFpbClcbiAgICAvLyAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzZXRNYWlsKCcnKTtcbiAgICAvLyAgICAgICAgIHNldE1lc3NhZ2UoXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW1haWxcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VNYWlsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGRhdGVzIGluIHlvdXIgaW5ib3jigKZcIlxuICAgICAgICAgICAgdmFsdWU9e21haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTWFpbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1zZ30+XG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/elements/form.js\n");

/***/ })

})