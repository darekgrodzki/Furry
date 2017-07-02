/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(1);

Game = function() {

    this.board = document.querySelector('#board').children;
    this.coin = new Coin();
    this.furry = new Furry();
    this.score = 0;
    var self = this;
    var scoreCounter = document.querySelector('#score').firstElementChild;
    var scoreCounter1 = scoreCounter.querySelector('strong');
    this.index = function(x, y) {
        return x + (y * 10);
    }

    this.showFurry = function() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }

    this.showCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

    this.hideFurry = function() {
        document.querySelector('.furry').classList.remove('furry');
    }

    this.moveFurry = function() {

        if (this.furry.direction === "right") {
            this.furry.x += 1;
        } else if (this.furry.direction === "down") {
            this.furry.y += 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        self.gameOver();
    }

    document.addEventListener('keydown', function(event) {

        switch (event.which) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 40:
                self.furry.direction = 'down';
                break;
        }

    })

    this.checkCoinCollision = function() {

        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            this.score++;
            scoreCounter1.innerHTML = this.score;
            self.coin = new Coin();
            self.showCoin();
        }

    }
    this.gameOver = function() {

        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {

            scoreCounter.innerHTML = "KONIEC GRY" + "<br>" + "Twój wynik: " + this.score;
            document.querySelector('.coin').classList.remove('coin');
            clearInterval(interval);



        }
    }

    this.startGame = function() {
        var interval = setInterval(function() {
            self.hideFurry();
            self.moveFurry();
            self.showFurry();
            self.checkCoinCollision();


        }, 250);
    }


}

module.exports = Game;


/***/ }),
/* 1 */
/***/ (function(module, exports) {


Coin = function() {

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}
exports.modules = Coin;


/***/ }),
/* 2 */
/***/ (function(module, exports) {


Furry = function() {
    this.x = 0;
    this.y = 0;
    this.direction = "down";
}

module.exports = Furry;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

document.addEventListener("DOMContentLoaded", function() {

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

});


/***/ })
/******/ ]);