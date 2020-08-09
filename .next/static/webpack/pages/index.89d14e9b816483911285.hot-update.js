webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/TableCommunes.js":
/*!*******************************************!*\
  !*** ./pages/components/TableCommunes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./pages/components/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/index.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/claudiodonoso/Documents/shoppify-app/pages/components/TableCommunes.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar TableCommunes = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TableCommunes, _React$Component);\n\n  var _super = _createSuper(TableCommunes);\n\n  function TableCommunes(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TableCommunes);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      communes: _this.props.communes\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TableCommunes, [{\n    key: \"renderTableData\",\n    value: function renderTableData() {\n      var _this2 = this;\n\n      return this.state.communes.map(function (commune, index) {\n        var id = commune.id,\n            name = commune.name,\n            precio = commune.precio,\n            text = commune.text; //destructuring\n\n        return __jsx(\"div\", {\n          className: \"tableCommune-row\",\n          key: id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"tableCommune-col col1\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }\n        }, name), __jsx(\"div\", {\n          className: \"tableCommune-col col2\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }\n        }, __jsx(\"input\", {\n          type: \"text\",\n          value: precio,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }\n        })), __jsx(\"div\", {\n          className: \"tableCommune-col col3\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }\n        }, __jsx(\"input\", {\n          type: \"text\",\n          value: precio,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 15\n          }\n        })), __jsx(\"div\", {\n          className: \"tableCommune-col col4\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }\n        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"ButtonGroup\"], {\n          segmented: true,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }\n        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }\n        }, \"Borrar\"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }\n        }, \"Edit/Guardar\"))));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"tableCommune-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 7\n        }\n      }, __jsx(\"header\", {\n        className: \"tableCommune-row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"tableCommune-col col1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, \"Comuna\"), __jsx(\"div\", {\n        \"class\": \"tableCommune-col col2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      }, \"Precio\"), __jsx(\"div\", {\n        \"class\": \"tableCommune-col col3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }, \"Pol\\xEDtica de despacho\"), __jsx(\"dic\", {\n        \"class\": \"tableCommune-col col4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      }, \"Acciones\")), this.renderTableData());\n    }\n  }]);\n\n  return TableCommunes;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCommunes);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UYWJsZUNvbW11bmVzLmpzPzMxZDciXSwibmFtZXMiOlsiVGFibGVDb21tdW5lcyIsInByb3BzIiwic3RhdGUiLCJjb21tdW5lcyIsIm1hcCIsImNvbW11bmUiLCJpbmRleCIsImlkIiwibmFtZSIsInByZWNpbyIsInRleHQiLCJyZW5kZXJUYWJsZURhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFLTUEsYTs7Ozs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURWLEtBQWI7QUFGaUI7QUFLbEI7Ozs7c0NBRWlCO0FBQUE7O0FBQ2hCLGFBQU8sS0FBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFBQSxZQUN4Q0MsRUFEd0MsR0FDYkYsT0FEYSxDQUN4Q0UsRUFEd0M7QUFBQSxZQUNwQ0MsSUFEb0MsR0FDYkgsT0FEYSxDQUNwQ0csSUFEb0M7QUFBQSxZQUM5QkMsTUFEOEIsR0FDYkosT0FEYSxDQUM5QkksTUFEOEI7QUFBQSxZQUN0QkMsSUFEc0IsR0FDYkwsT0FEYSxDQUN0QkssSUFEc0IsRUFDTDs7QUFDM0MsZUFDRztBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBa0MsYUFBRyxFQUFFSCxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBd0NDLElBQXhDLENBREYsRUFFRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FGRixFQUtFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFLLEVBQUVBLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUxGLEVBUUU7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQSxNQUFDLDREQUFEO0FBQWEsbUJBQVMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixDQURBLENBUkYsQ0FESDtBQWlCRixPQW5CTSxDQUFQO0FBb0JEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUSxpQkFBUyxFQUFDLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBTSx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBSyxpQkFBTSx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBR0U7QUFBSyxpQkFBTSx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUhGLEVBSUU7QUFBSyxpQkFBTSx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLENBREYsRUFPRyxLQUFLRSxlQUFMLEVBUEgsQ0FERjtBQVdEOzs7O0VBMUN5QkMsNENBQUssQ0FBQ0MsUzs7QUE2Q25CYiw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvVGFibGVDb21tdW5lcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcblxuY2xhc3MgVGFibGVDb21tdW5lcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbW11bmVzOiB0aGlzLnByb3BzLmNvbW11bmVzLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRhYmxlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb21tdW5lcy5tYXAoKGNvbW11bmUsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc3QgeyBpZCwgbmFtZSwgcHJlY2lvLCB0ZXh0IH0gPSBjb21tdW5lIC8vZGVzdHJ1Y3R1cmluZ1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtcm93XCIga2V5PXtpZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1jb2wgY29sMVwiPntuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtY29sIGNvbDJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ByZWNpb30+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtY29sIGNvbDNcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ByZWNpb30+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtY29sIGNvbDRcIj5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XG4gICAgICAgICAgICAgIDxCdXR0b24+Qm9ycmFyPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24+RWRpdC9HdWFyZGFyPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29tbXVuZS1jb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0YWJsZUNvbW11bmUtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlQ29tbXVuZS1jb2wgY29sMVwiPkNvbXVuYTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZUNvbW11bmUtY29sIGNvbDJcIj5QcmVjaW88L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVDb21tdW5lLWNvbCBjb2wzXCI+UG9sw610aWNhIGRlIGRlc3BhY2hvPC9kaXY+XG4gICAgICAgICAgPGRpYyBjbGFzcz1cInRhYmxlQ29tbXVuZS1jb2wgY29sNFwiPkFjY2lvbmVzPC9kaWM+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB7dGhpcy5yZW5kZXJUYWJsZURhdGEoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21tdW5lczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/TableCommunes.js\n");

/***/ })

})