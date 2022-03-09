/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* html{\n  margin: 0;\n  padding: 0;\n} */\n\n.body{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  flex-basis: 1 -1 auto;\n}\n\n  .main-page{\n    width: 30%;\n    height: 100vh;\n    padding-left: 1%;\n    border-right: solid\n  }\n\n    #location{\n      width: 80%;\n\n    }\n\n    #state{\n      width: 80%;\n\n    }\n\n  .weather-page{\n    width: 70%;\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n    .flip-card{\n      width: 75%;\n      border: 2px red solid;\n      border-radius: 5px;\n      margin: 4%;\n      margin-bottom: 3%;\n      display: flex;\n      background-color: transparent;\n    }\n\n    .flip-card:after{\n      content: \"\";\n      display: block;\n      padding-bottom: 25%;\n    }\n\n    .content{\n      /* display: flex; */\n      position: relative;\n      width: 100%;\n      height: 100%;\n      /* flex-direction: column; */\n    }\n\n    .front, .back{\n      width: 100%;\n      height: 100%;\n    }\n\n    .front{\n    }\n\n      .dow0temp{\n        width: 10%;\n      }\n\n    .back{\n\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;GAGG;;AAEH;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;;EAEE;IACE,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB;EACF;;IAEE;MACE,UAAU;;IAEZ;;IAEA;MACE,UAAU;;IAEZ;;EAEF;IACE,UAAU;IACV,aAAa;IACb,kBAAkB;EACpB;;IAEE;MACE,UAAU;MACV,qBAAqB;MACrB,kBAAkB;MAClB,UAAU;MACV,iBAAiB;MACjB,aAAa;MACb,6BAA6B;IAC/B;;IAEA;MACE,WAAW;MACX,cAAc;MACd,mBAAmB;IACrB;;IAEA;MACE,mBAAmB;MACnB,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,4BAA4B;IAC9B;;IAEA;MACE,WAAW;MACX,YAAY;IACd;;IAEA;IACA;;MAEE;QACE,UAAU;MACZ;;IAEF;;IAEA","sourcesContent":["/* html{\n  margin: 0;\n  padding: 0;\n} */\n\n.body{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  flex-basis: 1 -1 auto;\n}\n\n  .main-page{\n    width: 30%;\n    height: 100vh;\n    padding-left: 1%;\n    border-right: solid\n  }\n\n    #location{\n      width: 80%;\n\n    }\n\n    #state{\n      width: 80%;\n\n    }\n\n  .weather-page{\n    width: 70%;\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n    .flip-card{\n      width: 75%;\n      border: 2px red solid;\n      border-radius: 5px;\n      margin: 4%;\n      margin-bottom: 3%;\n      display: flex;\n      background-color: transparent;\n    }\n\n    .flip-card:after{\n      content: \"\";\n      display: block;\n      padding-bottom: 25%;\n    }\n\n    .content{\n      /* display: flex; */\n      position: relative;\n      width: 100%;\n      height: 100%;\n      /* flex-direction: column; */\n    }\n\n    .front, .back{\n      width: 100%;\n      height: 100%;\n    }\n\n    .front{\n    }\n\n      .dow0temp{\n        width: 10%;\n      }\n\n    .back{\n\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/geoAPI.js":
/*!*******************************!*\
  !*** ./src/modules/geoAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityCoords": () => (/* binding */ getCityCoords)
/* harmony export */ });



async function getCityCoords(location, state, country) {
  let lat;
  let long;
  const city = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location},${state},${country}&appid=daa0efcefa043d17b3c66f5e04fe9bd7`, {mode: 'cors'});
  const cityData = await city.json();
  lat =  Math.round(cityData[0].lat * 100) / 100;
  long = Math.round(cityData[0].lon * 100) / 100;
  return [lat, long];
}

// getCity().catch( error => {
//   console.log(error);
// })



/***/ }),

/***/ "./src/modules/weatherAPI.js":
/*!***********************************!*\
  !*** ./src/modules/weatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });


// import { getCityCoords } from './geoAPI';

async function getWeatherData(lat, long) {


  const weather = await fetch(`https://api.weather.gov/points/${lat},${long}`, {mode: 'cors'});
  const weatherData = await weather.json();
  console.log(weatherData);
  const forecast = await fetch(weatherData.properties.forecast, {mode: 'cors'});
  const forecastData = await forecast.json();
  const days = forecastData.properties.periods;
  // console.log(days);
  return days;
}


