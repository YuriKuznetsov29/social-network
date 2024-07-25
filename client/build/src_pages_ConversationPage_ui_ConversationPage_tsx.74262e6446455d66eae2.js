"use strict";
(self["webpackChunksocialnetwork"] = self["webpackChunksocialnetwork"] || []).push([["src_pages_ConversationPage_ui_ConversationPage_tsx"],{

/***/ "./src/shared/assets/icons/caret-left-bold.svg":
/*!*****************************************************!*\
  !*** ./src/shared/assets/icons/caret-left-bold.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCaretLeftBold = function SvgCaretLeftBold(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "#fff",
    viewBox: "0 0 256 256"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCaretLeftBold);

/***/ }),

/***/ "./src/entities/Dialog/index.tsx":
/*!***************************************!*\
  !*** ./src/entities/Dialog/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* reexport safe */ _ui_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__.Dialog)
/* harmony export */ });
/* harmony import */ var _ui_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Dialog/Dialog */ "./src/entities/Dialog/ui/Dialog/Dialog.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




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

/***/ "./src/entities/Dialog/ui/DialogHeader/DialogHeader.tsx":
/*!**************************************************************!*\
  !*** ./src/entities/Dialog/ui/DialogHeader/DialogHeader.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogHeader: () => (/* binding */ DialogHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var entities_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Avatar */ "./src/entities/Avatar/index.ts");
/* harmony import */ var shared_assets_icons_caret_left_bold_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/assets/icons/caret-left-bold.svg */ "./src/shared/assets/icons/caret-left-bold.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_api_getUserDataById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/api/getUserDataById */ "./src/shared/api/getUserDataById.ts");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DialogHeader.module.scss */ "./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");












var DialogHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(function (_a) {
  var className = _a.className,
    roomId = _a.roomId;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    companion = _b[0],
    setCompanion = _b[1];
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('pages').t;
  var userData = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_7__.getUserData);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (userData.conversations) {
      var friend = userData.conversations.find(function (conversation) {
        return conversation.roomId === roomId;
      });
      if (friend) {
        var friendId = friend.friendId;
        (0,shared_api_getUserDataById__WEBPACK_IMPORTED_MODULE_5__.getUserDataById)(friendId).then(function (companion) {
          if (companion) setCompanion(companion);
        })["catch"](console.log);
      }
    }
  }, [userData.conversations]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].DialogHeader, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: '/messenger',
      className: _DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].backButton,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_caret_left_bold_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].icon
      }), " ", t('Назад')]
    }), companion === null || companion === void 0 ? void 0 : companion.firstName, " ", companion === null || companion === void 0 ? void 0 : companion.lastName, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
      avatarPath: companion === null || companion === void 0 ? void 0 : companion.avatarPath,
      size: "M",
      isOnline: companion === null || companion === void 0 ? void 0 : companion.isOnline,
      click: true,
      userId: companion === null || companion === void 0 ? void 0 : companion.userId
    })]
  });
});

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

/***/ "./src/entities/Dialog/ui/Dialog/Dialog.tsx":
/*!**************************************************!*\
  !*** ./src/entities/Dialog/ui/Dialog/Dialog.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/ContentContainer/ContentContainer */ "./src/shared/ui/ContentContainer/ContentContainer.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_lib_hook_useChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hook/useChat */ "./src/shared/lib/hook/useChat.tsx");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var entities_Message_ui_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/Message/ui/MessageList/MessageList */ "./src/entities/Message/ui/MessageList/MessageList.tsx");
/* harmony import */ var _MessageInput_MessageInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MessageInput/MessageInput */ "./src/entities/Dialog/ui/MessageInput/MessageInput.tsx");
/* harmony import */ var _DialogHeader_DialogHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DialogHeader/DialogHeader */ "./src/entities/Dialog/ui/DialogHeader/DialogHeader.tsx");
/* harmony import */ var _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dialog.module.scss */ "./src/entities/Dialog/ui/Dialog/Dialog.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");













var Dialog = function Dialog(_a) {
  var className = _a.className;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)().t;
  var conversations = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_5__.getUserData).conversations;
  var roomId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)().roomId;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (conversations) {
      var dialog = conversations.find(function (conversation) {
        return conversation.roomId === roomId;
      });
      if (!dialog) {
        navigate('*', {
          replace: true
        });
      }
    }
  }, [conversations]);
  if (!roomId) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: t('Такого диалога не существует')
    });
  }
  var _b = (0,shared_lib_hook_useChat__WEBPACK_IMPORTED_MODULE_3__["default"])(roomId),
    messages = _b.messages,
    sendMessage = _b.sendMessage,
    removeMessage = _b.removeMessage,
    loadMore = _b.loadMore,
    hasMore = _b.hasMore;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].container,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__.ContentContainer, {
      className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].contentContainer,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogHeader_DialogHeader__WEBPACK_IMPORTED_MODULE_9__.DialogHeader, {
        roomId: roomId
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Message_ui_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_7__.MessageList, {
        messages: messages,
        hasMore: hasMore,
        removeMessage: removeMessage,
        loadMore: loadMore
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MessageInput_MessageInput__WEBPACK_IMPORTED_MODULE_8__.MessageInput, {
        roomId: roomId,
        sendMessage: sendMessage
      })]
    })
  });
};

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

/***/ "./src/entities/Dialog/ui/MessageInput/MessageInput.tsx":
/*!**************************************************************!*\
  !*** ./src/entities/Dialog/ui/MessageInput/MessageInput.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageInput: () => (/* binding */ MessageInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_assets_icons_paper_plane_right_bold_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/assets/icons/paper-plane-right-bold.svg */ "./src/shared/assets/icons/paper-plane-right-bold.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageInput.module.scss */ "./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss");
/* harmony import */ var shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/lib/hook/useMobile */ "./src/shared/lib/hook/useMobile.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");












var MessageInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(function (props) {
  var className = props.className,
    sendMessage = props.sendMessage,
    roomId = props.roomId;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('pages').t;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    text = _a[0],
    setText = _a[1];
  var isMobile = (0,shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_9__.useMobile)();
  var userData = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_6__.getUserData);
  var onClickSendMessage = function onClickSendMessage() {
    if (text) {
      var message = {
        messageId: (0,nanoid__WEBPACK_IMPORTED_MODULE_10__.nanoid)(),
        messageType: 'text',
        textOrPathToFile: text,
        roomId: roomId,
        author: userData.userId
      };
      sendMessage(message);
      setText('');
    }
  };
  var onEnterSend = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (e) {
    if (e.key === 'Enter') {
      onClickSendMessage();
    }
  }, [text]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    document.body.addEventListener('keydown', onEnterSend);
    return function () {
      document.body.removeEventListener('keydown', onEnterSend);
    };
  }, [onEnterSend]);
  var onBlurScroll = function onBlurScroll() {
    if (isMobile) document.documentElement.scrollTop = 0;
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].MessageInput, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
      placeholder: t('Напишите сообщение...'),
      className: _MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].inputMessage,
      value: text,
      onChange: setText,
      onBlur: onBlurScroll
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_paper_plane_right_bold_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].plane,
      onClick: onClickSendMessage
    })]
  });
});

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

/***/ "./src/entities/Message/ui/MessageList/MessageList.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Message/ui/MessageList/MessageList.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageList: () => (/* binding */ MessageList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message/Message */ "./src/entities/Message/ui/Message/Message.tsx");
/* harmony import */ var shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hook/useInfiniteScroll */ "./src/shared/lib/hook/useInfiniteScroll.ts");
/* harmony import */ var _MessageList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageList.module.scss */ "./src/entities/Message/ui/MessageList/MessageList.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");







