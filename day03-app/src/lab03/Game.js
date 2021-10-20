import {Component} from 'react';
import GameEngine from './GameEngine';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            gameEngine: new GameEngine()
        };
        this.playButtonClicked = this.playButtonClicked.bind(this);
        this.guessChanged = this.guessChanged.bind(this);
    }
    guessChanged(e) {
        this.setState({ guess: e.currentTarget.value });
    }

    playButtonClicked() {
        let {guess, gameEngine} = this.state;
        gameEngine.play(guess);
        this.setState({gameEngine});
    }

    render() {
        let { attempts, message, gameOver } = this.state.gameEngine;
        return (<div>
            <h1>Welcome to the guessing game. Enter a number between 1 and 100</h1>
            <input type="number" placeholder="Enter your guess" onChange={this.guessChanged}></input> <br/>
            <button disabled={gameOver} onClick={this.playButtonClicked}>Play</button>
            <h1>{message}</h1>
            {
                attempts > 0 ?
                <h2>Attempts: {attempts}</h2>
                :
                <span/>
            }
            
        </div>);
    }
}
export default Game;