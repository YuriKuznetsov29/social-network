"use strict";
(self["webpackChunksocialnetwork"] = self["webpackChunksocialnetwork"] || []).push([["src_pages_ProfilePage_ui_ProfilePage_tsx"],{

/***/ "./src/pages/ProfilePage/ui/ProfilePage.tsx":
/*!**************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePage.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Header */ "./src/widgets/Header/index.tsx");
/* harmony import */ var shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Container/Container */ "./src/shared/ui/Container/Container.tsx");
/* harmony import */ var widgets_SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/SideBar */ "./src/widgets/SideBar/index.tsx");
/* harmony import */ var shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hook/useAppDispatch */ "./src/shared/lib/hook/useAppDispatch.ts");
/* harmony import */ var features_PostHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/PostHandler */ "./src/features/PostHandler/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var entities_Friends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entities/Friends */ "./src/entities/Friends/index.tsx");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/lib/hook/useMobile */ "./src/shared/lib/hook/useMobile.ts");
/* harmony import */ var entities_Post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! entities/Post */ "./src/entities/Post/index.ts");
/* harmony import */ var features_PostHandler_model_services_fetchUserPosts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! features/PostHandler/model/services/fetchUserPosts */ "./src/features/PostHandler/model/services/fetchUserPosts.ts");
/* harmony import */ var shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/lib/hook/useInfiniteScroll */ "./src/shared/lib/hook/useInfiniteScroll.ts");
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ui/ProfilePage.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

















var ProfilePage = function ProfilePage(_a) {
  var className = _a.className;
  var dispatch = (0,shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var userId = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_9__.getUserData).userId;
  var hasMore = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(features_PostHandler__WEBPACK_IMPORTED_MODULE_6__.getPostHasMore);
  var isMobile = (0,shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_11__.useMobile)();
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();
  var onLoadNextPart = function onLoadNextPart() {
    if (hasMore) {
      dispatch((0,features_PostHandler_model_services_fetchUserPosts__WEBPACK_IMPORTED_MODULE_13__.fetchUserPosts)({
        author: userId
      }));
    }
  };
  (0,shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_14__.useInfiniteScroll)({
    triggerRef: triggerRef,
    wrapperRef: null,
    callback: onLoadNextPart
  });
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (userId) {
      dispatch((0,features_PostHandler_model_services_fetchUserPosts__WEBPACK_IMPORTED_MODULE_13__.fetchUserPosts)({
        author: userId
      }));
    }
  }, [userId]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: isMobile ? _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].container : '',
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_SideBar__WEBPACK_IMPORTED_MODULE_4__.SideBar, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].contentWrapper, {}, [className]),
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_UserData__WEBPACK_IMPORTED_MODULE_9__.UserData, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Friends__WEBPACK_IMPORTED_MODULE_8__.Friends, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_PostHandler__WEBPACK_IMPORTED_MODULE_6__.CreatePost, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Post__WEBPACK_IMPORTED_MODULE_12__.PostsList, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          ref: triggerRef
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss ***!
  \*******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ProfilePage-ui-ProfilePage-module__ProfilePage--WDcPP {
  display: flex;
}

.src-pages-ProfilePage-ui-ProfilePage-module__contentWrapper--dk2Hs {
  width: 100%;
}

