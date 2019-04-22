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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/app.js":
/*!***********************!*\
  !*** ./js/src/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies_picturefill_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies/picturefill.min.js */ "./js/src/dependencies/picturefill.min.js");
/* harmony import */ var _dependencies_picturefill_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dependencies_picturefill_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/globals.js */ "./js/src/app/globals.js");
/* harmony import */ var _app_debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/debug.js */ "./js/src/app/debug.js");
/* harmony import */ var _app_viewport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/viewport.js */ "./js/src/app/viewport.js");
/* harmony import */ var _app_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/nav.js */ "./js/src/app/nav.js");
/* harmony import */ var _app_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/module.js */ "./js/src/app/module.js");
/* harmony import */ var _app_module_with_viewport_restrictions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/module--with-viewport-restrictions.js */ "./js/src/app/module--with-viewport-restrictions.js");








jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  _app_globals_js__WEBPACK_IMPORTED_MODULE_2__["init"]();
  _app_viewport_js__WEBPACK_IMPORTED_MODULE_4__["init"]();
  _app_nav_js__WEBPACK_IMPORTED_MODULE_5__["init"]();
  _app_module_js__WEBPACK_IMPORTED_MODULE_6__["init"]();
  _app_module_with_viewport_restrictions_js__WEBPACK_IMPORTED_MODULE_7__["init"]();
});

/***/ }),

/***/ "./js/src/app/debug.js":
/*!*****************************!*\
  !*** ./js/src/app/debug.js ***!
  \*****************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/**
* Debug
*/
var state = {
  local: false,
  active: true
};
var log;
state.local = location.href.indexOf('local') > -1 ? true : false;
state.active = state.local;

if (state.active) {
  log = console.log.bind(window.console);
} else {
  log = function log() {};
}



/***/ }),

/***/ "./js/src/app/globals.js":
/*!*******************************!*\
  !*** ./js/src/app/globals.js ***!
  \*******************************/
/*! exports provided: init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.js */ "./js/src/app/debug.js");
/**
* Globals
*/


var globals = {};

var init = function init() {
  set('blogurl', jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').attr('data-wpurl'));
  set('theme', jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').attr('data-project'));
  set('breakpoint', jquery__WEBPACK_IMPORTED_MODULE_0___default()('title').css('width'));
  set('mediaQuery', jquery__WEBPACK_IMPORTED_MODULE_0___default()('title').css('fontFamily').replace(/'/g, '').replace(/"/g, ''));
  set('transitionDuration', parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('title').css('transitionDuration')) * 1000 || 500);
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"](globals);
};

var set = function set(key, value) {
  globals[key] = value;
};

var get = function get(key) {
  return globals[key];
};



/***/ }),

/***/ "./js/src/app/module--with-viewport-restrictions.js":
/*!**********************************************************!*\
  !*** ./js/src/app/module--with-viewport-restrictions.js ***!
  \**********************************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _init; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.js */ "./js/src/app/debug.js");
/**
* Module
*/


var namespace = '.module';
var mediaQuery = '( min-width: 680px )';
var settings = {};
var selector = {};
var state = {
  initiated: false
};

var setup = function setup() {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Module.setup()');

  if (state.initiated) {
    return false;
  }

  bindEvents();
  state.initiated = true;
};

var bindEvents = function bindEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click' + namespace, function () {
    alert('click');
  });
};
/**
 * Factory functions
 */


var _init = function _init() {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Module._init()'); // listen for resize event

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('viewport/resize/finish', function () {
    _onResize();
  });

  _checkMediaQuery();
};

var _onResize = function _onResize() {
  _checkMediaQuery();
};

var _setup = function _setup() {
  setup();
};

var _destroy = function _destroy() {
  if (!state.initiated) {
    return false;
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(namespace);
  state.initiated = false;

  if (typeof destroy === 'function') {
    destroy();
  }
};

var _checkMediaQuery = function _checkMediaQuery() {
  if (window.matchMedia(mediaQuery).matches) {
    _setup();
  } else {
    _destroy();
  }
};



/***/ }),

/***/ "./js/src/app/module.js":
/*!******************************!*\
  !*** ./js/src/app/module.js ***!
  \******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.js */ "./js/src/app/debug.js");
/**
* Module
*/


var settings = {};
var selector = {};
var state = {};

var init = function init() {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Module.init()');
  bindEvents();
};

var bindEvents = function bindEvents() {};



/***/ }),