// getWeatherData().catch( error => {
//   console.log(error);
// })










/***/ }),

/***/ "./src/modules/weatherPage.js":
/*!************************************!*\
  !*** ./src/modules/weatherPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForecastPage": () => (/* binding */ createForecastPage)
/* harmony export */ });



const temperature4All = document.querySelector('#temperature4All');

const dow0 = document.querySelector('.dow0');
const dow0text = document.querySelector('.dow0text');
const dow0short = document.querySelector('.dow0short');
const dow0temp = document.querySelector('.dow0temp');
const d0icon = document.querySelector('#d0icon');

const dow0ntext = document.querySelector('.dow0ntext');
const dow0nshort = document.querySelector('.dow0nshort');
const dow0ntemp = document.querySelector('.dow0ntemp');
const dow0n = document.querySelector('.dow0n');
const d0nicon = document.querySelector('#d0nicon');

//1
const dow1 = document.querySelector('.dow1');
const dow1text = document.querySelector('.dow1text');
const dow1short = document.querySelector('.dow1short');
const dow1temp = document.querySelector('.dow1temp');
const d1icon = document.querySelector('#d1icon');

const dow1ntext = document.querySelector('.dow1ntext');
const dow1nshort = document.querySelector('.dow1nshort');
const dow1ntemp = document.querySelector('.dow1ntemp');
const dow1n = document.querySelector('.dow1n');
const d1nicon = document.querySelector('#d1nicon');

//2
const dow2 = document.querySelector('.dow2');
const dow2text = document.querySelector('.dow2text');
const dow2short = document.querySelector('.dow2short');
const dow2temp = document.querySelector('.dow2temp');
const d2icon = document.querySelector('#d2icon');

const dow2ntext = document.querySelector('.dow2ntext');
const dow2nshort = document.querySelector('.dow2nshort');
const dow2ntemp = document.querySelector('.dow2ntemp');
const dow2n = document.querySelector('.dow2n');
const d2nicon = document.querySelector('#d2nicon');

//3
const dow3 = document.querySelector('.dow3');
const dow3text = document.querySelector('.dow3text');
const dow3short = document.querySelector('.dow3short');
const dow3temp = document.querySelector('.dow3temp');
const d3icon = document.querySelector('#d3icon');

const dow3ntext = document.querySelector('.dow3ntext');
const dow3nshort = document.querySelector('.dow3nshort');
const dow3ntemp = document.querySelector('.dow3ntemp');
const dow3n = document.querySelector('.dow3n');
const d3nicon = document.querySelector('#d3nicon');

//4
const dow4 = document.querySelector('.dow4');
const dow4text = document.querySelector('.dow4text');
const dow4short = document.querySelector('.dow4short');
const dow4temp = document.querySelector('.dow4temp');
const d4icon = document.querySelector('#d4icon');

const dow4ntext = document.querySelector('.dow4ntext');
const dow4nshort = document.querySelector('.dow4nshort');
const dow4ntemp = document.querySelector('.dow4ntemp');
const dow4n = document.querySelector('.dow4n');
const d4nicon = document.querySelector('#d4nicon');

//5
const dow5 = document.querySelector('.dow5');
const dow5text = document.querySelector('.dow5text');
const dow5short = document.querySelector('.dow5short');
const dow5temp = document.querySelector('.dow5temp');
const d5icon = document.querySelector('#d5icon');

const dow5ntext = document.querySelector('.dow5ntext');
const dow5nshort = document.querySelector('.dow5nshort');
const dow5ntemp = document.querySelector('.dow5ntemp');
const dow5n = document.querySelector('.dow5n');
const d5nicon = document.querySelector('#d5nicon');

