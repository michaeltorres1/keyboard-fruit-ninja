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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Fruit =\n/*#__PURE__*/\nfunction () {\n  function Fruit(x, y, ctx, level) {\n    _classCallCheck(this, Fruit);\n\n    var fruitImgs = ['cherry', 'greenApple', 'pineapple', 'strawberry', 'watermelon', 'bomb'];\n    var randomFruitIdx = Math.floor(Math.random() * Math.floor(6));\n    this.x = x;\n    this.y = y;\n    this.ctx = ctx;\n    this.dx = this.randomX(x); // this.dy = -10;\n\n    this.letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1).toUpperCase();\n    this.sliced = false;\n    this.visibility = true;\n    this.keyPressed = false;\n    this.typeOfFruit = fruitImgs[randomFruitIdx];\n    this.img = new Image(60, 45);\n    this.img.src = fruitImgs[randomFruitIdx] + '.png';\n\n    if (level === undefined) {\n      this.level = \"1\";\n      this.dy = -8;\n    } else {\n      this.level = level;\n      this.dy = -4;\n      this.dy -= this.level;\n    }\n  }\n\n  _createClass(Fruit, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.drawImage(this.img, this.x, this.y, 100, 100);\n      this.ctx.beginPath();\n      this.ctx.font = \"40px 'Black Ops One', cursive\";\n      this.ctx.fillStyle = \"white\";\n      this.ctx.textAlign = \"center\";\n      this.ctx.fillText(this.letter, this.x + 50, this.y + 70);\n      this.ctx.fill();\n      this.ctx.beginPath();\n      this.ctx.font = \"40px Arial\";\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillText(this.level, 50, 50);\n      this.ctx.fill();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // random position for y coordinate\n      var randomY = Math.random() * (150 - 0 + 0); // begin gravitation force\n\n      if (this.y < randomY) {\n        if (this.x < this.ctx.canvas.width && this.x > this.ctx.canvas.width - 100 || this.x > this.ctx.canvas.width && this.x < this.ctx.canvas.width + 100) {\n          this.dy += 10.6863;\n        } else {\n          this.dy += 10.5863;\n        }\n      } // set visibility to false if ball dropped off canvas\n\n\n      if (this.y > this.ctx.canvas.height + 100) {\n        this.visibility = false;\n      }\n\n      this.x += this.dx;\n      this.y += this.dy;\n    } // set random pos for x coordinate\n\n  }, {\n    key: \"randomX\",\n    value: function randomX() {\n      if (this.x > this.ctx.canvas.width / 2) {\n        return Math.random() * (0 - 3) + 0;\n      } else {\n        return Math.random() * (3 - 0) + 0;\n      }\n    }\n  }]);\n\n  return Fruit;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fruit);\n\n//# sourceURL=webpack:///./src/classes/Fruit.js?");

/***/ }),

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruit */ \"./src/classes/Fruit.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.fruits = [];\n    this.nextFruits = [];\n    this.animate = this.animate.bind(this);\n  } // logic for animation\n\n\n  _createClass(Game, [{\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      var x = requestAnimationFrame(this.animate); // clear the canvas\n\n      this.ctx.clearRect(0, 0, innerWidth, innerHeight);\n\n      var _loop = function _loop(i) {\n        // If fruit is dropped off canvas then reinitialize fruit with new fruit\n        _this.reinitializeNewFruit(); // reset this.fruits with this.nextFruits\n\n\n        _this.resetWithNextFruits();\n\n        var that = _this.fruits;\n        var thatX = x;\n        var thatFunc = _this.generateMoreFruit;\n        var thatLevel = \"\";\n        var myCtx = _this.ctx;\n        document.addEventListener('keypress', function (e) {\n          var keyPressed = e.key.toUpperCase();\n\n          for (var _i = 0; _i < that.length; _i++) {\n            if (that[_i][\"letter\"] === keyPressed) {\n              if (that[_i][\"typeOfFruit\"] === 'bomb') {\n                cancelAnimationFrame(thatX);\n                myCtx.clearRect(0, 0, innerWidth, innerHeight);\n                document.getElementById('gameOver').style.display = \"block\";\n              } else {\n                that.splice(_i, 1);\n              }\n            }\n          }\n\n          if (that.length === 0) {\n            if (thatLevel === \"\") {\n              thatLevel = 0;\n            }\n\n            thatLevel += 1;\n            that = thatFunc(that, myCtx, thatLevel);\n          }\n        }); // update and draw if defined\n\n        _this.updateAndDraw(i);\n      };\n\n      for (var i = 0; i < this.fruits.length; i++) {\n        _loop(i);\n      }\n    }\n  }, {\n    key: \"reinitializeNewFruit\",\n    value: function reinitializeNewFruit() {\n      for (var i = 0; i < this.fruits.length; i++) {\n        if (this.fruits.length) {\n          if (this.fruits[i].visibility === false) {\n            var x = Math.random() * innerWidth;\n            var y = canvas.height;\n            this.nextFruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, this.ctx));\n            this.fruits.splice(i, 1);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"resetWithNextFruits\",\n    value: function resetWithNextFruits() {\n      if (this.fruits.length === 0) {\n        this.fruits = this.nextFruits;\n        this.nextFruits = [];\n      }\n    }\n  }, {\n    key: \"generateFruits\",\n    value: function generateFruits() {\n      for (var i = 0; i < 6; i++) {\n        // set random x position for each instance of a fruit\n        var x = Math.random() * innerWidth; // set random y position for each instance of a fruit\n\n        var y = canvas.height; // this.fruits.push(new Fruit(x, y, this.ctx));\n\n        this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, this.ctx));\n      }\n\n      this.removeDups();\n\n      for (var _i2 = 0; _i2 < this.fruits.length; _i2++) {\n        this.fruits[_i2].draw();\n      }\n    }\n  }, {\n    key: \"generateMoreFruit\",\n    value: function generateMoreFruit(that, ctx, thatLevel) {\n      thatLevel += 1;\n\n      for (var i = 0; i < thatLevel; i++) {\n        var x = Math.random() * innerWidth;\n        var y = canvas.height;\n        that.push(new _Fruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, ctx, thatLevel));\n      }\n\n      return that;\n    }\n  }, {\n    key: \"removeDups\",\n    value: function removeDups() {\n      var freqs = {};\n\n      for (var i = 0; i < this.fruits.length; i++) {\n        if (this.fruits[i]['letter'] in freqs) {\n          freqs[this.fruits[i]['letter']] += 1;\n        } else {\n          freqs[this.fruits[i]['letter']] = 1;\n        }\n      }\n\n      for (var _i3 = 0; _i3 < this.fruits.length; _i3++) {\n        if (freqs[this.fruits[_i3]['letter']] > 1) this.fruits.splice(_i3, 1);\n      }\n    }\n  }, {\n    key: \"updateAndDraw\",\n    value: function updateAndDraw(i) {\n      if (this.fruits[i] !== undefined) {\n        this.fruits[i].update();\n        this.fruits[i].img.onload = this.fruits[i].draw();\n      }\n    }\n  }, {\n    key: \"playGame\",\n    value: function playGame() {\n      this.animate();\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/classes/Game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ \"./src/classes/Game.js\");\n\nvar canvas = document.getElementById('canvas');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar ctx = canvas.getContext('2d');\nvar newGame = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\nnewGame.generateFruits();\nnewGame.playGame();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });