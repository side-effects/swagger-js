module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/keys");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/array/is-array");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/typeof");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/assign");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/defineProperty");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/define-property");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/define-properties");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/toConsumableArray");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/promise");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("lodash/assign");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/json/stringify");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/asyncToGenerator");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fast-json-patch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("btoa");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash/startsWith");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/get-iterator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/slicedToArray");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/classCallCheck");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/createClass");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/create");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("querystring-browser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("deep-extend");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@kyleshockey/object-assign-deep");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/weak-map");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("traverse");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/objectWithoutProperties");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash/isPlainObject");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("utf8-bytes");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("utfstring");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-form-data");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("encode-3986");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/define-property"
var define_property_ = __webpack_require__(9);
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/define-properties"
var define_properties_ = __webpack_require__(10);
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"
var get_own_property_descriptors_ = __webpack_require__(5);
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"
var get_own_property_descriptor_ = __webpack_require__(6);
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-symbols"
var get_own_property_symbols_ = __webpack_require__(7);
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/keys"
var keys_ = __webpack_require__(0);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/defineProperty"
var defineProperty_ = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "lodash/cloneDeep"
var cloneDeep_ = __webpack_require__(45);

// EXTERNAL MODULE: external "lodash/assign"
var assign_ = __webpack_require__(14);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: external "lodash/startsWith"
var startsWith_ = __webpack_require__(20);
var startsWith_default = /*#__PURE__*/__webpack_require__.n(startsWith_);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(11);
var external_url_default = /*#__PURE__*/__webpack_require__.n(external_url_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(22);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/json/stringify"
var stringify_ = __webpack_require__(15);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/typeof"
var typeof_ = __webpack_require__(2);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/array/is-array"
var is_array_ = __webpack_require__(1);
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(17);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__(46);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(26);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: external "js-yaml"
var external_js_yaml_ = __webpack_require__(23);
var external_js_yaml_default = /*#__PURE__*/__webpack_require__.n(external_js_yaml_);

// EXTERNAL MODULE: external "lodash/isString"
var isString_ = __webpack_require__(30);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString_);

// CONCATENATED MODULE: ./src/http.js
 /* global fetch */




// For testing
var http_self = {
  serializeRes: serializeRes,
  mergeInQueryOrForm: mergeInQueryOrForm


  // Handles fetch-like syntax and the case where there is only one object passed-in
  // (which will have the URL as a property). Also serilizes the response.
};function http_http(_x) {return _http.apply(this, arguments);}





















































// exported for testing
function _http() {_http = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(url) {var request,contentType,res,error,_error,_args = arguments;return regenerator_default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:request = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};if (typeof_default()(url) === 'object') {request = url;url = request.url;}request.headers = request.headers || {}; // Serializes query, for convenience
            // Should be the last thing we do, as its hard to mutate the URL with
            // the search string, but much easier to manipulate the req.query object
            http_self.mergeInQueryOrForm(request);if (!request.requestInterceptor) {_context.next = 11;break;}_context.next = 7;return request.requestInterceptor(request);case 7:_context.t0 = _context.sent;if (_context.t0) {_context.next = 10;break;}_context.t0 = request;case 10:request = _context.t0;case 11: // for content-type=multipart\/form-data remove content-type from request before fetch
            // so that correct one with `boundary` is set
            contentType = request.headers['content-type'] || request.headers['Content-Type'];if (/multipart\/form-data/i.test(contentType)) {delete request.headers['content-type'];delete request.headers['Content-Type'];} // eslint-disable-next-line no-undef
            _context.prev = 13;_context.next = 16;return (request.userFetch || fetch)(request.url, request);case 16:res = _context.sent;_context.next = 19;return http_self.serializeRes(res, url, request);case 19:res = _context.sent;if (!request.responseInterceptor) {_context.next = 27;break;}_context.next = 23;return request.responseInterceptor(res);case 23:_context.t1 = _context.sent;if (_context.t1) {_context.next = 26;break;}_context.t1 = res;case 26:res = _context.t1;case 27:_context.next = 37;break;case 29:_context.prev = 29;_context.t2 = _context["catch"](13);if (res) {_context.next = 33;break;}throw _context.t2;case 33:error = new Error(res.statusText);error.statusCode = error.status = res.status;error.responseError = _context.t2;throw error;case 37:if (res.ok) {_context.next = 42;break;}_error = new Error(res.statusText);_error.statusCode = _error.status = res.status;_error.response = res;throw _error;case 42:return _context.abrupt("return", res);case 43:case "end":return _context.stop();}}}, _callee, null, [[13, 29]]);}));return _http.apply(this, arguments);}var shouldDownloadAsText = function shouldDownloadAsText() {var contentType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';return /(json|xml|yaml|text)\b/.test(contentType);};function parseBody(body, contentType) {if (contentType && (contentType.indexOf('application/json') === 0 || contentType.indexOf('+json') > 0)) {return JSON.parse(body);}return external_js_yaml_default.a.safeLoad(body);
}

// Serialize the response, returns a promise with headers and the body part of the hash
function serializeRes(oriRes, url) {var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},_ref$loadSpec = _ref.loadSpec,loadSpec = _ref$loadSpec === void 0 ? false : _ref$loadSpec;
  var res = {
    ok: oriRes.ok,
    url: oriRes.url || url,
    status: oriRes.status,
    statusText: oriRes.statusText,
    headers: serializeHeaders(oriRes.headers) };


  var contentType = res.headers['content-type'];
  var useText = loadSpec || shouldDownloadAsText(contentType);

  // Note: Response.blob not implemented in node-fetch 1.  Use buffer instead.
  var getBody = useText ? oriRes.text : oriRes.blob || oriRes.buffer;

  return getBody.call(oriRes).then(function (body) {
    res.text = body;
    res.data = body;

    if (useText) {
      try {
        var obj = parseBody(body, contentType);
        res.body = obj;
        res.obj = obj;
      }
      catch (e) {
        res.parseError = e;
      }
    }
    return res;
  });
}

// Serialize headers into a hash, where mutliple-headers result in an array.
//
// eg: Cookie: one
//     Cookie: two
//  =  { Cookie: [ "one", "two" ]
function serializeHeaders() {var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var obj = {};

  // Iterate over headers, making multiple-headers into an array
  if (typeof headers.forEach === 'function') {
    headers.forEach(function (headerValue, header) {
      if (obj[header] !== undefined) {
        obj[header] = is_array_default()(obj[header]) ? obj[header] : [obj[header]];
        obj[header].push(headerValue);
      } else
      {
        obj[header] = headerValue;
      }
    });
    return obj;
  }

  return obj;
}

function isFile(obj, navigatorObj) {
  if (!navigatorObj && typeof navigator !== 'undefined') {
    // eslint-disable-next-line no-undef
    navigatorObj = navigator;
  }
  if (typeof Blob !== 'undefined' && obj instanceof Blob) {// eslint-disable-line no-undef
    return true;
  }
  if (navigatorObj && navigatorObj.product === 'ReactNative') {
    if (obj && typeof_default()(obj) === 'object' && typeof obj.uri === 'string') {
      return true;
    }
    return false;
  }
  if (typeof File !== 'undefined' && obj instanceof File) {// eslint-disable-line no-undef
    return true;
  }
  return obj !== null && typeof_default()(obj) === 'object' && typeof obj.pipe === 'function';
}

function formatValue(input, skipEncoding) {var
  collectionFormat = input.collectionFormat,allowEmptyValue = input.allowEmptyValue;

  // `input` can be string in OAS3 contexts
  var value = typeof_default()(input) === 'object' ? input.value : input;

  var SEPARATORS = {
    csv: ',',
    ssv: '%20',
    tsv: '%09',
    pipes: '|' };


  if (typeof value === 'undefined' && allowEmptyValue) {
    return '';
  }

  if (isFile(value) || typeof value === 'boolean') {
    return value;
  }

  var encodeFn = encodeURIComponent;
  if (skipEncoding) {
    if (isString_default()(value)) encodeFn = function encodeFn(str) {return str;};else
    encodeFn = function encodeFn(obj) {return stringify_default()(obj);};
  }

  if (typeof_default()(value) === 'object' && !is_array_default()(value)) {
    return '';
  }

  if (!is_array_default()(value)) {
    return encodeFn(value);
  }

  if (is_array_default()(value) && !collectionFormat) {
    return value.map(encodeFn).join(',');
  }
  if (collectionFormat === 'multi') {
    return value.map(encodeFn);
  }
  return value.map(encodeFn).join(SEPARATORS[collectionFormat]);
}

// Encodes an object using appropriate serializer.
function encodeFormOrQuery(data) {
  /**
                                          * Encode parameter names and values
                                          * @param {Object} result - parameter names and values
                                          * @param {string} parameterName - Parameter name
                                          * @return {object} encoded parameter names and values
                                          */
  var encodedQuery = keys_default()(data).reduce(function (result, parameterName) {
    var isObject = function isObject(a) {return a && typeof_default()(a) === 'object';};
    var paramValue = data[parameterName];
    var skipEncoding = !!paramValue.skipEncoding;
    var encodedParameterName = skipEncoding ? parameterName : encodeURIComponent(parameterName);
    var notArray = isObject(paramValue) && !is_array_default()(paramValue);
    result[encodedParameterName] = formatValue(
    notArray ? paramValue : { value: paramValue }, skipEncoding);

    return result;
  }, {});
  return external_qs_default.a.stringify(encodedQuery, { encode: false, indices: false }) || '';
}

// If the request has a `query` object, merge it into the request.url, and delete the object
function mergeInQueryOrForm() {var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var _req$url =
  req.url,url = _req$url === void 0 ? '' : _req$url,query = req.query,form = req.form;

  var joinSearch = function joinSearch() {for (var _len = arguments.length, strs = new Array(_len), _key = 0; _key < _len; _key++) {strs[_key] = arguments[_key];}
    var search = strs.filter(function (a) {return a;}).join('&'); // Only truthy value
    return search ? "?".concat(search) : ''; // Only add '?' if there is a str
  };

  if (form) {
    var hasFile = keys_default()(form).some(function (key) {
      return isFile(form[key].value);
    });

    var contentType = req.headers['content-type'] || req.headers['Content-Type'];

    if (hasFile || /multipart\/form-data/i.test(contentType)) {
      var FormData = __webpack_require__(47); // eslint-disable-line global-require
      req.body = new FormData();
      keys_default()(form).forEach(function (key) {
        req.body.append(key, formatValue(form[key], true));
      });
    } else
    {
      req.body = encodeFormOrQuery(form);
    }

    delete req.form;
  }

  if (query) {var _url$split =
    url.split('?'),_url$split2 = slicedToArray_default()(_url$split, 2),baseUrl = _url$split2[0],oriSearch = _url$split2[1];
    var newStr = '';

    if (oriSearch) {
      var oriQuery = external_qs_default.a.parse(oriSearch);
      var keysToRemove = keys_default()(query);
      keysToRemove.forEach(function (key) {return delete oriQuery[key];});
      newStr = external_qs_default.a.stringify(oriQuery, { encode: true });
    }

    var finalStr = joinSearch(newStr, encodeFormOrQuery(query));
    req.url = baseUrl + finalStr;
    delete req.query;
  }
  return req;
}

// Wrap a http function ( there are otherways to do this, conisder this deprecated )
function makeHttp(httpFn, preFetch, postFetch) {
  postFetch = postFetch || function (a) {return a;};
  preFetch = preFetch || function (a) {return a;};

  return function (req) {
    if (typeof req === 'string') {
      req = { url: req };
    }
    http_self.mergeInQueryOrForm(req);
    req = preFetch(req);
    return postFetch(httpFn(req));
  };
}
// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/promise"
var promise_ = __webpack_require__(13);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/get-iterator"
var get_iterator_ = __webpack_require__(21);
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/create"
var create_ = __webpack_require__(27);
var create_default = /*#__PURE__*/__webpack_require__.n(create_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/assign"
var object_assign_ = __webpack_require__(3);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(24);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/createClass"
var createClass_ = __webpack_require__(25);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(31);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(12);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "fast-json-patch"
var external_fast_json_patch_ = __webpack_require__(18);
var external_fast_json_patch_default = /*#__PURE__*/__webpack_require__.n(external_fast_json_patch_);

// EXTERNAL MODULE: external "deep-extend"
var external_deep_extend_ = __webpack_require__(32);
var external_deep_extend_default = /*#__PURE__*/__webpack_require__.n(external_deep_extend_);

// EXTERNAL MODULE: external "@kyleshockey/object-assign-deep"
var object_assign_deep_ = __webpack_require__(33);
var object_assign_deep_default = /*#__PURE__*/__webpack_require__.n(object_assign_deep_);

// CONCATENATED MODULE: ./src/specmap/lib/index.js





/* harmony default export */ var lib = ({
  add: add,
  replace: replace,
  remove: remove,
  merge: merge,
  mergeDeep: mergeDeep,
  context: context,
  getIn: getIn,
  applyPatch: applyPatch,
  parentPathMatch: parentPathMatch,
  flatten: flatten,
  fullyNormalizeArray: fullyNormalizeArray,
  normalizeArray: lib_normalizeArray,
  isPromise: isPromise,
  forEachNew: forEachNew,
  forEachNewPrimitive: forEachNewPrimitive,
  isJsonPatch: isJsonPatch,
  isContextPatch: isContextPatch,
  isPatch: isPatch,
  isMutation: isMutation,
  isAdditiveMutation: isAdditiveMutation,
  isGenerator: isGenerator,
  isFunction: isFunction,
  isObject: lib_isObject,
  isError: isError });


function applyPatch(obj, patch, opts) {
  opts = opts || {};

  patch = object_assign_default()({}, patch, {
    path: patch.path && normalizeJSONPath(patch.path) });


  if (patch.op === 'merge') {
    var newValue = getInByJsonPath(obj, patch.path);
    object_assign_default()(newValue, patch.value);
    external_fast_json_patch_default.a.applyPatch(obj, [replace(patch.path, newValue)]);
  } else
  if (patch.op === 'mergeDeep') {
    var currentValue = getInByJsonPath(obj, patch.path);

    // Iterate the properties of the patch
    for (var prop in patch.value) {
      var propVal = patch.value[prop];
      var isArray = is_array_default()(propVal);
      if (isArray) {
        // deepExtend doesn't merge arrays, so we will do it manually
        var existing = currentValue[prop] || [];
        currentValue[prop] = existing.concat(propVal);
      } else
      if (lib_isObject(propVal) && !isArray) {
        // If it's an object, iterate it's keys and merge
        // if there are conflicting keys, merge deep, otherwise shallow merge
        var currentObj = object_assign_default()({}, currentValue[prop]);
        for (var key in propVal) {
          if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
            // if there is a single conflicting key, just deepExtend the entire value
            // and break from the loop (since all future keys are also merged)
            // We do this because we can't deepExtend two primitives
            // (currentObj[key] & propVal[key] may be primitives).
            //
            // we also deeply assign here, since we aren't in control of
            // how deepExtend affects existing nested objects
            currentObj = external_deep_extend_default()(object_assign_deep_default()({}, currentObj), propVal);
            break;
          } else
          {
            object_assign_default()(currentObj, defineProperty_default()({}, key, propVal[key]));
          }
        }
        currentValue[prop] = currentObj;
      } else
      {
        // It's a primitive, just replace existing
        currentValue[prop] = propVal;
      }
    }
  } else
  if (patch.op === 'add' && patch.path === '' && lib_isObject(patch.value)) {
    // { op: 'add', path: '', value: { a: 1, b: 2 }}
    // has no effect: json patch refuses to do anything.
    // so let's break that patch down into a set of patches,
    // one for each key in the intended root value.

    var patches = keys_default()(patch.value).
    reduce(function (arr, key) {
      arr.push({
        op: 'add',
        path: "/".concat(normalizeJSONPath(key)),
        value: patch.value[key] });

      return arr;
    }, []);

    external_fast_json_patch_default.a.applyPatch(obj, patches);
  } else
  if (patch.op === 'replace' && patch.path === '') {
    var value = patch.value;

    if (opts.allowMetaPatches && patch.meta && isAdditiveMutation(patch) && (
    is_array_default()(patch.value) || lib_isObject(patch.value))) {
      value = object_assign_default()({}, value, patch.meta);
    }
    obj = value;
  } else
  {
    external_fast_json_patch_default.a.applyPatch(obj, [patch]);

    // Attach metadata to the resulting value.
    if (opts.allowMetaPatches && patch.meta && isAdditiveMutation(patch) && (
    is_array_default()(patch.value) || lib_isObject(patch.value))) {
      var _currentValue = getInByJsonPath(obj, patch.path);
      var _newValue = object_assign_default()({}, _currentValue, patch.meta);
      external_fast_json_patch_default.a.applyPatch(obj, [replace(patch.path, _newValue)]);
    }
  }

  return obj;
}