var MessageList = function MessageList(props) {
  var className = props.className,
    messages = props.messages,
    removeMessage = props.removeMessage,
    loadMore = props.loadMore,
    hasMore = props.hasMore;
  var lastMessage = messages[messages.length - 1];
  var firstMessage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var onScrollLoadMore = function onScrollLoadMore() {
    if (hasMore) {
      var scrollHeight = wrapperRef.current.scrollHeight;
      loadMore();
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight - scrollHeight;
    }
  };
  (0,shared_lib_hook_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__.useInfiniteScroll)({
    triggerRef: triggerRef,
    wrapperRef: wrapperRef,
    callback: onScrollLoadMore
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.messageId]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function () {
    var _a;
    (_a = firstMessage.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
  }, [messages]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].MessageList, {}, [className]),
    ref: wrapperRef,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      ref: triggerRef
    }), messages.length > 0 && messages.map(function (message, i) {
      if (i === messages.length - (messages.length - 20)) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Message_Message__WEBPACK_IMPORTED_MODULE_3__.Message, {
          scrollRef: firstMessage,
          message: message,
          removeMessage: removeMessage
        }, message.messageId);
      }
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Message_Message__WEBPACK_IMPORTED_MODULE_3__.Message, {
        message: message,
        removeMessage: removeMessage
      }, message.messageId);
    })]
  });
};

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

/***/ "./src/entities/Message/ui/Message/Message.tsx":
/*!*****************************************************!*\
  !*** ./src/entities/Message/ui/Message/Message.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var entities_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Avatar */ "./src/entities/Avatar/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var shared_assets_icons_trash_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/assets/icons/trash-bold.svg */ "./src/shared/assets/icons/trash-bold.svg");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Message.module.scss */ "./src/entities/Message/ui/Message/Message.module.scss");
/* harmony import */ var shared_api_getUserDataById__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/api/getUserDataById */ "./src/shared/api/getUserDataById.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");












var Message = function Message(_a) {
  var className = _a.className,
    message = _a.message,
    removeMessage = _a.removeMessage,
    scrollRef = _a.scrollRef;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    author = _b[0],
    setAuthor = _b[1];
  var _c = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('pages'),
    t = _c.t,
    i18n = _c.i18n;
  var userData = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_8__.getUserData);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    (0,shared_api_getUserDataById__WEBPACK_IMPORTED_MODULE_10__.getUserDataById)(message.author).then(function (user) {
      if (user) setAuthor(user);
    })["catch"](console.log);
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].Message, {}, [className]),
    ref: scrollRef,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
      avatarPath: author === null || author === void 0 ? void 0 : author.avatarPath,
      size: "MS",
      className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].avatar
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].messageWrapper,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].nameWrapper,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].time,
            children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(message.createdAt).locale(i18n.language).toNow(true) + t(' назад')
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (userData === null || userData === void 0 ? void 0 : userData.userId) === message.author && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_trash_bold_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].removeBtn,
            onClick: function onClick() {
              return removeMessage(message.messageId);
            }
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _Message_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].messageText,
        children: message.textOrPathToFile
      })]
    })]
  });
};

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

/***/ "./src/pages/ConversationPage/ui/ConversationPage.tsx":
/*!************************************************************!*\
  !*** ./src/pages/ConversationPage/ui/ConversationPage.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversationPage: () => (/* binding */ ConversationPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var widgets_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/Header */ "./src/widgets/Header/index.tsx");
/* harmony import */ var shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Container/Container */ "./src/shared/ui/Container/Container.tsx");
/* harmony import */ var entities_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/Dialog */ "./src/entities/Dialog/index.tsx");
/* harmony import */ var shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hook/useMobile */ "./src/shared/lib/hook/useMobile.ts");
/* harmony import */ var _ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConversationPage.module.scss */ "./src/pages/ConversationPage/ui/ConversationPage.module.scss");
/* harmony import */ var widgets_SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widgets/SideBar */ "./src/widgets/SideBar/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var ConversationPage = function ConversationPage(_a) {
  var className = _a.className;
  var isMobile = (0,shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_4__.useMobile)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: isMobile ? _ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].contentContainer : '',
      children: [!isMobile && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_SideBar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationPage);

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Dialog-ui-DialogHeader-DialogHeader-module__DialogHeader--FCU5v {
  padding: 10px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px var(--container-border-color) solid;
}

.src-entities-Dialog-ui-DialogHeader-DialogHeader-module__backButton--IutEt {
  padding: 0 10px;
  height: 32px;
  background-color: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: inherit;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
}

