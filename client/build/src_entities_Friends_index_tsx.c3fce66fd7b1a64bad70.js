"use strict";
(self["webpackChunksocialnetwork"] = self["webpackChunksocialnetwork"] || []).push([["src_entities_Friends_index_tsx"],{

/***/ "./src/entities/Friends/index.tsx":
/*!****************************************!*\
  !*** ./src/entities/Friends/index.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Friends: () => (/* reexport safe */ _ui_Friends_Friends__WEBPACK_IMPORTED_MODULE_0__.Friends),
/* harmony export */   FriendsList: () => (/* reexport safe */ _ui_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_1__.FriendsList)
/* harmony export */ });
/* harmony import */ var _ui_Friends_Friends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Friends/Friends */ "./src/entities/Friends/ui/Friends/Friends.tsx");
/* harmony import */ var _ui_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/FriendsList/FriendsList */ "./src/entities/Friends/ui/FriendsList/FriendsList.tsx");
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

/***/ "./src/entities/Friends/ui/FriendsList/FriendsList.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Friends/ui/FriendsList/FriendsList.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendsList: () => (/* binding */ FriendsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/ContentContainer/ContentContainer */ "./src/shared/ui/ContentContainer/ContentContainer.tsx");
/* harmony import */ var entities_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Avatar */ "./src/entities/Avatar/index.ts");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var features_GetFriendsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/GetFriendsData */ "./src/features/GetFriendsData/index.ts");
/* harmony import */ var shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hook/useAppDispatch */ "./src/shared/lib/hook/useAppDispatch.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var features_Messenger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! features/Messenger */ "./src/features/Messenger/index.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var shared_assets_icons_gift_bold_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/assets/icons/gift-bold.svg */ "./src/shared/assets/icons/gift-bold.svg");
/* harmony import */ var shared_assets_icons_house_bold_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/assets/icons/house-bold.svg */ "./src/shared/assets/icons/house-bold.svg");
/* harmony import */ var shared_assets_icons_users_bold_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/assets/icons/users-bold.svg */ "./src/shared/assets/icons/users-bold.svg");
/* harmony import */ var shared_assets_icons_note_pencil_bold_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/assets/icons/note-pencil-bold.svg */ "./src/shared/assets/icons/note-pencil-bold.svg");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FriendsList.module.scss */ "./src/entities/Friends/ui/FriendsList/FriendsList.module.scss");
/* harmony import */ var shared_ui_AnotherUserLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/ui/AnotherUserLoader */ "./src/shared/ui/AnotherUserLoader/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





















var FriendsList = function FriendsList(_a) {
  var className = _a.className;
  var _b = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_4__.getUserData),
    userId = _b.userId,
    conversations = _b.conversations;
  var friends = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(features_GetFriendsData__WEBPACK_IMPORTED_MODULE_5__.getFriendsData);
  var isLoading = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(features_GetFriendsData__WEBPACK_IMPORTED_MODULE_5__.getFriendsLoadingStatus);
  var dispatch = (0,shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();
  var _c = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('pages'),
    t = _c.t,
    i18n = _c.i18n;
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(Date.now() + ''),
    time = _d[0],
    setTime = _d[1];
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (userId) dispatch((0,features_GetFriendsData__WEBPACK_IMPORTED_MODULE_5__.getAllFriends)(userId));
  }, [userId]);
  var onClickRemoveFriend = function onClickRemoveFriend(friendId, friendFirstName, friendLastName) {
    dispatch((0,features_GetFriendsData__WEBPACK_IMPORTED_MODULE_5__.removeFriend)({
      friendId: friendId,
      userId: userId,
      friendFirstName: friendFirstName,
      friendLastName: friendLastName
    }));
  };
  var isConversationCreated = function isConversationCreated(anotherUserId) {
    return conversations === null || conversations === void 0 ? void 0 : conversations.find(function (conversation) {
      return conversation.friendId === anotherUserId;
    });
  };
  var createConversation = function createConversation(friendId) {
    var conversation = isConversationCreated(friendId);
    if (conversation) {
      navigate("/messenger/".concat(conversation.roomId));
    } else {
      var roomId = (0,nanoid__WEBPACK_IMPORTED_MODULE_19__.nanoid)();
      dispatch((0,features_Messenger__WEBPACK_IMPORTED_MODULE_8__.addConversation)({
        roomId: roomId,
        friendId: friendId,
        userId: userId,
        navigate: navigate
      }));
    }
  };
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AnotherUserLoader__WEBPACK_IMPORTED_MODULE_17__.AnotherUserLoader, {});
  }
  // const up = () => {
  //     setTime((prev) => +prev + 1000 + '')
  // }
  // const down = () => {
  //     setTime((prev) => +prev - 1000 + '')
  // }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: friends.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].listContainer,
      children: friends.map(function (friend) {
        var _a;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__.ContentContainer, {
          className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].contentWrapper,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].dataWrapper,
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
              avatarPath: friend.avatarPath,
              size: "XL",
              isOnline: friend.isOnline,
              lastSeenOnline: friend.lastSeenOnline,
              className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatar
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
              className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].name,
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: friend.firstName
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: friend.lastName
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueWrapper,
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueContainer,
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueTitle,
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_gift_bold_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
                  }), t('День рождения')]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueTitle,
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_house_bold_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
                  }), t('Город')]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueTitle,
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_users_bold_svg__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
                  }), t('Друзья ')]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].valueTitle,
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_note_pencil_bold_svg__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
                  }), t('Посты')]
                })]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  children: dayjs__WEBPACK_IMPORTED_MODULE_15___default()(friend.birthDay.split('.').reverse().join('-')).locale('ru').format('D MMMM YYYY')
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  children: friend.city
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  children: (_a = friend.friends) === null || _a === void 0 ? void 0 : _a.length
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  children: "5"
                })]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].addFriendBtn,
              onClick: function onClick() {
                return onClickRemoveFriend(friend.userId, friend.firstName, friend.lastName);
              },
              children: t('Удалить из друзей')
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: _FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].messageBtn,
              onClick: function onClick() {
                return createConversation(friend.userId);
              },
              children: t('Написать сообщение')
            })]
          })]
        }, friend.userId);
      })
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "data-testid": "friends-page",
      children: t('У вас еще нет друзей')
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