function normalizeJSONPath(path) {
  if (is_array_default()(path)) {
    if (path.length < 1) {
      return '';
    }

    return '/' + path.map(function (item) {// eslint-disable-line prefer-template
      return (item + '').replace(/~/g, '~0').replace(/\//g, '~1'); // eslint-disable-line prefer-template
    }).join('/');
  }

  return path;
}


// =========================
// JSON-Patch Wrappers
// =========================

function add(path, value) {
  return { op: 'add', path: path, value: value };
}

function lib_get(path) {
  return { op: '_get', path: path };
}

function replace(path, value, meta) {
  return { op: 'replace', path: path, value: value, meta: meta };
}

function remove(path, value) {
  return { op: 'remove', path: path };
}

// Custom wrappers
function merge(path, value) {
  return { type: 'mutation', op: 'merge', path: path, value: value };
}

// Custom wrappers
function mergeDeep(path, value) {
  return { type: 'mutation', op: 'mergeDeep', path: path, value: value };
}

function context(path, value) {
  return { type: 'context', path: path, value: value };
}


// =========================
// Iterators
// =========================

function forEachNew(mutations, fn) {
  try {
    return forEachNewPatch(mutations, forEach, fn);
  }
  catch (e) {
    return e;
  }
}

function forEachNewPrimitive(mutations, fn) {
  try {
    return forEachNewPatch(mutations, forEachPrimitive, fn);
  }
  catch (e) {
    return e;
  }
}

function forEachNewPatch(mutations, fn, callback) {
  var res = mutations.filter(isAdditiveMutation).map(function (mutation) {
    return fn(mutation.value, callback, mutation.path);
  }) || [];
  var flat = flatten(res);
  var clean = cleanArray(flat);
  return clean;
}

function forEachPrimitive(obj, fn, basePath) {
  basePath = basePath || [];

  if (is_array_default()(obj)) {
    return obj.map(function (val, key) {
      return forEachPrimitive(val, fn, basePath.concat(key));
    });
  }

  if (lib_isObject(obj)) {
    return keys_default()(obj).map(function (key) {
      return forEachPrimitive(obj[key], fn, basePath.concat(key));
    });
  }

  return fn(obj, basePath[basePath.length - 1], basePath);
}

function forEach(obj, fn, basePath) {
  basePath = basePath || [];

  var results = [];
  if (basePath.length > 0) {
    var newResults = fn(obj, basePath[basePath.length - 1], basePath);
    if (newResults) {
      results = results.concat(newResults);
    }
  }

  if (is_array_default()(obj)) {
    var arrayResults = obj.map(function (val, key) {
      return forEach(val, fn, basePath.concat(key));
    });
    if (arrayResults) {
      results = results.concat(arrayResults);
    }
  } else
  if (lib_isObject(obj)) {
    var moreResults = keys_default()(obj).map(function (key) {
      return forEach(obj[key], fn, basePath.concat(key));
    });
    if (moreResults) {
      results = results.concat(moreResults);
    }
  }

  results = flatten(results);
  return results;
}


// =========================
// Paths
// =========================

function parentPathMatch(path, arr) {
  if (!is_array_default()(arr)) {
    return false;
  }

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== path[i]) {
      return false;
    }
  }

  return true;
}

function getIn(obj, path) {
  return path.reduce(function (val, token) {
    if (typeof token !== 'undefined' && val) {
      return val[token];
    }
    return val;
  }, obj);
}

// =========================
// Array
// =========================

function fullyNormalizeArray(arr) {
  return cleanArray(flatten(lib_normalizeArray(arr)));
}

function lib_normalizeArray(arr) {
  return is_array_default()(arr) ? arr : [arr];
}

function flatten(arr) {var _ref;
  return (_ref = []).concat.apply(_ref, toConsumableArray_default()(arr.map(function (val) {
    return is_array_default()(val) ? flatten(val) : val;
  })));
}

function cleanArray(arr) {
  return arr.filter(function (elm) {return typeof elm !== 'undefined';});
}


// =========================
// Is-Thing.
// =========================

function lib_isObject(val) {
  return val && typeof_default()(val) === 'object';
}

function isPromise(val) {
  return lib_isObject(val) && isFunction(val.then);
}

function isFunction(val) {
  return val && typeof val === 'function';
}

function isError(patch) {
  return patch instanceof Error;
}

function isJsonPatch(patch) {
  if (isPatch(patch)) {
    var op = patch.op;
    return op === 'add' || op === 'remove' || op === 'replace';
  }
  return false;
}

function isGenerator(thing) {
  return regenerator_default.a.isGeneratorFunction(thing);
}

function isMutation(patch) {
  return isJsonPatch(patch) || isPatch(patch) && patch.type === 'mutation';
}

function isAdditiveMutation(patch) {
  return isMutation(patch) && (patch.op === 'add' || patch.op === 'replace' || patch.op === 'merge' || patch.op === 'mergeDeep');
}

function isContextPatch(patch) {
  return isPatch(patch) && patch.type === 'context';
}

function isPatch(patch) {
  return patch && typeof_default()(patch) === 'object';
}

function getInByJsonPath(obj, jsonPath) {
  try {
    return external_fast_json_patch_default.a.getValueByPointer(obj, jsonPath);
  }
  catch (e) {
    console.error(e); // eslint-disable-line no-console
    return {};
  }
}
// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/weak-map"
var weak_map_ = __webpack_require__(34);
var weak_map_default = /*#__PURE__*/__webpack_require__.n(weak_map_);

// EXTERNAL MODULE: external "cross-fetch"
var external_cross_fetch_ = __webpack_require__(35);

// EXTERNAL MODULE: external "querystring-browser"
var external_querystring_browser_ = __webpack_require__(28);
var external_querystring_browser_default = /*#__PURE__*/__webpack_require__.n(external_querystring_browser_);

// CONCATENATED MODULE: ./src/specmap/lib/create-error.js
function createErrorType(name, init) {
  function E() {
    if (!Error.captureStackTrace) {
      this.stack = new Error().stack;
    } else
    {
      Error.captureStackTrace(this, this.constructor);
    }for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    this.message = args[0];
    init && init.apply(this, args);
  }

  E.prototype = new Error();
  E.prototype.name = name;
  E.prototype.constructor = E;

  return E;
}
// EXTERNAL MODULE: external "traverse"
var external_traverse_ = __webpack_require__(36);
var external_traverse_default = /*#__PURE__*/__webpack_require__.n(external_traverse_);

// CONCATENATED MODULE: ./src/specmap/helpers.js



// This will match if the direct parent's key exactly matches an item.
var freelyNamedKeyParents = [
'properties'];


// This will match if the grandparent's key exactly matches an item.
// NOTE that this is for finding non-free paths!
var nonFreelyNamedKeyGrandparents = [
'properties'];


// This will match if the joined parent path exactly matches an item.
//
// This is mostly useful for filtering out root-level reusable item names,
// for example `["definitions", "$ref"]`
var freelyNamedPaths = [
// Swagger 2.0
'definitions',
'parameters',
'responses',
'securityDefinitions',

// OpenAPI 3.0
'components/schemas',
'components/responses',
'components/parameters',
'components/securitySchemes'];


// This will match if any of these items are substrings of the joined
// parent path.
//
// Warning! These are powerful. Beware of edge cases.
var freelyNamedAncestors = [
'schema/example',
'items/example'];


function isFreelyNamed(parentPath) {
  var parentKey = parentPath[parentPath.length - 1];
  var grandparentKey = parentPath[parentPath.length - 2];
  var parentStr = parentPath.join('/');

  return (
    // eslint-disable-next-line max-len
    freelyNamedKeyParents.indexOf(parentKey) > -1 && nonFreelyNamedKeyGrandparents.indexOf(grandparentKey) === -1 ||
    freelyNamedPaths.indexOf(parentStr) > -1 ||
    freelyNamedAncestors.some(function (el) {return parentStr.indexOf(el) > -1;}));

}

function generateAbsoluteRefPatches(obj, basePath)



{var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},specmap = _ref.specmap,_ref$getBaseUrlForNod = _ref.getBaseUrlForNodePath,getBaseUrlForNodePath = _ref$getBaseUrlForNod === void 0 ? function (path) {return specmap.getContext([].concat(toConsumableArray_default()(basePath), toConsumableArray_default()(path))).baseDoc;} : _ref$getBaseUrlForNod,_ref$targetKeys = _ref.targetKeys,targetKeys = _ref$targetKeys === void 0 ? ['$ref', '$$ref'] : _ref$targetKeys;
  var patches = [];

  external_traverse_default()(obj).forEach(function () {
    if (targetKeys.indexOf(this.key) > -1) {
      var nodePath = this.path; // this node's path, relative to `obj`
      var fullPath = basePath.concat(this.path);

      var absolutifiedRefValue = absolutifyPointer(this.node, getBaseUrlForNodePath(nodePath));

      patches.push(specmap.replace(fullPath, absolutifiedRefValue));
    }
  });

  return patches;
}

function absolutifyPointer(pointer, baseUrl) {var _pointer$split =
  pointer.split('#'),_pointer$split2 = slicedToArray_default()(_pointer$split, 2),urlPart = _pointer$split2[0],fragmentPart = _pointer$split2[1];
  var newRefUrlPart = external_url_default.a.resolve(urlPart || '', baseUrl || '');

  return fragmentPart ? "".concat(newRefUrlPart, "#").concat(fragmentPart) : newRefUrlPart;
}
// CONCATENATED MODULE: ./src/specmap/lib/refs.js








var ABSOLUTE_URL_REGEXP = new RegExp('^([a-z]+://|//)', 'i');

var JSONRefError = createErrorType('JSONRefError', function (message, extra, oriError) {
  this.originalError = oriError;
  object_assign_default()(this, extra || {});
});

var docCache = {};
var specmapRefs = new weak_map_default.a();

var skipResolutionTestFns = [
function (path) {return (
    // OpenAPI 3.0 Response Media Type Example
    // ["paths", *, *, "responses", *, "content", *, "example"]
    path[0] === 'paths' &&
    path[3] === 'responses' &&
    path[5] === 'content' &&
    path[7] === 'example');},

function (path) {return (
    // OpenAPI 3.0 Request Body Media Type Example
    // ["paths", *, *, "responses", *, "content", *, "example"]
    path[0] === 'paths' &&
    path[3] === 'requestBody' &&
    path[4] === 'content' &&
    path[6] === 'example');}];



var shouldSkipResolution = function shouldSkipResolution(path) {return skipResolutionTestFns.some(function (fn) {return fn(path);});};

// =========================
// Core
// =========================

/**
 * This plugin resolves the JSON pointers.
 * A major part of this plugin deals with cyclic references via 2 mechanisms.
 * 1. If a pointer was already resolved before in this path, halt.
 * 2. If the patch value points to one of the ancestors in this path, halt.
 *
 * Note that either one of these mechanism is sufficient, both must be in place.
 * For examples:
 *
 * Given the following spec, #1 alone is insufficient because after the 2nd
 * application, there will be a cyclic object reference.
 *   a.b.c: $ref-d
 *   d.e.f: $ref-a (per #1, safe to return patch as no immediate cycle)
 *
 * Given the following spec, #2 alone is insufficient because although there will
 * never be any cyclic object reference, the plugin will keep producing patches.
 *   a: $ref-b
 *   b: $ref-a
 */
