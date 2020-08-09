webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/TableCommunes.js":
/*!*******************************************!*\
  !*** ./pages/components/TableCommunes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/claudiodonoso/Documents/shoppify-app/pages/components/TableCommunes.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar TableCommunes = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TableCommunes, _React$Component);\n\n  var _super = _createSuper(TableCommunes);\n\n  function TableCommunes(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TableCommunes);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      //state is by default an object\n      students: [{\n        id: 1,\n        name: 'Wasif',\n        age: 21,\n        email: 'wasif@email.com'\n      }, {\n        id: 2,\n        name: 'Ali',\n        age: 19,\n        email: 'ali@email.com'\n      }, {\n        id: 3,\n        name: 'Saad',\n        age: 16,\n        email: 'saad@email.com'\n      }, {\n        id: 4,\n        name: 'Asad',\n        age: 25,\n        email: 'asad@email.com'\n      }]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TableCommunes, [{\n    key: \"renderTableData\",\n    value: function renderTableData() {\n      var _this2 = this;\n\n      return this.state.students.map(function (student, index) {\n        var id = student.id,\n            name = student.name,\n            age = student.age,\n            email = student.email; //destructuring\n\n        return __jsx(\"tr\", {\n          key: id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 11\n          }\n        }, __jsx(\"td\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 14\n          }\n        }, id), __jsx(\"td\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 14\n          }\n        }, name), __jsx(\"td\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 14\n          }\n        }, age), __jsx(\"td\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 14\n          }\n        }, email));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var communes = this.state.communes;\n      return __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 12\n        }\n      }, \"Hello, \", this.props.communes);\n    }\n  }]);\n\n  return TableCommunes;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCommunes);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UYWJsZUNvbW11bmVzLmpzPzMxZDciXSwibmFtZXMiOlsiVGFibGVDb21tdW5lcyIsInByb3BzIiwic3RhdGUiLCJzdHVkZW50cyIsImlkIiwibmFtZSIsImFnZSIsImVtYWlsIiwibWFwIiwic3R1ZGVudCIsImluZGV4IiwiY29tbXVuZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRTtBQUNaQyxjQUFRLEVBQUUsQ0FDUDtBQUFFQyxVQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFJLEVBQUUsT0FBZjtBQUF3QkMsV0FBRyxFQUFFLEVBQTdCO0FBQWlDQyxhQUFLLEVBQUU7QUFBeEMsT0FETyxFQUVQO0FBQUVILFVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUksRUFBRSxLQUFmO0FBQXNCQyxXQUFHLEVBQUUsRUFBM0I7QUFBK0JDLGFBQUssRUFBRTtBQUF0QyxPQUZPLEVBR1A7QUFBRUgsVUFBRSxFQUFFLENBQU47QUFBU0MsWUFBSSxFQUFFLE1BQWY7QUFBdUJDLFdBQUcsRUFBRSxFQUE1QjtBQUFnQ0MsYUFBSyxFQUFFO0FBQXZDLE9BSE8sRUFJUDtBQUFFSCxVQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFJLEVBQUUsTUFBZjtBQUF1QkMsV0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxhQUFLLEVBQUU7QUFBdkMsT0FKTztBQURBLEtBQWI7QUFGaUI7QUFVbkI7Ozs7c0NBQ2tCO0FBQUE7O0FBQ2hCLGFBQU8sS0FBS0wsS0FBTCxDQUFXQyxRQUFYLENBQW9CSyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFBQSxZQUN4Q04sRUFEd0MsR0FDZkssT0FEZSxDQUN4Q0wsRUFEd0M7QUFBQSxZQUNwQ0MsSUFEb0MsR0FDZkksT0FEZSxDQUNwQ0osSUFEb0M7QUFBQSxZQUM5QkMsR0FEOEIsR0FDZkcsT0FEZSxDQUM5QkgsR0FEOEI7QUFBQSxZQUN6QkMsS0FEeUIsR0FDZkUsT0FEZSxDQUN6QkYsS0FEeUIsRUFDUDs7QUFDekMsZUFDRztBQUFJLGFBQUcsRUFBRUgsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQSxFQUFMLENBREgsRUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLElBQUwsQ0FGSCxFQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQUhILEVBSUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxLQUFMLENBSkgsQ0FESDtBQVFGLE9BVk0sQ0FBUDtBQVdEOzs7NkJBQ1E7QUFBQSxVQUNDSSxRQURELEdBQ2MsS0FBS1QsS0FEbkIsQ0FDQ1MsUUFERDtBQUVQLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBWSxLQUFLVixLQUFMLENBQVdVLFFBQXZCLENBQVA7QUFDRDs7OztFQTVCeUJDLDRDQUFLLENBQUNDLFM7O0FBK0JuQmIsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RhYmxlQ29tbXVuZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYWJsZUNvbW11bmVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgXG4gICAgdGhpcy5zdGF0ZSA9IHsgLy9zdGF0ZSBpcyBieSBkZWZhdWx0IGFuIG9iamVjdFxuICAgICAgIHN0dWRlbnRzOiBbXG4gICAgICAgICAgeyBpZDogMSwgbmFtZTogJ1dhc2lmJywgYWdlOiAyMSwgZW1haWw6ICd3YXNpZkBlbWFpbC5jb20nIH0sXG4gICAgICAgICAgeyBpZDogMiwgbmFtZTogJ0FsaScsIGFnZTogMTksIGVtYWlsOiAnYWxpQGVtYWlsLmNvbScgfSxcbiAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnU2FhZCcsIGFnZTogMTYsIGVtYWlsOiAnc2FhZEBlbWFpbC5jb20nIH0sXG4gICAgICAgICAgeyBpZDogNCwgbmFtZTogJ0FzYWQnLCBhZ2U6IDI1LCBlbWFpbDogJ2FzYWRAZW1haWwuY29tJyB9XG4gICAgICAgXVxuICAgIH1cbiB9XG4gIHJlbmRlclRhYmxlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdHVkZW50cy5tYXAoKHN0dWRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc3QgeyBpZCwgbmFtZSwgYWdlLCBlbWFpbCB9ID0gc3R1ZGVudCAvL2Rlc3RydWN0dXJpbmdcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ciBrZXk9e2lkfT5cbiAgICAgICAgICAgICA8dGQ+e2lkfTwvdGQ+XG4gICAgICAgICAgICAgPHRkPntuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgPHRkPnthZ2V9PC90ZD5cbiAgICAgICAgICAgICA8dGQ+e2VtYWlsfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICApXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21tdW5lcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gPGgxPkhlbGxvLCB7dGhpcy5wcm9wcy5jb21tdW5lc308L2gxPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbW11bmVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/TableCommunes.js\n");

/***/ })

})