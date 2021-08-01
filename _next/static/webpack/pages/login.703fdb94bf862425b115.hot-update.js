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
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/auth */ "./store/actions/auth.js");
/* harmony import */ var _context_userInfoProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/userInfoProvider */ "./context/userInfoProvider.js");




var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Login = function Login() {
  _s();

  var _jsx;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_userInfoProvider__WEBPACK_IMPORTED_MODULE_9__["UserContext"]),
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
    dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_8__["authInit"])({
      username: email,
      password: password
    }));
    setTimeout(function () {
      getCurrentUser();
    }, 1000);
  };

  var facebookLogin = function facebookLogin(accesstoken) {
    console.log(accesstoken);
    axios.post('https://culturize.com/social-auth/convert-token', {
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
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-left mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Sign In / Sign Up"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Sign up or Sign in to access your orders, special offers and more!")), __jsx("div", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "exampleInputEmail1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "exampleInputPassword1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
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
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Login")), __jsx("div", {
    className: "text-center w-100 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_7___default.a, {
    appId: "931789091088648",
    fields: "name,email,picture",
    callback: responseFacebook,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 162,
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
      lineNumber: 164,
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
      lineNumber: 171,
      columnNumber: 19
    }
  }, "Privacy Policy")))), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 181,
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
      lineNumber: 189,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
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
      lineNumber: 205,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
    lineNumber: 212,
    columnNumber: 23
  }), _jsx), "Shop"), __jsx("p", {
    style: {
      fontSize: "12px",
      fontWeight: "medium"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, "Shop for imported cultural products from any country")))), __jsx("div", {
    className: "col-md-4 my-2 my-sm-2 my-md-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
      lineNumber: 226,
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
      lineNumber: 234,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 241,
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
      lineNumber: 247,
      columnNumber: 23
    }
  }, "Shipped to doorstep OR Local Pick-up")))), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
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
      lineNumber: 254,
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
      lineNumber: 262,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
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
      lineNumber: 269,
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
      lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VySW5mbyIsImdldEN1cnJlbnRVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbmxvZ2luIiwiYXV0aEluaXQiLCJ1c2VybmFtZSIsInNldFRpbWVvdXQiLCJmYWNlYm9va0xvZ2luIiwiYWNjZXNzdG9rZW4iLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidG9rZW4iLCJiYWNrZW5kIiwiZ3JhbnRfdHlwZSIsImNsaWVudF9pZCIsImNsaWVudF9zZWNyZXQiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZXJyIiwicmVzcG9uc2VGYWNlYm9vayIsInJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwicm91dGVyIiwicHVzaCIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQTs7QUFDbEIsb0JBQXFDQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEvQztBQUFBLE1BQVFDLFFBQVIsZUFBUUEs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LEVBQUUsU0FEWjtBQUVMSSxrQkFBWSxFQUFFLEtBRlQ7QUFHTEMsWUFBTSxFQUFFO0FBSEgsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxPQUFHLEVBQUVVLG1CQUFPLENBQUMsK0NBQUQsQ0FGZDtBQUdFLE9BQUcsRUFBQyxNQUhOO0FBSUUsU0FBSyxFQUFFO0FBQUVOLFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFRSxjQUFRLEVBQUUsTUFBWjtBQUFvQkQsZ0JBQVUsRUFBRTtBQUFoQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFPRTtBQUFHLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsTUFBWjtBQUFvQkQsZ0JBQVUsRUFBRTtBQUFoQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBUEYsQ0FkRixDQURGLENBeEVGLENBREYsQ0F0SEYsQ0FERixDQURGLENBRkYsQ0FERjtBQXdPRCxDQXRSRDs7R0FBTXBELEs7VUFFYU0sdUQ7OztLQUZiTixLO0FBd1JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi43MDNmZGI5NGJmODYyNDI1YjExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRmJMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XHJcblxyXG5cclxuaW1wb3J0IHsgYXV0aEluaXQgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvdXNlckluZm9Qcm92aWRlclwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VySW5mbywgZ2V0Q3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbmxvZ2luID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXV0aEluaXQoeyB1c2VybmFtZTogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB9LDEwMDApXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFjZWJvb2tMb2dpbiA9IChhY2Nlc3N0b2tlbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWNjZXNzdG9rZW4pO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoJ2h0dHBzOi8vY3VsdHVyaXplLmNvbS9zb2NpYWwtYXV0aC9jb252ZXJ0LXRva2VuJywge1xyXG4gICAgICAgIHRva2VuOiBhY2Nlc3N0b2tlbixcclxuICAgICAgICBiYWNrZW5kOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIGdyYW50X3R5cGU6ICdjb252ZXJ0X3Rva2VuJyxcclxuICAgICAgICBjbGllbnRfaWQ6ICdqMUFsejlZclk1VHBSdnJMNlhTanZib1RjdFVPSm9maUFDdkdxenVsJyxcclxuICAgICAgICBjbGllbnRfc2VjcmV0OlxyXG4gICAgICAgICAgJ3ZNMFI3UFpJSjRuVmFsbDBtUkoyOVFmdWQ2UXhKTVlEd3JxaHVSeGZacGdiTzJndHZDVlNWb2hxMHNmZmlqUHRZSEltUEVWR1JMRjFwZk9nUEdPSGcySVBWNHF3Y2lGMDE0ZHlSTHRINGFDT1VhVkNIMENYQ0RJYURwWlJobGtoJyxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWNlYm9va0xvZ2luIEZ1bmMnLCByZXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCByZXMuZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoX3Rva2VuJywgcmVzLmRhdGEucmVmcmVzaF90b2tlbik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9cIiwgZXJyKTtcclxuICAgICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRmYWNlYm9va0xvZ2luKHJlc3BvbnNlLmFjY2Vzc1Rva2VuKTtcclxuXHR9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJJbmZvXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmYVwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjU3NnB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCI2MHB4IGF1dG8gMTIwcHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDhkZGUyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNzaWdudXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlNpZ24gSW4gLyBTaWduIFVwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIHVwIG9yIFNpZ24gaW4gdG8gYWNjZXNzIHlvdXIgb3JkZXJzLCBzcGVjaWFsIG9mZmVycyBhbmRcclxuICAgICAgICAgICAgICAgICAgbW9yZSFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+VXNlciBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQ4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbmxvZ2lufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVuci1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjRweCAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM3OThlOWJcIiwgbWFyZ2luOiBcIjAgOHB4XCIgfX0+b3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjRweCAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LTEwMCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG4gdy0xMDAgZ29vZ2xlLWJ1dHRvbiBmc3R3ZWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ29vZ2xlLWJ1dHRvbi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi9pbWFnZXMvZ29vZ2xlLWxvZ28ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIHctMTAwIGZiLWJ1dHRvbiBmc3R3ZWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmItYnV0dG9uLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9mYi1sb2dvLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJmYlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmJMb2dpblxyXG4gICAgICAgICAgICAgICAgICBhcHBJZD1cIjkzMTc4OTA5MTA4ODY0OFwiXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcIm1lZGl1bVwiLCBmb250U2l6ZTogXCIxMnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEJ5IGNvbnRpbnVpbmcsIHlvdSBhZ3JlZSB0byBDdWx0dXJpemXigJlze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDk3YTdcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdGVybXMtYW5kLWNvbmRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICZ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwOTdhN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvdy1lcS1oZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTQ0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEgcC0zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q4ZGRlMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLXN0YXJ0IG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL3Nob3AucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3BcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgZm9yIGltcG9ydGVkIGN1bHR1cmFsIHByb2R1Y3RzIGZyb20gYW55IGNvdW50cnlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXktMiBteS1zbS0yIG15LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhIGgtMTAwIHAtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOGRkZTJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1zdGFydCBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9ib3gucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaGlwcGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIm1lZGl1bVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaGlwcGVkIHRvIGRvb3JzdGVwIE9SIExvY2FsIFBpY2stdXBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhIGgtMTAwIHAtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOGRkZTJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1zdGFydCBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9lbWFpbC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFueSBQcm9ibGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIm1lZGl1bVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW7igJl0IGZpbmQgYSBwcm9kdWN0PyBBc2sgbG9jYWwgU2VsbGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=