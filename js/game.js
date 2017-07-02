require("./furry.js");
require("./coin.js");

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