var refs_plugin = {
  key: '$ref',
  plugin: function plugin(ref, key, fullPath, specmap) {
    var specmapInstance = specmap.getInstance();
    var parent = fullPath.slice(0, -1);

    if (isFreelyNamed(parent) || shouldSkipResolution(parent)) {
      return;
    }

    var baseDoc = specmap.getContext(fullPath).baseDoc;
    if (typeof ref !== 'string') {
      return new JSONRefError('$ref: must be a string (JSON-Ref)', {
        $ref: ref,
        baseDoc: baseDoc,
        fullPath: fullPath });

    }

    var splitString = split(ref);
    var refPath = splitString[0];
    var pointer = splitString[1] || '';

    var basePath;
    try {
      basePath = baseDoc || refPath ? absoluteify(refPath, baseDoc) : null;
    }
    catch (e) {
      return wrapError(e, {
        pointer: pointer,
        $ref: ref,
        basePath: basePath,
        fullPath: fullPath });

    }

    var promOrVal;
    var tokens;

    if (pointerAlreadyInPath(pointer, basePath, parent, specmap)) {
      // Cyclic reference!
      // if `useCircularStructures` is not set, just leave the reference
      // unresolved, but absolutify it so that we don't leave an invalid $ref
      // path in the content
      if (!specmapInstance.useCircularStructures) {
        var _absolutifiedRef = absolutifyPointer(ref, basePath);

        if (ref === _absolutifiedRef) {
          // avoids endless looping
          // without this, the ref plugin never stops seeing this $ref
          return null;
        }
        return lib.replace(fullPath, _absolutifiedRef);
      }
    }

    if (basePath == null) {
      tokens = jsonPointerToArray(pointer);
      promOrVal = specmap.get(tokens);

      if (typeof promOrVal === 'undefined') {
        promOrVal = new JSONRefError("Could not resolve reference: ".concat(ref), {
          pointer: pointer,
          $ref: ref,
          baseDoc: baseDoc,
          fullPath: fullPath });

      }
    } else
    {
      promOrVal = extractFromDoc(basePath, pointer);
      if (promOrVal.__value != null) {
        promOrVal = promOrVal.__value;
      } else
      {
        promOrVal = promOrVal.catch(function (e) {
          throw wrapError(e, {
            pointer: pointer,
            $ref: ref,
            baseDoc: baseDoc,
            fullPath: fullPath });

        });
      }
    }

    if (promOrVal instanceof Error) {
      return [lib.remove(fullPath), promOrVal];
    }

    var absolutifiedRef = absolutifyPointer(ref, basePath);

    var patch = lib.replace(parent, promOrVal, { $$ref: absolutifiedRef });
    if (basePath && basePath !== baseDoc) {
      return [patch, lib.context(parent, { baseDoc: basePath })];
    }

    try {
      // prevents circular values from being constructed, unless we specifically
      // want that to happen
      if (!patchValueAlreadyInPath(specmap.state, patch) || specmapInstance.useCircularStructures) {
        return patch;
      }
    }
    catch (e) {
      // if we're catching here, path traversal failed, so we should
      // ditch without sending any patches back up.
      //
      // this is a narrow fix for the larger problem of patches being queued
      // and then having the state they were generated against be modified
      // before they are applied.
      //
      // TODO: re-engineer specmap patch/state management to avoid this
      return null;
    }
  } };



var mod = object_assign_default()(refs_plugin, {
  docCache: docCache,
  absoluteify: absoluteify,
  clearCache: clearCache,
  JSONRefError: JSONRefError,
  wrapError: wrapError,
  getDoc: getDoc,
  split: split,
  extractFromDoc: extractFromDoc,
  fetchJSON: fetchJSON,
  extract: extract,
  jsonPointerToArray: jsonPointerToArray,
  unescapeJsonPointerToken: unescapeJsonPointerToken });


/* harmony default export */ var refs = (mod);


// =========================
// Utilities
// =========================

/**
 * Resolves a path and its base to an abolute URL.
 * @api public
 */
function absoluteify(path, basePath) {
  if (!ABSOLUTE_URL_REGEXP.test(path)) {
    if (!basePath) {
      throw new JSONRefError("Tried to resolve a relative URL, without having a basePath. path: '".concat(path, "' basePath: '").concat(basePath, "'"));
    }
    return external_url_default.a.resolve(basePath, path);
  }
  return path;
}

/**
   * Wraps an error as JSONRefError.
   * @param  {Error} e      the error.
   * @param  {Object} extra (optional) optional data.
   * @return {Error}        an instance of JSONRefError.
   * @api public
   */
function wrapError(e, extra) {
  var message;

  if (e && e.response && e.response.body) {
    message = "".concat(e.response.body.code, " ").concat(e.response.body.message);
  } else
  {
    message = e.message;
  }

  return new JSONRefError("Could not resolve reference: ".concat(message), extra, e);
}

/**
   * Splits a pointer by the hash delimiter.
   * @api public
   */
function split(ref) {
  return (ref + '').split('#'); // eslint-disable-line prefer-template
}

/**
   * Extracts a pointer from its document.
   * @param  {String} docPath the absolute document URL.
   * @param  {String} pointer the pointer whose value is to be extracted.
   * @return {Promise}        a promise of the pointer value.
   * @api public
   */
function extractFromDoc(docPath, pointer) {
  var doc = docCache[docPath];
  if (doc && !lib.isPromise(doc)) {
    // If doc is already available, return __value together with the promise.
    // __value is for special handling in cycle check:
    // pointerAlreadyInPath() won't work if patch.value is a promise,
    // thus when that promise is finally resolved, cycle might happen (because
    // `spec` and `docCache[basePath]` refer to the exact same object).
    // See test "should resolve a cyclic spec when baseDoc is specified".
    try {
      var v = extract(pointer, doc);
      return object_assign_default()(promise_default.a.resolve(v), { __value: v });
    }
    catch (e) {
      return promise_default.a.reject(e);
    }
  }

  return getDoc(docPath).then(function (_doc) {return extract(pointer, _doc);});
}

/**
   * Clears all document caches.
   * @param  {String} item (optional) the name of the cache item to be cleared.
   * @api public
   */
function clearCache(item) {
  if (typeof item !== 'undefined') {
    delete docCache[item];
  } else
  {
    keys_default()(docCache).forEach(function (key) {
      delete docCache[key];
    });
  }
}

/**
   * Fetches and caches a document.
   * @param  {String} docPath the absolute URL of the document.
   * @return {Promise}        a promise of the document content.
   * @api public
   */
function getDoc(docPath) {
  var val = docCache[docPath];
  if (val) {
    return lib.isPromise(val) ? val : promise_default.a.resolve(val);
  }

  // NOTE: we need to use `mod.fetchJSON` in order to be able to overwrite it.
  // Any tips on how to make this cleaner, please ping!
  docCache[docPath] = mod.fetchJSON(docPath).then(function (doc) {
    docCache[docPath] = doc;
    return doc;
  });
  return docCache[docPath];
}

/**
   * Fetches a document.
   * @param  {String} docPath the absolute URL of the document.
   * @return {Promise}        a promise of the document content.
   * @api public
   */
function fetchJSON(docPath) {
  return Object(external_cross_fetch_["fetch"])(docPath, { headers: { Accept: 'application/json, application/yaml' }, loadSpec: true }).
  then(function (res) {return res.text();}).
  then(function (text) {return external_js_yaml_default.a.safeLoad(text);});
}

/**
   * Extracts a pointer from an object.
   * @param  {String[]} pointer the JSON pointer.
   * @param  {Object} obj       an object whose value is to be extracted.
   * @return {Object}           the value to be extracted.
   * @api public
   */
function extract(pointer, obj) {
  var tokens = jsonPointerToArray(pointer);
  if (tokens.length < 1) {
    return obj;
  }

  var val = lib.getIn(obj, tokens);
  if (typeof val === 'undefined') {
    throw new JSONRefError("Could not resolve pointer: ".concat(pointer, " does not exist in document"), { pointer: pointer });
  }
  return val;
}

/**
   * Converts a JSON pointer to array.
   * @api public
   */
function jsonPointerToArray(pointer) {
  if (typeof pointer !== 'string') {
    throw new TypeError("Expected a string, got a ".concat(typeof_default()(pointer)));
  }

  if (pointer[0] === '/') {
    pointer = pointer.substr(1);
  }

  if (pointer === '') {
    return [];
  }

  return pointer.split('/').map(unescapeJsonPointerToken);
}

/**
   * Unescapes a JSON pointer.
   * @api public
   */
function unescapeJsonPointerToken(token) {
  if (typeof token !== 'string') {
    return token;
  }
  return external_querystring_browser_default.a.unescape(token.replace(/~1/g, '/').replace(/~0/g, '~'));
}

/**
   * Escapes a JSON pointer.
   * @api public
   */