function createForecastPage(forecastDays) {
  
  temperature4All.textContent = "Temperature: "

  dow0.textContent = forecastDays[0].name;
  dow0text.textContent = forecastDays[0].detailedForecast;
  dow0short.textContent = forecastDays[0].shortForecast;
  dow0temp.textContent = forecastDays[0].temperature;
  d0icon.src = forecastDays[0].icon;

  dow0n.textContent = forecastDays[1].name;
  dow0ntext.textContent = forecastDays[1].detailedForecast;
  dow0nshort.textContent = forecastDays[1].shortForecast;
  dow0ntemp.textContent = forecastDays[1].temperature;
  d0nicon.src = forecastDays[1].icon;

  //1
  dow1.textContent = forecastDays[2].name;
  dow1text.textContent = forecastDays[2].detailedForecast;
  dow1short.textContent = forecastDays[2].shortForecast;
  dow1temp.textContent = forecastDays[2].temperature;
  d1icon.src = forecastDays[2].icon;

  dow1n.textContent = forecastDays[3].name;
  dow1ntext.textContent = forecastDays[3].detailedForecast;
  dow1nshort.textContent = forecastDays[3].shortForecast;
  dow1ntemp.textContent = forecastDays[3].temperature;
  d1nicon.src = forecastDays[3].icon;

  //2
  dow2.textContent = forecastDays[4].name;
  dow2text.textContent = forecastDays[4].detailedForecast;
  dow2short.textContent = forecastDays[4].shortForecast;
  dow2temp.textContent = forecastDays[4].temperature;
  d2icon.src = forecastDays[4].icon;

  dow2n.textContent = forecastDays[5].name;
  dow2ntext.textContent = forecastDays[5].detailedForecast;
  dow2nshort.textContent = forecastDays[5].shortForecast;
  dow2ntemp.textContent = forecastDays[5].temperature;
  d2nicon.src = forecastDays[5].icon;

  //3
  dow3.textContent = forecastDays[6].name;
  dow3text.textContent = forecastDays[6].detailedForecast;
  dow3short.textContent = forecastDays[6].shortForecast;
  dow3temp.textContent = forecastDays[6].temperature;
  d3icon.src = forecastDays[6].icon;

  dow3n.textContent = forecastDays[7].name;
  dow3ntext.textContent = forecastDays[7].detailedForecast;
  dow3nshort.textContent = forecastDays[7].shortForecast;
  dow3ntemp.textContent = forecastDays[7].temperature;
  d3nicon.src = forecastDays[7].icon;

  //4
  dow4.textContent = forecastDays[8].name;
  dow4text.textContent = forecastDays[8].detailedForecast;
  dow4short.textContent = forecastDays[8].shortForecast;
  dow4temp.textContent = forecastDays[8].temperature;
  d4icon.src = forecastDays[8].icon;

  dow4n.textContent = forecastDays[9].name;
  dow4ntext.textContent = forecastDays[9].detailedForecast;
  dow4nshort.textContent = forecastDays[9].shortForecast;
  dow4ntemp.textContent = forecastDays[9].temperature;
  d4nicon.src = forecastDays[9].icon;

  //5
  dow5.textContent = forecastDays[10].name;
  dow5text.textContent = forecastDays[10].detailedForecast;
  dow5short.textContent = forecastDays[10].shortForecast;
  dow5temp.textContent = forecastDays[10].temperature;
  d5icon.src = forecastDays[10].icon;

  dow5n.textContent = forecastDays[11].name;
  dow5ntext.textContent = forecastDays[11].detailedForecast;
  dow5nshort.textContent = forecastDays[11].shortForecast;
  dow5ntemp.textContent = forecastDays[11].temperature;
  d5nicon.src = forecastDays[11].icon;

}









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherPage */ "./src/modules/weatherPage.js");
/* harmony import */ var _modules_geoAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/geoAPI */ "./src/modules/geoAPI.js");
/* harmony import */ var _modules_weatherAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weatherAPI */ "./src/modules/weatherAPI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");