.src-entities-Dialog-ui-DialogHeader-DialogHeader-module__icon--gTdYL {
  fill: var(--icon-color);
}`, "",{"version":3,"sources":["webpack://./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sDAAA;AACJ;;AAEA;EACI,eAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,iCAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAKA;EACI,uBAAA;AAFJ","sourcesContent":[".DialogHeader {\r\n    padding: 10px;\r\n    height: 75px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px var(--container-border-color) solid;\r\n}\r\n\r\n.backButton {\r\n    padding: 0 10px;\r\n    height: 32px;\r\n    background-color: inherit;\r\n    border: none;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    color: inherit;\r\n    transition: background-color 0.2s;\r\n    display: flex;\r\n    align-items: center;\r\n    // &:hover {\r\n    //     background-color: var(--bg-button-hover);\r\n    // }\r\n}\r\n\r\n.icon {\r\n    fill: var(--icon-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"DialogHeader": `src-entities-Dialog-ui-DialogHeader-DialogHeader-module__DialogHeader--FCU5v`,
	"backButton": `src-entities-Dialog-ui-DialogHeader-DialogHeader-module__backButton--IutEt`,
	"icon": `src-entities-Dialog-ui-DialogHeader-DialogHeader-module__icon--gTdYL`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/Dialog/Dialog.module.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/Dialog/Dialog.module.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Dialog-ui-Dialog-Dialog-module__contentContainer--yzVw_ {
  height: 100%;
  max-height: 100%;
  margin-bottom: 0;
}

.src-entities-Dialog-ui-Dialog-Dialog-module__container--u4Yp6 {
  margin-bottom: 10px;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
}

.src-entities-Dialog-ui-Dialog-Dialog-module__messagesBlock--RyZj8 {
  height: calc(100% - 140px);
  max-height: calc(100% - 140px);
  overflow: auto;
}

.src-entities-Dialog-ui-Dialog-Dialog-module__dialogIcon--ajxp9 {
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  fill: var(--fill-user);
}`, "",{"version":3,"sources":["webpack://./src/entities/Dialog/ui/Dialog/Dialog.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,gBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,WAAA;EACA,0BAAA;EACA,gBAAA;AACJ;;AAEA;EACI,0BAAA;EACA,8BAAA;EACA,cAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;AACJ","sourcesContent":[".contentContainer {\r\n    height: 100%;\r\n    max-height: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.container {\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    height: calc(100vh - 70px);\r\n    overflow: hidden;\r\n}\r\n\r\n.messagesBlock {\r\n    height: calc(100% - 140px);\r\n    max-height: calc(100% - 140px);\r\n    overflow: auto;\r\n}\r\n\r\n.dialogIcon {\r\n    margin: 10px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    fill: var(--fill-user);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentContainer": `src-entities-Dialog-ui-Dialog-Dialog-module__contentContainer--yzVw_`,
	"container": `src-entities-Dialog-ui-Dialog-Dialog-module__container--u4Yp6`,
	"messagesBlock": `src-entities-Dialog-ui-Dialog-Dialog-module__messagesBlock--RyZj8`,
	"dialogIcon": `src-entities-Dialog-ui-Dialog-Dialog-module__dialogIcon--ajxp9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Dialog-ui-MessageInput-MessageInput-module__MessageInput--iJOkN {
  padding: 10px;
  height: 65px;
  border-top: 1px var(--container-border-color) solid;
  display: flex;
  justify-content: center;
  align-items: center;
}

.src-entities-Dialog-ui-MessageInput-MessageInput-module__inputMessage--YAAlp {
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: inherit;
  border: 1px var(--container-border-color) solid;
  border-radius: 8px;
  color: inherit;
  word-break: break-all;
}

.src-entities-Dialog-ui-MessageInput-MessageInput-module__plane--eUBXw {
  margin-left: 5px;
  cursor: pointer;
  fill: var(--icon-color);
}`, "",{"version":3,"sources":["webpack://./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;EACA,mDAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,+CAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,eAAA;EACA,uBAAA;AACJ","sourcesContent":[".MessageInput {\r\n    padding: 10px;\r\n    height: 65px;\r\n    border-top: 1px var(--container-border-color) solid;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.inputMessage {\r\n    padding: 10px;\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: inherit;\r\n    border: 1px var(--container-border-color) solid;\r\n    border-radius: 8px;\r\n    color: inherit;\r\n    word-break: break-all;\r\n}\r\n\r\n.plane {\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n    fill: var(--icon-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"MessageInput": `src-entities-Dialog-ui-MessageInput-MessageInput-module__MessageInput--iJOkN`,
	"inputMessage": `src-entities-Dialog-ui-MessageInput-MessageInput-module__inputMessage--YAAlp`,
	"plane": `src-entities-Dialog-ui-MessageInput-MessageInput-module__plane--eUBXw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/MessageList/MessageList.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/MessageList/MessageList.module.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Message-ui-MessageList-MessageList-module__MessageList--OQwk6 {
  height: calc(100% - 140px);
  max-height: calc(100% - 140px);
  overflow: auto;
}`, "",{"version":3,"sources":["webpack://./src/entities/Message/ui/MessageList/MessageList.module.scss"],"names":[],"mappings":"AAAA;EACI,0BAAA;EACA,8BAAA;EACA,cAAA;AACJ","sourcesContent":[".MessageList {\r\n    height: calc(100% - 140px);\r\n    max-height: calc(100% - 140px);\r\n    overflow: auto;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"MessageList": `src-entities-Message-ui-MessageList-MessageList-module__MessageList--OQwk6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/Message/Message.module.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/Message/Message.module.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Message-ui-Message-Message-module__Message--V5Ktw {
  margin-bottom: 10px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
}

.src-entities-Message-ui-Message-Message-module__nameWrapper--RJuSH {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.src-entities-Message-ui-Message-Message-module__avatar--RtQ0_ {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.src-entities-Message-ui-Message-Message-module__time--l3Nwn {
  color: var(--secondary-font-color);
}

.src-entities-Message-ui-Message-Message-module__messageText--Gjy0p {
  color: var(--font-color);
  word-break: break-all;
}

.src-entities-Message-ui-Message-Message-module__name--PovTX {
  color: var(--primary-color);
  margin-right: 10px;
}

.src-entities-Message-ui-Message-Message-module__messageWrapper--xxAcD {
  padding: 4px;
  width: 100%;
  border-radius: 6px;
  background-color: var(--bg-dialog-hover);
}

.src-entities-Message-ui-Message-Message-module__removeBtn--V2GWv {
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: var(--icon-color);
}

@media (max-width: 650px) {
  .src-entities-Message-ui-Message-Message-module__Message--V5Ktw {
    font-size: 12px;
  }
  .src-entities-Message-ui-Message-Message-module__removeBtn--V2GWv {
    width: 20px;
    height: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/entities/Message/ui/Message/Message.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,8BAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,kCAAA;AACJ;;AAEA;EACI,wBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,wCAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;AACJ;;AAEA;EACI;IACI,eAAA;EACN;EAEE;IACI,WAAA;IACA,YAAA;EAAN;AACF","sourcesContent":[".Message {\r\n    margin-bottom: 10px;\r\n    padding: 5px 20px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nameWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.avatar {\r\n    margin-right: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.time {\r\n    color: var(--secondary-font-color);\r\n}\r\n\r\n.messageText {\r\n    color: var(--font-color);\r\n    word-break: break-all;\r\n}\r\n\r\n.name {\r\n    color: var(--primary-color);\r\n    margin-right: 10px;\r\n}\r\n\r\n.messageWrapper {\r\n    padding: 4px;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n    background-color: var(--bg-dialog-hover);\r\n}\r\n\r\n.removeBtn {\r\n    width: 22px;\r\n    height: 22px;\r\n    cursor: pointer;\r\n    fill: var(--icon-color);\r\n}\r\n\r\n@media (max-width: 650px) {\r\n    .Message {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .removeBtn {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Message": `src-entities-Message-ui-Message-Message-module__Message--V5Ktw`,
	"nameWrapper": `src-entities-Message-ui-Message-Message-module__nameWrapper--RJuSH`,
	"avatar": `src-entities-Message-ui-Message-Message-module__avatar--RtQ0_`,
	"time": `src-entities-Message-ui-Message-Message-module__time--l3Nwn`,
	"messageText": `src-entities-Message-ui-Message-Message-module__messageText--Gjy0p`,
	"name": `src-entities-Message-ui-Message-Message-module__name--PovTX`,
	"messageWrapper": `src-entities-Message-ui-Message-Message-module__messageWrapper--xxAcD`,
	"removeBtn": `src-entities-Message-ui-Message-Message-module__removeBtn--V2GWv`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ConversationPage/ui/ConversationPage.module.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ConversationPage/ui/ConversationPage.module.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ConversationPage-ui-ConversationPage-module__contentContainer--_awlv {
  padding-bottom: 50px;
  height: calc(100vh - var(--header-height) - 10px);
}`, "",{"version":3,"sources":["webpack://./src/pages/ConversationPage/ui/ConversationPage.module.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,iDAAA;AACJ","sourcesContent":[".contentContainer {\r\n    padding-bottom: 50px;\r\n    height: calc(100vh - var(--header-height) - 10px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentContainer": `src-pages-ConversationPage-ui-ConversationPage-module__contentContainer--_awlv`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss":
/*!**********************************************************************!*\
  !*** ./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DialogHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DialogHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DialogHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/DialogHeader/DialogHeader.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DialogHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Dialog/ui/Dialog/Dialog.module.scss":
/*!**********************************************************!*\
  !*** ./src/entities/Dialog/ui/Dialog/Dialog.module.scss ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Dialog.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/Dialog/Dialog.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Dialog.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/Dialog/Dialog.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Dialog.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/Dialog/Dialog.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss":
/*!**********************************************************************!*\
  !*** ./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageInput.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageInput.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageInput.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Dialog/ui/MessageInput/MessageInput.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Message/ui/MessageList/MessageList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Message/ui/MessageList/MessageList.module.scss ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/MessageList/MessageList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/MessageList/MessageList.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./MessageList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/MessageList/MessageList.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MessageList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Message/ui/Message/Message.module.scss":
/*!*************************************************************!*\
  !*** ./src/entities/Message/ui/Message/Message.module.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Message.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/Message/Message.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Message.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/Message/Message.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Message.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Message/ui/Message/Message.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Message_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ConversationPage/ui/ConversationPage.module.scss":
/*!********************************************************************!*\
  !*** ./src/pages/ConversationPage/ui/ConversationPage.module.scss ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ConversationPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ConversationPage/ui/ConversationPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ConversationPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ConversationPage/ui/ConversationPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ConversationPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ConversationPage/ui/ConversationPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ConversationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0NvbnZlcnNhdGlvblBhZ2VfdWlfQ29udmVyc2F0aW9uUGFnZV90c3guNzQyNjJlNjQ0NjQ1NWQ2NmVhZTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxzQkFBc0Isc0VBQXNFLGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCxpQ0FBaUMsa0JBQWtCO0FBQzNRO0FBQy9CO0FBQ0Esc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUMsZ0RBQW1CO0FBQy9EO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUMzQjtBQUNJO0FBQ0M7QUFDbUI7QUFDVjtBQUNXO0FBQ0c7QUFDaEI7QUFDRDtBQUNGO0FBQ3RDLElBQUlpQixZQUFZLGdCQUFHUiwyQ0FBSSxDQUFDLFVBQVVTLEVBQUUsRUFBRTtFQUN6QyxJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0MsU0FBUztJQUFFQyxNQUFNLEdBQUdGLEVBQUUsQ0FBQ0UsTUFBTTtFQUNoRCxJQUFJQyxFQUFFLEdBQUdWLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUVXLFNBQVMsR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFRSxZQUFZLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDaEUsSUFBSUcsQ0FBQyxHQUFHVCw2REFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDUyxDQUFDO0VBQ2pDLElBQUlDLFFBQVEsR0FBR1osOEVBQWMsQ0FBQ0MsMERBQVcsQ0FBQztFQUMxQ0osZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUllLFFBQVEsQ0FBQ0MsYUFBYSxFQUFFO01BQ3hCLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJxRDtBQUM5QztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9zaGFyZWQvYXNzZXRzL2ljb25zL2NhcmV0LWxlZnQtYm9sZC5zdmciLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9EaWFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL0RpYWxvZ0hlYWRlci9EaWFsb2dIZWFkZXIudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL0RpYWxvZy9EaWFsb2cudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL01lc3NhZ2VJbnB1dC9NZXNzYWdlSW5wdXQudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvTWVzc2FnZS91aS9NZXNzYWdlTGlzdC9NZXNzYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9NZXNzYWdlL3VpL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9wYWdlcy9Db252ZXJzYXRpb25QYWdlL3VpL0NvbnZlcnNhdGlvblBhZ2UudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL0RpYWxvZ0hlYWRlci9EaWFsb2dIZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9EaWFsb2cvdWkvRGlhbG9nL0RpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL2VudGl0aWVzL0RpYWxvZy91aS9NZXNzYWdlSW5wdXQvTWVzc2FnZUlucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvTWVzc2FnZS91aS9NZXNzYWdlTGlzdC9NZXNzYWdlTGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL2VudGl0aWVzL01lc3NhZ2UvdWkvTWVzc2FnZS9NZXNzYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvcGFnZXMvQ29udmVyc2F0aW9uUGFnZS91aS9Db252ZXJzYXRpb25QYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL0RpYWxvZ0hlYWRlci9EaWFsb2dIZWFkZXIubW9kdWxlLnNjc3M/OWMwNiIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL2VudGl0aWVzL0RpYWxvZy91aS9EaWFsb2cvRGlhbG9nLm1vZHVsZS5zY3NzP2Y1MTkiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9EaWFsb2cvdWkvTWVzc2FnZUlucHV0L01lc3NhZ2VJbnB1dC5tb2R1bGUuc2Nzcz83ZTcyIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvTWVzc2FnZS91aS9NZXNzYWdlTGlzdC9NZXNzYWdlTGlzdC5tb2R1bGUuc2Nzcz9jYjI0Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvTWVzc2FnZS91aS9NZXNzYWdlL01lc3NhZ2UubW9kdWxlLnNjc3M/ZmY5NyIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL3BhZ2VzL0NvbnZlcnNhdGlvblBhZ2UvdWkvQ29udmVyc2F0aW9uUGFnZS5tb2R1bGUuc2Nzcz8xNDY3Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvc2hhcmVkL2xpYi9ob29rL3VzZUluZmluaXRlU2Nyb2xsLnRzIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfcGF0aDtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgU3ZnQ2FyZXRMZWZ0Qm9sZCA9IGZ1bmN0aW9uIFN2Z0NhcmV0TGVmdEJvbGQocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIGZpbGw6IFwiI2ZmZlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDI1NiAyNTZcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTY4LjQ5IDE5OS41MWExMiAxMiAwIDAgMS0xNyAxN2wtODAtODBhMTIgMTIgMCAwIDEgMC0xN2w4MC04MGExMiAxMiAwIDAgMSAxNyAxN0w5NyAxMjhaXCJcbiAgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdmdDYXJldExlZnRCb2xkOyIsImltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vdWkvRGlhbG9nL0RpYWxvZyc7XG5leHBvcnQgeyBEaWFsb2cgfTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2VudGl0aWVzL0F2YXRhcic7XG5pbXBvcnQgQXJyb3cgZnJvbSAnc2hhcmVkL2Fzc2V0cy9pY29ucy9jYXJldC1sZWZ0LWJvbGQuc3ZnJztcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRVc2VyRGF0YUJ5SWQgfSBmcm9tICdzaGFyZWQvYXBpL2dldFVzZXJEYXRhQnlJZCc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ3NoYXJlZC9saWIvaG9vay91c2VBcHBTZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXJEYXRhJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgY2xzIGZyb20gJy4vRGlhbG9nSGVhZGVyLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgRGlhbG9nSGVhZGVyID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCByb29tSWQgPSBfYS5yb29tSWQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUobnVsbCksIGNvbXBhbmlvbiA9IF9iWzBdLCBzZXRDb21wYW5pb24gPSBfYlsxXTtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCdwYWdlcycpLnQ7XG4gICAgdmFyIHVzZXJEYXRhID0gdXNlQXBwU2VsZWN0b3IoZ2V0VXNlckRhdGEpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh1c2VyRGF0YS5jb252ZXJzYXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgZnJpZW5kID0gdXNlckRhdGEuY29udmVyc2F0aW9ucy5maW5kKGZ1bmN0aW9uIChjb252ZXJzYXRpb24pIHsgcmV0dXJuIGNvbnZlcnNhdGlvbi5yb29tSWQgPT09IHJvb21JZDsgfSk7XG4gICAgICAgICAgICBpZiAoZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyaWVuZElkID0gZnJpZW5kLmZyaWVuZElkO1xuICAgICAgICAgICAgICAgIGdldFVzZXJEYXRhQnlJZChmcmllbmRJZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNvbXBhbmlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFuaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGFuaW9uKGNvbXBhbmlvbik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt1c2VyRGF0YS5jb252ZXJzYXRpb25zXSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuRGlhbG9nSGVhZGVyLCB7fSwgW2NsYXNzTmFtZV0pLCBjaGlsZHJlbjogW19qc3hzKExpbmssIHsgdG86ICcvbWVzc2VuZ2VyJywgY2xhc3NOYW1lOiBjbHMuYmFja0J1dHRvbiwgY2hpbGRyZW46IFtfanN4KEFycm93LCB7IGNsYXNzTmFtZTogY2xzLmljb24gfSksIFwiIFwiLCB0KCfQndCw0LfQsNC0JyldIH0pLCBjb21wYW5pb24gPT09IG51bGwgfHwgY29tcGFuaW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wYW5pb24uZmlyc3ROYW1lLCBcIiBcIiwgY29tcGFuaW9uID09PSBudWxsIHx8IGNvbXBhbmlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcGFuaW9uLmxhc3ROYW1lLCBfanN4KEF2YXRhciwgeyBhdmF0YXJQYXRoOiBjb21wYW5pb24gPT09IG51bGwgfHwgY29tcGFuaW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wYW5pb24uYXZhdGFyUGF0aCwgc2l6ZTogXCJNXCIsIGlzT25saW5lOiBjb21wYW5pb24gPT09IG51bGwgfHwgY29tcGFuaW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wYW5pb24uaXNPbmxpbmUsIGNsaWNrOiB0cnVlLCB1c2VySWQ6IGNvbXBhbmlvbiA9PT0gbnVsbCB8fCBjb21wYW5pb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBhbmlvbi51c2VySWQgfSldIH0pKTtcbn0pO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IENvbnRlbnRDb250YWluZXIgfSBmcm9tICdzaGFyZWQvdWkvQ29udGVudENvbnRhaW5lci9Db250ZW50Q29udGFpbmVyJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDaGF0IGZyb20gJ3NoYXJlZC9saWIvaG9vay91c2VDaGF0JztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUFwcFNlbGVjdG9yJztcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlckRhdGEnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IE1lc3NhZ2VMaXN0IH0gZnJvbSAnZW50aXRpZXMvTWVzc2FnZS91aS9NZXNzYWdlTGlzdC9NZXNzYWdlTGlzdCc7XG5pbXBvcnQgeyBNZXNzYWdlSW5wdXQgfSBmcm9tICcuLi9NZXNzYWdlSW5wdXQvTWVzc2FnZUlucHV0JztcbmltcG9ydCB7IERpYWxvZ0hlYWRlciB9IGZyb20gJy4uL0RpYWxvZ0hlYWRlci9EaWFsb2dIZWFkZXInO1xuaW1wb3J0IGNscyBmcm9tICcuL0RpYWxvZy5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIERpYWxvZyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcbiAgICB2YXIgY29udmVyc2F0aW9ucyA9IHVzZUFwcFNlbGVjdG9yKGdldFVzZXJEYXRhKS5jb252ZXJzYXRpb25zO1xuICAgIHZhciByb29tSWQgPSB1c2VQYXJhbXMoKS5yb29tSWQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBkaWFsb2cgPSBjb252ZXJzYXRpb25zLmZpbmQoZnVuY3Rpb24gKGNvbnZlcnNhdGlvbikgeyByZXR1cm4gY29udmVyc2F0aW9uLnJvb21JZCA9PT0gcm9vbUlkOyB9KTtcbiAgICAgICAgICAgIGlmICghZGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoJyonLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY29udmVyc2F0aW9uc10pO1xuICAgIGlmICghcm9vbUlkKSB7XG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IHQoJ9Ci0LDQutC+0LPQviDQtNC40LDQu9C+0LPQsCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCJykgfSk7XG4gICAgfVxuICAgIHZhciBfYiA9IHVzZUNoYXQocm9vbUlkKSwgbWVzc2FnZXMgPSBfYi5tZXNzYWdlcywgc2VuZE1lc3NhZ2UgPSBfYi5zZW5kTWVzc2FnZSwgcmVtb3ZlTWVzc2FnZSA9IF9iLnJlbW92ZU1lc3NhZ2UsIGxvYWRNb3JlID0gX2IubG9hZE1vcmUsIGhhc01vcmUgPSBfYi5oYXNNb3JlO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmNvbnRhaW5lciwgY2hpbGRyZW46IF9qc3hzKENvbnRlbnRDb250YWluZXIsIHsgY2xhc3NOYW1lOiBjbHMuY29udGVudENvbnRhaW5lciwgY2hpbGRyZW46IFtfanN4KERpYWxvZ0hlYWRlciwgeyByb29tSWQ6IHJvb21JZCB9KSwgX2pzeChNZXNzYWdlTGlzdCwgeyBtZXNzYWdlczogbWVzc2FnZXMsIGhhc01vcmU6IGhhc01vcmUsIHJlbW92ZU1lc3NhZ2U6IHJlbW92ZU1lc3NhZ2UsIGxvYWRNb3JlOiBsb2FkTW9yZSB9KSwgX2pzeChNZXNzYWdlSW5wdXQsIHsgcm9vbUlkOiByb29tSWQsIHNlbmRNZXNzYWdlOiBzZW5kTWVzc2FnZSB9KV0gfSkgfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2hhcmVkL3VpL0lucHV0L0lucHV0JztcbmltcG9ydCBQbGFuZSBmcm9tICdzaGFyZWQvYXNzZXRzL2ljb25zL3BhcGVyLXBsYW5lLXJpZ2h0LWJvbGQuc3ZnJztcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUFwcFNlbGVjdG9yJztcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlckRhdGEnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBjbHMgZnJvbSAnLi9NZXNzYWdlSW5wdXQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlTW9iaWxlIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZU1vYmlsZSc7XG5leHBvcnQgdmFyIE1lc3NhZ2VJbnB1dCA9IG1lbW8oZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgc2VuZE1lc3NhZ2UgPSBwcm9wcy5zZW5kTWVzc2FnZSwgcm9vbUlkID0gcHJvcHMucm9vbUlkO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oJ3BhZ2VzJykudDtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgnJyksIHRleHQgPSBfYVswXSwgc2V0VGV4dCA9IF9hWzFdO1xuICAgIHZhciBpc01vYmlsZSA9IHVzZU1vYmlsZSgpO1xuICAgIHZhciB1c2VyRGF0YSA9IHVzZUFwcFNlbGVjdG9yKGdldFVzZXJEYXRhKTtcbiAgICB2YXIgb25DbGlja1NlbmRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBuYW5vaWQoKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRPclBhdGhUb0ZpbGU6IHRleHQsXG4gICAgICAgICAgICAgICAgcm9vbUlkOiByb29tSWQsXG4gICAgICAgICAgICAgICAgYXV0aG9yOiB1c2VyRGF0YS51c2VySWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICBzZXRUZXh0KCcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRW50ZXJTZW5kID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBvbkNsaWNrU2VuZE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFt0ZXh0XSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlclNlbmQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlclNlbmQpO1xuICAgICAgICB9O1xuICAgIH0sIFtvbkVudGVyU2VuZF0pO1xuICAgIHZhciBvbkJsdXJTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc01vYmlsZSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuTWVzc2FnZUlucHV0LCB7fSwgW2NsYXNzTmFtZV0pLCBjaGlsZHJlbjogW19qc3goSW5wdXQsIHsgcGxhY2Vob2xkZXI6IHQoJ9Cd0LDQv9C40YjQuNGC0LUg0YHQvtC+0LHRidC10L3QuNC1Li4uJyksIGNsYXNzTmFtZTogY2xzLmlucHV0TWVzc2FnZSwgdmFsdWU6IHRleHQsIG9uQ2hhbmdlOiBzZXRUZXh0LCBvbkJsdXI6IG9uQmx1clNjcm9sbCB9KSwgX2pzeChQbGFuZSwgeyBjbGFzc05hbWU6IGNscy5wbGFuZSwgb25DbGljazogb25DbGlja1NlbmRNZXNzYWdlIH0pXSB9KSk7XG59KTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vTWVzc2FnZS9NZXNzYWdlJztcbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUluZmluaXRlU2Nyb2xsJztcbmltcG9ydCBjbHMgZnJvbSAnLi9NZXNzYWdlTGlzdC5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIE1lc3NhZ2VMaXN0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgbWVzc2FnZXMgPSBwcm9wcy5tZXNzYWdlcywgcmVtb3ZlTWVzc2FnZSA9IHByb3BzLnJlbW92ZU1lc3NhZ2UsIGxvYWRNb3JlID0gcHJvcHMubG9hZE1vcmUsIGhhc01vcmUgPSBwcm9wcy5oYXNNb3JlO1xuICAgIHZhciBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBmaXJzdE1lc3NhZ2UgPSB1c2VSZWYoKTtcbiAgICB2YXIgdHJpZ2dlclJlZiA9IHVzZVJlZigpO1xuICAgIHZhciB3cmFwcGVyUmVmID0gdXNlUmVmKCk7XG4gICAgdmFyIG9uU2Nyb2xsTG9hZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoYXNNb3JlKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gd3JhcHBlclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGxvYWRNb3JlKCk7XG4gICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gd3JhcHBlclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlSW5maW5pdGVTY3JvbGwoeyB0cmlnZ2VyUmVmOiB0cmlnZ2VyUmVmLCB3cmFwcGVyUmVmOiB3cmFwcGVyUmVmLCBjYWxsYmFjazogb25TY3JvbGxMb2FkTW9yZSB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gd3JhcHBlclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgIH0sIFtsYXN0TWVzc2FnZSA9PT0gbnVsbCB8fCBsYXN0TWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdE1lc3NhZ2UubWVzc2FnZUlkXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSBmaXJzdE1lc3NhZ2UuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSwgW21lc3NhZ2VzXSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuTWVzc2FnZUxpc3QsIHt9LCBbY2xhc3NOYW1lXSksIHJlZjogd3JhcHBlclJlZiwgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgcmVmOiB0cmlnZ2VyUmVmIH0pLCBtZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKGZ1bmN0aW9uIChtZXNzYWdlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBtZXNzYWdlcy5sZW5ndGggLSAobWVzc2FnZXMubGVuZ3RoIC0gMjApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goTWVzc2FnZSwgeyBzY3JvbGxSZWY6IGZpcnN0TWVzc2FnZSwgbWVzc2FnZTogbWVzc2FnZSwgcmVtb3ZlTWVzc2FnZTogcmVtb3ZlTWVzc2FnZSB9LCBtZXNzYWdlLm1lc3NhZ2VJZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChNZXNzYWdlLCB7IG1lc3NhZ2U6IG1lc3NhZ2UsIHJlbW92ZU1lc3NhZ2U6IHJlbW92ZU1lc3NhZ2UgfSwgbWVzc2FnZS5tZXNzYWdlSWQpKTtcbiAgICAgICAgICAgICAgICB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnZW50aXRpZXMvQXZhdGFyJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdzaGFyZWQvYXNzZXRzL2ljb25zL3RyYXNoLWJvbGQuc3ZnJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rL3VzZUFwcFNlbGVjdG9yJztcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlckRhdGEnO1xuaW1wb3J0IGNscyBmcm9tICcuL01lc3NhZ2UubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgZ2V0VXNlckRhdGFCeUlkIH0gZnJvbSAnc2hhcmVkL2FwaS9nZXRVc2VyRGF0YUJ5SWQnO1xuZXhwb3J0IHZhciBNZXNzYWdlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIHJlbW92ZU1lc3NhZ2UgPSBfYS5yZW1vdmVNZXNzYWdlLCBzY3JvbGxSZWYgPSBfYS5zY3JvbGxSZWY7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUobnVsbCksIGF1dGhvciA9IF9iWzBdLCBzZXRBdXRob3IgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VUcmFuc2xhdGlvbigncGFnZXMnKSwgdCA9IF9jLnQsIGkxOG4gPSBfYy5pMThuO1xuICAgIHZhciB1c2VyRGF0YSA9IHVzZUFwcFNlbGVjdG9yKGdldFVzZXJEYXRhKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRVc2VyRGF0YUJ5SWQobWVzc2FnZS5hdXRob3IpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgaWYgKHVzZXIpXG4gICAgICAgICAgICAgICAgc2V0QXV0aG9yKHVzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuTWVzc2FnZSwge30sIFtjbGFzc05hbWVdKSwgcmVmOiBzY3JvbGxSZWYsIGNoaWxkcmVuOiBbX2pzeChBdmF0YXIsIHsgYXZhdGFyUGF0aDogYXV0aG9yID09PSBudWxsIHx8IGF1dGhvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXV0aG9yLmF2YXRhclBhdGgsIHNpemU6IFwiTVNcIiwgY2xhc3NOYW1lOiBjbHMuYXZhdGFyIH0pLCBfanN4cyhcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNscy5tZXNzYWdlV3JhcHBlciwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLm5hbWVXcmFwcGVyLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnRpbWUsIGNoaWxkcmVuOiBkYXlqcyhtZXNzYWdlLmNyZWF0ZWRBdCkubG9jYWxlKGkxOG4ubGFuZ3VhZ2UpLnRvTm93KHRydWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KCcg0L3QsNC30LDQtCcpIH0pIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46ICh1c2VyRGF0YSA9PT0gbnVsbCB8fCB1c2VyRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlckRhdGEudXNlcklkKSA9PT0gbWVzc2FnZS5hdXRob3IgJiYgKF9qc3goUmVtb3ZlSWNvbiwgeyBjbGFzc05hbWU6IGNscy5yZW1vdmVCdG4sIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZU1lc3NhZ2UobWVzc2FnZS5tZXNzYWdlSWQpOyB9IH0pKSB9KV0gfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5tZXNzYWdlVGV4dCwgY2hpbGRyZW46IG1lc3NhZ2UudGV4dE9yUGF0aFRvRmlsZSB9KV0gfSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd3aWRnZXRzL0hlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3NoYXJlZC91aS9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJ2VudGl0aWVzL0RpYWxvZyc7XG5pbXBvcnQgeyB1c2VNb2JpbGUgfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlTW9iaWxlJztcbmltcG9ydCBjbHMgZnJvbSAnLi9Db252ZXJzYXRpb25QYWdlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNpZGVCYXIgfSBmcm9tICd3aWRnZXRzL1NpZGVCYXInO1xuZXhwb3J0IHZhciBDb252ZXJzYXRpb25QYWdlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZTtcbiAgICB2YXIgaXNNb2JpbGUgPSB1c2VNb2JpbGUoKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goSGVhZGVyLCB7fSksIF9qc3hzKENvbnRhaW5lciwgeyBjbGFzc05hbWU6IGlzTW9iaWxlID8gY2xzLmNvbnRlbnRDb250YWluZXIgOiAnJywgY2hpbGRyZW46IFshaXNNb2JpbGUgJiYgX2pzeChTaWRlQmFyLCB7fSksIF9qc3goRGlhbG9nLCB7fSldIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2dIZWFkZXItRGlhbG9nSGVhZGVyLW1vZHVsZV9fRGlhbG9nSGVhZGVyLS1GQ1U1diB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tY29udGFpbmVyLWJvcmRlci1jb2xvcikgc29saWQ7XG59XG5cbi5zcmMtZW50aXRpZXMtRGlhbG9nLXVpLURpYWxvZ0hlYWRlci1EaWFsb2dIZWFkZXItbW9kdWxlX19iYWNrQnV0dG9uLS1JdXRFdCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2dIZWFkZXItRGlhbG9nSGVhZGVyLW1vZHVsZV9faWNvbi0tZ1RkWUwge1xuICBmaWxsOiB2YXIoLS1pY29uLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lbnRpdGllcy9EaWFsb2cvdWkvRGlhbG9nSGVhZGVyL0RpYWxvZ0hlYWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFLQTtFQUNJLHVCQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkRpYWxvZ0hlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tY29udGFpbmVyLWJvcmRlci1jb2xvcikgc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5iYWNrQnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8vICY6aG92ZXIge1xcclxcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYnV0dG9uLWhvdmVyKTtcXHJcXG4gICAgLy8gfVxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWljb24tY29sb3IpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJEaWFsb2dIZWFkZXJcIjogYHNyYy1lbnRpdGllcy1EaWFsb2ctdWktRGlhbG9nSGVhZGVyLURpYWxvZ0hlYWRlci1tb2R1bGVfX0RpYWxvZ0hlYWRlci0tRkNVNXZgLFxuXHRcImJhY2tCdXR0b25cIjogYHNyYy1lbnRpdGllcy1EaWFsb2ctdWktRGlhbG9nSGVhZGVyLURpYWxvZ0hlYWRlci1tb2R1bGVfX2JhY2tCdXR0b24tLUl1dEV0YCxcblx0XCJpY29uXCI6IGBzcmMtZW50aXRpZXMtRGlhbG9nLXVpLURpYWxvZ0hlYWRlci1EaWFsb2dIZWFkZXItbW9kdWxlX19pY29uLS1nVGRZTGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2ctRGlhbG9nLW1vZHVsZV9fY29udGVudENvbnRhaW5lci0teXpWd18ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zcmMtZW50aXRpZXMtRGlhbG9nLXVpLURpYWxvZy1EaWFsb2ctbW9kdWxlX19jb250YWluZXItLXU0WXA2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2ctRGlhbG9nLW1vZHVsZV9fbWVzc2FnZXNCbG9jay0tUnlaajgge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNyYy1lbnRpdGllcy1EaWFsb2ctdWktRGlhbG9nLURpYWxvZy1tb2R1bGVfX2RpYWxvZ0ljb24tLWFqeHA5IHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHZhcigtLWZpbGwtdXNlcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZW50aXRpZXMvRGlhbG9nL3VpL0RpYWxvZy9EaWFsb2cubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudENvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2VzQmxvY2sge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0MHB4KTtcXHJcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTQwcHgpO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ0ljb24ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZmlsbDogdmFyKC0tZmlsbC11c2VyKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBgc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2ctRGlhbG9nLW1vZHVsZV9fY29udGVudENvbnRhaW5lci0teXpWd19gLFxuXHRcImNvbnRhaW5lclwiOiBgc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2ctRGlhbG9nLW1vZHVsZV9fY29udGFpbmVyLS11NFlwNmAsXG5cdFwibWVzc2FnZXNCbG9ja1wiOiBgc3JjLWVudGl0aWVzLURpYWxvZy11aS1EaWFsb2ctRGlhbG9nLW1vZHVsZV9fbWVzc2FnZXNCbG9jay0tUnlaajhgLFxuXHRcImRpYWxvZ0ljb25cIjogYHNyYy1lbnRpdGllcy1EaWFsb2ctdWktRGlhbG9nLURpYWxvZy1tb2R1bGVfX2RpYWxvZ0ljb24tLWFqeHA5YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZW50aXRpZXMtRGlhbG9nLXVpLU1lc3NhZ2VJbnB1dC1NZXNzYWdlSW5wdXQtbW9kdWxlX19NZXNzYWdlSW5wdXQtLWlKT2tOIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItdG9wOiAxcHggdmFyKC0tY29udGFpbmVyLWJvcmRlci1jb2xvcikgc29saWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3JjLWVudGl0aWVzLURpYWxvZy11aS1NZXNzYWdlSW5wdXQtTWVzc2FnZUlucHV0LW1vZHVsZV9faW5wdXRNZXNzYWdlLS1ZQUFscCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IHZhcigtLWNvbnRhaW5lci1ib3JkZXItY29sb3IpIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5zcmMtZW50aXRpZXMtRGlhbG9nLXVpLU1lc3NhZ2VJbnB1dC1NZXNzYWdlSW5wdXQtbW9kdWxlX19wbGFuZS0tZVVCWHcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6IHZhcigtLWljb24tY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL0RpYWxvZy91aS9NZXNzYWdlSW5wdXQvTWVzc2FnZUlucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk1lc3NhZ2VJbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHZhcigtLWNvbnRhaW5lci1ib3JkZXItY29sb3IpIHNvbGlkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0TWVzc2FnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWNvbnRhaW5lci1ib3JkZXItY29sb3IpIHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbi5wbGFuZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsbDogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIk1lc3NhZ2VJbnB1dFwiOiBgc3JjLWVudGl0aWVzLURpYWxvZy11aS1NZXNzYWdlSW5wdXQtTWVzc2FnZUlucHV0LW1vZHVsZV9fTWVzc2FnZUlucHV0LS1pSk9rTmAsXG5cdFwiaW5wdXRNZXNzYWdlXCI6IGBzcmMtZW50aXRpZXMtRGlhbG9nLXVpLU1lc3NhZ2VJbnB1dC1NZXNzYWdlSW5wdXQtbW9kdWxlX19pbnB1dE1lc3NhZ2UtLVlBQWxwYCxcblx0XCJwbGFuZVwiOiBgc3JjLWVudGl0aWVzLURpYWxvZy11aS1NZXNzYWdlSW5wdXQtTWVzc2FnZUlucHV0LW1vZHVsZV9fcGxhbmUtLWVVQlh3YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlTGlzdC1NZXNzYWdlTGlzdC1tb2R1bGVfX01lc3NhZ2VMaXN0LS1PUXdrNiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL01lc3NhZ2UvdWkvTWVzc2FnZUxpc3QvTWVzc2FnZUxpc3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5NZXNzYWdlTGlzdCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQwcHgpO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDBweCk7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJNZXNzYWdlTGlzdFwiOiBgc3JjLWVudGl0aWVzLU1lc3NhZ2UtdWktTWVzc2FnZUxpc3QtTWVzc2FnZUxpc3QtbW9kdWxlX19NZXNzYWdlTGlzdC0tT1F3azZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX01lc3NhZ2UtLVY1S3R3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlLU1lc3NhZ2UtbW9kdWxlX19uYW1lV3JhcHBlci0tUkp1U0gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3JjLWVudGl0aWVzLU1lc3NhZ2UtdWktTWVzc2FnZS1NZXNzYWdlLW1vZHVsZV9fYXZhdGFyLS1SdFEwXyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX3RpbWUtLWwzTnduIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbn1cblxuLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX21lc3NhZ2VUZXh0LS1HankwcCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uc3JjLWVudGl0aWVzLU1lc3NhZ2UtdWktTWVzc2FnZS1NZXNzYWdlLW1vZHVsZV9fbmFtZS0tUG92VFgge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX21lc3NhZ2VXcmFwcGVyLS14eEFjRCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGlhbG9nLWhvdmVyKTtcbn1cblxuLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX3JlbW92ZUJ0bi0tVjJHV3Yge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6IHZhcigtLWljb24tY29sb3IpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX01lc3NhZ2UtLVY1S3R3IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX3JlbW92ZUJ0bi0tVjJHV3Yge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL01lc3NhZ2UvdWkvTWVzc2FnZS9NZXNzYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGVBQUE7RUFDTjtFQUVFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFBTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5NZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hdmF0YXIge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aW1lIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2VUZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlV3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGlhbG9nLWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZUJ0biB7XFxyXFxuICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsbDogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAuTWVzc2FnZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlbW92ZUJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJNZXNzYWdlXCI6IGBzcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlLU1lc3NhZ2UtbW9kdWxlX19NZXNzYWdlLS1WNUt0d2AsXG5cdFwibmFtZVdyYXBwZXJcIjogYHNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX25hbWVXcmFwcGVyLS1SSnVTSGAsXG5cdFwiYXZhdGFyXCI6IGBzcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlLU1lc3NhZ2UtbW9kdWxlX19hdmF0YXItLVJ0UTBfYCxcblx0XCJ0aW1lXCI6IGBzcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlLU1lc3NhZ2UtbW9kdWxlX190aW1lLS1sM053bmAsXG5cdFwibWVzc2FnZVRleHRcIjogYHNyYy1lbnRpdGllcy1NZXNzYWdlLXVpLU1lc3NhZ2UtTWVzc2FnZS1tb2R1bGVfX21lc3NhZ2VUZXh0LS1HankwcGAsXG5cdFwibmFtZVwiOiBgc3JjLWVudGl0aWVzLU1lc3NhZ2UtdWktTWVzc2FnZS1NZXNzYWdlLW1vZHVsZV9fbmFtZS0tUG92VFhgLFxuXHRcIm1lc3NhZ2VXcmFwcGVyXCI6IGBzcmMtZW50aXRpZXMtTWVzc2FnZS11aS1NZXNzYWdlLU1lc3NhZ2UtbW9kdWxlX19tZXNzYWdlV3JhcHBlci0teHhBY0RgLFxuXHRcInJlbW92ZUJ0blwiOiBgc3JjLWVudGl0aWVzLU1lc3NhZ2UtdWktTWVzc2FnZS1NZXNzYWdlLW1vZHVsZV9fcmVtb3ZlQnRuLS1WMkdXdmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXBhZ2VzLUNvbnZlcnNhdGlvblBhZ2UtdWktQ29udmVyc2F0aW9uUGFnZS1tb2R1bGVfX2NvbnRlbnRDb250YWluZXItLV9hd2x2IHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMTBweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvQ29udmVyc2F0aW9uUGFnZS91aS9Db252ZXJzYXRpb25QYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpREFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50Q29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMTBweCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogYHNyYy1wYWdlcy1Db252ZXJzYXRpb25QYWdlLXVpLUNvbnZlcnNhdGlvblBhZ2UtbW9kdWxlX19jb250ZW50Q29udGFpbmVyLS1fYXdsdmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RpYWxvZ0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RpYWxvZ0hlYWRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2dIZWFkZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2cubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2cubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGlhbG9nLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZUlucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZUlucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lc3NhZ2VJbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lc3NhZ2VMaXN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZUxpc3QubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZUxpc3QubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZXNzYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZXNzYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29udmVyc2F0aW9uUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbnZlcnNhdGlvblBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29udmVyc2F0aW9uUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVNjcm9sbChfYSkge1xuICAgIHZhciBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCB0cmlnZ2VyUmVmID0gX2EudHJpZ2dlclJlZiwgd3JhcHBlclJlZiA9IF9hLndyYXBwZXJSZWY7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICByb290OiB3cmFwcGVyUmVmID8gd3JhcHBlclJlZi5jdXJyZW50IDogbnVsbCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxLjAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciAmJiB0cmlnZ2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3RyaWdnZXJSZWYsIHdyYXBwZXJSZWYsIGNhbGxiYWNrXSk7XG59XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIl0sIm5hbWVzIjpbIkRpYWxvZyIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJjbGFzc05hbWVzIiwiTGluayIsIkF2YXRhciIsIkFycm93IiwibWVtbyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0VXNlckRhdGFCeUlkIiwidXNlQXBwU2VsZWN0b3IiLCJnZXRVc2VyRGF0YSIsInVzZVRyYW5zbGF0aW9uIiwiY2xzIiwiRGlhbG9nSGVhZGVyIiwiX2EiLCJjbGFzc05hbWUiLCJyb29tSWQiLCJfYiIsImNvbXBhbmlvbiIsInNldENvbXBhbmlvbiIsInQiLCJ1c2VyRGF0YSIsImNvbnZlcnNhdGlvbnMiLCJmcmllbmQiLCJmaW5kIiwiY29udmVyc2F0aW9uIiwiZnJpZW5kSWQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwidG8iLCJiYWNrQnV0dG9uIiwiaWNvbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYXZhdGFyUGF0aCIsInNpemUiLCJpc09ubGluZSIsImNsaWNrIiwidXNlcklkIiwiQ29udGVudENvbnRhaW5lciIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidXNlQ2hhdCIsIk1lc3NhZ2VMaXN0IiwiTWVzc2FnZUlucHV0IiwibmF2aWdhdGUiLCJkaWFsb2ciLCJyZXBsYWNlIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInJlbW92ZU1lc3NhZ2UiLCJsb2FkTW9yZSIsImhhc01vcmUiLCJjb250YWluZXIiLCJjb250ZW50Q29udGFpbmVyIiwiSW5wdXQiLCJQbGFuZSIsInVzZUNhbGxiYWNrIiwibmFub2lkIiwidXNlTW9iaWxlIiwicHJvcHMiLCJ0ZXh0Iiwic2V0VGV4dCIsImlzTW9iaWxlIiwib25DbGlja1NlbmRNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VUeXBlIiwidGV4dE9yUGF0aFRvRmlsZSIsImF1dGhvciIsIm9uRW50ZXJTZW5kIiwiZSIsImtleSIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25CbHVyU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGxhY2Vob2xkZXIiLCJpbnB1dE1lc3NhZ2UiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwicGxhbmUiLCJvbkNsaWNrIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiTWVzc2FnZSIsInVzZUluZmluaXRlU2Nyb2xsIiwibGFzdE1lc3NhZ2UiLCJsZW5ndGgiLCJmaXJzdE1lc3NhZ2UiLCJ0cmlnZ2VyUmVmIiwid3JhcHBlclJlZiIsIm9uU2Nyb2xsTG9hZE1vcmUiLCJzY3JvbGxIZWlnaHQiLCJjdXJyZW50IiwiY2FsbGJhY2siLCJzY3JvbGxJbnRvVmlldyIsInJlZiIsIm1hcCIsImkiLCJzY3JvbGxSZWYiLCJkYXlqcyIsIlJlbW92ZUljb24iLCJzZXRBdXRob3IiLCJfYyIsImkxOG4iLCJ1c2VyIiwiYXZhdGFyIiwibWVzc2FnZVdyYXBwZXIiLCJuYW1lV3JhcHBlciIsInRpbWUiLCJjcmVhdGVkQXQiLCJsb2NhbGUiLCJsYW5ndWFnZSIsInRvTm93IiwicmVtb3ZlQnRuIiwibWVzc2FnZVRleHQiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIlNpZGVCYXIiLCJDb252ZXJzYXRpb25QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==