function escapeJsonPointerToken(token) {
  return external_querystring_browser_default.a.escape(token.replace(/~/g, '~0').replace(/\//g, '~1'));
}

function arrayToJsonPointer(arr) {
  if (arr.length === 0) {
    return '';
  }

  return "/".concat(arr.map(escapeJsonPointerToken).join('/'));
}

var pointerBoundaryChar = function pointerBoundaryChar(c) {return !c || c === '/' || c === '#';};

function pointerIsAParent(pointer, parentPointer) {
  if (pointerBoundaryChar(parentPointer)) {
    // This is the root of the document, so its naturally a parent
    return true;
  }
  var nextChar = pointer.charAt(parentPointer.length);
  var lastParentChar = parentPointer.slice(-1);

  return pointer.indexOf(parentPointer) === 0 && (
  !nextChar || nextChar === '/' || nextChar === '#') &&
  lastParentChar !== '#';
}


// =========================
// Private
// =========================

/**
 * Checks if this pointer points back to one or more pointers along the path.
 */
function pointerAlreadyInPath(pointer, basePath, parent, specmap) {
  var refs = specmapRefs.get(specmap);
  if (!refs) {
    // Stores all resolved references of a specmap instance.
    // Schema: path -> pointer (path's $ref value).
    refs = {};
    specmapRefs.set(specmap, refs);
  }

  var parentPointer = arrayToJsonPointer(parent);
  var fullyQualifiedPointer = "".concat(basePath || '<specmap-base>', "#").concat(pointer);

  // dirty hack to strip `allof/[index]` from the path, in order to avoid cases
  // where we get false negatives because:
  // - we resolve a path, then
  // - allOf plugin collapsed `allOf/[index]` out of the path, then
  // - we try to work on a child $ref within that collapsed path.
  //
  // because of the path collapse, we lose track of it in our specmapRefs hash
  // solution: always throw the allOf constructs out of paths we store
  // TODO: solve this with a global register, or by writing more metadata in
  // either allOf or refs plugin
  var safeParentPointer = parentPointer.replace(/allOf\/\d+\/?/g, '');

  // Case 1: direct cycle, e.g. a.b.c.$ref: '/a.b'
  // Detect by checking that the parent path doesn't start with pointer.
  // This only applies if the pointer is internal, i.e. basePath === rootPath (could be null)
  var rootDoc = specmap.contextTree.get([]).baseDoc;
  if (basePath == rootDoc && pointerIsAParent(safeParentPointer, pointer)) {// eslint-disable-line
    return true;
  }


  // Case 2: indirect cycle
  //  ex1: a.$ref: '/b'  &  b.c.$ref: '/b/c'
  //  ex2: a.$ref: '/b/c'  &  b.c.$ref: '/b'
  // Detect by retrieving all the $refs along the path of parent
  // and checking if any starts with pointer or vice versa.
  var currPath = '';
  var hasIndirectCycle = parent.some(function (token) {
    currPath = "".concat(currPath, "/").concat(escapeJsonPointerToken(token));
    return refs[currPath] && refs[currPath].some(function (ref) {
      return (
        pointerIsAParent(ref, fullyQualifiedPointer) ||
        pointerIsAParent(fullyQualifiedPointer, ref));

    });
  });
  if (hasIndirectCycle) {
    return true;
  }

  // No cycle, this ref will be resolved, so stores it now for future detection.
  // No need to store if has cycle, as parent path is a dead-end and won't be checked again.

  refs[safeParentPointer] = (refs[safeParentPointer] || []).concat(fullyQualifiedPointer);
}

/**
   * Checks if the value of this patch ends up pointing to an ancestor along the path.
   */
function patchValueAlreadyInPath(root, patch) {
  var ancestors = [root];
  patch.path.reduce(function (parent, p) {
    ancestors.push(parent[p]);
    return parent[p];
  }, root);
  return pointToAncestor(patch.value);

  function pointToAncestor(obj) {
    return lib.isObject(obj) && (ancestors.indexOf(obj) >= 0 || keys_default()(obj).some(function (k) {
      return pointToAncestor(obj[k]);
    }));
  }
}
// CONCATENATED MODULE: ./src/specmap/lib/all-of.js


/* harmony default export */ var all_of = ({
  key: 'allOf',
  plugin: function plugin(val, key, fullPath, specmap, patch) {
    // Ignore replace patches created by $ref because the changes will
    // occur in the original "add" patch and we don't want this plugin
    // to redundantly processes those "relace" patches.
    if (patch.meta && patch.meta.$$ref) {
      return;
    }

    var parent = fullPath.slice(0, -1);
    if (isFreelyNamed(parent)) {
      return;
    }

    if (!is_array_default()(val)) {
      var err = new TypeError('allOf must be an array');
      err.fullPath = fullPath; // This is an array
      return err;
    }


    var alreadyAddError = false;

    // Find the original definition from the `patch.value` object
    // Remove the `allOf` property so it doesn't get added to the result of the `allOf` plugin
    var originalDefinitionObj = patch.value;
    parent.forEach(function (part) {
      if (!originalDefinitionObj) return; // bail out if we've lost sight of our target
      originalDefinitionObj = originalDefinitionObj[part];
    });
    originalDefinitionObj = object_assign_default()({}, originalDefinitionObj);
    delete originalDefinitionObj.allOf;

    var patches = [];

    // remove existing content
    patches.push(specmap.replace(parent, {}));

    val.forEach(function (toMerge, i) {
      if (!specmap.isObject(toMerge)) {
        if (alreadyAddError) {
          return null;
        }
        alreadyAddError = true;

        var _err = new TypeError('Elements in allOf must be objects');
        _err.fullPath = fullPath; // This is an array
        return patches.push(_err);
      }

      // Deeply merge the member's contents onto the parent location
      patches.push(specmap.mergeDeep(parent, toMerge));

      // Generate patches that migrate $ref values based on ContextTree information

      // remove ["allOf"], which will not be present when these patches are applied
      var collapsedFullPath = fullPath.slice(0, -1);

      var absoluteRefPatches = generateAbsoluteRefPatches(toMerge, collapsedFullPath, {
        getBaseUrlForNodePath: function getBaseUrlForNodePath(nodePath) {
          return specmap.getContext([].concat(toConsumableArray_default()(fullPath), [i], toConsumableArray_default()(nodePath))).baseDoc;
        },
        specmap: specmap });


      patches.push.apply(patches, toConsumableArray_default()(absoluteRefPatches));
    });

    // Merge back the values from the original definition
    patches.push(specmap.mergeDeep(parent, originalDefinitionObj));

    // If there was not an original $$ref value, make sure to remove
    // any $$ref value that may exist from the result of `allOf` merges
    if (!originalDefinitionObj.$$ref) {
      patches.push(specmap.remove([].concat(parent, '$$ref')));
    }

    return patches;
  } });
// CONCATENATED MODULE: ./src/specmap/lib/parameters.js


/* harmony default export */ var lib_parameters = ({
  key: 'parameters',
  plugin: function plugin(parameters, key, fullPath, specmap, patch) {
    if (is_array_default()(parameters) && parameters.length) {
      var val = object_assign_default()([], parameters);
      var opPath = fullPath.slice(0, -1);
      var op = object_assign_default()({}, lib.getIn(specmap.spec, opPath));

      parameters.forEach(function (param, i) {
        try {
          val[i].default = specmap.parameterMacro(op, param);
        }
        catch (e) {
          var err = new Error(e);
          err.fullPath = fullPath;
          return err;
        }
      });

      return lib.replace(fullPath, val);
    }

    return lib.replace(fullPath, parameters);
  } });
// CONCATENATED MODULE: ./src/specmap/lib/properties.js


/* harmony default export */ var lib_properties = ({
  key: 'properties',
  plugin: function plugin(properties, key, fullPath, specmap) {
    var val = object_assign_default()({}, properties);

    for (var k in properties) {
      try {
        val[k].default = specmap.modelPropertyMacro(val[k]);
      }
      catch (e) {
        var err = new Error(e);
        err.fullPath = fullPath; // This is an array
        return err;
      }
    }

    var patch = lib.replace(fullPath, val);

    return patch;
  } });
// CONCATENATED MODULE: ./src/specmap/lib/context-tree.js
function ownKeys(object, enumerableOnly) {var keys = keys_default()(object);if (get_own_property_symbols_default.a) {var symbols = get_own_property_symbols_default()(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return get_own_property_descriptor_default()(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(source, true).forEach(function (key) {defineProperty_default()(target, key, source[key]);});} else if (get_own_property_descriptors_default.a) {define_properties_default()(target, get_own_property_descriptors_default()(source));} else {ownKeys(source).forEach(function (key) {define_property_default()(target, key, get_own_property_descriptor_default()(source, key));});}}return target;}var context_tree_ContextTree = /*#__PURE__*/function () {
  function ContextTree(value) {classCallCheck_default()(this, ContextTree);
    this.root = createNode(value || {});
  }createClass_default()(ContextTree, [{ key: "set", value: function set(

    path, value) {
      var parent = this.getParent(path, true);
      if (!parent) {
        updateNode(this.root, value, null);
        return;
      }

      var key = path[path.length - 1];
      var children = parent.children;
      if (children[key]) {
        updateNode(children[key], value, parent);
        return;
      }

      children[key] = createNode(value, parent);
    }

    // Get the "best" node (node or nearest parent) and return its value.
  }, { key: "get", value: function get(path) {
      path = path || [];

      if (path.length < 1) {
        return this.root.value;
      }

      var branch = this.root;
      var child;
      var token;
      for (var i = 0; i < path.length; i++) {
        token = path[i];
        child = branch.children;
        if (!child[token]) {
          break;
        }
        branch = child[token];
      }

      return branch && branch.protoValue;
    } }, { key: "getParent", value: function getParent(

    path, ensureExists) {
      if (!path || path.length < 1) {
        return null;
      }

      if (path.length < 2) {
        return this.root;
      }

      return path.slice(0, -1).reduce(function (branch, token) {
        if (!branch) {
          return branch;
        }

        var children = branch.children;

        if (!children[token] && ensureExists) {
          children[token] = createNode(null, branch);
        }

        return children[token];
      }, this.root);
    } }]);return ContextTree;}();


// =========================
// Utilities
// =========================

function createNode(value, parent) {
  return updateNode({ children: {} }, value, parent);
}

function updateNode(node, value, parent) {
  node.value = value || {};
  node.protoValue = parent ? _objectSpread({},
  parent.protoValue, {}, node.value) :
  node.value;

  keys_default()(node.children).forEach(function (prop) {
    var child = node.children[prop];
    node.children[prop] = updateNode(child, child.value, node);
  });

  return node;
}
// CONCATENATED MODULE: ./src/specmap/index.js









var HARD_LIMIT = 100;var

specmap_SpecMap = /*#__PURE__*/function () {
  function SpecMap(opts) {var _this = this;classCallCheck_default()(this, SpecMap);
    object_assign_default()(this, {
      spec: '',
      debugLevel: 'info',
      plugins: [],
      pluginHistory: {},
      errors: [],
      mutations: [],
      promisedPatches: [],
      state: {},
      patches: [],
      context: {},
      contextTree: new context_tree_ContextTree(),
      showDebug: false,
      allPatches: [], // only populated if showDebug is true
      pluginProp: 'specMap',
      libMethods: object_assign_default()(create_default()(this), lib, {
        getInstance: function getInstance() {return _this;} }),

      allowMetaPatches: false },
    opts);

    // Lib methods bound
    this.get = this._get.bind(this);
    this.getContext = this._getContext.bind(this);
    this.hasRun = this._hasRun.bind(this);

    this.wrappedPlugins = this.plugins.
    map(this.wrapPlugin.bind(this)).
    filter(lib.isFunction);

    // Initial patch(s)
    this.patches.push(lib.add([], this.spec));
    this.patches.push(lib.context([], this.context));
    this.updatePatches(this.patches);
  }createClass_default()(SpecMap, [{ key: "debug", value: function debug(

    level) {
      if (this.debugLevel === level) {var _console;for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
        (_console = console).log.apply(_console, args); // eslint-disable-line no-console
      }
    } }, { key: "verbose", value: function verbose(

    header) {
      if (this.debugLevel === 'verbose') {var _console2;for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
        (_console2 = console).log.apply(_console2, ["[".concat(header, "]   ")].concat(args)); // eslint-disable-line no-console
      }
    } }, { key: "wrapPlugin", value: function wrapPlugin(

    plugin, name) {
      var pathDiscriminator = this.pathDiscriminator;
      var ctx = null;
      var fn;

      if (plugin[this.pluginProp]) {
        ctx = plugin;
        fn = plugin[this.pluginProp];
      } else
      if (lib.isFunction(plugin)) {
        fn = plugin;
      } else
      if (lib.isObject(plugin)) {
        fn = createKeyBasedPlugin(plugin);
      }

      return object_assign_default()(fn.bind(ctx), {
        pluginName: plugin.name || name,
        isGenerator: lib.isGenerator(fn) });


      // Expected plugin interface: {key: string, plugin: fn*}
      // This traverses depth-first and immediately applies yielded patches.
      // This strategy should work well for most plugins (including the built-ins).
      // We might consider making this (traversing & application) configurable later.
      function createKeyBasedPlugin(pluginObj) {
        var isSubPath = function isSubPath(path, tested) {
          if (!is_array_default()(path)) {
            return true;
          }

          return path.every(function (val, i) {
            return val === tested[i];
          });
        };

        return (/*#__PURE__*/regenerator_default.a.mark(function _callee(patches, specmap) {var _marked, refCache, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, patch,






            traverse;return regenerator_default.a.wrap(function _callee$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:traverse = function _ref(obj, path, patch) {var parentIndex, parent, indexOfFirstProperties, isRootProperties, traversed, _i, _Object$keys, key, val, updatedPath, isObj, objRef, isWithinPathDiscriminator;return regenerator_default.a.wrap(function traverse$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                              lib.isObject(obj)) {_context.next = 6;break;}if (!(
                              pluginObj.key === path[path.length - 1])) {_context.next = 4;break;}_context.next = 4;
                              return pluginObj.plugin(obj, pluginObj.key, path, specmap);case 4:_context.next = 30;break;case 6:



                              parentIndex = path.length - 1;
                              parent = path[parentIndex];
                              indexOfFirstProperties = path.indexOf('properties');
                              isRootProperties = parent === 'properties' && parentIndex === indexOfFirstProperties;
                              traversed = specmap.allowMetaPatches && refCache[obj.$$ref];_i = 0, _Object$keys =

                              keys_default()(obj);case 12:if (!(_i < _Object$keys.length)) {_context.next = 30;break;}key = _Object$keys[_i];
                              val = obj[key];
                              updatedPath = path.concat(key);
                              isObj = lib.isObject(val);
                              objRef = obj.$$ref;if (

                              traversed) {_context.next = 22;break;}if (!
                              isObj) {_context.next = 22;break;}
                              // Only store the ref if it exists
                              if (specmap.allowMetaPatches && objRef) {
                                refCache[objRef] = true;
                              }
                              return _context.delegateYield(traverse(val, updatedPath, patch), "t0", 22);case 22:if (!(



                              !isRootProperties && key === pluginObj.key)) {_context.next = 27;break;}
                              isWithinPathDiscriminator = isSubPath(pathDiscriminator, path);if (!(
                              !pathDiscriminator || isWithinPathDiscriminator)) {_context.next = 27;break;}_context.next = 27;
                              return pluginObj.plugin(val, key, updatedPath, specmap, patch);case 27:_i++;_context.next = 12;break;case 30:case "end":return _context.stop();}}}, _marked);};_marked = /*#__PURE__*/regenerator_default.a.mark(traverse);refCache = {};_iteratorNormalCompletion = true;_didIteratorError = false;_iteratorError = undefined;_context2.prev = 6;_iterator = get_iterator_default()(patches.filter(lib.isAdditiveMutation));case 8:if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {_context2.next = 14;break;}patch = _step.value;return _context2.delegateYield(traverse(patch.value, patch.path, patch), "t0", 11);case 11:_iteratorNormalCompletion = true;_context2.next = 8;break;case 14:_context2.next = 20;break;case 16:_context2.prev = 16;_context2.t1 = _context2["catch"](6);_didIteratorError = true;_iteratorError = _context2.t1;case 20:_context2.prev = 20;_context2.prev = 21;if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}case 23:_context2.prev = 23;if (!_didIteratorError) {_context2.next = 26;break;}throw _iteratorError;case 26:return _context2.finish(23);case 27:return _context2.finish(20);case 28:case "end":return _context2.stop();}}}, _callee, null, [[6, 16, 20, 28], [21,, 23, 27]]);}));






      }
    } }, { key: "nextPlugin", value: function nextPlugin()

    {var _this2 = this;
      // Array.prototype.find doesn't work in IE 11 :(
      return find_default()(this.wrappedPlugins, function (plugin) {
        var mutations = _this2.getMutationsForPlugin(plugin);
        return mutations.length > 0;
      });
    } }, { key: "nextPromisedPatch", value: function nextPromisedPatch()

    {
      if (this.promisedPatches.length > 0) {
        return promise_default.a.race(this.promisedPatches.map(function (patch) {return patch.value;}));
      }
    } }, { key: "getPluginHistory", value: function getPluginHistory(

    plugin) {
      var name = this.getPluginName(plugin);
      return this.pluginHistory[name] || [];
    } }, { key: "getPluginRunCount", value: function getPluginRunCount(

    plugin) {
      return this.getPluginHistory(plugin).length;
    } }, { key: "getPluginHistoryTip", value: function getPluginHistoryTip(

    plugin) {
      var history = this.getPluginHistory(plugin);
      var val = history && history[history.length - 1];
      return val || {};
    } }, { key: "getPluginMutationIndex", value: function getPluginMutationIndex(

    plugin) {
      var mi = this.getPluginHistoryTip(plugin).mutationIndex;
      return typeof mi !== 'number' ? -1 : mi;
    } }, { key: "getPluginName", value: function getPluginName(

    plugin) {
      return plugin.pluginName;
    } }, { key: "updatePluginHistory", value: function updatePluginHistory(

    plugin, val) {
      var name = this.getPluginName(plugin);
      var history = this.pluginHistory[name] = this.pluginHistory[name] || [];
      history.push(val);
    } }, { key: "updatePatches", value: function updatePatches(

    patches, plugin) {var _this3 = this;
      lib.normalizeArray(patches).forEach(function (patch) {
        if (patch instanceof Error) {
          _this3.errors.push(patch);
          return;
        }

        try {
          if (!lib.isObject(patch)) {
            _this3.debug('updatePatches', 'Got a non-object patch', patch);
            return;
          }

          if (_this3.showDebug) {
            _this3.allPatches.push(patch);
          }

          if (lib.isPromise(patch.value)) {
            _this3.promisedPatches.push(patch);
            _this3.promisedPatchThen(patch);
            return;
          }

          if (lib.isContextPatch(patch)) {
            _this3.setContext(patch.path, patch.value);
            return;
          }

          if (lib.isMutation(patch)) {
            _this3.updateMutations(patch);
            return;
          }
        }
        catch (e) {
          console.error(e); // eslint-disable-line no-console
          _this3.errors.push(e);
        }
      });
    } }, { key: "updateMutations", value: function updateMutations(

    patch) {
      if (typeof_default()(patch.value) === 'object' && !is_array_default()(patch.value) && this.allowMetaPatches) {
        patch.value = object_assign_default()({}, patch.value);
      }

      var result = lib.applyPatch(this.state, patch, { allowMetaPatches: this.allowMetaPatches });
      if (result) {
        this.mutations.push(patch);
        this.state = result;
      }
    } }, { key: "removePromisedPatch", value: function removePromisedPatch(

    patch) {
      var index = this.promisedPatches.indexOf(patch);
      if (index < 0) {
        this.debug('Tried to remove a promisedPatch that isn\'t there!');
        return;
      }
      this.promisedPatches.splice(index, 1);
    } }, { key: "promisedPatchThen", value: function promisedPatchThen(

    patch) {var _this4 = this;
      var value = patch.value = patch.value.
      then(function (val) {
        var promisedPatch = object_assign_default()({}, patch, { value: val });
        _this4.removePromisedPatch(patch);
        _this4.updatePatches(promisedPatch);
      }).
      catch(function (e) {
        _this4.removePromisedPatch(patch);
        _this4.updatePatches(e);
      });
      return value;
    } }, { key: "getMutations", value: function getMutations(

    from, to) {
      from = from || 0;
      if (typeof to !== 'number') {
        to = this.mutations.length;
      }
      return this.mutations.slice(from, to);
    } }, { key: "getCurrentMutations", value: function getCurrentMutations()

    {
      return this.getMutationsForPlugin(this.getCurrentPlugin());
    } }, { key: "getMutationsForPlugin", value: function getMutationsForPlugin(

    plugin) {
      var tip = this.getPluginMutationIndex(plugin);
      return this.getMutations(tip + 1);
    } }, { key: "getCurrentPlugin", value: function getCurrentPlugin()

    {
      return this.currentPlugin;
    } }, { key: "getPatchesOfType", value: function getPatchesOfType(

    patches, fn) {
      return patches.filter(fn);
    } }, { key: "getLib", value: function getLib()

    {
      return this.libMethods;
    } }, { key: "_get", value: function _get(

    path) {
      return lib.getIn(this.state, path);
    } }, { key: "_getContext", value: function _getContext(

    path) {
      return this.contextTree.get(path);
    } }, { key: "setContext", value: function setContext(

    path, value) {
      return this.contextTree.set(path, value);
    } }, { key: "_hasRun", value: function _hasRun(

    count) {
      var times = this.getPluginRunCount(this.getCurrentPlugin());
      return times > (count || 0);
    } }, { key: "_clone", value: function _clone(

    obj) {
      // For debugging only
      return JSON.parse(stringify_default()(obj));
    } }, { key: "dispatch", value: function dispatch()

    {var _this5 = this;
      var that = this;
      var plugin = this.nextPlugin();

      if (!plugin) {
        var nextPromise = this.nextPromisedPatch();
        if (nextPromise) {
          return nextPromise.
          then(function () {return _this5.dispatch();}).
          catch(function () {return _this5.dispatch();});
        }

        // We're done!
        var result = { spec: this.state, errors: this.errors };
        if (this.showDebug) {
          result.patches = this.allPatches;
        }
        return promise_default.a.resolve(result);
      }

      // Makes sure plugin isn't running an endless loop
      that.pluginCount = that.pluginCount || {};
      that.pluginCount[plugin] = (that.pluginCount[plugin] || 0) + 1;
      if (that.pluginCount[plugin] > HARD_LIMIT) {
        return promise_default.a.resolve({
          spec: that.state,
          errors: that.errors.concat(new Error("We've reached a hard limit of ".concat(HARD_LIMIT, " plugin runs"))) });

      }

      // A different plugin runs, wait for all promises to resolve, then retry
      if (plugin !== this.currentPlugin && this.promisedPatches.length) {
        var promises = this.promisedPatches.map(function (p) {return p.value;});

        // Waits for all to settle instead of Promise.all which stops on rejection
        return promise_default.a.all(promises.map(function (promise) {
          return promise.then(Function, Function);
        })).then(function () {return _this5.dispatch();});
      }

      // Ok, run the plugin
      return executePlugin();

      function executePlugin() {
        that.currentPlugin = plugin;
        var mutations = that.getCurrentMutations();
        var lastMutationIndex = that.mutations.length - 1;

        try {
          if (plugin.isGenerator) {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
              for (var _iterator2 = get_iterator_default()(plugin(mutations, that.getLib())), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var yieldedPatches = _step2.value;
                updatePatches(yieldedPatches);
              }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return != null) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
          } else
          {
            var newPatches = plugin(mutations, that.getLib());
            updatePatches(newPatches);
          }
        }
        catch (e) {
          console.error(e); // eslint-disable-line no-console
          updatePatches([object_assign_default()(create_default()(e), { plugin: plugin })]);
        } finally
        {
          that.updatePluginHistory(plugin, { mutationIndex: lastMutationIndex });
        }

        return that.dispatch();
      }

      function updatePatches(patches) {
        if (patches) {
          patches = lib.fullyNormalizeArray(patches);
          that.updatePatches(patches, plugin);
        }
      }
    } }]);return SpecMap;}();


