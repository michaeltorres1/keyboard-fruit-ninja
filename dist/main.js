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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/Fruit.js":
/*!******************************!*\
  !*** ./src/classes/Fruit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Fruit =\n/*#__PURE__*/\nfunction () {\n  function Fruit(x, y, ctx) {\n    _classCallCheck(this, Fruit);\n\n    this.x = x;\n    this.y = y;\n    this.ctx = ctx;\n    this.dx = this.randomX(x);\n    this.dy = -4;\n    this.letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);\n    this.sliced = false;\n    this.visibility = true;\n    this.keyPressed = false;\n  }\n\n  _createClass(Fruit, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.beginPath();\n      this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);\n      this.ctx.fillStyle = \"#0095DD\";\n      this.ctx.fill();\n      this.ctx.beginPath();\n      this.ctx.font = \"40px Arial\";\n      this.ctx.fillStyle = \"red\";\n      this.ctx.textAlign = \"center\";\n      this.ctx.fillText(this.letter, this.x, this.y + 15);\n      this.ctx.fill();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // random position for y coordinate\n      var randomY = Math.random() * (150 - 0 + 0); // begin gravitation force \n\n      if (this.y < randomY) {\n        this.dy += 0.5863;\n      } // set visibility to false if ball dropped off canvas\n\n\n      if (this.y > this.ctx.canvas.height + 100) {\n        this.visibility = false;\n      }\n\n      this.x += this.dx;\n      this.y += this.dy;\n    } // set random pos for x coordinate\n\n  }, {\n    key: \"randomX\",\n    value: function randomX() {\n      if (this.x > this.ctx.canvas.width / 2) {\n        return Math.random() * (0 - 3) + 0;\n      } else {\n        return Math.random() * (3 - 0) + 1;\n      }\n    }\n  }]);\n\n  return Fruit;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fruit);\n\n//# sourceURL=webpack:///./src/classes/Fruit.js?");

/***/ }),

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruit */ \"./src/classes/Fruit.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.fruits = [];\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(Game, [{\n    key: \"generateFruits\",\n    value: function generateFruits() {\n      for (var i = 0; i < 10; i++) {\n        // set random x position for each instance of a fruit\n        var x = Math.random() * innerWidth; // set random y position for each instance of a fruit\n\n        var y = canvas.height;\n        this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, this.ctx));\n      }\n\n      for (var _i = 0; _i < this.fruits.length; _i++) {\n        this.fruits[_i].draw();\n      }\n    } // logic for animation\n\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      // clear the canvas\n      this.ctx.clearRect(0, 0, innerWidth, innerHeight);\n\n      var _loop = function _loop(i) {\n        // if fruit is dropped off canvas then reinitialize fruit with new fruit\n        if (_this.fruits[i].visibility === false) {\n          var x = Math.random() * innerWidth;\n          var y = canvas.height;\n          _this.fruits[i] = new _Fruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, _this.ctx);\n        }\n\n        document.addEventListener('keypress', logKey);\n        var that = _this.fruits;\n\n        function logKey(e) {\n          for (var _i2 = 0; _i2 < that.length; _i2++) {\n            if (that[_i2][\"letter\"] === e.key) {\n              that.splice(_i2, 1);\n\n              that.fruits[_i2].update();\n\n              that.fruits[_i2].draw();\n            }\n          }\n        }\n\n        _this.fruits[i].update();\n\n        _this.fruits[i].draw();\n      };\n\n      for (var i = 0; i < this.fruits.length; i++) {\n        _loop(i);\n      }\n\n      requestAnimationFrame(this.animate);\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/classes/Game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ \"./src/classes/Game.js\");\n\nvar canvas = document.getElementById('canvas');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar ctx = canvas.getContext('2d');\nvar newGame = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\nnewGame.generateFruits();\nnewGame.animate();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });