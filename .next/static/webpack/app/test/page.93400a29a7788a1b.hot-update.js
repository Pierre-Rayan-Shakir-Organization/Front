"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/test/page",{

/***/ "(app-pages-browser)/./src/app/components/CardComponents/AddButton.tsx":
/*!*********************************************************!*\
  !*** ./src/app/components/CardComponents/AddButton.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_contexts_AuthContext_context_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/contexts/AuthContext.context.tsx */ \"(app-pages-browser)/./src/app/contexts/AuthContext.context.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_CirclePlus_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CirclePlus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AddButton(param) {\n    let { artiste, titre, url_preview, url_cover_album_big } = param;\n    _s();\n    const { token } = (0,_app_contexts_AuthContext_context_tsx__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const handleAdd = async ()=>{\n        const url = \"http://localhost:3000/addMusic\";\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(url, {\n                artiste: artiste,\n                titre: titre,\n                url_preview: url_preview,\n                url_cover_album_big: url_cover_album_big\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleAdd,\n        className: \"btn btn-circle btn-secondary btn-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CirclePlus_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ry\\\\Documents\\\\Rayan\\\\M1\\\\DevOps\\\\Projet Devops\\\\Front\\\\src\\\\app\\\\components\\\\CardComponents\\\\AddButton.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ry\\\\Documents\\\\Rayan\\\\M1\\\\DevOps\\\\Projet Devops\\\\Front\\\\src\\\\app\\\\components\\\\CardComponents\\\\AddButton.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(AddButton, \"u25MEdxvelSOV6EcwnD3OLkfQA8=\", false, function() {\n    return [\n        _app_contexts_AuthContext_context_tsx__WEBPACK_IMPORTED_MODULE_1__.useAuth\n    ];\n});\n_c = AddButton;\nvar _c;\n$RefreshReg$(_c, \"AddButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkQ29tcG9uZW50cy9BZGRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUU7QUFDdkM7QUFDZ0I7QUFTM0IsU0FBU0csVUFBVSxLQUErRDtRQUEvRCxFQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxtQkFBbUIsRUFBYyxHQUEvRDs7SUFFOUIsTUFBTSxFQUFDQyxLQUFLLEVBQUMsR0FBR1IsOEVBQU9BO0lBRXZCLE1BQU1TLFlBQVk7UUFDZCxNQUFNQyxNQUFnQjtRQUN0QixJQUFJO1lBQ0EsTUFBTVQsNkNBQUtBLENBQUNVLElBQUksQ0FDWkQsS0FDQTtnQkFDSU4sU0FBVUE7Z0JBQ1ZDLE9BQVFBO2dCQUNSQyxhQUFjQTtnQkFDZEMscUJBQXNCQTtZQUMxQixHQUNBO2dCQUNJSyxTQUFVO29CQUNOQyxlQUFnQixVQUFnQixPQUFOTDtnQkFDOUI7WUFDSjtRQUVSLEVBQ0EsT0FBT00sT0FBTztZQUNWQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0c7UUFDR0MsU0FBU1Q7UUFDVFUsV0FBVTtrQkFFViw0RUFBQ2pCLHNGQUFVQTs7Ozs7Ozs7OztBQUl2QjtHQXBDd0JDOztRQUVKSCwwRUFBT0E7OztLQUZIRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZENvbXBvbmVudHMvQWRkQnV0dG9uLnRzeD9lNDhmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9BdXRoQ29udGV4dC5jb250ZXh0LnRzeFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENpcmNsZVBsdXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgTXVzaWNJbmZvcyB7XG4gICAgYXJ0aXN0ZSA6IHN0cmluZyxcbiAgICB0aXRyZSA6IHN0cmluZyxcbiAgICB1cmxfcHJldmlldyA6IHN0cmluZyxcbiAgICB1cmxfY292ZXJfYWxidW1fYmlnIDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEJ1dHRvbih7YXJ0aXN0ZSwgdGl0cmUsIHVybF9wcmV2aWV3LCB1cmxfY292ZXJfYWxidW1fYmlnfSA6IE11c2ljSW5mb3MpIHtcblxuICAgIGNvbnN0IHt0b2tlbn0gPSB1c2VBdXRoKCk7XG5cbiAgICBjb25zdCBoYW5kbGVBZGQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA6IHN0cmluZyAgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkZE11c2ljJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0ZSA6IGFydGlzdGUsXG4gICAgICAgICAgICAgICAgICAgIHRpdHJlIDogdGl0cmUsXG4gICAgICAgICAgICAgICAgICAgIHVybF9wcmV2aWV3IDogdXJsX3ByZXZpZXcsXG4gICAgICAgICAgICAgICAgICAgIHVybF9jb3Zlcl9hbGJ1bV9iaWcgOiB1cmxfY292ZXJfYWxidW1fYmlnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uIDogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWNpcmNsZSBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxDaXJjbGVQbHVzIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG5cbn0iXSwibmFtZXMiOlsidXNlQXV0aCIsImF4aW9zIiwiQ2lyY2xlUGx1cyIsIkFkZEJ1dHRvbiIsImFydGlzdGUiLCJ0aXRyZSIsInVybF9wcmV2aWV3IiwidXJsX2NvdmVyX2FsYnVtX2JpZyIsInRva2VuIiwiaGFuZGxlQWRkIiwidXJsIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CardComponents/AddButton.tsx\n"));

/***/ })

});