function mapSpec(opts) {
  return new specmap_SpecMap(opts).dispatch();
}

var plugins = { refs: refs, allOf: all_of, parameters: lib_parameters, properties: lib_properties };

// EXTERNAL MODULE: external "lodash/isObject"
var isObject_ = __webpack_require__(29);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject_);

// CONCATENATED MODULE: ./src/helpers.js



var toLower = function toLower(str) {return String.prototype.toLowerCase.call(str);};
var escapeString = function escapeString(str) {
  return str.replace(/[^\w]/gi, '_');
};

// Spec version detection
function isOAS3(spec) {
  var oasVersion = spec.openapi;
  if (!oasVersion) {
    return false;
  }

  return startsWith_default()(oasVersion, '3');
}

function isSwagger2(spec) {
  var swaggerVersion = spec.swagger;
  if (!swaggerVersion) {
    return false;
  }

  return startsWith_default()(swaggerVersion, '2');
}

// Strategy for determining operationId
function opId(operation, pathName) {var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},v2OperationIdCompatibilityMode = _ref.v2OperationIdCompatibilityMode;
  if (!operation || typeof_default()(operation) !== 'object') {
    return null;
  }
  var idWithoutWhitespace = (operation.operationId || '').replace(/\s/g, '');
  if (idWithoutWhitespace.length) {
    return escapeString(operation.operationId);
  }
  return idFromPathMethod(pathName, method, { v2OperationIdCompatibilityMode: v2OperationIdCompatibilityMode });
}


// Create a generated operationId from pathName + method
function idFromPathMethod(pathName, method) {var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},v2OperationIdCompatibilityMode = _ref2.v2OperationIdCompatibilityMode;
  if (v2OperationIdCompatibilityMode) {
    var res = "".concat(method.toLowerCase(), "_").concat(pathName).
    replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, '_');

    res = res || "".concat(pathName.substring(1), "_").concat(method);

    return res.
    replace(/((_){2,})/g, '_').
    replace(/^(_)*/g, '').
    replace(/([_])*$/g, '');
  }
  return "".concat(toLower(method)).concat(escapeString(pathName));
}

function legacyIdFromPathMethod(pathName, method) {
  return "".concat(toLower(method), "-").concat(pathName);
}

// Get the operation, based on operationId ( just return the object, no inheritence )
function getOperationRaw(spec, id) {
  if (!spec || !spec.paths) {
    return null;
  }


  return findOperation(spec, function (_ref3) {var pathName = _ref3.pathName,method = _ref3.method,operation = _ref3.operation;
    if (!operation || typeof_default()(operation) !== 'object') {
      return false;
    }

    var rawOperationId = operation.operationId; // straight from the source
    var operationId = opId(operation, pathName, method);
    var legacyOperationId = legacyIdFromPathMethod(pathName, method);

    return [operationId, legacyOperationId, rawOperationId].
    some(function (val) {return val && val === id;});
  });
}

// Will stop iterating over the operations and return the operationObj
// as soon as predicate returns true
function findOperation(spec, predicate) {
  return eachOperation(spec, predicate, true) || null;
}

// iterate over each operation, and fire a callback with details
// `find=true` will stop iterating, when the cb returns truthy
function eachOperation(spec, cb, find) {
  if (!spec || typeof_default()(spec) !== 'object' || !spec.paths || typeof_default()(spec.paths) !== 'object') {
    return null;
  }var

  paths = spec.paths;

  // Iterate over the spec, collecting operations
  for (var pathName in paths) {
    for (var method in paths[pathName]) {
      if (method.toUpperCase() === 'PARAMETERS') {
        continue;
      }
      var operation = paths[pathName][method];
      if (!operation || typeof_default()(operation) !== 'object') {
        continue;
      }

      var operationObj = {
        spec: spec,
        pathName: pathName,
        method: method.toUpperCase(),
        operation: operation };

      var cbValue = cb(operationObj);

      if (find && cbValue) {
        return operationObj;
      }
    }
  }
}

// REVIEW: OAS3: identify normalization steps that need changes
// ...maybe create `normalizeOAS3`?

function normalizeSwagger(parsedSpec) {var
  spec = parsedSpec.spec;var
  paths = spec.paths;
  var map = {};

  if (!paths || spec.$$normalized) {
    return parsedSpec;
  }

  for (var pathName in paths) {
    var path = paths[pathName];

    if (!isObject_default()(path)) {
      continue;
    }

    var pathParameters = path.parameters;var _loop = function _loop(

    method) {
      var operation = path[method];
      if (!isObject_default()(operation)) {
        return "continue";
      }

      var oid = opId(operation, pathName, method);

      if (oid) {
        if (map[oid]) {
          map[oid].push(operation);
        } else
        {
          map[oid] = [operation];
        }

        var opList = map[oid];
        if (opList.length > 1) {
          opList.forEach(function (o, i) {
            o.__originalOperationId = o.__originalOperationId || o.operationId;
            o.operationId = "".concat(oid).concat(i + 1);
          });
        } else
        if (typeof operation.operationId !== 'undefined') {
          // Ensure we always add the normalized operation ID if one already exists
          // ( potentially different, given that we normalize our IDs)
          // ... _back_ to the spec. Otherwise, they might not line up
          var obj = opList[0];
          obj.__originalOperationId = obj.__originalOperationId || operation.operationId;
          obj.operationId = oid;
        }
      }

      if (method !== 'parameters') {
        // Add inherited consumes, produces, parameters, securities
        var inheritsList = [];
        var toBeInherit = {};

        // Global-levels
        for (var key in spec) {
          if (key === 'produces' || key === 'consumes' || key === 'security') {
            toBeInherit[key] = spec[key];
            inheritsList.push(toBeInherit);
          }
        }

        // Path-levels
        if (pathParameters) {
          toBeInherit.parameters = pathParameters;
          inheritsList.push(toBeInherit);
        }

        if (inheritsList.length) {
          for (var _i = 0, _inheritsList = inheritsList; _i < _inheritsList.length; _i++) {var inherits = _inheritsList[_i];
            for (var inheritName in inherits) {
              if (!operation[inheritName]) {
                operation[inheritName] = inherits[inheritName];
              } else
              if (inheritName === 'parameters') {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {var _loop2 = function _loop2() {var
                    param = _step.value;
                    var exists = operation[inheritName].some(function (opParam) {
                      return opParam.name && opParam.name === param.name ||
                      opParam.$ref && opParam.$ref === param.$ref ||
                      opParam.$$ref && opParam.$$ref === param.$$ref ||
                      opParam === param;
                    });

                    if (!exists) {
                      operation[inheritName].push(param);
                    }};for (var _iterator = get_iterator_default()(inherits[inheritName]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {_loop2();
                  }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
              }
            }
          }
        }
      }};for (var method in path) {var _ret = _loop(method);if (_ret === "continue") continue;
    }
  }

  spec.$$normalized = true;

  return parsedSpec;
}
// CONCATENATED MODULE: ./src/resolver.js




function makeFetchJSON(http) {var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var
  requestInterceptor = opts.requestInterceptor,responseInterceptor = opts.responseInterceptor;
  // Set credentials with 'http.withCredentials' value
  var credentials = http.withCredentials ? 'include' : 'same-origin';
  return function (docPath) {
    return http({
      url: docPath,
      loadSpec: true,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      headers: {
        Accept: 'application/json' },

      credentials: credentials }).

    then(function (res) {
      return res.body;
    });
  };
}

// Wipe out the http cache
function resolver_clearCache() {
  plugins.refs.clearCache();
}

function resolve(obj) {var

  fetch =


  obj.fetch,spec = obj.spec,url = obj.url,mode = obj.mode,_obj$allowMetaPatches = obj.allowMetaPatches,allowMetaPatches = _obj$allowMetaPatches === void 0 ? true : _obj$allowMetaPatches,pathDiscriminator = obj.pathDiscriminator,modelPropertyMacro = obj.modelPropertyMacro,parameterMacro = obj.parameterMacro,requestInterceptor = obj.requestInterceptor,responseInterceptor = obj.responseInterceptor,skipNormalization = obj.skipNormalization,useCircularStructures = obj.useCircularStructures;var

  http = obj.http,baseDoc = obj.baseDoc;

  // @TODO Swagger-UI uses baseDoc instead of url, this is to allow both
  // need to fix and pick one.
  baseDoc = baseDoc || url;

  // Provide a default fetch implementation
  // TODO fetch should be removed, and http used instead
  http = fetch || http || http_http;

  if (!spec) {
    return makeFetchJSON(http, { requestInterceptor: requestInterceptor, responseInterceptor: responseInterceptor })(baseDoc).then(doResolve);
  }

  return doResolve(spec);

  function doResolve(_spec) {
    if (baseDoc) {
      plugins.refs.docCache[baseDoc] = _spec;
    }

    // Build a json-fetcher ( ie: give it a URL and get json out )
    plugins.refs.fetchJSON = makeFetchJSON(http, { requestInterceptor: requestInterceptor, responseInterceptor: responseInterceptor });

    var plugs = [plugins.refs];

    if (typeof parameterMacro === 'function') {
      plugs.push(plugins.parameters);
    }

    if (typeof modelPropertyMacro === 'function') {
      plugs.push(plugins.properties);
    }

    if (mode !== 'strict') {
      plugs.push(plugins.allOf);
    }

    // mapSpec is where the hard work happens, see https://github.com/swagger-api/specmap for more details
    return mapSpec({
      spec: _spec,
      context: { baseDoc: baseDoc },
      plugins: plugs,
      allowMetaPatches: allowMetaPatches, // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: pathDiscriminator, // for lazy resolution
      parameterMacro: parameterMacro,
      modelPropertyMacro: modelPropertyMacro,
      useCircularStructures: useCircularStructures }).
    then(skipNormalization ? /*#__PURE__*/function () {var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(a) {return regenerator_default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt("return", a);case 1:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}() : normalizeSwagger);
  }
}
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(16);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// CONCATENATED MODULE: ./src/subtree-resolver/index.js
function subtree_resolver_ownKeys(object, enumerableOnly) {var keys = keys_default()(object);if (get_own_property_symbols_default.a) {var symbols = get_own_property_symbols_default()(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return get_own_property_descriptor_default()(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function subtree_resolver_objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {subtree_resolver_ownKeys(source, true).forEach(function (key) {defineProperty_default()(target, key, source[key]);});} else if (get_own_property_descriptors_default.a) {define_properties_default()(target, get_own_property_descriptors_default()(source));} else {subtree_resolver_ownKeys(source).forEach(function (key) {define_property_default()(target, key, get_own_property_descriptor_default()(source, key));});}}return target;} // The subtree resolver is a higher-level interface that allows you to
// get the same result that you would from `Swagger.resolve`, but focuses on
// a subtree of your object.
//
// It makes several assumptions that allow you to think less about what resolve,
// specmap, and normalizeSwagger are doing: if this is not suitable for you,
// you can emulate `resolveSubtree`'s behavior by talking to the traditional
// resolver directly.
//
// By providing a top-level `obj` and a `path` to resolve within, the subtree
// at `path` will be resolved and normalized in the context of your top-level
// `obj`. You'll get the resolved subtree you're interest in as a return value
// (or, you can use `returnEntireTree` to get everything back).
//
// This is useful for cases where resolving your entire object is unnecessary
// and/or non-performant; we use this interface for lazily resolving operations
// and models in Swagger-UI, which allows us to handle larger definitions.
//
// It's likely that Swagger-Client will rely entirely on lazy resolving in
// future versions.
//
// TODO: move the remarks above into project documentation






function resolveSubtree(_x, _x2) {return _resolveSubtree.apply(this, arguments);}function _resolveSubtree() {_resolveSubtree = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(obj, path) {var opts,returnEntireTree,baseDoc,requestInterceptor,responseInterceptor,parameterMacro,modelPropertyMacro,useCircularStructures,resolveOptions,_normalizeSwagger,normalized,result,_args = arguments;return regenerator_default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:opts = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};

            returnEntireTree =






            opts.returnEntireTree, baseDoc = opts.baseDoc, requestInterceptor = opts.requestInterceptor, responseInterceptor = opts.responseInterceptor, parameterMacro = opts.parameterMacro, modelPropertyMacro = opts.modelPropertyMacro, useCircularStructures = opts.useCircularStructures;

            resolveOptions = {
              pathDiscriminator: path,
              baseDoc: baseDoc,
              requestInterceptor: requestInterceptor,
              responseInterceptor: responseInterceptor,
              parameterMacro: parameterMacro,
              modelPropertyMacro: modelPropertyMacro,
              useCircularStructures: useCircularStructures };_normalizeSwagger =


            normalizeSwagger({
              spec: obj }), normalized = _normalizeSwagger.spec;_context.next = 6;return (


              resolve(subtree_resolver_objectSpread({},
              resolveOptions, {
                spec: normalized,
                allowMetaPatches: true,
                skipNormalization: true })));case 6:result = _context.sent;


            if (!returnEntireTree && is_array_default()(path) && path.length) {
              result.spec = get_default()(result.spec, path) || null;
            }return _context.abrupt("return",

            result);case 9:case "end":return _context.stop();}}}, _callee);}));return _resolveSubtree.apply(this, arguments);}