.src-pages-ProfilePage-ui-ProfilePage-module__container--odxoO {
  padding-bottom: 50px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ui/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAGA;EACI,WAAA;AAAJ;;AAGA;EACI,oBAAA;AAAJ","sourcesContent":[".ProfilePage {\r\n    display: flex;\r\n    // justify-content: space-between;\r\n}\r\n\r\n.contentWrapper {\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    padding-bottom: 50px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePage": `src-pages-ProfilePage-ui-ProfilePage-module__ProfilePage--WDcPP`,
	"contentWrapper": `src-pages-ProfilePage-ui-ProfilePage-module__contentWrapper--dk2Hs`,
	"container": `src-pages-ProfilePage-ui-ProfilePage-module__container--odxoO`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/ProfilePage/ui/ProfilePage.module.scss":
/*!**********************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePage.module.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Byb2ZpbGVQYWdlX3VpX1Byb2ZpbGVQYWdlX3RzeC5iMDcxMGFmNWQzNTY0OThiNDg5Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUMzQjtBQUNJO0FBQ2M7QUFDWjtBQUNzQjtBQUNFO0FBQ3hCO0FBQ0M7QUFDZTtBQUNNO0FBQ1Y7QUFDWjtBQUMwQztBQUNkO0FBQzFCO0FBQzVDLElBQUlzQixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBYUMsRUFBRSxFQUFFO0VBQzVCLElBQUlDLFNBQVMsR0FBR0QsRUFBRSxDQUFDQyxTQUFTO0VBQzVCLElBQUlDLFFBQVEsR0FBR2pCLDhFQUFjLENBQUMsQ0FBQztFQUMvQixJQUFJa0IsTUFBTSxHQUFHViwrRUFBYyxDQUFDRCwwREFBVyxDQUFDLENBQUNXLE1BQU07RUFDL0MsSUFBSUMsT0FBTyxHQUFHWCwrRUFBYyxDQUFDTixnRUFBYyxDQUFDO0VBQzVDLElBQUlrQixRQUFRLEdBQUdYLHFFQUFTLENBQUMsQ0FBQztFQUMxQixJQUFJWSxVQUFVLEdBQUdqQiw2Q0FBTSxDQUFDLENBQUM7RUFDekIsSUFBSWtCLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFlO0lBQzdCLElBQUlILE9BQU8sRUFBRTtNQUNURixRQUFRLENBQUNOLG1HQUFjLENBQUM7UUFBRVksTUFBTSxFQUFFTDtNQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hEO0VBQ0osQ0FBQztFQUNETixxRkFBaUIsQ0FBQztJQUFFUyxVQUFVLEVBQUVBLFVBQVU7SUFBRUcsVUFBVSxFQUFFLElBQUk7SUFBRUMsUUFBUSxFQUFFSDtFQUFlLENBQUMsQ0FBQztFQUN6Rm5CLGdEQUFTLENBQUMsWUFBWTtJQUNsQixJQUFJZSxNQUFNLEVBQUU7TUFDUkQsUUFBUSxDQUFDTixtR0FBYyxDQUFDO1FBQUVZLE1BQU0sRUFBRUw7TUFBTyxDQUFDLENBQUMsQ0FBQztJQUNoRDtFQUNKLENB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bUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0UzQztBQUMzQjtBQUNQO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL3BhZ2VzL1Byb2ZpbGVQYWdlL3VpL1Byb2ZpbGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL3BhZ2VzL1Byb2ZpbGVQYWdlL3VpL1Byb2ZpbGVQYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2UubW9kdWxlLnNjc3M/OWRkMCIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL3NoYXJlZC9saWIvaG9vay91c2VJbmZpbml0ZVNjcm9sbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd3aWRnZXRzL0hlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3NoYXJlZC91aS9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IFNpZGVCYXIgfSBmcm9tICd3aWRnZXRzL1NpZGVCYXInO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdCwgZ2V0UG9zdEhhc01vcmUgfSBmcm9tICdmZWF0dXJlcy9Qb3N0SGFuZGxlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZyaWVuZHMgfSBmcm9tICdlbnRpdGllcy9GcmllbmRzJztcbmltcG9ydCB7IFVzZXJEYXRhLCBnZXRVc2VyRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXJEYXRhJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUFwcFNlbGVjdG9yJztcbmltcG9ydCB7IHVzZU1vYmlsZSB9IGZyb20gJ3NoYXJlZC9saWIvaG9vay91c2VNb2JpbGUnO1xuaW1wb3J0IHsgUG9zdHNMaXN0IH0gZnJvbSAnZW50aXRpZXMvUG9zdCc7XG5pbXBvcnQgeyBmZXRjaFVzZXJQb3N0cyB9IGZyb20gJ2ZlYXR1cmVzL1Bvc3RIYW5kbGVyL21vZGVsL3NlcnZpY2VzL2ZldGNoVXNlclBvc3RzJztcbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUluZmluaXRlU2Nyb2xsJztcbmltcG9ydCBjbHMgZnJvbSAnLi9Qcm9maWxlUGFnZS5tb2R1bGUuc2Nzcyc7XG52YXIgUHJvZmlsZVBhZ2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIHVzZXJJZCA9IHVzZUFwcFNlbGVjdG9yKGdldFVzZXJEYXRhKS51c2VySWQ7XG4gICAgdmFyIGhhc01vcmUgPSB1c2VBcHBTZWxlY3RvcihnZXRQb3N0SGFzTW9yZSk7XG4gICAgdmFyIGlzTW9iaWxlID0gdXNlTW9iaWxlKCk7XG4gICAgdmFyIHRyaWdnZXJSZWYgPSB1c2VSZWYoKTtcbiAgICB2YXIgb25Mb2FkTmV4dFBhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoYXNNb3JlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFVzZXJQb3N0cyh7IGF1dGhvcjogdXNlcklkIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlSW5maW5pdGVTY3JvbGwoeyB0cmlnZ2VyUmVmOiB0cmlnZ2VyUmVmLCB3cmFwcGVyUmVmOiBudWxsLCBjYWxsYmFjazogb25Mb2FkTmV4dFBhcnQgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VyUG9zdHMoeyBhdXRob3I6IHVzZXJJZCB9KSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlcklkXSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChIZWFkZXIsIHt9KSwgX2pzeHMoQ29udGFpbmVyLCB7IGNsYXNzTmFtZTogaXNNb2JpbGUgPyBjbHMuY29udGFpbmVyIDogJycsIGNoaWxkcmVuOiBbX2pzeChTaWRlQmFyLCB7fSksIF9qc3hzKFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuY29udGVudFdyYXBwZXIsIHt9LCBbY2xhc3NOYW1lXSksIGNoaWxkcmVuOiBbX2pzeChVc2VyRGF0YSwge30pLCBfanN4KEZyaWVuZHMsIHt9KSwgX2pzeChDcmVhdGVQb3N0LCB7fSksIF9qc3goUG9zdHNMaXN0LCB7fSksIF9qc3goXCJkaXZcIiwgeyByZWY6IHRyaWdnZXJSZWYgfSldIH0pXSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2UtbW9kdWxlX19Qcm9maWxlUGFnZS0tV0RjUFAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3JjLXBhZ2VzLVByb2ZpbGVQYWdlLXVpLVByb2ZpbGVQYWdlLW1vZHVsZV9fY29udGVudFdyYXBwZXItLWRrMkhzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2UtbW9kdWxlX19jb250YWluZXItLW9keG9PIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Qcm9maWxlUGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiUHJvZmlsZVBhZ2VcIjogYHNyYy1wYWdlcy1Qcm9maWxlUGFnZS11aS1Qcm9maWxlUGFnZS1tb2R1bGVfX1Byb2ZpbGVQYWdlLS1XRGNQUGAsXG5cdFwiY29udGVudFdyYXBwZXJcIjogYHNyYy1wYWdlcy1Qcm9maWxlUGFnZS11aS1Qcm9maWxlUGFnZS1tb2R1bGVfX2NvbnRlbnRXcmFwcGVyLS1kazJIc2AsXG5cdFwiY29udGFpbmVyXCI6IGBzcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2UtbW9kdWxlX19jb250YWluZXItLW9keG9PYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvZmlsZVBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVNjcm9sbChfYSkge1xuICAgIHZhciBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCB0cmlnZ2VyUmVmID0gX2EudHJpZ2dlclJlZiwgd3JhcHBlclJlZiA9IF9hLndyYXBwZXJSZWY7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICByb290OiB3cmFwcGVyUmVmID8gd3JhcHBlclJlZi5jdXJyZW50IDogbnVsbCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxLjAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciAmJiB0cmlnZ2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3RyaWdnZXJSZWYsIHdyYXBwZXJSZWYsIGNhbGxiYWNrXSk7XG59XG4iXSwibmFtZXMiOlsianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJIZWFkZXIiLCJDb250YWluZXIiLCJTaWRlQmFyIiwidXNlQXBwRGlzcGF0Y2giLCJDcmVhdGVQb3N0IiwiZ2V0UG9zdEhhc01vcmUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGcmllbmRzIiwiVXNlckRhdGEiLCJnZXRVc2VyRGF0YSIsInVzZUFwcFNlbGVjdG9yIiwidXNlTW9iaWxlIiwiUG9zdHNMaXN0IiwiZmV0Y2hVc2VyUG9zdHMiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsImNscyIsIlByb2ZpbGVQYWdlIiwiX2EiLCJjbGFzc05hbWUiLCJkaXNwYXRjaCIsInVzZXJJZCIsImhhc01vcmUiLCJpc01vYmlsZSIsInRyaWdnZXJSZWYiLCJvbkxvYWROZXh0UGFydCIsImF1dGhvciIsIndyYXBwZXJSZWYiLCJjYWxsYmFjayIsImNoaWxkcmVuIiwiY29udGFpbmVyIiwiY29udGVudFdyYXBwZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9