/***/ "./src/entities/Friends/ui/Friends/Friends.tsx":
/*!*****************************************************!*\
  !*** ./src/entities/Friends/ui/Friends/Friends.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Friends: () => (/* binding */ Friends)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/ContentContainer/ContentContainer */ "./src/shared/ui/ContentContainer/ContentContainer.tsx");
/* harmony import */ var shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hook/useAppDispatch */ "./src/shared/lib/hook/useAppDispatch.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var entities_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/Avatar */ "./src/entities/Avatar/index.ts");
/* harmony import */ var features_GetFriendsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/GetFriendsData */ "./src/features/GetFriendsData/index.ts");
/* harmony import */ var entities_UserData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/UserData */ "./src/entities/UserData/index.tsx");
/* harmony import */ var shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/hook/useAppSelector */ "./src/shared/lib/hook/useAppSelector.ts");
/* harmony import */ var shared_ui_FriendsLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/FriendsLoader */ "./src/shared/ui/FriendsLoader/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Friends.module.scss */ "./src/entities/Friends/ui/Friends/Friends.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");














var Friends = function Friends(_a) {
  var className = _a.className;
  var userId = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(entities_UserData__WEBPACK_IMPORTED_MODULE_7__.getUserData).userId;
  var friends = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(features_GetFriendsData__WEBPACK_IMPORTED_MODULE_6__.getFriendsState).friends;
  var initStatus = (0,shared_lib_hook_useAppSelector__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(features_GetFriendsData__WEBPACK_IMPORTED_MODULE_6__.getInitFriendsStatus);
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('pages').t;
  var dispatch = (0,shared_lib_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (userId) {
      dispatch((0,features_GetFriendsData__WEBPACK_IMPORTED_MODULE_6__.getAllFriends)(userId));
    }
  }, [userId]);
  if (!initStatus) return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_FriendsLoader__WEBPACK_IMPORTED_MODULE_9__.FriendsLoader, {});
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].Friends, {}, [className]),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {
      className: _Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].container,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: _Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].title,
        children: t('Друзья')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].friendsWrapper,
        children: friends.length ? friends.map(function (friend) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: _Friends_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].friend,
            onClick: function onClick() {
              return navigate("/".concat(friend.userId));
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
              avatarPath: friend.avatarPath,
              size: "M",
              isOnline: friend.isOnline,
              lastSeenOnline: friend.lastSeenOnline
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              children: friend.firstName
            })]
          }, friend.userId);
        }) : t('У вас еще нет друзей')
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