// EXTERNAL MODULE: external "lodash/pick"
var pick_ = __webpack_require__(37);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick_);

// CONCATENATED MODULE: ./src/interfaces.js
function interfaces_ownKeys(object, enumerableOnly) {var keys = keys_default()(object);if (get_own_property_symbols_default.a) {var symbols = get_own_property_symbols_default()(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return get_own_property_descriptor_default()(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function interfaces_objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {interfaces_ownKeys(source, true).forEach(function (key) {defineProperty_default()(target, key, source[key]);});} else if (get_own_property_descriptors_default.a) {define_properties_default()(target, get_own_property_descriptors_default()(source));} else {interfaces_ownKeys(source).forEach(function (key) {define_property_default()(target, key, get_own_property_descriptor_default()(source, key));});}}return target;}


var nullFn = function nullFn() {return null;};

var interfaces_normalizeArray = function normalizeArray(arg) {
  return is_array_default()(arg) ? arg : [arg];
};

// To allow stubbing of functions
var interfaces_self = {
  mapTagOperations: mapTagOperations,
  makeExecute: makeExecute


  // Make an execute, bound to arguments defined in mapTagOperation's callback (cb)
};function makeExecute() {var swaggerJs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (_ref) {var pathName = _ref.pathName,method = _ref.method,operationId = _ref.operationId;return function (parameters) {var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return swaggerJs.execute(interfaces_objectSpread({
        spec: swaggerJs.spec },
      pick_default()(swaggerJs, 'requestInterceptor', 'responseInterceptor', 'userFetch'), {
        pathName: pathName,
        method: method,
        parameters: parameters,
        operationId: operationId },
      opts));

    };};
}

// Creates an interface with tags+operations = execute
// The shape
// { apis: { [tag]: { operations: [operation]: { execute }}}}
// NOTE: this is mostly for compatibility
function makeApisTagOperationsOperationExecute() {var swaggerJs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // { apis: tag: operations: execute }
  var cb = interfaces_self.makeExecute(swaggerJs);
  var tagOperations = interfaces_self.mapTagOperations({
    v2OperationIdCompatibilityMode: swaggerJs.v2OperationIdCompatibilityMode,
    spec: swaggerJs.spec,
    cb: cb });


  var apis = {};
  for (var tag in tagOperations) {
    apis[tag] = {
      operations: {} };

    for (var op in tagOperations[tag]) {
      apis[tag].operations[op] = { execute: tagOperations[tag][op] };
    }
  }

  return { apis: apis };
}

// .apis[tag][operationId]:ExecuteFunction interface
function makeApisTagOperation() {var swaggerJs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = interfaces_self.makeExecute(swaggerJs);
  return {
    apis: interfaces_self.mapTagOperations({
      v2OperationIdCompatibilityMode: swaggerJs.v2OperationIdCompatibilityMode,
      spec: swaggerJs.spec,
      cb: cb }) };


}

/**
   * Iterates over a spec, creating a hash of {[tag]: { [operationId], ... }, ...}
   * with the value of calling `cb`.
   *
   * `spec` is a OAI v2.0 compliant specification object
   * `cb` is called with ({ spec, operation, path, method })
   * `defaultTag` will house all non-tagged operations
   *
   */
function mapTagOperations(_ref2) {var spec = _ref2.spec,_ref2$cb = _ref2.cb,cb = _ref2$cb === void 0 ? nullFn : _ref2$cb,_ref2$defaultTag = _ref2.defaultTag,defaultTag = _ref2$defaultTag === void 0 ? 'default' : _ref2$defaultTag,v2OperationIdCompatibilityMode = _ref2.v2OperationIdCompatibilityMode;
  var operationIdCounter = {};
  var tagOperations = {}; // Will house all tags + operations
  eachOperation(spec, function (_ref3) {var pathName = _ref3.pathName,method = _ref3.method,operation = _ref3.operation;
    var tags = operation.tags ? interfaces_normalizeArray(operation.tags) : [defaultTag];

    tags.forEach(function (tag) {
      if (typeof tag !== 'string') {
        return;
      }
      var tagObj = tagOperations[tag] = tagOperations[tag] || {};
      var id = opId(operation, pathName, method, { v2OperationIdCompatibilityMode: v2OperationIdCompatibilityMode });
      var cbResult = cb({ spec: spec, pathName: pathName, method: method, operation: operation, operationId: id });

      if (operationIdCounter[id]) {
        operationIdCounter[id]++;
        tagObj["".concat(id).concat(operationIdCounter[id])] = cbResult;
      } else
      if (typeof tagObj[id] !== 'undefined') {
        // Bump counter ( for this operationId )
        var originalCounterValue = operationIdCounter[id] || 1;
        operationIdCounter[id] = originalCounterValue + 1;
        // Append _x to the operationId
        tagObj["".concat(id).concat(operationIdCounter[id])] = cbResult;

        // Rename the first operationId
        var temp = tagObj[id];
        delete tagObj[id];
        tagObj["".concat(id).concat(originalCounterValue)] = temp;
      } else
      {
        // Assign callback result ( usually a bound function )
        tagObj[id] = cbResult;
      }
    });
  });

  return tagOperations;
}
// EXTERNAL MODULE: external "@babel/runtime-corejs2/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(38);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "lodash/isPlainObject"
var isPlainObject_ = __webpack_require__(39);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_);

// EXTERNAL MODULE: external "lodash/isArray"
var isArray_ = __webpack_require__(40);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_);

// EXTERNAL MODULE: external "btoa"
var external_btoa_ = __webpack_require__(19);
var external_btoa_default = /*#__PURE__*/__webpack_require__.n(external_btoa_);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(41);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// CONCATENATED MODULE: ./src/execute/swagger2/parameter-builders.js
// These functions will update the request.
// They'll be given {req, value, paramter, spec, operation}.


/* harmony default export */ var parameter_builders = ({
  body: bodyBuilder,
  header: headerBuilder,
  query: queryBuilder,
  path: pathBuilder,
  formData: formDataBuilder



  // Add the body to the request
});function bodyBuilder(_ref) {var req = _ref.req,value = _ref.value;
  req.body = value;
}

// Add a form data object.
function formDataBuilder(_ref2) {var req = _ref2.req,value = _ref2.value,parameter = _ref2.parameter;
  if (value || parameter.allowEmptyValue) {
    req.form = req.form || {};
    req.form[parameter.name] = {
      value: value,
      allowEmptyValue: parameter.allowEmptyValue,
      collectionFormat: parameter.collectionFormat };

  }
}

// Add a header to the request
function headerBuilder(_ref3) {var req = _ref3.req,parameter = _ref3.parameter,value = _ref3.value;
  req.headers = req.headers || {};
  if (typeof value !== 'undefined') {
    req.headers[parameter.name] = value;
  }
}

// Replace path paramters, with values ( ie: the URL )
function pathBuilder(_ref4) {var req = _ref4.req,value = _ref4.value,parameter = _ref4.parameter;
  req.url = req.url.split("{".concat(parameter.name, "}")).join(encodeURIComponent(value));
}

// Add a query to the `query` object, which will later be stringified into the URL's search
function queryBuilder(_ref5) {var req = _ref5.req,value = _ref5.value,parameter = _ref5.parameter;
  req.query = req.query || {};

  if (value === false && parameter.type === 'boolean') {
    value = 'false';
  }

  if (value === 0 && ['number', 'integer'].indexOf(parameter.type) > -1) {
    value = '0';
  }

  if (value) {
    req.query[parameter.name] = {
      collectionFormat: parameter.collectionFormat,
      value: value };

  } else
  if (parameter.allowEmptyValue && value !== undefined) {
    var paramName = parameter.name;
    req.query[paramName] = req.query[paramName] || {};
    req.query[paramName].allowEmptyValue = true;
  }
}
// EXTERNAL MODULE: external "encode-3986"
var external_encode_3986_ = __webpack_require__(48);

// EXTERNAL MODULE: external "utf8-bytes"
var external_utf8_bytes_ = __webpack_require__(42);
var external_utf8_bytes_default = /*#__PURE__*/__webpack_require__.n(external_utf8_bytes_);

// EXTERNAL MODULE: external "utfstring"
var external_utfstring_ = __webpack_require__(43);

// CONCATENATED MODULE: ./src/execute/oas3/style-serializer.js




var isRfc3986Reserved = function isRfc3986Reserved(char) {return ':/?#[]@!$&\'()*+,;='.indexOf(char) > -1;};
var isRrc3986Unreserved = function isRrc3986Unreserved(char) {
  return /^[a-z0-9\-._~]+$/i.test(char);
};

function encodeDisallowedCharacters(str) {var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},escape = _ref.escape;var parse = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof str === 'number') {
    str = str.toString();
  }
  if (typeof str !== 'string' || !str.length) {
    return str;
  }

  if (!escape) {
    return str;
  }

  if (parse) {
    return JSON.parse(str);
  }

  return Object(external_utfstring_["stringToCharArray"])(str).map(function (char) {
    if (isRrc3986Unreserved(char)) {
      return char;
    }

    if (isRfc3986Reserved(char) && escape === 'unsafe') {
      return char;
    }

    var encoded = (external_utf8_bytes_default()(char) || []).
    map(function (byte) {return "0".concat(byte.toString(16).toUpperCase()).slice(-2);}).
    map(function (encodedByte) {return "%".concat(encodedByte);}).
    join('');

    return encoded;
  }).join('');
}

/* harmony default export */ var style_serializer = (function (config) {var
  value = config.value;

  if (is_array_default()(value)) {
    return encodeArray(config);
  } else
  if (typeof_default()(value) === 'object') {
    return encodeObject(config);
  }
  return encodePrimitive(config);
});

function encodeArray(_ref2) {var key = _ref2.key,value = _ref2.value,style = _ref2.style,explode = _ref2.explode,escape = _ref2.escape;
  var valueEncoder = function valueEncoder(str) {return encodeDisallowedCharacters(str, {
      escape: escape });};


  if (style === 'simple') {
    return value.map(function (val) {return valueEncoder(val);}).join(',');
  }

  if (style === 'label') {
    return ".".concat(value.map(function (val) {return valueEncoder(val);}).join('.'));
  }

  if (style === 'matrix') {
    return value.map(function (val) {return valueEncoder(val);}).reduce(function (prev, curr) {
      if (!prev || explode) {
        return "".concat(prev || '', ";").concat(key, "=").concat(curr);
      }
      return "".concat(prev, ",").concat(curr);
    }, '');
  }

  if (style === 'form') {
    var after = explode ? "&".concat(key, "=") : ',';
    return value.map(function (val) {return valueEncoder(val);}).join(after);
  }

  if (style === 'spaceDelimited') {
    var _after = explode ? "".concat(key, "=") : '';
    return value.map(function (val) {return valueEncoder(val);}).join(" ".concat(_after));
  }

  if (style === 'pipeDelimited') {
    var _after2 = explode ? "".concat(key, "=") : '';
    return value.map(function (val) {return valueEncoder(val);}).join("|".concat(_after2));
  }
}

function encodeObject(_ref3) {var key = _ref3.key,value = _ref3.value,style = _ref3.style,explode = _ref3.explode,escape = _ref3.escape;
  var valueEncoder = function valueEncoder(str) {return encodeDisallowedCharacters(str, {
      escape: escape });};


  var valueKeys = keys_default()(value);

  if (style === 'simple') {
    return valueKeys.reduce(function (prev, curr) {
      var val = valueEncoder(value[curr]);
      var middleChar = explode ? '=' : ',';
      var prefix = prev ? "".concat(prev, ",") : '';

      return "".concat(prefix).concat(curr).concat(middleChar).concat(val);
    }, '');
  }

  if (style === 'label') {
    return valueKeys.reduce(function (prev, curr) {
      var val = valueEncoder(value[curr]);
      var middleChar = explode ? '=' : '.';
      var prefix = prev ? "".concat(prev, ".") : '.';

      return "".concat(prefix).concat(curr).concat(middleChar).concat(val);
    }, '');
  }

  if (style === 'matrix' && explode) {
    return valueKeys.reduce(function (prev, curr) {
      var val = valueEncoder(value[curr]);
      var prefix = prev ? "".concat(prev, ";") : ';';

      return "".concat(prefix).concat(curr, "=").concat(val);
    }, '');
  }

  if (style === 'matrix') {
    // no explode
    return valueKeys.reduce(function (prev, curr) {
      var val = valueEncoder(value[curr]);
      var prefix = prev ? "".concat(prev, ",") : ";".concat(key, "=");

      return "".concat(prefix).concat(curr, ",").concat(val);
    }, '');
  }

  if (style === 'form') {
    return valueKeys.reduce(function (prev, curr) {
      var val = valueEncoder(value[curr]);
      var prefix = prev ? "".concat(prev).concat(explode ? '&' : ',') : '';
      var separator = explode ? '=' : ',';

      return "".concat(prefix).concat(curr).concat(separator).concat(val);
    }, '');
  }
}

