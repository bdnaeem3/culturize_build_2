webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/auth */ "./store/actions/auth.js");
/* harmony import */ var _context_userInfoProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/userInfoProvider */ "./context/userInfoProvider.js");




var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var Login = function Login() {
  _s();

  var _jsx;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_userInfoProvider__WEBPACK_IMPORTED_MODULE_10__["UserContext"]),
      userInfo = _useContext.userInfo,
      getCurrentUser = _useContext.getCurrentUser;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onlogin = function onlogin() {
    dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_9__["authInit"])({
      username: email,
      password: password
    }));
    setTimeout(function () {
      getCurrentUser();
    }, 1000);
  };

  var facebookLogin = function facebookLogin(accesstoken) {
    console.log(accesstoken);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('https://culturize.com/social-auth/convert-token', {
      token: accesstoken,
      backend: 'facebook',
      grant_type: 'convert_token',
      client_id: 'j1Alz9YrY5TpRvrL6XSjvboTctUOJofiACvGqzul',
      client_secret: 'vM0R7PZIJ4nVall0mRJ29Qfud6QxJMYDwrqhuRxfZpgbO2gtvCVSVohq0sffijPtYHImPEVGRLF1pfOgPGOHg2IPV4qwciF014dyRLtH4aCOUaVCH0CXCDIaDpZRhlkh'
    }).then(function (res) {
      console.log('FacebookLogin Func', res);
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
    })["catch"](function (err) {
      console.log("Erro", err);
    });
  };

  var responseFacebook = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(response) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(response);
              facebookLogin(response.accessToken);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function responseFacebook(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var token = localStorage.getItem("authToken");

    if (token) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
    }
  }, [userInfo]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    style: {
      backgroundColor: "#f7f9fa"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      maxWidth: "576px",
      backgroundColor: "white",
      margin: "60px auto 120px",
      padding: "60px",
      borderRadius: "6px",
      border: "1px solid #d8dde2"
    },
    className: "ressignup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-left mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Sign In / Sign Up"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Sign up or Sign in to access your orders, special offers and more!")), __jsx("div", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "exampleInputEmail1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "User Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter your username",
    required: true,
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "exampleInputPassword1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Enter your Password",
    required: true,
    onChange: function onChange(e) {
      setPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  })), __jsx("button", {
    className: "default-btn w-100",
    style: {
      height: "48px"
    },
    onClick: onlogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Login")), __jsx("div", {
    className: "text-center w-100 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_7___default.a, {
    appId: "931789091088648",
    fields: "name,email,picture",
    callback: responseFacebook,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx("p", {
    style: {
      fontWeight: "medium",
      fontSize: "12px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "By continuing, you agree to Culturize\u2019s", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: "#0097a7"
    },
    href: "/terms-and-condition",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, "Terms of Service"), " ", "&", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: "#0097a7"
    },
    href: "/terms-and-condition",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, "Privacy Policy")))), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row row-eq-height",
    style: {
      maxWidth: "1440px",
      margin: "auto",
      marginBottom: "60px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, __jsx("hr", {
    style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: "30px",
      width: "100%"
    }, "marginBottom", "60px"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "media p-3",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
      border: "1px solid #d8dde2"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, __jsx("img", {
    className: "align-self-start mr-3",
    src: __webpack_require__(/*! ../images/shop.png */ "./images/shop.png"),
    alt: "shop",
    style: {
      height: "35px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, __jsx("h5", (_jsx = {
    className: "mt-0",
    style: {
      fontSize: "14px",
      fontWeight: "bold"
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    fontSize: "14px",
    fontWeight: "bold"
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 23
  }), _jsx), "Shop"), __jsx("p", {
    style: {
      fontSize: "12px",
      fontWeight: "medium"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, "Shop for imported cultural products from any country")))), __jsx("div", {
    className: "col-md-4 my-2 my-sm-2 my-md-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "media h-100 p-3",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
      border: "1px solid #d8dde2"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, __jsx("img", {
    className: "align-self-start mr-3",
    src: __webpack_require__(/*! ../images/box.png */ "./images/box.png"),
    alt: "shop",
    style: {
      height: "35px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "mt-0",
    style: {
      fontSize: "14px",
      fontWeight: "bold"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 23
    }
  }, "Shipped"), __jsx("p", {
    style: {
      fontSize: "12px",
      fontWeight: "medium"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 23
    }
  }, "Shipped to doorstep OR Local Pick-up")))), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "media h-100 p-3",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
      border: "1px solid #d8dde2"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 19
    }
  }, __jsx("img", {
    className: "align-self-start mr-3",
    src: __webpack_require__(/*! ../images/email.png */ "./images/email.png"),
    alt: "shop",
    style: {
      height: "35px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "mt-0",
    style: {
      fontSize: "14px",
      fontWeight: "bold"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, "Any Problem"), __jsx("p", {
    style: {
      fontSize: "12px",
      fontWeight: "medium"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, "Can\u2019t find a product? Ask local Sellers"))))))))));
};