let coordinates = [];
let forecastDays = [];
let lat, long;
// let location, state, country;
// const country = form.querySelector('input[id="country"]').value;
const country = 'US';
let d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n;
let x, y;
const form = document.forms['formID'];


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const location = form.querySelector('input[id="location"]').value;
  const state = form.querySelector('input[id="state"]').value;
  
  (0,_modules_geoAPI_js__WEBPACK_IMPORTED_MODULE_1__.getCityCoords)(location, state, country)
  .then( values => {
    [x, y] = values;
    coordinates.push(x, y);
    console.log(coordinates);
  })
  .then( () => {
    lat = coordinates[0];
    long = coordinates[1];
    console.log(lat, long);
    (0,_modules_weatherAPI_js__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(lat, long)
    .then( (days) => {
      [d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n] = days;
      forecastDays.push(d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n);
      console.log(forecastDays);
      (0,_modules_weatherPage_js__WEBPACK_IMPORTED_MODULE_0__.createForecastPage)(forecastDays);
      coordinates = [];
      forecastDays = [];
    })
  })
  
  
})















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7Ozs7Ozs7Ozs7Ozs7VUNuS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05hOztBQUVxQjtBQUNMO0FBQ0k7QUFDWjs7QUFFNEI7QUFDSztBQUNLOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyRUFBa0I7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dlb0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHRtbHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufSAqL1xcblxcbi5ib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LWJhc2lzOiAxIC0xIGF1dG87XFxufVxcblxcbiAgLm1haW4tcGFnZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZFxcbiAgfVxcblxcbiAgICAjbG9jYXRpb257XFxuICAgICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgfVxcblxcbiAgICAjc3RhdGV7XFxuICAgICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgfVxcblxcbiAgLndlYXRoZXItcGFnZXtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcblxcbiAgICAuZmxpcC1jYXJke1xcbiAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBtYXJnaW46IDQlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLmZsaXAtY2FyZDphZnRlcntcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50e1xcbiAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB9XFxuXFxuICAgIC5mcm9udCwgLmJhY2t7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5mcm9udHtcXG4gICAgfVxcblxcbiAgICAgIC5kb3cwdGVtcHtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgfVxcblxcbiAgICAuYmFja3tcXG5cXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztFQUVFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7RUFDRjs7SUFFRTtNQUNFLFVBQVU7O0lBRVo7O0lBRUE7TUFDRSxVQUFVOztJQUVaOztFQUVGO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYiw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWiw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO0lBQ0E7O01BRUU7UUFDRSxVQUFVO01BQ1o7O0lBRUY7O0lBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHRtbHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufSAqL1xcblxcbi5ib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LWJhc2lzOiAxIC0xIGF1dG87XFxufVxcblxcbiAgLm1haW4tcGFnZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZFxcbiAgfVxcblxcbiAgICAjbG9jYXRpb257XFxuICAgICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgfVxcblxcbiAgICAjc3RhdGV7XFxuICAgICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgfVxcblxcbiAgLndlYXRoZXItcGFnZXtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcblxcbiAgICAuZmxpcC1jYXJke1xcbiAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBtYXJnaW46IDQlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLmZsaXAtY2FyZDphZnRlcntcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50e1xcbiAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB9XFxuXFxuICAgIC5mcm9udCwgLmJhY2t7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5mcm9udHtcXG4gICAgfVxcblxcbiAgICAgIC5kb3cwdGVtcHtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgfVxcblxcbiAgICAuYmFja3tcXG5cXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaXR5Q29vcmRzKGxvY2F0aW9uLCBzdGF0ZSwgY291bnRyeSkge1xuICBsZXQgbGF0O1xuICBsZXQgbG9uZztcbiAgY29uc3QgY2l0eSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259LCR7c3RhdGV9LCR7Y291bnRyeX0mYXBwaWQ9ZGFhMGVmY2VmYTA0M2QxN2IzYzY2ZjVlMDRmZTliZDdgLCB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgY2l0eS5qc29uKCk7XG4gIGxhdCA9ICBNYXRoLnJvdW5kKGNpdHlEYXRhWzBdLmxhdCAqIDEwMCkgLyAxMDA7XG4gIGxvbmcgPSBNYXRoLnJvdW5kKGNpdHlEYXRhWzBdLmxvbiAqIDEwMCkgLyAxMDA7XG4gIHJldHVybiBbbGF0LCBsb25nXTtcbn1cblxuLy8gZ2V0Q2l0eSgpLmNhdGNoKCBlcnJvciA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vIH0pXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IHsgZ2V0Q2l0eUNvb3JkcyB9IGZyb20gJy4vZ2VvQVBJJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxhdCwgbG9uZykge1xuXG5cbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyLmdvdi9wb2ludHMvJHtsYXR9LCR7bG9uZ31gLCB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyRGF0YS5wcm9wZXJ0aWVzLmZvcmVjYXN0LCB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0Lmpzb24oKTtcbiAgY29uc3QgZGF5cyA9IGZvcmVjYXN0RGF0YS5wcm9wZXJ0aWVzLnBlcmlvZHM7XG4gIC8vIGNvbnNvbGUubG9nKGRheXMpO1xuICByZXR1cm4gZGF5cztcbn1cblxuXG4vLyBnZXRXZWF0aGVyRGF0YSgpLmNhdGNoKCBlcnJvciA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vIH0pXG5cblxuXG5cblxuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmNvbnN0IHRlbXBlcmF0dXJlNEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZTRBbGwnKTtcblxuY29uc3QgZG93MCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cwJyk7XG5jb25zdCBkb3cwdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cwdGV4dCcpO1xuY29uc3QgZG93MHNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzBzaG9ydCcpO1xuY29uc3QgZG93MHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93MHRlbXAnKTtcbmNvbnN0IGQwaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMGljb24nKTtcblxuY29uc3QgZG93MG50ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzBudGV4dCcpO1xuY29uc3QgZG93MG5zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cwbnNob3J0Jyk7XG5jb25zdCBkb3cwbnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93MG50ZW1wJyk7XG5jb25zdCBkb3cwbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cwbicpO1xuY29uc3QgZDBuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMG5pY29uJyk7XG5cbi8vMVxuY29uc3QgZG93MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cxJyk7XG5jb25zdCBkb3cxdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cxdGV4dCcpO1xuY29uc3QgZG93MXNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzFzaG9ydCcpO1xuY29uc3QgZG93MXRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93MXRlbXAnKTtcbmNvbnN0IGQxaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMWljb24nKTtcblxuY29uc3QgZG93MW50ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzFudGV4dCcpO1xuY29uc3QgZG93MW5zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cxbnNob3J0Jyk7XG5jb25zdCBkb3cxbnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93MW50ZW1wJyk7XG5jb25zdCBkb3cxbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cxbicpO1xuY29uc3QgZDFuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMW5pY29uJyk7XG5cbi8vMlxuY29uc3QgZG93MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cyJyk7XG5jb25zdCBkb3cydGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cydGV4dCcpO1xuY29uc3QgZG93MnNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzJzaG9ydCcpO1xuY29uc3QgZG93MnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93MnRlbXAnKTtcbmNvbnN0IGQyaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMmljb24nKTtcblxuY29uc3QgZG93Mm50ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzJudGV4dCcpO1xuY29uc3QgZG93Mm5zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cybnNob3J0Jyk7XG5jb25zdCBkb3cybnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93Mm50ZW1wJyk7XG5jb25zdCBkb3cybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3cybicpO1xuY29uc3QgZDJuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkMm5pY29uJyk7XG5cbi8vM1xuY29uc3QgZG93MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3czJyk7XG5jb25zdCBkb3czdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3czdGV4dCcpO1xuY29uc3QgZG93M3Nob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzNzaG9ydCcpO1xuY29uc3QgZG93M3RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93M3RlbXAnKTtcbmNvbnN0IGQzaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkM2ljb24nKTtcblxuY29uc3QgZG93M250ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzNudGV4dCcpO1xuY29uc3QgZG93M25zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3czbnNob3J0Jyk7XG5jb25zdCBkb3czbnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93M250ZW1wJyk7XG5jb25zdCBkb3czbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3czbicpO1xuY29uc3QgZDNuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkM25pY29uJyk7XG5cbi8vNFxuY29uc3QgZG93NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c0Jyk7XG5jb25zdCBkb3c0dGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c0dGV4dCcpO1xuY29uc3QgZG93NHNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzRzaG9ydCcpO1xuY29uc3QgZG93NHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93NHRlbXAnKTtcbmNvbnN0IGQ0aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkNGljb24nKTtcblxuY29uc3QgZG93NG50ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzRudGV4dCcpO1xuY29uc3QgZG93NG5zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c0bnNob3J0Jyk7XG5jb25zdCBkb3c0bnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93NG50ZW1wJyk7XG5jb25zdCBkb3c0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c0bicpO1xuY29uc3QgZDRuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkNG5pY29uJyk7XG5cbi8vNVxuY29uc3QgZG93NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c1Jyk7XG5jb25zdCBkb3c1dGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c1dGV4dCcpO1xuY29uc3QgZG93NXNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzVzaG9ydCcpO1xuY29uc3QgZG93NXRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93NXRlbXAnKTtcbmNvbnN0IGQ1aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkNWljb24nKTtcblxuY29uc3QgZG93NW50ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdzVudGV4dCcpO1xuY29uc3QgZG93NW5zaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c1bnNob3J0Jyk7XG5jb25zdCBkb3c1bnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93NW50ZW1wJyk7XG5jb25zdCBkb3c1biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3c1bicpO1xuY29uc3QgZDVuaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkNW5pY29uJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JlY2FzdFBhZ2UoZm9yZWNhc3REYXlzKSB7XG4gIFxuICB0ZW1wZXJhdHVyZTRBbGwudGV4dENvbnRlbnQgPSBcIlRlbXBlcmF0dXJlOiBcIlxuXG4gIGRvdzAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMF0ubmFtZTtcbiAgZG93MHRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMF0uZGV0YWlsZWRGb3JlY2FzdDtcbiAgZG93MHNob3J0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzBdLnNob3J0Rm9yZWNhc3Q7XG4gIGRvdzB0ZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzBdLnRlbXBlcmF0dXJlO1xuICBkMGljb24uc3JjID0gZm9yZWNhc3REYXlzWzBdLmljb247XG5cbiAgZG93MG4udGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMV0ubmFtZTtcbiAgZG93MG50ZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzFdLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzBuc2hvcnQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMV0uc2hvcnRGb3JlY2FzdDtcbiAgZG93MG50ZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzFdLnRlbXBlcmF0dXJlO1xuICBkMG5pY29uLnNyYyA9IGZvcmVjYXN0RGF5c1sxXS5pY29uO1xuXG4gIC8vMVxuICBkb3cxLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzJdLm5hbWU7XG4gIGRvdzF0ZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzJdLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzFzaG9ydC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1syXS5zaG9ydEZvcmVjYXN0O1xuICBkb3cxdGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1syXS50ZW1wZXJhdHVyZTtcbiAgZDFpY29uLnNyYyA9IGZvcmVjYXN0RGF5c1syXS5pY29uO1xuXG4gIGRvdzFuLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzNdLm5hbWU7XG4gIGRvdzFudGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1szXS5kZXRhaWxlZEZvcmVjYXN0O1xuICBkb3cxbnNob3J0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzNdLnNob3J0Rm9yZWNhc3Q7XG4gIGRvdzFudGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1szXS50ZW1wZXJhdHVyZTtcbiAgZDFuaWNvbi5zcmMgPSBmb3JlY2FzdERheXNbM10uaWNvbjtcblxuICAvLzJcbiAgZG93Mi50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s0XS5uYW1lO1xuICBkb3cydGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s0XS5kZXRhaWxlZEZvcmVjYXN0O1xuICBkb3cyc2hvcnQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNF0uc2hvcnRGb3JlY2FzdDtcbiAgZG93MnRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNF0udGVtcGVyYXR1cmU7XG4gIGQyaWNvbi5zcmMgPSBmb3JlY2FzdERheXNbNF0uaWNvbjtcblxuICBkb3cybi50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s1XS5uYW1lO1xuICBkb3cybnRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNV0uZGV0YWlsZWRGb3JlY2FzdDtcbiAgZG93Mm5zaG9ydC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s1XS5zaG9ydEZvcmVjYXN0O1xuICBkb3cybnRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNV0udGVtcGVyYXR1cmU7XG4gIGQybmljb24uc3JjID0gZm9yZWNhc3REYXlzWzVdLmljb247XG5cbiAgLy8zXG4gIGRvdzMudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNl0ubmFtZTtcbiAgZG93M3RleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbNl0uZGV0YWlsZWRGb3JlY2FzdDtcbiAgZG93M3Nob3J0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzZdLnNob3J0Rm9yZWNhc3Q7XG4gIGRvdzN0ZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzZdLnRlbXBlcmF0dXJlO1xuICBkM2ljb24uc3JjID0gZm9yZWNhc3REYXlzWzZdLmljb247XG5cbiAgZG93M24udGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbN10ubmFtZTtcbiAgZG93M250ZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzddLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzNuc2hvcnQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbN10uc2hvcnRGb3JlY2FzdDtcbiAgZG93M250ZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzddLnRlbXBlcmF0dXJlO1xuICBkM25pY29uLnNyYyA9IGZvcmVjYXN0RGF5c1s3XS5pY29uO1xuXG4gIC8vNFxuICBkb3c0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzhdLm5hbWU7XG4gIGRvdzR0ZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzhdLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzRzaG9ydC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s4XS5zaG9ydEZvcmVjYXN0O1xuICBkb3c0dGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s4XS50ZW1wZXJhdHVyZTtcbiAgZDRpY29uLnNyYyA9IGZvcmVjYXN0RGF5c1s4XS5pY29uO1xuXG4gIGRvdzRuLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzldLm5hbWU7XG4gIGRvdzRudGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s5XS5kZXRhaWxlZEZvcmVjYXN0O1xuICBkb3c0bnNob3J0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzldLnNob3J0Rm9yZWNhc3Q7XG4gIGRvdzRudGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1s5XS50ZW1wZXJhdHVyZTtcbiAgZDRuaWNvbi5zcmMgPSBmb3JlY2FzdERheXNbOV0uaWNvbjtcblxuICAvLzVcbiAgZG93NS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1sxMF0ubmFtZTtcbiAgZG93NXRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMTBdLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzVzaG9ydC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1sxMF0uc2hvcnRGb3JlY2FzdDtcbiAgZG93NXRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMTBdLnRlbXBlcmF0dXJlO1xuICBkNWljb24uc3JjID0gZm9yZWNhc3REYXlzWzEwXS5pY29uO1xuXG4gIGRvdzVuLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXlzWzExXS5uYW1lO1xuICBkb3c1bnRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMTFdLmRldGFpbGVkRm9yZWNhc3Q7XG4gIGRvdzVuc2hvcnQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheXNbMTFdLnNob3J0Rm9yZWNhc3Q7XG4gIGRvdzVudGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5c1sxMV0udGVtcGVyYXR1cmU7XG4gIGQ1bmljb24uc3JjID0gZm9yZWNhc3REYXlzWzExXS5pY29uO1xuXG59XG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9tb2R1bGVzL3dlYXRoZXJQYWdlLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2dlb0FQSS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy93ZWF0aGVyQVBJLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBnZXRDaXR5Q29vcmRzIH0gZnJvbSAnLi9tb2R1bGVzL2dlb0FQSSc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyQVBJJztcbmltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0UGFnZSB9IGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyUGFnZSc7XG5cbmxldCBjb29yZGluYXRlcyA9IFtdO1xubGV0IGZvcmVjYXN0RGF5cyA9IFtdO1xubGV0IGxhdCwgbG9uZztcbi8vIGxldCBsb2NhdGlvbiwgc3RhdGUsIGNvdW50cnk7XG4vLyBjb25zdCBjb3VudHJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImNvdW50cnlcIl0nKS52YWx1ZTtcbmNvbnN0IGNvdW50cnkgPSAnVVMnO1xubGV0IGQwLCBkMG4sIGQxLCBkMW4sIGQyLCBkMm4sIGQzLCBkM24sIGQ0LCBkNG4sIGQ1LCBkNW47XG5sZXQgeCwgeTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snZm9ybUlEJ107XG5cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibG9jYXRpb25cIl0nKS52YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwic3RhdGVcIl0nKS52YWx1ZTtcbiAgXG4gIGdldENpdHlDb29yZHMobG9jYXRpb24sIHN0YXRlLCBjb3VudHJ5KVxuICAudGhlbiggdmFsdWVzID0+IHtcbiAgICBbeCwgeV0gPSB2YWx1ZXM7XG4gICAgY29vcmRpbmF0ZXMucHVzaCh4LCB5KTtcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gIH0pXG4gIC50aGVuKCAoKSA9PiB7XG4gICAgbGF0ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgbG9uZyA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnNvbGUubG9nKGxhdCwgbG9uZyk7XG4gICAgZ2V0V2VhdGhlckRhdGEobGF0LCBsb25nKVxuICAgIC50aGVuKCAoZGF5cykgPT4ge1xuICAgICAgW2QwLCBkMG4sIGQxLCBkMW4sIGQyLCBkMm4sIGQzLCBkM24sIGQ0LCBkNG4sIGQ1LCBkNW5dID0gZGF5cztcbiAgICAgIGZvcmVjYXN0RGF5cy5wdXNoKGQwLCBkMG4sIGQxLCBkMW4sIGQyLCBkMm4sIGQzLCBkM24sIGQ0LCBkNG4sIGQ1LCBkNW4pO1xuICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXlzKTtcbiAgICAgIGNyZWF0ZUZvcmVjYXN0UGFnZShmb3JlY2FzdERheXMpO1xuICAgICAgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgIGZvcmVjYXN0RGF5cyA9IFtdO1xuICAgIH0pXG4gIH0pXG4gIFxuICBcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9