function encodePrimitive(_ref4) {var key = _ref4.key,value = _ref4.value,style = _ref4.style,escape = _ref4.escape;
  var valueEncoder = function valueEncoder(str) {return encodeDisallowedCharacters(str, {
      escape: escape });};


  if (style === 'simple') {
    return valueEncoder(value);
  }

  if (style === 'label') {
    return ".".concat(valueEncoder(value));
  }

  if (style === 'matrix') {
    return ";".concat(key, "=").concat(valueEncoder(value));
  }

  if (style === 'form') {
    return valueEncoder(value);
  }

  if (style === 'deepObject') {
    return valueEncoder(value, {}, true);
  }
}
// CONCATENATED MODULE: ./src/execute/oas3/parameter-builders.js


/* harmony default export */ var oas3_parameter_builders = ({
  path: parameter_builders_path,
  query: parameter_builders_query,
  header: parameter_builders_header,
  cookie: cookie });


function parameter_builders_path(_ref) {var req = _ref.req,value = _ref.value,parameter = _ref.parameter;var
  name = parameter.name,style = parameter.style,explode = parameter.explode;
  var styledValue = style_serializer({
    key: parameter.name,
    value: value,
    style: style || 'simple',
    explode: explode || false,
    escape: true });


  req.url = req.url.split("{".concat(name, "}")).join(styledValue);
}

function parameter_builders_query(_ref2) {var req = _ref2.req,value = _ref2.value,parameter = _ref2.parameter;
  req.query = req.query || {};

  if (value === false) {
    value = 'false';
  }

  if (value === 0) {
    value = '0';
  }

  if (value) {
    var type = typeof_default()(value);

    if (parameter.style === 'deepObject') {
      var valueKeys = keys_default()(value);
      valueKeys.forEach(function (k) {
        var v = value[k];
        req.query["".concat(parameter.name, "[").concat(k, "]")] = {
          value: style_serializer({
            key: k,
            value: v,
            style: 'deepObject',
            escape: parameter.allowReserved ? 'unsafe' : 'reserved' }),

          skipEncoding: true };

      });
    } else
    if (
    type === 'object' &&
    !is_array_default()(value) && (
    parameter.style === 'form' || !parameter.style) && (
    parameter.explode || parameter.explode === undefined))
    {
      // form explode needs to be handled here,
      // since we aren't assigning to `req.query[parameter.name]`
      // like we usually do.
      var _valueKeys = keys_default()(value);
      _valueKeys.forEach(function (k) {
        var v = value[k];
        req.query[k] = {
          value: style_serializer({
            key: k,
            value: v,
            style: parameter.style || 'form',
            escape: parameter.allowReserved ? 'unsafe' : 'reserved' }),

          skipEncoding: true };

      });
    } else
    {
      req.query[parameter.name] = {
        value: style_serializer({
          key: parameter.name,
          value: value,
          style: parameter.style || 'form',
          explode: typeof parameter.explode === 'undefined' ? true : parameter.explode,
          escape: parameter.allowReserved ? 'unsafe' : 'reserved' }),

        skipEncoding: true };

    }
  } else
  if (parameter.allowEmptyValue && value !== undefined) {
    var paramName = parameter.name;
    req.query[paramName] = req.query[paramName] || {};
    req.query[paramName].allowEmptyValue = true;
  }
}

var PARAMETER_HEADER_BLACKLIST = [
'accept',
'authorization',
'content-type'];


function parameter_builders_header(_ref3) {var req = _ref3.req,parameter = _ref3.parameter,value = _ref3.value;
  req.headers = req.headers || {};

  if (PARAMETER_HEADER_BLACKLIST.indexOf(parameter.name.toLowerCase()) > -1) {
    return;
  }

  if (typeof value !== 'undefined') {
    req.headers[parameter.name] = style_serializer({
      key: parameter.name,
      value: value,
      style: parameter.style || 'simple',
      explode: typeof parameter.explode === 'undefined' ? false : parameter.explode,
      escape: false });

  }
}

function cookie(_ref4) {var req = _ref4.req,parameter = _ref4.parameter,value = _ref4.value;
  req.headers = req.headers || {};
  var type = typeof_default()(value);

  if (type !== 'undefined') {
    var prefix =
    type === 'object' &&
    !is_array_default()(value) &&
    parameter.explode ?
    '' : "".concat(parameter.name, "=");

    req.headers.Cookie = prefix + style_serializer({
      key: parameter.name,
      value: value,
      escape: false,
      style: parameter.style || 'form',
      explode: typeof parameter.explode === 'undefined' ? false : parameter.explode });

  }
}
// CONCATENATED MODULE: ./src/execute/oas3/build-request.js
 // This function runs after the common function,
// `src/execute/index.js#buildRequest`





/* harmony default export */ var build_request = (function (options, req) {var

  operation =




  options.operation,requestBody = options.requestBody,securities = options.securities,spec = options.spec,attachContentTypeForEmptyPayload = options.attachContentTypeForEmptyPayload;var


  requestContentType =
  options.requestContentType;

  req = applySecurities({ request: req, securities: securities, operation: operation, spec: spec });

  var requestBodyDef = operation.requestBody || {};
  var requestBodyMediaTypes = keys_default()(requestBodyDef.content || {});
  var isExplicitContentTypeValid = requestContentType &&
  requestBodyMediaTypes.indexOf(requestContentType) > -1;

  // for OAS3: set the Content-Type
  if (requestBody || attachContentTypeForEmptyPayload) {
    // does the passed requestContentType appear in the requestBody definition?

    if (requestContentType && isExplicitContentTypeValid) {
      req.headers['Content-Type'] = requestContentType;
    } else
    if (!requestContentType) {
      var firstMediaType = requestBodyMediaTypes[0];
      if (firstMediaType) {
        req.headers['Content-Type'] = firstMediaType;
        requestContentType = firstMediaType;
      }
    }
  } else
  if (requestContentType && isExplicitContentTypeValid) {
    req.headers['Content-Type'] = requestContentType;
  }

  // for OAS3: add requestBody to request
  if (requestBody) {
    if (requestContentType) {
      if (requestBodyMediaTypes.indexOf(requestContentType) > -1) {
        // only attach body if the requestBody has a definition for the
        // contentType that has been explicitly set
        if (requestContentType === 'application/x-www-form-urlencoded' || requestContentType.indexOf('multipart/') === 0) {
          if (typeof_default()(requestBody) === 'object') {
            req.form = {};
            keys_default()(requestBody).forEach(function (k) {
              var val = requestBody[k];
              var newVal;

              if (typeof_default()(val) === 'object' && !isFile(val)) {
                if (is_array_default()(val)) {
                  newVal = val.toString();
                } else
                {
                  newVal = stringify_default()(val);
                }
              } else
              {
                newVal = val;
              }

              req.form[k] = {
                value: newVal };

            });
          } else
          {
            req.form = requestBody;
          }
        } else
        {
          req.body = requestBody;
        }
      }
    } else
    {
      req.body = requestBody;
    }
  }

  return req;
});

// Add security values, to operations - that declare their need on them
// Adapted from the Swagger2 implementation
function applySecurities(_ref) {var request = _ref.request,_ref$securities = _ref.securities,securities = _ref$securities === void 0 ? {} : _ref$securities,_ref$operation = _ref.operation,operation = _ref$operation === void 0 ? {} : _ref$operation,spec = _ref.spec;
  var result = assign_default()({}, request);var _securities$authorize =
  securities.authorized,authorized = _securities$authorize === void 0 ? {} : _securities$authorize;
  var security = operation.security || spec.security || [];
  var isAuthorized = authorized && !!keys_default()(authorized).length;
  var securityDef = get_default()(spec, ['components', 'securitySchemes']) || {};

  result.headers = result.headers || {};
  result.query = result.query || {};

  if (!keys_default()(securities).length || !isAuthorized || !security ||
  is_array_default()(operation.security) && !operation.security.length) {
    return request;
  }

  security.forEach(function (securityObj, index) {
    for (var key in securityObj) {
      var auth = authorized[key];
      var schema = securityDef[key];

      if (!auth) {
        continue;
      }

      var value = auth.value || auth;var
      type = schema.type;

      if (auth) {
        if (type === 'apiKey') {
          if (schema.in === 'query') {
            result.query[schema.name] = value;
          }
          if (schema.in === 'header') {
            result.headers[schema.name] = value;
          }
          if (schema.in === 'cookie') {
            result.cookies[schema.name] = value;
          }
        } else
        if (type === 'http') {
          if (schema.scheme === 'basic') {var
            username = value.username,password = value.password;
            var encoded = external_btoa_default()("".concat(username, ":").concat(password));
            result.headers.Authorization = "Basic ".concat(encoded);
          }

          if (schema.scheme === 'bearer') {
            result.headers.Authorization = "Bearer ".concat(value);
          }
        } else
        if (type === 'oauth2') {
          var token = auth.token || {};
          var accessToken = token.access_token;
          var tokenType = token.token_type;

          if (!tokenType || tokenType.toLowerCase() === 'bearer') {
            tokenType = 'Bearer';
          }

          result.headers.Authorization = "".concat(tokenType, " ").concat(accessToken);
        }
      }
    }
  });

  return result;
}
// CONCATENATED MODULE: ./src/execute/swagger2/build-request.js
 // This function runs after the common function,
// `src/execute/index.js#buildRequest`