/***/ "./js/src/app/nav.js":
/*!***************************!*\
  !*** ./js/src/app/nav.js ***!
  \***************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _init; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.js */ "./js/src/app/debug.js");
/**
* Nav
*/


var namespace = '.nav';
var mediaQuery = 'screen';
var settings = {};
var selector = {
  nav: '[data-nav-role="nav"]',
  toggle: '[data-nav-role="toggle"]'
};
var state = {
  initiated: false
};

var setup = function setup() {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Nav.setup()');

  if (state.initiated) {
    return false;
  }

  bindEvents();
  state.initiated = true;
};

var bindEvents = function bindEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', selector.toggle, function (event) {
    event.preventDefault();
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-nav-id');
    toggle(id);
  });
};

var toggle = function toggle(id) {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Nav.toggle()', id);

  if (!id) {
    return false;
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('visible--nav-' + id)) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('nav/hide', [{
      id: id
    }]);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('nav/show', [{
      id: id
    }]);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('visible--nav-' + id);
};
/**
 * Factory functions
 */


var _init = function _init() {
  _debug_js__WEBPACK_IMPORTED_MODULE_1__["log"]('Nav._init()'); // listen for resize event

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('viewport/resize/finish', function () {
    _onResize();
  });

  _checkMediaQuery();
};

var _onResize = function _onResize() {
  _checkMediaQuery();
};

var _setup = function _setup() {
  setup();
};

var _destroy = function _destroy() {
  if (!state.initiated) {
    return false;
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(namespace);
  state.initiated = false;

  if (typeof destroy === 'function') {
    destroy();
  }
};

var _checkMediaQuery = function _checkMediaQuery() {
  if (window.matchMedia(mediaQuery).matches) {
    _setup();
  } else {
    _destroy();
  }
};



/***/ }),

/***/ "./js/src/app/viewport.js":
/*!********************************!*\
  !*** ./js/src/app/viewport.js ***!
  \********************************/
/*! exports provided: init, scrollTo, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _dependencies_smoothScroll_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dependencies/smoothScroll.min.js */ "./js/src/dependencies/smoothScroll.min.js");
/* harmony import */ var _dependencies_smoothScroll_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dependencies_smoothScroll_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug.js */ "./js/src/app/debug.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
* Viewport
* Handy module to track viewport related events and properties
*/



var settings = {
  // screen
  maxPixelRatio: 2,
  // scroll
  scrollOffsetY: 20,
  scrollToOffset: 0
};
var elements = {
  document: null,
  viewport: null,
  scroller: null
};
var state = {
  // window / document
  width: 0,
  height: 0,
  documentHeight: 0,
  pixelRatio: 1,
  // scroll
  scroll: {
    x: undefined,
    y: undefined,
    factorX: 0,
    factorY: 0,
    toTop: undefined,
    toBottom: undefined
  },
  // mouse
  mouse: {
    x: 0,
    y: 0,
    factorX: 0.5,
    factorY: 0.5
  }
};

var init = function init() {
  _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('Viewport.init()');
  elements.document = jquery__WEBPACK_IMPORTED_MODULE_1___default()(document);
  elements.viewport = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);
  elements.scroller = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);
  onResizeFinish();
  bindEventHandlers();
  onScroll();
  _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('Viewport.state', state);
};

var bindEventHandlers = function bindEventHandlers() {
  // debounce resize event
  elements.viewport.on('resize', function () {
    if (settings.resizeDelay) {
      clearTimeout(settings.resizeDelay);
      settings.resizeDelay = null;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').addClass('resizing');
      elements.document.trigger('viewport/resize/start');
    }

    settings.resizeDelay = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').removeClass('resizing');
      onResizeFinish();
      elements.document.trigger('viewport/resize/finish');
      settings.resizeDelay = null;
    }, 500);
  }); // throttle scroll event

  elements.scroller.on('scroll', function () {
    state.scroll.x = elements.scroller.scrollLeft();
    state.scroll.y = elements.scroller.scrollTop();
    requestAnimationFrame(function () {
      onScroll();
      elements.document.trigger('viewport/scroll');
    });
  });
  elements.document // top
  .on('viewport/scroll/toTop', function () {
    _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('scrolled to top');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').addClass('scrolled-to-top');
  }).on('viewport/scroll/fromTop', function () {
    _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('scrolled from top');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').removeClass('scrolled-to-top');
  }) // bottom
  .on('viewport/scroll/toBottom', function () {
    _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('scrolled to bottom');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').addClass('scrolled-to-bottom');
  }).on('viewport/scroll/fromBottom', function () {
    _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('scrolled from bottom');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').removeClass('scrolled-to-bottom');
  }); // mouse movement

  elements.viewport.on('mousemove', function (event) {
    state.mouse.x = event.pageX - state.scroll.x;
    state.mouse.y = event.pageY - state.scroll.y;
    state.mouse.factorX = state.mouse.x / state.width;
    state.mouse.factorY = state.mouse.y / state.height;
  });
};