/***/ "./src/shared/ui/FriendsLoader/ui/FriendsLoader.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/ui/FriendsLoader/ui/FriendsLoader.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendsLoader: () => (/* binding */ FriendsLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/hook/useMobile */ "./src/shared/lib/hook/useMobile.ts");
/* harmony import */ var _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FriendsLoader.module.scss */ "./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss");
/* harmony import */ var shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/ContentContainer/ContentContainer */ "./src/shared/ui/ContentContainer/ContentContainer.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var FriendsLoader = function FriendsLoader() {
  var isMobile = (0,shared_lib_hook_useMobile__WEBPACK_IMPORTED_MODULE_1__.useMobile)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__.ContentContainer, {
    className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].usersContainer,
      children: isMobile ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        })]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].friend,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: _FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textItem
          })]
        })]
      })
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/FriendsList/FriendsList.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/FriendsList/FriendsList.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Friends-ui-FriendsList-FriendsList-module__contentWrapper--OD9M9 {
  margin-top: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__dataWrapper--S2HyM {
  display: flex;
  flex-direction: column;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__valueWrapper--SVmlb {
  display: flex;
  flex-direction: column;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__listContainer--oFdG7 {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__avatar--D1Gcy {
  margin-bottom: 10px;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__addFriendBtn--bKlHK {
  margin-bottom: 10px;
  z-index: 1;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__valueTitle--qFVAD {
  color: var(--secondary-font-color);
  display: flex;
  align-items: center;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__icon--o_WKJ {
  margin-right: 10px;
  width: 22px;
  height: 22px;
  fill: var(--secondary-font-color);
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__name--TWPcf {
  margin-bottom: 10px;
  display: flex;
  color: var(--font-color);
  font-weight: 400;
  gap: 10px;
}

.src-entities-Friends-ui-FriendsList-FriendsList-module__valueContainer--sHrlC {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

@media (max-width: 650px) {
  .src-entities-Friends-ui-FriendsList-FriendsList-module__contentWrapper--OD9M9 {
    flex-direction: column;
  }
  .src-entities-Friends-ui-FriendsList-FriendsList-module__dataWrapper--S2HyM,
  .src-entities-Friends-ui-FriendsList-FriendsList-module__valueWrapper--SVmlb {
    align-items: center;
  }
  .src-entities-Friends-ui-FriendsList-FriendsList-module__addFriendBtn--bKlHK,
  .src-entities-Friends-ui-FriendsList-FriendsList-module__messageBtn--kOStN {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/entities/Friends/ui/FriendsList/FriendsList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,aAAA;EACA,8BAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,UAAA;AACJ;;AAEA;EACI,kCAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;AACJ;;AAEA;EACI,mBAAA;EACA,aAAA;EACA,wBAAA;EACA,gBAAA;EACA,SAAA;AACJ;;AAEA;EACI,mBAAA;EACA,aAAA;EACA,SAAA;AACJ;;AAEA;EACI;IACI,sBAAA;EACN;EAEE;;IAEI,mBAAA;EAAN;EAGE;;IAEI,WAAA;EADN;AACF","sourcesContent":[".contentWrapper {\r\n    margin-top: 0;\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dataWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.valueWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.listContainer {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.avatar {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.addFriendBtn {\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n.valueTitle {\r\n    color: var(--secondary-font-color);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.icon {\r\n    margin-right: 10px;\r\n    width: 22px;\r\n    height: 22px;\r\n    fill: var(--secondary-font-color);\r\n}\r\n\r\n.name {\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    color: var(--font-color);\r\n    font-weight: 400;\r\n    gap: 10px;\r\n}\r\n\r\n.valueContainer {\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n@media (max-width: 650px) {\r\n    .contentWrapper {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .dataWrapper,\r\n    .valueWrapper {\r\n        align-items: center;\r\n    }\r\n\r\n    .addFriendBtn,\r\n    .messageBtn {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentWrapper": `src-entities-Friends-ui-FriendsList-FriendsList-module__contentWrapper--OD9M9`,
	"dataWrapper": `src-entities-Friends-ui-FriendsList-FriendsList-module__dataWrapper--S2HyM`,
	"valueWrapper": `src-entities-Friends-ui-FriendsList-FriendsList-module__valueWrapper--SVmlb`,
	"listContainer": `src-entities-Friends-ui-FriendsList-FriendsList-module__listContainer--oFdG7`,
	"avatar": `src-entities-Friends-ui-FriendsList-FriendsList-module__avatar--D1Gcy`,
	"addFriendBtn": `src-entities-Friends-ui-FriendsList-FriendsList-module__addFriendBtn--bKlHK`,
	"valueTitle": `src-entities-Friends-ui-FriendsList-FriendsList-module__valueTitle--qFVAD`,
	"icon": `src-entities-Friends-ui-FriendsList-FriendsList-module__icon--o_WKJ`,
	"name": `src-entities-Friends-ui-FriendsList-FriendsList-module__name--TWPcf`,
	"valueContainer": `src-entities-Friends-ui-FriendsList-FriendsList-module__valueContainer--sHrlC`,
	"messageBtn": `src-entities-Friends-ui-FriendsList-FriendsList-module__messageBtn--kOStN`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/Friends/Friends.module.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/Friends/Friends.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Friends-ui-Friends-Friends-module__friendsWrapper--P6PgV {
  display: flex;
  gap: 10px;
  overflow: auto;
}

.src-entities-Friends-ui-Friends-Friends-module__title--qeqls {
  margin-bottom: 10px;
}

.src-entities-Friends-ui-Friends-Friends-module__friend--D2Tqk {
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
}
.src-entities-Friends-ui-Friends-Friends-module__friend--D2Tqk:hover {
  background-color: var(--bg-dialog-hover);
}

.src-entities-Friends-ui-Friends-Friends-module__avatar--X88ce {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  fill: var(--fill-user);
}

.src-entities-Friends-ui-Friends-Friends-module__user--jDGd8 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  fill: var(--fill-user);
}

.src-entities-Friends-ui-Friends-Friends-module__container--r4MnZ {
  padding: 10px;
}`, "",{"version":3,"sources":["webpack://./src/entities/Friends/ui/Friends/Friends.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,SAAA;EACA,cAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AACJ;AAAI;EACI,wCAAA;AAER;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EAEA,sBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EAEA,sBAAA;AADJ;;AAIA;EACI,aAAA;AADJ","sourcesContent":[".friendsWrapper {\r\n    display: flex;\r\n    gap: 10px;\r\n    overflow: auto;\r\n}\r\n\r\n.title {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.friend {\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n    &:hover {\r\n        background-color: var(--bg-dialog-hover);\r\n    }\r\n}\r\n\r\n.avatar {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    // background-color: var(--bg-user);\r\n    fill: var(--fill-user);\r\n}\r\n\r\n.user {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    // background-color: var(--bg-user);\r\n    fill: var(--fill-user);\r\n}\r\n\r\n.container {\r\n    padding: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"friendsWrapper": `src-entities-Friends-ui-Friends-Friends-module__friendsWrapper--P6PgV`,
	"title": `src-entities-Friends-ui-Friends-Friends-module__title--qeqls`,
	"friend": `src-entities-Friends-ui-Friends-Friends-module__friend--D2Tqk`,
	"avatar": `src-entities-Friends-ui-Friends-Friends-module__avatar--X88ce`,
	"user": `src-entities-Friends-ui-Friends-Friends-module__user--jDGd8`,
	"container": `src-entities-Friends-ui-Friends-Friends-module__container--r4MnZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss ***!
  \***************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__container--YVQJe {
  padding: 10px;
  width: 100%;
}

.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__usersContainer--Chu_V {
  display: flex;
  justify-content: space-between;
}

.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__friend--gV5RS {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__avatar--ImIDr {
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  animation: src-shared-ui-FriendsLoader-ui-FriendsLoader-module__skeleton-loading--YiXm8 1s linear infinite alternate;
}

.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__textItem--iaNgH {
  margin-bottom: 10px;
  width: 60px;
  height: 15px;
  animation: src-shared-ui-FriendsLoader-ui-FriendsLoader-module__skeleton-loading--YiXm8 1s linear infinite alternate;
  border-radius: 8px;
}

.src-shared-ui-FriendsLoader-ui-FriendsLoader-module__title--a_huN {
  margin-bottom: 20px;
  width: 80px;
  height: 20px;
  animation: src-shared-ui-FriendsLoader-ui-FriendsLoader-module__skeleton-loading--YiXm8 1s linear infinite alternate;
  border-radius: 12px;
}

@keyframes src-shared-ui-FriendsLoader-ui-FriendsLoader-module__skeleton-loading--YiXm8 {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oHAAA;AACJ;;AAEA;EACI,mBAAA;EACA,WAAA;EACA,YAAA;EACA,oHAAA;EACA,kBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,WAAA;EACA,YAAA;EACA,oHAAA;EACA,mBAAA;AACJ;;AAEA;EACI;IACI,oCAAA;EACN;EACE;IACI,oCAAA;EACN;AACF","sourcesContent":[".container {\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.usersContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.friend {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.avatar {\r\n    margin-bottom: 10px;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    animation: skeleton-loading 1s linear infinite alternate;\r\n}\r\n\r\n.textItem {\r\n    margin-bottom: 10px;\r\n    width: 60px;\r\n    height: 15px;\r\n    animation: skeleton-loading 1s linear infinite alternate;\r\n    border-radius: 8px;\r\n}\r\n\r\n.title {\r\n    margin-bottom: 20px;\r\n    width: 80px;\r\n    height: 20px;\r\n    animation: skeleton-loading 1s linear infinite alternate;\r\n    border-radius: 12px;\r\n}\r\n\r\n@keyframes skeleton-loading {\r\n    0% {\r\n        background-color: hsl(200, 20%, 80%);\r\n    }\r\n    100% {\r\n        background-color: hsl(200, 20%, 95%);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__container--YVQJe`,
	"usersContainer": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__usersContainer--Chu_V`,
	"friend": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__friend--gV5RS`,
	"avatar": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__avatar--ImIDr`,
	"skeleton-loading": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__skeleton-loading--YiXm8`,
	"textItem": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__textItem--iaNgH`,
	"title": `src-shared-ui-FriendsLoader-ui-FriendsLoader-module__title--a_huN`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Friends/ui/FriendsList/FriendsList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Friends/ui/FriendsList/FriendsList.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/FriendsList/FriendsList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/FriendsList/FriendsList.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/FriendsList/FriendsList.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Friends/ui/Friends/Friends.module.scss":
/*!*************************************************************!*\
  !*** ./src/entities/Friends/ui/Friends/Friends.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Friends.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/Friends/Friends.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Friends.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/Friends/Friends.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Friends.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Friends/ui/Friends/Friends.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Friends_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss":
/*!******************************************************************!*\
  !*** ./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsLoader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsLoader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsLoader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/FriendsLoader/ui/FriendsLoader.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLoader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/FriendsLoader/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/ui/FriendsLoader/index.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendsLoader: () => (/* reexport safe */ _ui_FriendsLoader__WEBPACK_IMPORTED_MODULE_0__.FriendsLoader)
/* harmony export */ });
/* harmony import */ var _ui_FriendsLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/FriendsLoader */ "./src/shared/ui/FriendsLoader/ui/FriendsLoader.tsx");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2VudGl0aWVzX0ZyaWVuZHNfaW5kZXhfdHN4LmMzZmNlNjZmZDdiMWE2NGJhZDcwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDUDtBQUN0QztBQUN1QjtBQUNoQjtBQUNnRTtBQUNoRDtBQUNwQjtBQUNHO0FBQ2Y7QUFDcUI7QUFDSjtBQUNGO0FBQ1c7QUFDQTtBQUNHO0FBQ0c7QUFDdEM7QUFDa0I7QUFDb0I7QUFDekQsSUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQWE4QixFQUFFLEVBQUU7RUFDbkMsSUFBSUMsU0FBUyxHQUFHRCxFQUFFLENBQUNDLFNBQVM7RUFDNUIsSUFBSUMsRUFBRSxHQUFHdkIsOEVBQWMsQ0FBQ0MsMERBQVcsQ0FBQztJQUFFdUIsTUFBTSxHQUFHRCxFQUFFLENBQUNDLE1BQU07SUFBRUMsYUFBYSxHQUFHRixFQUFFLENBQUNFLGFBQWE7RUFDMUYsSUFBSUMsT0FBTyxHQUFHMUIsOEVBQWMsQ0FBQ0csbUVBQWMsQ0FBQztFQUM1QyxJQUFJd0IsU0FBUyxHQUFHM0IsOEVBQWMsQ0FBQ0ksNEVBQXVCLENBQUM7RUFDdkQsSUFBSXdCLFFBQVEsR0FBR3RCLDhFQUFjLENBQUMsQ0FBQztFQUMvQixJQUFJdUIsUUFBUSxHQUFHcEIsOERBQVcsQ0FBQyxDQUFDO0VBQzVCLElBQUlxQixFQUFFLEdBQUdqQiw4REFBYyxDQUFDLE9BQU8sQ0FBQztJQUFFa0IsQ0FBQyxHQUFHRCxFQUFFLENBQUNDLENBQUM7SUFBRUMsSUFBSSxHQUFHRixFQUFFLENBQUNFLElBQUk7RUFDMUQsSUFBSUMsRUFBRSxHQUFHekIsK0NBQVEsQ0FBQzBCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxHQUFHSCxFQUFFLENBQUMsQ0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL2VudGl0aWVzL0ZyaWVuZHMvaW5kZXgudHN4Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvZW50aXRpZXMvRnJpZW5kcy91aS9GcmllbmRzTGlzdC9GcmllbmRzTGlzdC50c3giLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHMvRnJpZW5kcy50c3giLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9zaGFyZWQvdWkvRnJpZW5kc0xvYWRlci91aS9GcmllbmRzTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL2VudGl0aWVzL0ZyaWVuZHMvdWkvRnJpZW5kc0xpc3QvRnJpZW5kc0xpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHMvRnJpZW5kcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zb2NpYWxuZXR3b3JrLy4vc3JjL3NoYXJlZC91aS9GcmllbmRzTG9hZGVyL3VpL0ZyaWVuZHNMb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHNMaXN0L0ZyaWVuZHNMaXN0Lm1vZHVsZS5zY3NzP2U3YWMiLCJ3ZWJwYWNrOi8vc29jaWFsbmV0d29yay8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHMvRnJpZW5kcy5tb2R1bGUuc2Nzcz82ODVhIiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvc2hhcmVkL3VpL0ZyaWVuZHNMb2FkZXIvdWkvRnJpZW5kc0xvYWRlci5tb2R1bGUuc2Nzcz9mMjg5Iiwid2VicGFjazovL3NvY2lhbG5ldHdvcmsvLi9zcmMvc2hhcmVkL3VpL0ZyaWVuZHNMb2FkZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgRnJpZW5kcyB9IGZyb20gJy4vdWkvRnJpZW5kcy9GcmllbmRzJztcbmV4cG9ydCB7IEZyaWVuZHNMaXN0IH0gZnJvbSAnLi91aS9GcmllbmRzTGlzdC9GcmllbmRzTGlzdCc7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnc2hhcmVkL3VpL0NvbnRlbnRDb250YWluZXIvQ29udGVudENvbnRhaW5lcic7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdlbnRpdGllcy9BdmF0YXInO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwU2VsZWN0b3InO1xuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICdlbnRpdGllcy9Vc2VyRGF0YSc7XG5pbXBvcnQgeyBnZXRBbGxGcmllbmRzLCBnZXRGcmllbmRzRGF0YSwgZ2V0RnJpZW5kc0xvYWRpbmdTdGF0dXMsIHJlbW92ZUZyaWVuZCwgfSBmcm9tICdmZWF0dXJlcy9HZXRGcmllbmRzRGF0YSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9vay91c2VBcHBEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgeyBhZGRDb252ZXJzYXRpb24gfSBmcm9tICdmZWF0dXJlcy9NZXNzZW5nZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBCaXJ0aEljb24gZnJvbSAnc2hhcmVkL2Fzc2V0cy9pY29ucy9naWZ0LWJvbGQuc3ZnJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdzaGFyZWQvYXNzZXRzL2ljb25zL2hvdXNlLWJvbGQuc3ZnJztcbmltcG9ydCBGcmllbmRzSWNvbiBmcm9tICdzaGFyZWQvYXNzZXRzL2ljb25zL3VzZXJzLWJvbGQuc3ZnJztcbmltcG9ydCBQb3N0SWNvbiBmcm9tICdzaGFyZWQvYXNzZXRzL2ljb25zL25vdGUtcGVuY2lsLWJvbGQuc3ZnJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vRnJpZW5kc0xpc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQW5vdGhlclVzZXJMb2FkZXIgfSBmcm9tICdzaGFyZWQvdWkvQW5vdGhlclVzZXJMb2FkZXInO1xuZXhwb3J0IHZhciBGcmllbmRzTGlzdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgdmFyIF9iID0gdXNlQXBwU2VsZWN0b3IoZ2V0VXNlckRhdGEpLCB1c2VySWQgPSBfYi51c2VySWQsIGNvbnZlcnNhdGlvbnMgPSBfYi5jb252ZXJzYXRpb25zO1xuICAgIHZhciBmcmllbmRzID0gdXNlQXBwU2VsZWN0b3IoZ2V0RnJpZW5kc0RhdGEpO1xuICAgIHZhciBpc0xvYWRpbmcgPSB1c2VBcHBTZWxlY3RvcihnZXRGcmllbmRzTG9hZGluZ1N0YXR1cyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHZhciBfYyA9IHVzZVRyYW5zbGF0aW9uKCdwYWdlcycpLCB0ID0gX2MudCwgaTE4biA9IF9jLmkxOG47XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoRGF0ZS5ub3coKSArICcnKSwgdGltZSA9IF9kWzBdLCBzZXRUaW1lID0gX2RbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVzZXJJZClcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldEFsbEZyaWVuZHModXNlcklkKSk7XG4gICAgfSwgW3VzZXJJZF0pO1xuICAgIHZhciBvbkNsaWNrUmVtb3ZlRnJpZW5kID0gZnVuY3Rpb24gKGZyaWVuZElkLCBmcmllbmRGaXJzdE5hbWUsIGZyaWVuZExhc3ROYW1lKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUZyaWVuZCh7IGZyaWVuZElkOiBmcmllbmRJZCwgdXNlcklkOiB1c2VySWQsIGZyaWVuZEZpcnN0TmFtZTogZnJpZW5kRmlyc3ROYW1lLCBmcmllbmRMYXN0TmFtZTogZnJpZW5kTGFzdE5hbWUgfSkpO1xuICAgIH07XG4gICAgdmFyIGlzQ29udmVyc2F0aW9uQ3JlYXRlZCA9IGZ1bmN0aW9uIChhbm90aGVyVXNlcklkKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJzYXRpb25zID09PSBudWxsIHx8IGNvbnZlcnNhdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnNhdGlvbnMuZmluZChmdW5jdGlvbiAoY29udmVyc2F0aW9uKSB7IHJldHVybiBjb252ZXJzYXRpb24uZnJpZW5kSWQgPT09IGFub3RoZXJVc2VySWQ7IH0pO1xuICAgIH07XG4gICAgdmFyIGNyZWF0ZUNvbnZlcnNhdGlvbiA9IGZ1bmN0aW9uIChmcmllbmRJZCkge1xuICAgICAgICB2YXIgY29udmVyc2F0aW9uID0gaXNDb252ZXJzYXRpb25DcmVhdGVkKGZyaWVuZElkKTtcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdGUoXCIvbWVzc2VuZ2VyL1wiLmNvbmNhdChjb252ZXJzYXRpb24ucm9vbUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcm9vbUlkID0gbmFub2lkKCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRDb252ZXJzYXRpb24oe1xuICAgICAgICAgICAgICAgIHJvb21JZDogcm9vbUlkLFxuICAgICAgICAgICAgICAgIGZyaWVuZElkOiBmcmllbmRJZCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZTogbmF2aWdhdGUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIF9qc3goQW5vdGhlclVzZXJMb2FkZXIsIHt9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgdXAgPSAoKSA9PiB7XG4gICAgLy8gICAgIHNldFRpbWUoKHByZXYpID0+ICtwcmV2ICsgMTAwMCArICcnKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBkb3duID0gKCkgPT4ge1xuICAgIC8vICAgICBzZXRUaW1lKChwcmV2KSA9PiArcHJldiAtIDEwMDAgKyAnJylcbiAgICAvLyB9XG4gICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogZnJpZW5kcy5sZW5ndGggPyAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmxpc3RDb250YWluZXIsIGNoaWxkcmVuOiBmcmllbmRzLm1hcChmdW5jdGlvbiAoZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeHMoQ29udGVudENvbnRhaW5lciwgeyBjbGFzc05hbWU6IGNscy5jb250ZW50V3JhcHBlciwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmRhdGFXcmFwcGVyLCBjaGlsZHJlbjogW19qc3goQXZhdGFyLCB7IGF2YXRhclBhdGg6IGZyaWVuZC5hdmF0YXJQYXRoLCBzaXplOiBcIlhMXCIsIGlzT25saW5lOiBmcmllbmQuaXNPbmxpbmUsIGxhc3RTZWVuT25saW5lOiBmcmllbmQubGFzdFNlZW5PbmxpbmUsIGNsYXNzTmFtZTogY2xzLmF2YXRhciB9KSwgX2pzeHMoXCJoMlwiLCB7IGNsYXNzTmFtZTogY2xzLm5hbWUsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBmcmllbmQuZmlyc3ROYW1lIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IGZyaWVuZC5sYXN0TmFtZSB9KV0gfSldIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnZhbHVlV3JhcHBlciwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnZhbHVlQ29udGFpbmVyLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnZhbHVlVGl0bGUsIGNoaWxkcmVuOiBbX2pzeChCaXJ0aEljb24sIHsgY2xhc3NOYW1lOiBjbHMuaWNvbiB9KSwgdCgn0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjycpXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy52YWx1ZVRpdGxlLCBjaGlsZHJlbjogW19qc3goSG9tZUljb24sIHsgY2xhc3NOYW1lOiBjbHMuaWNvbiB9KSwgdCgn0JPQvtGA0L7QtCcpXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy52YWx1ZVRpdGxlLCBjaGlsZHJlbjogW19qc3goRnJpZW5kc0ljb24sIHsgY2xhc3NOYW1lOiBjbHMuaWNvbiB9KSwgdCgn0JTRgNGD0LfRjNGPICcpXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy52YWx1ZVRpdGxlLCBjaGlsZHJlbjogW19qc3goUG9zdEljb24sIHsgY2xhc3NOYW1lOiBjbHMuaWNvbiB9KSwgdCgn0J/QvtGB0YLRiycpXSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IGRheWpzKGZyaWVuZC5iaXJ0aERheS5zcGxpdCgnLicpLnJldmVyc2UoKS5qb2luKCctJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2NhbGUoJ3J1JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdCgnRCBNTU1NIFlZWVknKSB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBmcmllbmQuY2l0eSB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiAoX2EgPSBmcmllbmQuZnJpZW5kcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcIjVcIiB9KV0gfSldIH0pLCBfanN4KEJ1dHRvbiwgeyBjbGFzc05hbWU6IGNscy5hZGRGcmllbmRCdG4sIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25DbGlja1JlbW92ZUZyaWVuZChmcmllbmQudXNlcklkLCBmcmllbmQuZmlyc3ROYW1lLCBmcmllbmQubGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IHQoJ9Cj0LTQsNC70LjRgtGMINC40Lcg0LTRgNGD0LfQtdC5JykgfSksIF9qc3goQnV0dG9uLCB7IGNsYXNzTmFtZTogY2xzLm1lc3NhZ2VCdG4sIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZUNvbnZlcnNhdGlvbihmcmllbmQudXNlcklkKTsgfSwgY2hpbGRyZW46IHQoJ9Cd0LDQv9C40YHQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1JykgfSldIH0pXSB9LCBmcmllbmQudXNlcklkKSk7XG4gICAgICAgICAgICB9KSB9KSkgOiAoX2pzeChcImRpdlwiLCB7IFwiZGF0YS10ZXN0aWRcIjogXCJmcmllbmRzLXBhZ2VcIiwgY2hpbGRyZW46IHQoJ9CjINCy0LDRgSDQtdGJ0LUg0L3QtdGCINC00YDRg9C30LXQuScpIH0pKSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29udGVudENvbnRhaW5lciB9IGZyb20gJ3NoYXJlZC91aS9Db250ZW50Q29udGFpbmVyL0NvbnRlbnRDb250YWluZXInO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2VudGl0aWVzL0F2YXRhcic7XG5pbXBvcnQgeyBnZXRBbGxGcmllbmRzLCBnZXRGcmllbmRzU3RhdGUsIGdldEluaXRGcmllbmRzU3RhdHVzLCB9IGZyb20gJ2ZlYXR1cmVzL0dldEZyaWVuZHNEYXRhJztcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlckRhdGEnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlQXBwU2VsZWN0b3InO1xuaW1wb3J0IHsgRnJpZW5kc0xvYWRlciB9IGZyb20gJ3NoYXJlZC91aS9GcmllbmRzTG9hZGVyJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgY2xzIGZyb20gJy4vRnJpZW5kcy5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIEZyaWVuZHMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciB1c2VySWQgPSB1c2VBcHBTZWxlY3RvcihnZXRVc2VyRGF0YSkudXNlcklkO1xuICAgIHZhciBmcmllbmRzID0gdXNlQXBwU2VsZWN0b3IoZ2V0RnJpZW5kc1N0YXRlKS5mcmllbmRzO1xuICAgIHZhciBpbml0U3RhdHVzID0gdXNlQXBwU2VsZWN0b3IoZ2V0SW5pdEZyaWVuZHNTdGF0dXMpO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oJ3BhZ2VzJykudDtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsRnJpZW5kcyh1c2VySWQpKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VySWRdKTtcbiAgICBpZiAoIWluaXRTdGF0dXMpXG4gICAgICAgIHJldHVybiBfanN4KEZyaWVuZHNMb2FkZXIsIHt9KTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkZyaWVuZHMsIHt9LCBbY2xhc3NOYW1lXSksIGNoaWxkcmVuOiBfanN4cyhDb250ZW50Q29udGFpbmVyLCB7IGNsYXNzTmFtZTogY2xzLmNvbnRhaW5lciwgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgeyBjbGFzc05hbWU6IGNscy50aXRsZSwgY2hpbGRyZW46IHQoJ9CU0YDRg9C30YzRjycpIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kc1dyYXBwZXIsIGNoaWxkcmVuOiBmcmllbmRzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmcmllbmRzLm1hcChmdW5jdGlvbiAoZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmZyaWVuZCwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF2aWdhdGUoXCIvXCIuY29uY2F0KGZyaWVuZC51c2VySWQpKTsgfSwgY2hpbGRyZW46IFtfanN4KEF2YXRhciwgeyBhdmF0YXJQYXRoOiBmcmllbmQuYXZhdGFyUGF0aCwgc2l6ZTogXCJNXCIsIGlzT25saW5lOiBmcmllbmQuaXNPbmxpbmUsIGxhc3RTZWVuT25saW5lOiBmcmllbmQubGFzdFNlZW5PbmxpbmUgfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogZnJpZW5kLmZpcnN0TmFtZSB9KV0gfSwgZnJpZW5kLnVzZXJJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdCgn0KMg0LLQsNGBINC10YnQtSDQvdC10YIg0LTRgNGD0LfQtdC5JykgfSldIH0pIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VNb2JpbGUgfSBmcm9tICdzaGFyZWQvbGliL2hvb2svdXNlTW9iaWxlJztcbmltcG9ydCBjbHMgZnJvbSAnLi9GcmllbmRzTG9hZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IENvbnRlbnRDb250YWluZXIgfSBmcm9tICdzaGFyZWQvdWkvQ29udGVudENvbnRhaW5lci9Db250ZW50Q29udGFpbmVyJztcbmV4cG9ydCB2YXIgRnJpZW5kc0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNNb2JpbGUgPSB1c2VNb2JpbGUoKTtcbiAgICByZXR1cm4gKF9qc3hzKENvbnRlbnRDb250YWluZXIsIHsgY2xhc3NOYW1lOiBjbHMuY29udGFpbmVyLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50aXRsZSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnVzZXJzQ29udGFpbmVyLCBjaGlsZHJlbjogaXNNb2JpbGUgPyAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5mcmllbmQsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmF2YXRhciB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnRleHRJdGVtIH0pXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5mcmllbmQsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmF2YXRhciB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnRleHRJdGVtIH0pXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5mcmllbmQsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmF2YXRhciB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnRleHRJdGVtIH0pXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5mcmllbmQsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmF2YXRhciB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLnRleHRJdGVtIH0pXSB9KV0gfSkpIDogKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuZnJpZW5kLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5hdmF0YXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50ZXh0SXRlbSB9KV0gfSldIH0pKSB9KV0gfSkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19jb250ZW50V3JhcHBlci0tT0Q5TTkge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX2RhdGFXcmFwcGVyLS1TMkh5TSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX3ZhbHVlV3JhcHBlci0tU1ZtbGIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19saXN0Q29udGFpbmVyLS1vRmRHNyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19hdmF0YXItLUQxR2N5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fYWRkRnJpZW5kQnRuLS1iS2xISyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX3ZhbHVlVGl0bGUtLXFGVkFEIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9faWNvbi0tb19XS0oge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZpbGw6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fbmFtZS0tVFdQY2Yge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGdhcDogMTBweDtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fdmFsdWVDb250YWluZXItLXNIcmxDIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fY29udGVudFdyYXBwZXItLU9EOU05IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX2RhdGFXcmFwcGVyLS1TMkh5TSxcbiAgLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fdmFsdWVXcmFwcGVyLS1TVm1sYiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19hZGRGcmllbmRCdG4tLWJLbEhLLFxuICAuc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19tZXNzYWdlQnRuLS1rT1N0TiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHNMaXN0L0ZyaWVuZHNMaXN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxzQkFBQTtFQUNOO0VBRUU7O0lBRUksbUJBQUE7RUFBTjtFQUdFOztJQUVJLFdBQUE7RUFETjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50V3JhcHBlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGFXcmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlV3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5saXN0Q29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hdmF0YXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkRnJpZW5kQnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlVGl0bGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDIycHg7XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmFsdWVDb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAuY29udGVudFdyYXBwZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGF0YVdyYXBwZXIsXFxyXFxuICAgIC52YWx1ZVdyYXBwZXIge1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkRnJpZW5kQnRuLFxcclxcbiAgICAubWVzc2FnZUJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250ZW50V3JhcHBlclwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19jb250ZW50V3JhcHBlci0tT0Q5TTlgLFxuXHRcImRhdGFXcmFwcGVyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX2RhdGFXcmFwcGVyLS1TMkh5TWAsXG5cdFwidmFsdWVXcmFwcGVyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX3ZhbHVlV3JhcHBlci0tU1ZtbGJgLFxuXHRcImxpc3RDb250YWluZXJcIjogYHNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fbGlzdENvbnRhaW5lci0tb0ZkRzdgLFxuXHRcImF2YXRhclwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19hdmF0YXItLUQxR2N5YCxcblx0XCJhZGRGcmllbmRCdG5cIjogYHNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fYWRkRnJpZW5kQnRuLS1iS2xIS2AsXG5cdFwidmFsdWVUaXRsZVwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX192YWx1ZVRpdGxlLS1xRlZBRGAsXG5cdFwiaWNvblwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19pY29uLS1vX1dLSmAsXG5cdFwibmFtZVwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kc0xpc3QtRnJpZW5kc0xpc3QtbW9kdWxlX19uYW1lLS1UV1BjZmAsXG5cdFwidmFsdWVDb250YWluZXJcIjogYHNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHNMaXN0LUZyaWVuZHNMaXN0LW1vZHVsZV9fdmFsdWVDb250YWluZXItLXNIcmxDYCxcblx0XCJtZXNzYWdlQnRuXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzTGlzdC1GcmllbmRzTGlzdC1tb2R1bGVfX21lc3NhZ2VCdG4tLWtPU3ROYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX19mcmllbmRzV3JhcHBlci0tUDZQZ1Yge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kcy1GcmllbmRzLW1vZHVsZV9fdGl0bGUtLXFlcWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHMtRnJpZW5kcy1tb2R1bGVfX2ZyaWVuZC0tRDJUcWsge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHMtRnJpZW5kcy1tb2R1bGVfX2ZyaWVuZC0tRDJUcWs6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kaWFsb2ctaG92ZXIpO1xufVxuXG4uc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kcy1GcmllbmRzLW1vZHVsZV9fYXZhdGFyLS1YODhjZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsbDogdmFyKC0tZmlsbC11c2VyKTtcbn1cblxuLnNyYy1lbnRpdGllcy1GcmllbmRzLXVpLUZyaWVuZHMtRnJpZW5kcy1tb2R1bGVfX3VzZXItLWpER2Q4IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHZhcigtLWZpbGwtdXNlcik7XG59XG5cbi5zcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX19jb250YWluZXItLXI0TW5aIHtcbiAgcGFkZGluZzogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lbnRpdGllcy9GcmllbmRzL3VpL0ZyaWVuZHMvRnJpZW5kcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSx3Q0FBQTtBQUVSOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZnJpZW5kc1dyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZW5kIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kaWFsb2ctaG92ZXIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5hdmF0YXIge1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXVzZXIpO1xcclxcbiAgICBmaWxsOiB2YXIoLS1maWxsLXVzZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy11c2VyKTtcXHJcXG4gICAgZmlsbDogdmFyKC0tZmlsbC11c2VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZyaWVuZHNXcmFwcGVyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX19mcmllbmRzV3JhcHBlci0tUDZQZ1ZgLFxuXHRcInRpdGxlXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX190aXRsZS0tcWVxbHNgLFxuXHRcImZyaWVuZFwiOiBgc3JjLWVudGl0aWVzLUZyaWVuZHMtdWktRnJpZW5kcy1GcmllbmRzLW1vZHVsZV9fZnJpZW5kLS1EMlRxa2AsXG5cdFwiYXZhdGFyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX19hdmF0YXItLVg4OGNlYCxcblx0XCJ1c2VyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX191c2VyLS1qREdkOGAsXG5cdFwiY29udGFpbmVyXCI6IGBzcmMtZW50aXRpZXMtRnJpZW5kcy11aS1GcmllbmRzLUZyaWVuZHMtbW9kdWxlX19jb250YWluZXItLXI0TW5aYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX2NvbnRhaW5lci0tWVZRSmUge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fdXNlcnNDb250YWluZXItLUNodV9WIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3JjLXNoYXJlZC11aS1GcmllbmRzTG9hZGVyLXVpLUZyaWVuZHNMb2FkZXItbW9kdWxlX19mcmllbmQtLWdWNVJTIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fYXZhdGFyLS1JbUlEciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX3NrZWxldG9uLWxvYWRpbmctLVlpWG04IDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX3RleHRJdGVtLS1pYU5nSCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1GcmllbmRzTG9hZGVyLXVpLUZyaWVuZHNMb2FkZXItbW9kdWxlX19za2VsZXRvbi1sb2FkaW5nLS1ZaVhtOCAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX3RpdGxlLS1hX2h1TiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1GcmllbmRzTG9hZGVyLXVpLUZyaWVuZHNMb2FkZXItbW9kdWxlX19za2VsZXRvbi1sb2FkaW5nLS1ZaVhtOCAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fc2tlbGV0b24tbG9hZGluZy0tWWlYbTgge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMjAlLCA4MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDIwJSwgOTUlKTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9GcmllbmRzTG9hZGVyL3VpL0ZyaWVuZHNMb2FkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0hBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvSEFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0hBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxvQ0FBQTtFQUNOO0VBQ0U7SUFDSSxvQ0FBQTtFQUNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5mcmllbmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXZhdGFyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBhbmltYXRpb246IHNrZWxldG9uLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRJdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2tlbGV0b24tbG9hZGluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDIwJSwgODAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDIwJSwgOTUlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogYHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fY29udGFpbmVyLS1ZVlFKZWAsXG5cdFwidXNlcnNDb250YWluZXJcIjogYHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fdXNlcnNDb250YWluZXItLUNodV9WYCxcblx0XCJmcmllbmRcIjogYHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fZnJpZW5kLS1nVjVSU2AsXG5cdFwiYXZhdGFyXCI6IGBzcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX2F2YXRhci0tSW1JRHJgLFxuXHRcInNrZWxldG9uLWxvYWRpbmdcIjogYHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fc2tlbGV0b24tbG9hZGluZy0tWWlYbThgLFxuXHRcInRleHRJdGVtXCI6IGBzcmMtc2hhcmVkLXVpLUZyaWVuZHNMb2FkZXItdWktRnJpZW5kc0xvYWRlci1tb2R1bGVfX3RleHRJdGVtLS1pYU5nSGAsXG5cdFwidGl0bGVcIjogYHNyYy1zaGFyZWQtdWktRnJpZW5kc0xvYWRlci11aS1GcmllbmRzTG9hZGVyLW1vZHVsZV9fdGl0bGUtLWFfaHVOYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRnJpZW5kc0xpc3QubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GcmllbmRzTGlzdC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GcmllbmRzTGlzdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZyaWVuZHMubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GcmllbmRzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZyaWVuZHMubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GcmllbmRzTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRnJpZW5kc0xvYWRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GcmllbmRzTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHsgRnJpZW5kc0xvYWRlciB9IGZyb20gJy4vdWkvRnJpZW5kc0xvYWRlcic7XG4iXSwibmFtZXMiOlsiRnJpZW5kcyIsIkZyaWVuZHNMaXN0IiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiQ29udGVudENvbnRhaW5lciIsIkF2YXRhciIsInVzZUFwcFNlbGVjdG9yIiwiZ2V0VXNlckRhdGEiLCJnZXRBbGxGcmllbmRzIiwiZ2V0RnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzTG9hZGluZ1N0YXR1cyIsInJlbW92ZUZyaWVuZCIsInVzZUFwcERpc3BhdGNoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsIm5hbm9pZCIsImFkZENvbnZlcnNhdGlvbiIsIkJ1dHRvbiIsInVzZVRyYW5zbGF0aW9uIiwiQmlydGhJY29uIiwiSG9tZUljb24iLCJGcmllbmRzSWNvbiIsIlBvc3RJY29uIiwiZGF5anMiLCJjbHMiLCJBbm90aGVyVXNlckxvYWRlciIsIl9hIiwiY2xhc3NOYW1lIiwiX2IiLCJ1c2VySWQiLCJjb252ZXJzYXRpb25zIiwiZnJpZW5kcyIsImlzTG9hZGluZyIsImRpc3BhdGNoIiwibmF2aWdhdGUiLCJfYyIsInQiLCJpMThuIiwiX2QiLCJEYXRlIiwibm93IiwidGltZSIsInNldFRpbWUiLCJvbkNsaWNrUmVtb3ZlRnJpZW5kIiwiZnJpZW5kSWQiLCJmcmllbmRGaXJzdE5hbWUiLCJmcmllbmRMYXN0TmFtZSIsImlzQ29udmVyc2F0aW9uQ3JlYXRlZCIsImFub3RoZXJVc2VySWQiLCJmaW5kIiwiY29udmVyc2F0aW9uIiwiY3JlYXRlQ29udmVyc2F0aW9uIiwiY29uY2F0Iiwicm9vbUlkIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJsaXN0Q29udGFpbmVyIiwibWFwIiwiZnJpZW5kIiwiY29udGVudFdyYXBwZXIiLCJkYXRhV3JhcHBlciIsImF2YXRhclBhdGgiLCJzaXplIiwiaXNPbmxpbmUiLCJsYXN0U2Vlbk9ubGluZSIsImF2YXRhciIsIm5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInZhbHVlV3JhcHBlciIsInZhbHVlQ29udGFpbmVyIiwidmFsdWVUaXRsZSIsImljb24iLCJiaXJ0aERheSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJsb2NhbGUiLCJmb3JtYXQiLCJjaXR5IiwiYWRkRnJpZW5kQnRuIiwib25DbGljayIsIm1lc3NhZ2VCdG4iLCJjbGFzc05hbWVzIiwiZ2V0RnJpZW5kc1N0YXRlIiwiZ2V0SW5pdEZyaWVuZHNTdGF0dXMiLCJGcmllbmRzTG9hZGVyIiwiaW5pdFN0YXR1cyIsImNvbnRhaW5lciIsInRpdGxlIiwiZnJpZW5kc1dyYXBwZXIiLCJ1c2VNb2JpbGUiLCJpc01vYmlsZSIsInVzZXJzQ29udGFpbmVyIiwidGV4dEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9