/* harmony default export */ var swagger2_build_request = (function (options, req) {var

  spec =




  options.spec,operation = options.operation,securities = options.securities,requestContentType = options.requestContentType,attachContentTypeForEmptyPayload = options.attachContentTypeForEmptyPayload;
  // Add securities, which are applicable
  req = build_request_applySecurities({ request: req, securities: securities, operation: operation, spec: spec });

  if (req.body || req.form || attachContentTypeForEmptyPayload) {
    // all following conditionals are Swagger2 only
    if (requestContentType) {
      req.headers['Content-Type'] = requestContentType;
    } else
    if (is_array_default()(operation.consumes)) {
      req.headers['Content-Type'] = operation.consumes[0];
    } else
    if (is_array_default()(spec.consumes)) {
      req.headers['Content-Type'] = spec.consumes[0];
    } else
    if (operation.parameters && operation.parameters.filter(function (p) {return p.type === 'file';}).length) {
      req.headers['Content-Type'] = 'multipart/form-data';
    } else
    if (operation.parameters && operation.parameters.filter(function (p) {return p.in === 'formData';}).length) {
      req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
  } else
  if (requestContentType) {
    var isBodyParamPresent = operation.parameters && operation.parameters.filter(function (p) {return p.in === 'body';}).length > 0;
    var isFormDataParamPresent = operation.parameters && operation.parameters.filter(function (p) {return p.in === 'formData';}).length > 0;
    if (isBodyParamPresent || isFormDataParamPresent) {
      req.headers['Content-Type'] = requestContentType;
    }
  }

  return req;
});

// Add security values, to operations - that declare their need on them
function build_request_applySecurities(_ref) {var request = _ref.request,_ref$securities = _ref.securities,securities = _ref$securities === void 0 ? {} : _ref$securities,_ref$operation = _ref.operation,operation = _ref$operation === void 0 ? {} : _ref$operation,spec = _ref.spec;
  var result = assign_default()({}, request);var _securities$authorize =
  securities.authorized,authorized = _securities$authorize === void 0 ? {} : _securities$authorize,_securities$specSecur = securities.specSecurity,specSecurity = _securities$specSecur === void 0 ? [] : _securities$specSecur;
  var security = operation.security || specSecurity;
  var isAuthorized = authorized && !!keys_default()(authorized).length;
  var securityDef = spec.securityDefinitions;

  result.headers = result.headers || {};
  result.query = result.query || {};

  if (!keys_default()(securities).length || !isAuthorized || !security ||
  is_array_default()(operation.security) && !operation.security.length) {
    return request;
  }

  security.forEach(function (securityObj, index) {
    for (var key in securityObj) {
      var auth = authorized[key];
      if (!auth) {
        continue;
      }

      var token = auth.token;
      var value = auth.value || auth;
      var schema = securityDef[key];var
      type = schema.type;
      var tokenName = schema['x-tokenName'] || 'access_token';
      var oauthToken = token && token[tokenName];
      var tokenType = token && token.token_type;

      if (auth) {
        if (type === 'apiKey') {
          var inType = schema.in === 'query' ? 'query' : 'headers';
          result[inType] = result[inType] || {};
          result[inType][schema.name] = value;
        } else
        if (type === 'basic') {
          if (value.header) {
            result.headers.authorization = value.header;
          } else
          {
            value.base64 = external_btoa_default()("".concat(value.username, ":").concat(value.password));
            result.headers.authorization = "Basic ".concat(value.base64);
          }
        } else
        if (type === 'oauth2' && oauthToken) {
          tokenType = !tokenType || tokenType.toLowerCase() === 'bearer' ? 'Bearer' : tokenType;
          result.headers.authorization = "".concat(tokenType, " ").concat(oauthToken);
        }
      }
    }
  });

  return result;
}
// CONCATENATED MODULE: ./src/execute/index.js
function execute_ownKeys(object, enumerableOnly) {var keys = keys_default()(object);if (get_own_property_symbols_default.a) {var symbols = get_own_property_symbols_default()(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return get_own_property_descriptor_default()(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function execute_objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {execute_ownKeys(source, true).forEach(function (key) {defineProperty_default()(target, key, source[key]);});} else if (get_own_property_descriptors_default.a) {define_properties_default()(target, get_own_property_descriptors_default()(source));} else {execute_ownKeys(source).forEach(function (key) {define_property_default()(target, key, get_own_property_descriptor_default()(source, key));});}}return target;}















var execute_arrayOrEmpty = function arrayOrEmpty(ar) {
  return is_array_default()(ar) ? ar : [];
};

var OperationNotFoundError = createErrorType('OperationNotFoundError', function (message, extra, oriError) {
  this.originalError = oriError;
  object_assign_default()(this, extra || {});
});

var findParametersWithName = function findParametersWithName(name, parameters) {
  return parameters.filter(function (p) {return p.name === name;});
};

// removes parameters that have duplicate 'in' and 'name' properties
var execute_deduplicateParameters = function deduplicateParameters(parameters) {
  var paramsMap = {};
  parameters.forEach(function (p) {
    if (!paramsMap[p.in]) {
      paramsMap[p.in] = {};
    }
    paramsMap[p.in][p.name] = p;
  });

  var dedupedParameters = [];
  keys_default()(paramsMap).forEach(function (i) {
    keys_default()(paramsMap[i]).forEach(function (p) {
      dedupedParameters.push(paramsMap[i][p]);
    });
  });
  return dedupedParameters;
};

// For stubbing in tests
var execute_self = {
  buildRequest: buildRequest


  // Execute request, with the given operationId and parameters
  // pathName/method or operationId is optional
};function execute(_ref)









{var userHttp = _ref.http,fetch = _ref.fetch,spec = _ref.spec,operationId = _ref.operationId,pathName = _ref.pathName,method = _ref.method,parameters = _ref.parameters,securities = _ref.securities,extras = objectWithoutProperties_default()(_ref, ["http", "fetch", "spec", "operationId", "pathName", "method", "parameters", "securities"]);
  // Provide default fetch implementation
  var http = userHttp || fetch || http_http; // Default to _our_ http

  if (pathName && method && !operationId) {
    operationId = legacyIdFromPathMethod(pathName, method);
  }

  var request = execute_self.buildRequest(execute_objectSpread({ spec: spec, operationId: operationId, parameters: parameters, securities: securities, http: http }, extras));

  if (request.body && (isPlainObject_default()(request.body) || isArray_default()(request.body))) {
    request.body = stringify_default()(request.body);
  }

  // Build request and execute it
  return http(request);
}

// Build a request, which can be handled by the `http.js` implementation.
function buildRequest(options) {var

  spec =













  options.spec,operationId = options.operationId,securities = options.securities,requestContentType = options.requestContentType,responseContentType = options.responseContentType,scheme = options.scheme,requestInterceptor = options.requestInterceptor,responseInterceptor = options.responseInterceptor,contextUrl = options.contextUrl,userFetch = options.userFetch,requestBody = options.requestBody,server = options.server,serverVariables = options.serverVariables,http = options.http;var


  parameters =

  options.parameters,parameterBuilders = options.parameterBuilders;

  var specIsOAS3 = isOAS3(spec);
  if (!parameterBuilders) {
    // user did not provide custom parameter builders
    if (specIsOAS3) {
      parameterBuilders = oas3_parameter_builders;
    } else
    {
      parameterBuilders = parameter_builders;
    }
  }

  // Set credentials with 'http.withCredentials' value
  var credentials = http && http.withCredentials ? 'include' : 'same-origin';

  // Base Template
  var req = {
    url: '',
    credentials: credentials,
    headers: {},
    cookies: {} };


  if (requestInterceptor) {
    req.requestInterceptor = requestInterceptor;
  }
  if (responseInterceptor) {
    req.responseInterceptor = responseInterceptor;
  }
  if (userFetch) {
    req.userFetch = userFetch;
  }

  var operationRaw = getOperationRaw(spec, operationId);
  if (!operationRaw) {
    throw new OperationNotFoundError("Operation ".concat(operationId, " not found"));
  }var _operationRaw$operati =

  operationRaw.operation,operation = _operationRaw$operati === void 0 ? {} : _operationRaw$operati,method = operationRaw.method,pathName = operationRaw.pathName;

  req.url += execute_baseUrl({ spec: spec, scheme: scheme, contextUrl: contextUrl, server: server, serverVariables: serverVariables, pathName: pathName, method: method });

  // Mostly for testing
  if (!operationId) {
    // Not removing req.cookies causes testing issues and would
    // change our interface, so we're always sure to remove it.
    // See the same statement lower down in this function for
    // more context.
    delete req.cookies;
    return req;
  }

  req.url += pathName; // Have not yet replaced the path parameters
  req.method = "".concat(method).toUpperCase();

  parameters = parameters || {};
  var path = spec.paths[pathName] || {};

  if (responseContentType) {
    req.headers.accept = responseContentType;
  }

  var combinedParameters = execute_deduplicateParameters([].
  concat(execute_arrayOrEmpty(operation.parameters)) // operation parameters
  .concat(execute_arrayOrEmpty(path.parameters)) // path parameters
  );

  // REVIEW: OAS3: have any key names or parameter shapes changed?
  // Any new features that need to be plugged in here?


  // Add values to request
  combinedParameters.forEach(function (parameter) {
    var builder = parameterBuilders[parameter.in];
    var value;

    if (parameter.in === 'body' && parameter.schema && parameter.schema.properties) {
      value = parameters;
    }

    value = parameter && parameter.name && parameters[parameter.name];

    if (typeof value === 'undefined') {
      // check for `name-in` formatted key
      value = parameter && parameter.name && parameters["".concat(parameter.in, ".").concat(parameter.name)];
    } else
    if (findParametersWithName(parameter.name, combinedParameters).length > 1) {
      // value came from `parameters[parameter.name]`
      // check to see if this is an ambiguous parameter
      // eslint-disable-next-line no-console
      console.warn("Parameter '".concat(parameter.name, "' is ambiguous because the defined spec has more than one parameter with the name: '").concat(parameter.name, "' and the passed-in parameter values did not define an 'in' value."));
    }

    if (value === null) {
      return;
    }

    if (typeof parameter.default !== 'undefined' && typeof value === 'undefined') {
      value = parameter.default;
    }

    if (typeof value === 'undefined' && parameter.required && !parameter.allowEmptyValue) {
      throw new Error("Required parameter ".concat(parameter.name, " is not provided"));
    }

    if (specIsOAS3 && parameter.schema && parameter.schema.type === 'object' && typeof value === 'string') {
      try {
        value = JSON.parse(value);
      }
      catch (e) {
        throw new Error('Could not parse object parameter value string as JSON');
      }
    }

    if (builder) {
      builder({ req: req, parameter: parameter, value: value, operation: operation, spec: spec });
    }
  });

  // Do version-specific tasks, then return those results.
  var versionSpecificOptions = execute_objectSpread({}, options, { operation: operation });

  if (specIsOAS3) {
    req = build_request(versionSpecificOptions, req);
  } else
  {
    // If not OAS3, then treat as Swagger2.
    req = swagger2_build_request(versionSpecificOptions, req);
  }


  // If the cookie convenience object exists in our request,
  // serialize its content and then delete the cookie object.
  if (req.cookies && keys_default()(req.cookies).length) {
    var cookieString = keys_default()(req.cookies).reduce(function (prev, cookieName) {
      var cookieValue = req.cookies[cookieName];
      var prefix = prev ? '&' : '';
      var stringified = external_cookie_default.a.serialize(cookieName, cookieValue);
      return prev + prefix + stringified;
    }, '');
    req.headers.Cookie = cookieString;
  }

  if (req.cookies) {
    // even if no cookies were defined, we need to remove
    // the cookies key from our request, or many many legacy
    // tests will break.
    delete req.cookies;
  }

  // Will add the query object into the URL, if it exists
  // ... will also create a FormData instance, if multipart/form-data (eg: a file)
  mergeInQueryOrForm(req);

  return req;
}

var stripNonAlpha = function stripNonAlpha(str) {return str ? str.replace(/\W/g, '') : null;};

function execute_baseUrl(obj) {
  var specIsOAS3 = isOAS3(obj.spec);

  return specIsOAS3 ? oas3BaseUrl(obj) : swagger2BaseUrl(obj);
}

function oas3BaseUrl(_ref2) {var spec = _ref2.spec,pathName = _ref2.pathName,method = _ref2.method,server = _ref2.server,contextUrl = _ref2.contextUrl,_ref2$serverVariables = _ref2.serverVariables,serverVariables = _ref2$serverVariables === void 0 ? {} : _ref2$serverVariables;
  var servers =
  get_default()(spec, ['paths', pathName, (method || '').toLowerCase(), 'servers']) ||
  get_default()(spec, ['paths', pathName, 'servers']) ||
  get_default()(spec, ['servers']);

  var selectedServerUrl = '';
  var selectedServerObj = null;

  if (server && servers && servers.length) {
    var serverUrls = servers.map(function (srv) {return srv.url;});

    if (serverUrls.indexOf(server) > -1) {
      selectedServerUrl = server;
      selectedServerObj = servers[serverUrls.indexOf(server)];
    }
  }

  if (!selectedServerUrl && servers && servers.length) {
    // default to the first server if we don't have one by now
    selectedServerUrl = servers[0].url;
    selectedServerObj = servers[0];
  }

  if (selectedServerUrl.indexOf('{') > -1) {
    // do variable substitution
    var varNames = getVariableTemplateNames(selectedServerUrl);
    varNames.forEach(function (vari) {
      if (selectedServerObj.variables && selectedServerObj.variables[vari]) {
        // variable is defined in server
        var variableDefinition = selectedServerObj.variables[vari];
        var variableValue = serverVariables[vari] || variableDefinition.default;

        var re = new RegExp("{".concat(vari, "}"), 'g');
        selectedServerUrl = selectedServerUrl.replace(re, variableValue);
      }
    });
  }

  return buildOas3UrlWithContext(selectedServerUrl, contextUrl);
}

function buildOas3UrlWithContext() {var ourUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var contextUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parsedUrl = external_url_default.a.parse(ourUrl);
  var parsedContextUrl = external_url_default.a.parse(contextUrl);

  var computedScheme = stripNonAlpha(parsedUrl.protocol) || stripNonAlpha(parsedContextUrl.protocol) || '';
  var computedHost = parsedUrl.host || parsedContextUrl.host;
  var computedPath = parsedUrl.pathname || '';
  var res;

  if (computedScheme && computedHost) {
    res = "".concat(computedScheme, "://").concat(computedHost + computedPath);

    // If last character is '/', trim it off
  } else
  {
    res = computedPath;
  }

  return res[res.length - 1] === '/' ? res.slice(0, -1) : res;
}

function getVariableTemplateNames(str) {
  var results = [];
  var re = /{([^}]+)}/g;
  var text;

  // eslint-disable-next-line no-cond-assign
  while (text = re.exec(str)) {
    results.push(text[1]);
  }
  return results;
}

// Compose the baseUrl ( scheme + host + basePath )
function swagger2BaseUrl(_ref3) {var spec = _ref3.spec,scheme = _ref3.scheme,_ref3$contextUrl = _ref3.contextUrl,contextUrl = _ref3$contextUrl === void 0 ? '' : _ref3$contextUrl;
  var parsedContextUrl = external_url_default.a.parse(contextUrl);
  var firstSchemeInSpec = is_array_default()(spec.schemes) ? spec.schemes[0] : null;

  var computedScheme = scheme || firstSchemeInSpec || stripNonAlpha(parsedContextUrl.protocol) || 'http';
  var computedHost = spec.host || parsedContextUrl.host || '';
  var computedPath = spec.basePath || '';
  var res;

  if (computedScheme && computedHost) {
    // we have what we need for an absolute URL
    res = "".concat(computedScheme, "://").concat(computedHost + computedPath);
  } else
  {
    // if not, a relative URL will have to do
    res = computedPath;
  }

  // If last character is '/', trim it off
  return res[res.length - 1] === '/' ? res.slice(0, -1) : res;
}
// CONCATENATED MODULE: ./src/index.js
function src_ownKeys(object, enumerableOnly) {var keys = keys_default()(object);if (get_own_property_symbols_default.a) {var symbols = get_own_property_symbols_default()(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return get_own_property_descriptor_default()(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function src_objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {src_ownKeys(source, true).forEach(function (key) {defineProperty_default()(target, key, source[key]);});} else if (get_own_property_descriptors_default.a) {define_properties_default()(target, get_own_property_descriptors_default()(source));} else {src_ownKeys(source).forEach(function (key) {define_property_default()(target, key, get_own_property_descriptor_default()(source, key));});}}return target;}










Swagger.http = http_http;
Swagger.makeHttp = makeHttp.bind(null, Swagger.http);
Swagger.resolve = resolve;
Swagger.resolveSubtree = resolveSubtree;
Swagger.execute = execute;
Swagger.serializeRes = serializeRes;
Swagger.serializeHeaders = serializeHeaders;
Swagger.clearCache = resolver_clearCache;
Swagger.makeApisTagOperation = makeApisTagOperation;
Swagger.buildRequest = buildRequest;
Swagger.helpers = { opId: opId };

function Swagger(url) {var _this = this;var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Allow url as a separate argument
  if (typeof url === 'string') {
    opts.url = url;
  } else
  {
    opts = url;
  }

  if (!(this instanceof Swagger)) {
    return new Swagger(opts);
  }

  assign_default()(this, opts);

  var prom = this.resolve().
  then(function () {
    if (!_this.disableInterfaces) {
      assign_default()(_this, Swagger.makeApisTagOperation(_this));
    }
    return _this;
  });

  // Expose this instance on the promise that gets returned
  prom.client = this;
  return prom;
}

Swagger.prototype = {

  http: http_http,

  execute: function execute(argHash) {
    this.applyDefaults();

    return Swagger.execute(src_objectSpread({
      spec: this.spec,
      http: this.http,
      securities: { authorized: this.authorizations },
      contextUrl: typeof this.url === 'string' ? this.url : undefined },
    argHash));

  },

  resolve: function resolve() {var _this2 = this;
    return Swagger.resolve({
      spec: this.spec,
      url: this.url,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null }).
    then(function (obj) {
      _this2.originalSpec = _this2.spec;
      _this2.spec = obj.spec;
      _this2.errors = obj.errors;
      return _this2;
    });
  } };


Swagger.prototype.applyDefaults = function () {
  var spec = this.spec;
  var specUrl = this.url;
  // TODO: OAS3: support servers here
  if (specUrl && startsWith_default()(specUrl, 'http')) {
    var parsed = external_url_default.a.parse(specUrl);
    if (!spec.host) {
      spec.host = parsed.host;
    }
    if (!spec.schemes) {
      spec.schemes = [parsed.protocol.replace(':', '')];
    }
    if (!spec.basePath) {
      spec.basePath = '/';
    }
  }
};

/* harmony default export */ var src = __webpack_exports__["default"] = (Swagger);

/***/ })
/******/ ])["default"];
//# sourceMappingURL=index.js.map