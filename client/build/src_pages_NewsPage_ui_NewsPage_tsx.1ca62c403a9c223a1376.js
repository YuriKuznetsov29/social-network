"use strict";
(self["webpackChunksocialnetwork"] = self["webpackChunksocialnetwork"] || []).push([["src_pages_NewsPage_ui_NewsPage_tsx"],{

/***/ "./src/pages/NewsPage/ui/NewsPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/NewsPage/ui/NewsPage.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var widgets_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/Header */ "./src/widgets/Header/index.tsx");
/* harmony import */ var shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Container/Container */ "./src/shared/ui/Container/Container.tsx");
/* harmony import */ var widgets_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/SideBar */ "./src/widgets/SideBar/index.tsx");
/* harmony import */ var entities_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/News */ "./src/entities/News/index.ts");
/* harmony import */ var _NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsPage.module.scss */ "./src/pages/NewsPage/ui/NewsPage.module.scss");
/* harmony import */ var shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hook/useMobile */ "./src/shared/lib/hook/useMobile.ts");
/* harmony import */ var shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hook/useAppDispatch */ "./src/shared/lib/hook/useAppDispatch.ts");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var entities_News_model_services_fetchNews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! entities/News/model/services/fetchNews */ "./src/entities/News/model/services/fetchNews.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/lib/hook/useInfiniteScroll */ "./src/shared/lib/hook/useInfiniteScroll.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");














var NewsPage = function NewsPage(_a) {
  var className = _a.className;
  var isMobile = (0,shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_6__.useMobile)();
  var dispatch = (0,shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  var userData = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_9__.getUserData);
  var hasMore = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(entities_News__WEBPACK_IMPORTED_MODULE_4__.getNewsHasMore);
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)();
  var onLoadNextPart = function onLoadNextPart() {
    if (hasMore && userData.friends) {
      dispatch((0,entities_News_model_services_fetchNews__WEBPACK_IMPORTED_MODULE_10__.fetchNews)({
        friendList: userData.friends
      }));
    }
  };
  (0,shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_12__.useInfiniteScroll)({
    triggerRef: triggerRef,
    wrapperRef: null,
    callback: onLoadNextPart
  });
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    if (userData.friends) {
      dispatch((0,entities_News_model_services_fetchNews__WEBPACK_IMPORTED_MODULE_10__.fetchNews)({
        friendList: userData.friends
      }));
    }
  }, [userData.friends]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: isMobile ? _NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container : '',
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_SideBar__WEBPACK_IMPORTED_MODULE_3__.SideBar, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: _NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].contentWrapper,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_News__WEBPACK_IMPORTED_MODULE_4__.News, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          ref: triggerRef
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NewsPage/ui/NewsPage.module.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NewsPage/ui/NewsPage.module.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-NewsPage-ui-NewsPage-module__container--npByq {
  padding-bottom: 50px;
}