var onResizeFinish = function onResizeFinish() {
  _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('Viewport.onResizeFinish()');
  state.width = elements.viewport.width();
  state.height = elements.viewport.height();
  state.documentHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').outerHeight();
  state.pixelRatio = Math.min(window.devicePixelRatio, settings.maxPixelRatio);
  state.scroll.x = elements.scroller.scrollLeft();
  state.scroll.y = elements.scroller.scrollTop();
};

var onScroll = function onScroll() {
  state.scroll.factorY = state.scroll.y / (state.documentHeight - state.height); // top

  if (state.scroll.y > settings.scrollOffsetY) {
    if (state.scroll.toTop) {
      state.scroll.toTop = false;
      elements.document.trigger('viewport/scroll/fromTop');
    }
  } else {
    if (!state.scroll.toTop) {
      state.scroll.toTop = true;
      elements.document.trigger('viewport/scroll/toTop');
    }
  } // bottom


  if (state.scroll.y > state.documentHeight - state.height - settings.scrollOffsetY) {
    if (!state.scroll.toBottom) {
      state.scroll.toBottom = true;
      elements.document.trigger('viewport/scroll/toBottom');
    }
  } else {
    if (state.scroll.toBottom) {
      state.scroll.toBottom = false;
      elements.document.trigger('viewport/scroll/fromBottom');
    }
  }
};

var scrollTo = function scrollTo(target, offset, animate) {
  _debug_js__WEBPACK_IMPORTED_MODULE_2__["log"]('Viewport.scrollTo()', target);
  var y = 0; // scroll to position

  if (typeof target == 'number') {
    y = target;
  } // scroll to selector


  if (typeof target == 'string' && jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).length > 0) {
    y = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).first().offset().top);
  } // scroll to element


  if (_typeof(target) == 'object' && target.length > 0) {
    y = parseInt(target.offset().top);
  }

  if (offset) {
    y = y + offset;
  } else {
    y = y + settings.scrollToOffset;
  }

  if (animate) {
    elements.scroller[0].scroll({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    elements.scroller.scrollTop(y);
  }
};

var get = function get(key) {
  return state[key] || false;
};



/***/ }),

