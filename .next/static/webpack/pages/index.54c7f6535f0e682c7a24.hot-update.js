webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/TableCommunes.js":
/*!*******************************************!*\
  !*** ./pages/components/TableCommunes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/claudiodonoso/Documents/shoppify-app/pages/components/TableCommunes.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar TableCommunes = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TableCommunes, _React$Component);\n\n  var _super = _createSuper(TableCommunes);\n\n  function TableCommunes(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TableCommunes);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      communes: _this.props.communes\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TableCommunes, [{\n    key: \"renderTableData\",\n    value: function renderTableData() {\n      var _this2 = this;\n\n      return this.state.communes.map(function (commune, index) {\n        var id = commune.id,\n            name = commune.name,\n            precio = commune.precio,\n            text = commune.text; //destructuring\n\n        return __jsx(\"div\", {\n          className: \"tableCommune-row\",\n          key: id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"tableCommune-col col1\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }\n        }, name), __jsx(\"div\", {\n          className: \"tableCommune-col col2\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }\n        }, precio), __jsx(\"div\", {\n          className: \"tableCommune-col col3\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }\n        }, text), __jsx(\"div\", {\n          className: \"tableCommune-col col4\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }\n        }));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.props.communes);\n      return __jsx(\"div\", {\n        className: \"tableCommune-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 7\n        }\n      }, __jsx(\"header\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"col col1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      }, \"Comuna\"), __jsx(\"div\", {\n        \"class\": \"col col2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }\n      }, \"Precio\"), __jsx(\"div\", {\n        \"class\": \"col col3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }\n      }, \"Pol\\xEDtica de despacho\"), __jsx(\"dic\", {\n        \"class\": \"col col4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, \"Acciones\")), __jsx(\"div\", {\n        className: \"tableCommune-rows\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return TableCommunes;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCommunes);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UYWJsZUNvbW11bmVzLmpzPzMxZDciXSwibmFtZXMiOlsiVGFibGVDb21tdW5lcyIsInByb3BzIiwic3RhdGUiLCJjb21tdW5lcyIsIm1hcCIsImNvbW11bmUiLCJpbmRleCIsImlkIiwibmFtZSIsInByZWNpbyIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxhOzs7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxNQUFLRixLQUFMLENBQVdFO0FBRFYsS0FBYjtBQUZpQjtBQUtsQjs7OztzQ0FFaUI7QUFBQTs7QUFDaEIsYUFBTyxLQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUFBLFlBQ3hDQyxFQUR3QyxHQUNiRixPQURhLENBQ3hDRSxFQUR3QztBQUFBLFlBQ3BDQyxJQURvQyxHQUNiSCxPQURhLENBQ3BDRyxJQURvQztBQUFBLFlBQzlCQyxNQUQ4QixHQUNiSixPQURhLENBQzlCSSxNQUQ4QjtBQUFBLFlBQ3RCQyxJQURzQixHQUNiTCxPQURhLENBQ3RCSyxJQURzQixFQUNMOztBQUMzQyxlQUNHO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxhQUFHLEVBQUVILEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3Q0MsSUFBeEMsQ0FERixFQUVFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXdDQyxNQUF4QyxDQUZGLEVBR0U7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBd0NDLElBQXhDLENBSEYsRUFJRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpGLENBREg7QUFRRixPQVZNLENBQVA7QUFXRDs7OzZCQUNRO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtYLEtBQUwsQ0FBV0UsUUFBdkI7QUFDQSxhQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQU0sVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBSyxpQkFBTSxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFHRTtBQUFLLGlCQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIRixFQUlFO0FBQUssaUJBQU0sVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLENBREYsRUFPRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLENBREY7QUFhRDs7OztFQXBDeUJVLDRDQUFLLENBQUNDLFM7O0FBdUNuQmQsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RhYmxlQ29tbXVuZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYWJsZUNvbW11bmVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tbXVuZXM6IHRoaXMucHJvcHMuY29tbXVuZXMsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFibGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmNvbW11bmVzLm1hcCgoY29tbXVuZSwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBwcmVjaW8sIHRleHQgfSA9IGNvbW11bmUgLy9kZXN0cnVjdHVyaW5nXG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1yb3dcIiBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVDb21tdW5lLWNvbCBjb2wxXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1jb2wgY29sMlwiPntwcmVjaW99PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1jb2wgY29sM1wiPnt0ZXh0fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtY29sIGNvbDRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICApXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jb21tdW5lcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVDb21tdW5lLWNvbnRhaW5lclwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sMVwiPkNvbXVuYTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sMlwiPlByZWNpbzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sM1wiPlBvbMOtdGljYSBkZSBkZXNwYWNobzwvZGl2PlxuICAgICAgICAgIDxkaWMgY2xhc3M9XCJjb2wgY29sNFwiPkFjY2lvbmVzPC9kaWM+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1yb3dzXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29tbXVuZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/TableCommunes.js\n");

/***/ })

})