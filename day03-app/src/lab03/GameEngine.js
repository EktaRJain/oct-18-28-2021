class GameEngine {
    constructor() {
        this.target = Math.floor(Math.random() * 100);
        this.attempts = 0;
        this.message = "";
        this.gameOver = false;
    }
    play(guess) {
        this.attempts++;
        if(guess > this.target) {
            this.message = "Aim lower";
        } else if(guess < this.target) {
            this.message = "Aim Higher";
        } else {
            this.message = "You've got it";
            this.gameOver = true;
        }
    }
}

export default GameEngine;