/***/ "./js/src/dependencies/picturefill.min.js":
/*!************************************************!*\
  !*** ./js/src/dependencies/picturefill.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function (a) {
  var b = navigator.userAgent;
  a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
    var b,
        c = document.createElement("source"),
        d = function d(a) {
      var b,
          d,
          e = a.parentNode;
      "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () {
        e.removeChild(b);
      })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () {
        a.sizes = d;
      }));
    },
        e = function e() {
      var a,
          b = document.querySelectorAll("picture > img, img[srcset][sizes]");

      for (a = 0; a < b.length; a++) {
        d(b[a]);
      }
    },
        f = function f() {
      clearTimeout(b), b = setTimeout(e, 99);
    },
        g = a.matchMedia && matchMedia("(orientation: landscape)"),
        h = function h() {
      f(), g && g.addListener && g.addListener(f);
    };

    return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f;
  }());
}(window), function (a, b, c) {
  "use strict";

  function d(a) {
    return " " === a || "    " === a || "\n" === a || "\f" === a || "\r" === a;
  }

  function e(b, c) {
    var d = new a.Image();
    return d.onerror = function () {
      A[b] = !1, ba();
    }, d.onload = function () {
      A[b] = 1 === d.width, ba();
    }, d.src = c, "pending";
  }

  function f() {
    M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em;
  }

  function g(a, b, c, d) {
    var e, f, g, h;
    return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c;
  }

  function h(a) {
    var b,
        c = s.getSet(a),
        d = !1;
    "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d;
  }

  function i(a, b) {
    return a.res - b.res;
  }

  function j(a, b, c) {
    var d;
    return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d;
  }

  function k(a, b) {
    var c, d, e;
    if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++) {
      if (a === s.makeUrl(e[c].url)) {
        d = e[c];
        break;
      }
    }
    return d;
  }

  function l(a, b) {
    var c,
        d,
        e,
        f,
        g = a.getElementsByTagName("source");

    for (c = 0, d = g.length; d > c; c++) {
      e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
        srcset: f,
        media: e.getAttribute("media"),
        type: e.getAttribute("type"),
        sizes: e.getAttribute("sizes")
      });
    }
  }

  function m(a, b) {
    function c(b) {
      var c,
          d = b.exec(a.substring(m));
      return d ? (c = d[0], m += c.length, c) : void 0;
    }

    function e() {
      var a,
          c,
          d,
          e,
          f,
          i,
          j,
          k,
          l,
          m = !1,
          o = {};

      for (e = 0; e < h.length; e++) {
        f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
      }

      m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o));
    }

    function f() {
      for (c(T), i = "", j = "in descriptor";;) {
        if (k = a.charAt(m), "in descriptor" === j) {
          if (d(k)) i && (h.push(i), i = "", j = "after descriptor");else {
            if ("," === k) return m += 1, i && h.push(i), void e();
            if ("(" === k) i += k, j = "in parens";else {
              if ("" === k) return i && h.push(i), void e();
              i += k;
            }
          }
        } else if ("in parens" === j) {
          if (")" === k) i += k, j = "in descriptor";else {
            if ("" === k) return h.push(i), void e();
            i += k;
          }
        } else if ("after descriptor" === j) if (d(k)) ;else {
          if ("" === k) return void e();
          j = "in descriptor", m -= 1;
        }
        m += 1;
      }
    }

    for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
      if (c(U), m >= l) return n;
      g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f();
    }
  }

  function n(a) {
    function b(a) {
      function b() {
        f && (g.push(f), f = "");
      }

      function c() {
        g[0] && (h.push(g), g = []);
      }

      for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
        if (e = a.charAt(j), "" === e) return b(), c(), h;

        if (k) {
          if ("*" === e && "/" === a[j + 1]) {
            k = !1, j += 2, b();
            continue;
          }

          j += 1;
        } else {
          if (d(e)) {
            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
              j += 1;
              continue;
            }

            if (0 === i) {
              b(), j += 1;
              continue;
            }

            e = " ";
          } else if ("(" === e) i += 1;else if (")" === e) i -= 1;else {
            if ("," === e) {
              b(), c(), j += 1;
              continue;
            }

            if ("/" === e && "*" === a.charAt(j + 1)) {
              k = !0, j += 2;
              continue;
            }
          }

          f += e, j += 1;
        }
      }
    }

    function c(a) {
      return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1;
    }

    var e,
        f,
        g,
        h,
        i,
        j,
        k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

    for (f = b(a), g = f.length, e = 0; g > e; e++) {
      if (h = f[e], i = h[h.length - 1], c(i)) {
        if (j = i, h.pop(), 0 === h.length) return j;
        if (h = h.join(" "), s.matchesMedia(h)) return j;
      }
    }

    return "100vw";
  }

  b.createElement("picture");

  var o,
      p,
      q,
      r,
      s = {},
      t = !1,
      u = function u() {},
      v = b.createElement("img"),
      w = v.getAttribute,
      x = v.setAttribute,
      y = v.removeAttribute,
      z = b.documentElement,
      A = {},
      B = {
    algorithm: ""
  },
      C = "data-pfsrc",
      D = C + "set",
      E = navigator.userAgent,
      F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      G = "currentSrc",
      H = /\s+\+?\d+(e\d+)?w/,
      I = /(\([^)]+\))?\s*(.+)/,
      J = a.picturefillCFG,
      K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
      L = "font-size:100%!important;",
      M = !0,
      N = {},
      O = {},
      P = a.devicePixelRatio,
      Q = {
    px: 1,
    "in": 96
  },
      R = b.createElement("a"),
      S = !1,
      T = /^[ \t\n\r\u000c]+/,
      U = /^[, \t\n\r\u000c]+/,
      V = /^[^ \t\n\r\u000c]+/,
      W = /[,]+$/,
      X = /^\d+$/,
      Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      Z = function Z(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c);
  },
      $ = function $(a) {
    var b = {};
    return function (c) {
      return c in b || (b[c] = a(c)), b[c];
    };
  },
      _ = function () {
    var a = /^([\d\.]+)(em|vw|px)$/,
        b = function b() {
      for (var a = arguments, b = 0, c = a[0]; ++b in a;) {
        c = c.replace(a[b], a[++b]);
      }

      return c;
    },
        c = $(function (a) {
      return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
    });

    return function (b, d) {
      var e;
      if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];else try {
        N[b] = new Function("e", c(b))(Q);
      } catch (f) {}
      return N[b];
    };
  }(),
      aa = function aa(a, b) {
    return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a;
  },
      ba = function ba(a) {
    if (t) {
      var c,
          d,
          e,
          f = a || {};

      if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
        for (s.setupRun(f), S = !0, d = 0; e > d; d++) {
          s.fillImg(c[d], f);
        }

        s.teardownRun(f);
      }
    }
  };

  o = a.console && console.warn ? function (a) {
    console.warn(a);
  } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + new Date().getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) {
    v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture;
  }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () {
    var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        d = b.createElement("img"),
        e = function e() {
      var a = d.width;
      2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba);
    };

    d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c;
  }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) {
    return R.href = a, R.href;
  }), s.qsa = function (a, b) {
    return "querySelector" in a ? a.querySelectorAll(b) : [];
  }, s.matchesMedia = function () {
    return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
      return !a || matchMedia(a).matches;
    } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments);
  }, s.mMQ = function (a) {
    return a ? _(a) : !0;
  }, s.calcLength = function (a) {
    var b = _(a, !0) || !1;
    return 0 > b && (b = !1), b;
  }, s.supportsType = function (a) {
    return a ? A[a] : !0;
  }, s.parseSize = $(function (a) {
    var b = (a || "").match(I);
    return {
      media: b && b[1],
      length: b && b[2]
    };
  }), s.parseSet = function (a) {
    return a.cands || (a.cands = m(a.srcset, a)), a.cands;
  }, s.getEmValue = function () {
    var a;

    if (!p && (a = b.body)) {
      var c = b.createElement("div"),
          d = z.style.cssText,
          e = a.style.cssText;
      c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e;
    }

    return p || 16;
  }, s.calcListLength = function (a) {
    if (!(a in O) || B.uT) {
      var b = s.calcLength(n(a));
      O[a] = b ? b : Q.width;
    }

    return O[a];
  }, s.setRes = function (a) {
    var b;

    if (a) {
      b = s.parseSet(a);

      for (var c = 0, d = b.length; d > c; c++) {
        aa(b[c], a.sizes);
      }
    }

    return b;
  }, s.setRes.res = aa, s.applySetCandidate = function (a, b) {
    if (a.length) {
      var c,
          d,
          e,
          f,
          h,
          k,
          l,
          m,
          n,
          o = b[s.ns],
          p = s.DPR;
      if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++) {
        if (c = a[d], c.res >= p) {
          e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
          break;
        }
      }
      h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b));
    }
  }, s.setSrc = function (a, b) {
    var c;
    a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c));
  }, s.getSet = function (a) {
    var b,
        c,
        d,
        e = !1,
        f = a[s.ns].sets;

    for (b = 0; b < f.length && !e; b++) {
      if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
        "pending" === d && (c = d), e = c;
        break;
      }
    }

    return e;
  }, s.parseSets = function (a, b, d) {
    var e,
        f,
        g,
        h,
        i = b && "PICTURE" === b.nodeName.toUpperCase(),
        j = a[s.ns];
    (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
      srcset: j.srcset,
      sizes: w.call(a, "sizes")
    }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
      url: j.src,
      d: 1,
      set: f
    }))) : j.src && j.sets.push({
      srcset: j.src,
      sizes: null
    }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0;
  }, s.fillImg = function (a, b) {
    var c,
        d = b.reselect || b.reevaluate;
    a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a));
  }, s.setupRun = function () {
    (!S || M || P !== a.devicePixelRatio) && f();
  }, s.supPicture ? (ba = u, s.fillImg = u) : !function () {
    var c,
        d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
        e = function e() {
      var a = b.readyState || "";
      f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f));
    },
        f = setTimeout(e, b.body ? 9 : 99),
        g = function g(a, b) {
      var c,
          d,
          e = function e() {
        var f = new Date() - d;
        b > f ? c = setTimeout(e, b - f) : (c = null, a());
      };

      return function () {
        d = new Date(), c || (c = setTimeout(e, b));
      };
    },
        h = z.clientHeight,
        i = function i() {
      M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs();
    };

    Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e);
  }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
    pf: s,
    push: function push(a) {
      var b = a.shift();
      "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
        reselect: !0
      }));
    }
  };

  for (; J && J.length;) {
    a.picturefillCFG.push(J.shift());
  }

  a.picturefill = ba, "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = ba :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return ba;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./js/src/dependencies/smoothScroll.min.js":
/*!*************************************************!*\
  !*** ./js/src/dependencies/smoothScroll.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  "use strict";

  function o(o) {
    var t = ["MSIE ", "Trident/", "Edge/"];
    return new RegExp(t.join("|")).test(o);
  }

  function t() {
    function t(o, t) {
      this.scrollLeft = o, this.scrollTop = t;
    }

    function r(o) {
      return .5 * (1 - Math.cos(Math.PI * o));
    }

    function i(o) {
      if (null === o || "object" != _typeof(o) || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0;
      if ("object" == _typeof(o) && "smooth" === o.behavior) return !1;
      throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.");
    }

    function s(o, t) {
      return "Y" === t ? o.clientHeight + h < o.scrollHeight : "X" === t ? o.clientWidth + h < o.scrollWidth : void 0;
    }

    function c(o, t) {
      var e = l.getComputedStyle(o, null)["overflow" + t];
      return "auto" === e || "scroll" === e;
    }

    function n(o) {
      var t = s(o, "Y") && c(o, "Y"),
          l = s(o, "X") && c(o, "X");
      return t || l;
    }

    function f(o) {
      var t;

      do {
        t = (o = o.parentNode) === e.body;
      } while (!1 === t && !1 === n(o));

      return t = null, o;
    }

    function a(o) {
      var t,
          e,
          i,
          s = (y() - o.startTime) / v;
      t = r(s = s > 1 ? 1 : s), e = o.startX + (o.x - o.startX) * t, i = o.startY + (o.y - o.startY) * t, o.method.call(o.scrollable, e, i), e === o.x && i === o.y || l.requestAnimationFrame(a.bind(l, o));
    }

    function p(o, r, i) {
      var s,
          c,
          n,
          f,
          p = y();
      o === e.body ? (s = l, c = l.scrollX || l.pageXOffset, n = l.scrollY || l.pageYOffset, f = u.scroll) : (s = o, c = o.scrollLeft, n = o.scrollTop, f = t), a({
        scrollable: s,
        method: f,
        startTime: p,
        startX: c,
        startY: n,
        x: r,
        y: i
      });
    }

    if (!("scrollBehavior" in e.documentElement.style && !0 !== l.__forceSmoothScrollPolyfill__)) {
      var d = l.HTMLElement || l.Element,
          v = 468,
          h = o(l.navigator.userAgent) ? 1 : 0,
          u = {
        scroll: l.scroll || l.scrollTo,
        scrollBy: l.scrollBy,
        elementScroll: d.prototype.scroll || t,
        scrollIntoView: d.prototype.scrollIntoView
      },
          y = l.performance && l.performance.now ? l.performance.now.bind(l.performance) : Date.now;
      l.scroll = l.scrollTo = function () {
        void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? p.call(l, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : l.scrollX || l.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : l.scrollY || l.pageYOffset) : u.scroll.call(l, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : l.scrollX || l.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : l.scrollY || l.pageYOffset));
      }, l.scrollBy = function () {
        void 0 !== arguments[0] && (i(arguments[0]) ? u.scrollBy.call(l, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(l, e.body, ~~arguments[0].left + (l.scrollX || l.pageXOffset), ~~arguments[0].top + (l.scrollY || l.pageYOffset)));
      }, d.prototype.scroll = d.prototype.scrollTo = function () {
        if (void 0 !== arguments[0]) if (!0 !== i(arguments[0])) {
          var o = arguments[0].left,
              t = arguments[0].top;
          p.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t);
        } else {
          if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");
          u.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != _typeof(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
        }
      }, d.prototype.scrollBy = function () {
        void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : u.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
      }, d.prototype.scrollIntoView = function () {
        if (!0 !== i(arguments[0])) {
          var o = f(this),
              t = o.getBoundingClientRect(),
              r = this.getBoundingClientRect();
          o !== e.body ? (p.call(this, o, o.scrollLeft + r.left - t.left, o.scrollTop + r.top - t.top), "fixed" !== l.getComputedStyle(o).position && l.scrollBy({
            left: t.left,
            top: t.top,
            behavior: "smooth"
          })) : l.scrollBy({
            left: r.left,
            top: r.top,
            behavior: "smooth"
          });
        } else u.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
      };
    }
  }

  var l = window,
      e = document;
  "object" == ( false ? undefined : _typeof(exports)) ? module.exports = {
    polyfill: t
  } : t();
}();

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=sourcemaps/app.js.map