_s(Login, "FhpB04NK64vyDQ5sFvnecPS6rYM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VySW5mbyIsImdldEN1cnJlbnRVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbmxvZ2luIiwiYXV0aEluaXQiLCJ1c2VybmFtZSIsInNldFRpbWVvdXQiLCJmYWNlYm9va0xvZ2luIiwiYWNjZXNzdG9rZW4iLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidG9rZW4iLCJiYWNrZW5kIiwiZ3JhbnRfdHlwZSIsImNsaWVudF9pZCIsImNsaWVudF9zZWNyZXQiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZXJyIiwicmVzcG9uc2VGYWNlYm9vayIsInJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwicm91dGVyIiwicHVzaCIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUE7O0FBQ2xCLG9CQUFxQ0Msd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBL0M7QUFBQSxNQUFRQyxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsY0FBbEIsZUFBa0JBLGNBQWxCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsa0JBQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQlAsWUFBUSxDQUFDUSxvRUFBUSxDQUFDO0FBQUVDLGNBQVEsRUFBRU4sS0FBWjtBQUFtQkUsY0FBUSxFQUFFQTtBQUE3QixLQUFELENBQVQsQ0FBUjtBQUNBSyxjQUFVLENBQUMsWUFBSTtBQUNiWCxvQkFBYztBQUNmLEtBRlMsRUFFUixJQUZRLENBQVY7QUFHRCxHQUxEOztBQU9BLE1BQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFDQUcsZ0RBQUssQ0FDRkMsSUFESCxDQUNRLGlEQURSLEVBQzJEO0FBQ3ZEQyxXQUFLLEVBQUVMLFdBRGdEO0FBRXZETSxhQUFPLEVBQUUsVUFGOEM7QUFHdkRDLGdCQUFVLEVBQUUsZUFIMkM7QUFJdkRDLGVBQVMsRUFBRSwwQ0FKNEM7QUFLdkRDLG1CQUFhLEVBQ1g7QUFOcUQsS0FEM0QsRUFTR0MsSUFUSCxDQVNRLFVBQUNDLEdBQUQsRUFBUztBQUNiVixhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ1MsR0FBbEM7QUFDQUMsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixFQUFxQ0YsR0FBRyxDQUFDRyxJQUFKLENBQVNDLFlBQTlDO0FBQ0FILGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NGLEdBQUcsQ0FBQ0csSUFBSixDQUFTRSxhQUEvQztBQUNELEtBYkgsV0FjUyxVQUFBQyxHQUFHLEVBQUU7QUFDVmhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JlLEdBQXBCO0FBQ0QsS0FoQkg7QUFpQkQsR0FuQkQ7O0FBcUJBLE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJsQixxQkFBTyxDQUFDQyxHQUFSLENBQVlpQixRQUFaO0FBQ0ZwQiwyQkFBYSxDQUFDb0IsUUFBUSxDQUFDQyxXQUFWLENBQWI7O0FBRnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBS0FHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1oQixLQUFLLEdBQUdPLFlBQVksQ0FBQ1UsT0FBYixDQUFxQixXQUFyQixDQUFkOztBQUNBLFFBQUlqQixLQUFKLEVBQVc7QUFDVGtCLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ3RDLFFBQUQsQ0FMTSxDQUFUO0FBTUEsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUV1QyxxQkFBZSxFQUFFO0FBQW5CLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUUsT0FETDtBQUVMRCxxQkFBZSxFQUFFLE9BRlo7QUFHTEUsWUFBTSxFQUFFLGlCQUhIO0FBSUxDLGFBQU8sRUFBRSxNQUpKO0FBS0xDLGtCQUFZLEVBQUUsS0FMVDtBQU1MQyxZQUFNLEVBQUU7QUFOSCxLQURUO0FBU0UsYUFBUyxFQUFDLFdBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFGRixDQVhGLEVBa0JFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxNQUFFLEVBQUMsb0JBSEw7QUFJRSxlQUFXLEVBQUMscUJBSmQ7QUFLRSxZQUFRLE1BTFY7QUFNRSxZQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmdkMsY0FBUSxDQUFDdUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFjRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsTUFBRSxFQUFDLHVCQUhMO0FBSUUsZUFBVyxFQUFDLHFCQUpkO0FBS0UsWUFBUSxNQUxWO0FBTUUsWUFBUSxFQUFFLGtCQUFDRixDQUFELEVBQU87QUFDZnJDLGlCQUFXLENBQUNxQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FkRixFQTRCRTtBQUNFLGFBQVMsRUFBQyxtQkFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUZUO0FBR0UsV0FBTyxFQUFFdkMsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGLENBbEJGLEVBcUVFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F3QkUsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBQyxpQkFEUjtBQUVFLFVBQU0sRUFBQyxvQkFGVDtBQUdFLFlBQVEsRUFBRXVCLGdCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsRUE4QkU7QUFBRyxTQUFLLEVBQUU7QUFBRWlCLGdCQUFVLEVBQUUsUUFBZDtBQUF3QkMsY0FBUSxFQUFFO0FBQWxDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFDMEMsR0FEMUMsRUFFRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSxRQUFJLEVBQUMsc0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixFQU9VLEdBUFYsT0FRSSxHQVJKLEVBU0UsTUFBQyxnREFBRDtBQUNFLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsUUFBSSxFQUFDLHNCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEYsQ0E5QkYsQ0FyRUYsQ0FERixFQXNIRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsbUJBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTFgsY0FBUSxFQUFFLFFBREw7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTFcsa0JBQVksRUFBRTtBQUhULEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsU0FBSztBQUNIQSxrQkFBWSxFQUFFLE1BRFg7QUFFSEMsV0FBSyxFQUFFO0FBRkosdUJBR1csTUFIWCxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTGQscUJBQWUsRUFBRSxTQURaO0FBRUxJLGtCQUFZLEVBQUUsS0FGVDtBQUdMQyxZQUFNLEVBQUU7QUFISCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLE9BQUcsRUFBRVUsbUJBQU8sQ0FBQyw2Q0FBRCxDQUZkO0FBR0UsT0FBRyxFQUFDLE1BSE47QUFJRSxTQUFLLEVBQUU7QUFBRU4sWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVFLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxnQkFBVSxFQUFFO0FBQWhDO0FBRlQsOEdBR1M7QUFBRUMsWUFBUSxFQUFFLE1BQVo7QUFBb0JELGNBQVUsRUFBRTtBQUFoQyxHQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRTtBQUFHLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsTUFBWjtBQUFvQkQsZ0JBQVUsRUFBRTtBQUFoQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBUkYsQ0FkRixDQURGLENBZkYsRUE0Q0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xWLHFCQUFlLEVBQUUsU0FEWjtBQUVMSSxrQkFBWSxFQUFFLEtBRlQ7QUFHTEMsWUFBTSxFQUFFO0FBSEgsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxPQUFHLEVBQUVVLG1CQUFPLENBQUMsMkNBQUQsQ0FGZDtBQUdFLE9BQUcsRUFBQyxNQUhOO0FBSUUsU0FBSyxFQUFFO0FBQUVOLFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFRSxjQUFRLEVBQUUsTUFBWjtBQUFvQkQsZ0JBQVUsRUFBRTtBQUFoQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQU9FO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxnQkFBVSxFQUFFO0FBQWhDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FQRixDQWRGLENBREYsQ0E1Q0YsRUF3RUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTFYscUJBQWUsRUFBRSxTQURaO0FBRUxJLGtCQUFZLEVBQUUsS0FGVDtBQUdMQyxZQUFNLEVBQUU7QUFISCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLE9BQUcsRUFBRVUsbUJBQU8sQ0FBQywrQ0FBRCxDQUZkO0FBR0UsT0FBRyxFQUFDLE1BSE47QUFJRSxTQUFLLEVBQUU7QUFBRU4sWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVFLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxnQkFBVSxFQUFFO0FBQWhDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU9FO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxnQkFBVSxFQUFFO0FBQWhDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFQRixDQWRGLENBREYsQ0F4RUYsQ0FERixDQXRIRixDQURGLENBREYsQ0FGRixDQURGO0FBd09ELENBdFJEOztHQUFNcEQsSztVQUVhTSx1RDs7O0tBRmJOLEs7QUF3UlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjNmOGFjMTU4MGRlMDhmMzZlNDljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBGYkxvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5pbXBvcnQgeyBhdXRoSW5pdCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC91c2VySW5mb1Byb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXJJbmZvLCBnZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9ubG9naW4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhdXRoSW5pdCh7IHVzZXJuYW1lOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIH0sMTAwMClcclxuICB9O1xyXG5cclxuICBjb25zdCBmYWNlYm9va0xvZ2luID0gKGFjY2Vzc3Rva2VuKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY2Nlc3N0b2tlbik7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnaHR0cHM6Ly9jdWx0dXJpemUuY29tL3NvY2lhbC1hdXRoL2NvbnZlcnQtdG9rZW4nLCB7XHJcbiAgICAgICAgdG9rZW46IGFjY2Vzc3Rva2VuLFxyXG4gICAgICAgIGJhY2tlbmQ6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2NvbnZlcnRfdG9rZW4nLFxyXG4gICAgICAgIGNsaWVudF9pZDogJ2oxQWx6OVlyWTVUcFJ2ckw2WFNqdmJvVGN0VU9Kb2ZpQUN2R3F6dWwnLFxyXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6XHJcbiAgICAgICAgICAndk0wUjdQWklKNG5WYWxsMG1SSjI5UWZ1ZDZReEpNWUR3cnFodVJ4ZlpwZ2JPMmd0dkNWU1ZvaHEwc2ZmaWpQdFlISW1QRVZHUkxGMXBmT2dQR09IZzJJUFY0cXdjaUYwMTRkeVJMdEg0YUNPVWFWQ0gwQ1hDRElhRHBaUmhsa2gnLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhY2Vib29rTG9naW4gRnVuYycsIHJlcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIHJlcy5kYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nLCByZXMuZGF0YS5yZWZyZXNoX3Rva2VuKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb1wiLCBlcnIpO1xyXG4gICAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdGZhY2Vib29rTG9naW4ocmVzcG9uc2UuYWNjZXNzVG9rZW4pO1xyXG5cdH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbdXNlckluZm9dKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjdmOWZhXCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNTc2cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjYwcHggYXV0byAxMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOGRkZTJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3NpZ251cFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+U2lnbiBJbiAvIFNpZ24gVXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gdXAgb3IgU2lnbiBpbiB0byBhY2Nlc3MgeW91ciBvcmRlcnMsIHNwZWNpYWwgb2ZmZXJzIGFuZFxyXG4gICAgICAgICAgICAgICAgICBtb3JlIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5Vc2VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG4gdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29ubG9naW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW5yLWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyNHB4IDBcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzc5OGU5YlwiLCBtYXJnaW46IFwiMCA4cHhcIiB9fT5vcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyNHB4IDBcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctMTAwIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0biB3LTEwMCBnb29nbGUtYnV0dG9uIGZzdHdlbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb29nbGUtYnV0dG9uLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9nb29nbGUtbG9nby5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG4gdy0xMDAgZmItYnV0dG9uIGZzdHdlbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYi1idXR0b24taWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2ZiLWxvZ28ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImZiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIDxGYkxvZ2luXHJcbiAgICAgICAgICAgICAgICAgIGFwcElkPVwiOTMxNzg5MDkxMDg4NjQ4XCJcclxuICAgICAgICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIsIGZvbnRTaXplOiBcIjEycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQnkgY29udGludWluZywgeW91IGFncmVlIHRvIEN1bHR1cml6ZeKAmXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwOTdhN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgJntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDA5N2E3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Rlcm1zLWFuZC1jb25kaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgcm93LWVxLWhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxNDQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYSBwLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDhkZGUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLXNlbGYtc3RhcnQgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi9pbWFnZXMvc2hvcC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBmb3IgaW1wb3J0ZWQgY3VsdHVyYWwgcHJvZHVjdHMgZnJvbSBhbnkgY291bnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteS0yIG15LXNtLTIgbXktbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEgaC0xMDAgcC0zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q4ZGRlMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLXN0YXJ0IG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2JveC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNoaXBwZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNoaXBwZWQgdG8gZG9vcnN0ZXAgT1IgTG9jYWwgUGljay11cFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEgaC0xMDAgcC0zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q4ZGRlMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLXN0YXJ0IG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2VtYWlsLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQW55IFByb2JsZW1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbuKAmXQgZmluZCBhIHByb2R1Y3Q/IEFzayBsb2NhbCBTZWxsZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==