.src-pages-NewsPage-ui-NewsPage-module__contentWrapper--ulWQT {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/pages/NewsPage/ui/NewsPage.module.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ","sourcesContent":[".container {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.contentWrapper {\r\n    width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `src-pages-NewsPage-ui-NewsPage-module__container--npByq`,
	"contentWrapper": `src-pages-NewsPage-ui-NewsPage-module__contentWrapper--ulWQT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/NewsPage/ui/NewsPage.module.scss":
/*!****************************************************!*\
  !*** ./src/pages/NewsPage/ui/NewsPage.module.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NewsPage/ui/NewsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NewsPage/ui/NewsPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NewsPage/ui/NewsPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_NewsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/hook/useInfiniteScroll.ts":
/*!**************************************************!*\
  !*** ./src/shared/lib/hook/useInfiniteScroll.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInfiniteScroll: () => (/* binding */ useInfiniteScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useInfiniteScroll(_a) {
    var callback = _a.callback, triggerRef = _a.triggerRef, wrapperRef = _a.wrapperRef;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var observer = null;
        if (callback) {
            var options = {
                root: wrapperRef ? wrapperRef.current : null,
                rootMargin: '10px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerRef.current);
        }
        return function () {
            if (observer && triggerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX05ld3NQYWdlX3VpX05ld3NQYWdlX3RzeC4xY2E2MmM0MDNhOWMyMjNhMTM3Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNGO0FBQzlDO0FBQ2M7QUFDWjtBQUNXO0FBQ1o7QUFDYTtBQUNVO0FBQ0E7QUFDaEI7QUFDbUI7QUFDekI7QUFDNEI7QUFDdEUsSUFBSW9CLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhQyxFQUFFLEVBQUU7RUFDekIsSUFBSUMsU0FBUyxHQUFHRCxFQUFFLENBQUNDLFNBQVM7RUFDNUIsSUFBSUMsUUFBUSxHQUFHWCxvRUFBUyxDQUFDLENBQUM7RUFDMUIsSUFBSVksUUFBUSxHQUFHWCw4RUFBYyxDQUFDLENBQUM7RUFDL0IsSUFBSVksUUFBUSxHQUFHWCw4RUFBYyxDQUFDQywwREFBVyxDQUFDO0VBQzFDLElBQUlXLE9BQU8sR0FBR1osOEVBQWMsQ0FBQ0oseURBQWMsQ0FBQztFQUM1QyxJQUFJaUIsVUFBVSxHQUFHVCw4Q0FBTSxDQUFDLENBQUM7RUFDekIsSUFBSVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQWU7SUFDN0IsSUFBSUYsT0FBTyxJQUFJRCxRQUFRLENBQUNJLE9BQU8sRUFBRTtNQUM3QkwsUUFBUSxDQUFDUixrRkFBUyxDQUFDO1FBQUVjLFVBQVUsRUFBRUwsUUFBUSxDQUFDSTtNQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pEO0VBQ0osQ0FBQztFQUNEVixxRkFBaUIsQ0FBQztJQUFFUSxVQUFVLEVBQUVBLFVBQVU7SUFBRUksVUFBVSxFQUFFLElBQUk7SUFBRUMsUUFBUSxFQUFFSjtFQUFlLENBQUMsQ0FBQztFQUN6RlgsaURBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUlRLFFBQVEsQ0FBQ0ksT0FBTyxFQUFFO01BQ2xCTCxRQUFRLENBQUNSLGtGQUFTLENBQUM7UUFBRWMsVUFBVSxFQUFFTCxRQUFRLENBQUNJO01BQVEsQ0FBQyxDQUFDLENB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cGFnZXMvTmV3c1BhZ2UvdWkvTmV3c1BhZ2UudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvcGFnZXMvTmV3c1BhZ2UvdWkvTmV3c1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9wYWdlcy9OZXdzUGFnZS91aS9OZXdzUGFnZS5tb2R1bGUuc2Nzcz9lMDkzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvc2hhcmVkL2xpYi9ob29rL3VzZUluZmluaXRlU2Nyb2xsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ3dpZGdldHMvSGVhZGVyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnc2hhcmVkL3VpL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gJ3dpZGdldHMvU2lkZUJhcic7XG5pbXBvcnQgeyBOZXdzLCBnZXROZXdzSGFzTW9yZSB9IGZyb20gJ2VudGl0aWVzL05ld3MnO1xuaW1wb3J0IGNscyBmcm9tICcuL05ld3NQYWdlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZU1vYmlsZSB9IGZyb20gJ3NoYXJlZC9saWIvaG9vay91c2VNb2JpbGUnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwU2VsZWN0b3InO1xuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICdlbnRpdGllcy9Vc2VyRGF0YSc7XG5pbXBvcnQgeyBmZXRjaE5ld3MgfSBmcm9tICdlbnRpdGllcy9OZXdzL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV3cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUluZmluaXRlU2Nyb2xsJztcbnZhciBOZXdzUGFnZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgdmFyIGlzTW9iaWxlID0gdXNlTW9iaWxlKCk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB2YXIgdXNlckRhdGEgPSB1c2VBcHBTZWxlY3RvcihnZXRVc2VyRGF0YSk7XG4gICAgdmFyIGhhc01vcmUgPSB1c2VBcHBTZWxlY3RvcihnZXROZXdzSGFzTW9yZSk7XG4gICAgdmFyIHRyaWdnZXJSZWYgPSB1c2VSZWYoKTtcbiAgICB2YXIgb25Mb2FkTmV4dFBhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoYXNNb3JlICYmIHVzZXJEYXRhLmZyaWVuZHMpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoTmV3cyh7IGZyaWVuZExpc3Q6IHVzZXJEYXRhLmZyaWVuZHMgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VJbmZpbml0ZVNjcm9sbCh7IHRyaWdnZXJSZWY6IHRyaWdnZXJSZWYsIHdyYXBwZXJSZWY6IG51bGwsIGNhbGxiYWNrOiBvbkxvYWROZXh0UGFydCB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodXNlckRhdGEuZnJpZW5kcykge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hOZXdzKHsgZnJpZW5kTGlzdDogdXNlckRhdGEuZnJpZW5kcyB9KSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlckRhdGEuZnJpZW5kc10pO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChIZWFkZXIsIHt9KSwgX2pzeHMoQ29udGFpbmVyLCB7IGNsYXNzTmFtZTogaXNNb2JpbGUgPyBjbHMuY29udGFpbmVyIDogJycsIGNoaWxkcmVuOiBbX2pzeChTaWRlQmFyLCB7fSksIF9qc3hzKFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogY2xzLmNvbnRlbnRXcmFwcGVyLCBjaGlsZHJlbjogW19qc3goTmV3cywge30pLCBfanN4KFwiZGl2XCIsIHsgcmVmOiB0cmlnZ2VyUmVmIH0pXSB9KV0gfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOZXdzUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXBhZ2VzLU5ld3NQYWdlLXVpLU5ld3NQYWdlLW1vZHVsZV9fY29udGFpbmVyLS1ucEJ5cSB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uc3JjLXBhZ2VzLU5ld3NQYWdlLXVpLU5ld3NQYWdlLW1vZHVsZV9fY29udGVudFdyYXBwZXItLXVsV1FUIHtcbiAgd2lkdGg6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvTmV3c1BhZ2UvdWkvTmV3c1BhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBgc3JjLXBhZ2VzLU5ld3NQYWdlLXVpLU5ld3NQYWdlLW1vZHVsZV9fY29udGFpbmVyLS1ucEJ5cWAsXG5cdFwiY29udGVudFdyYXBwZXJcIjogYHNyYy1wYWdlcy1OZXdzUGFnZS11aS1OZXdzUGFnZS1tb2R1bGVfX2NvbnRlbnRXcmFwcGVyLS11bFdRVGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05ld3NQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV3c1BhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV3c1BhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlSW5maW5pdGVTY3JvbGwoX2EpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaywgdHJpZ2dlclJlZiA9IF9hLnRyaWdnZXJSZWYsIHdyYXBwZXJSZWYgPSBfYS53cmFwcGVyUmVmO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcm9vdDogd3JhcHBlclJlZiA/IHdyYXBwZXJSZWYuY3VycmVudCA6IG51bGwsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMS4wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hWzBdO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0cmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIgJiYgdHJpZ2dlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0cmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt0cmlnZ2VyUmVmLCB3cmFwcGVyUmVmLCBjYWxsYmFja10pO1xufVxuIl0sIm5hbWVzIjpbImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIlNpZGVCYXIiLCJOZXdzIiwiZ2V0TmV3c0hhc01vcmUiLCJjbHMiLCJ1c2VNb2JpbGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZ2V0VXNlckRhdGEiLCJmZXRjaE5ld3MiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk5ld3NQYWdlIiwiX2EiLCJjbGFzc05hbWUiLCJpc01vYmlsZSIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJoYXNNb3JlIiwidHJpZ2dlclJlZiIsIm9uTG9hZE5leHRQYXJ0IiwiZnJpZW5kcyIsImZyaWVuZExpc3QiLCJ3cmFwcGVyUmVmIiwiY2FsbGJhY2siLCJjaGlsZHJlbiIsImNvbnRhaW5lciIsImNvbnRlbnRXcmFwcGVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==