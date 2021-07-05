import React from "react";

import Header from "../../components/Header/Header";
import ScoreBar from "../../components/ScoreBar/ScoreBar";
import GameOption from "../../components/GameOption/GameOption";
import GameResult from "../../utils/GameResult";

import RockIcon from "../../icons/RockIcon";
import PaperIcon from "../../icons/PaperIcon";
import ScissorsIcon from "../../icons/ScissorsIcon";
import LizardIcon from "../../icons/LizardIcon";
import SpockIcon from "../../icons/SpockIcon";

import "./Game.scss";

const choice = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
  lizard: "lizard",
  spock: "spock",
};

const optionsMap = {
  rock: {
    icon: RockIcon,
    color: "#128FA9",
  },
  paper: {
    icon: PaperIcon,
    color: "#FFFFFF",
  },
  scissors: {
    icon: ScissorsIcon,
    color: "#F2445D",
  },
  lizard: {
    icon: LizardIcon,
    color: "#F9C255",
  },
  spock: {
    icon: SpockIcon,
    color: "#A25726",
  },
};

const initialState = {
  userSelection: null,
  randomSelection: null,
  isTimerOn: false,
  winnerText: "",
  timer: 3,
};

class Game extends React.Component {
  state = {
    ...initialState,
    userScore: 0,
    computerScore: 0,
  };

  restart = () => {
    this.setState({
      ...initialState,
      userScore: this.state.userScore,
      computerScore: this.state.computerScore,
    });
  };

  randomChoice = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    const randomChoice = Object.keys(choice)[randomIndex];
    return randomChoice;
  };
  play = (selection) => {
    this.setState({
      userSelection: selection,
      isTimerOn: true,
    });
    const randomChoice = this.randomChoice();
    const winnerText = GameResult(selection, randomChoice);

    this.setState({
      randomSelection: randomChoice,
      winnerText,
    });
  };

  componentDidUpdate() {
    if (this.state.timer === 3 && this.state.userSelection) {
      this.intervalId = setInterval(() => {
        if (this.state.timer === 1) {
          let usScore = this.state.userScore;
          let compScore = this.state.computerScore;
          if (this.state.winnerText === "YOU WON)))") {
            usScore += 1;
          } else if (this.state.winnerText === "YOU LOST(((") {
            compScore += 1;
          }
          clearInterval(this.intervalId);
          this.setState({
            isTimerOn: false,
            userScore: usScore,
            computerScore: compScore,
          });
        }
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {
      userScore,
      computerScore,
      userSelection,
      randomSelection,
      isTimerOn,
      timer,
      winnerText,
    } = this.state;

    return (
      <div className="app-game">
        <div className="app-game__scorebox">
          <Header />
          <ScoreBar userScore={userScore} computerScore={computerScore} />
        </div>
        {!userSelection ? (
          <div className="game-content">
            <GameOption
              Icon={optionsMap[choice.rock].icon}
              color={optionsMap[choice.rock].color}
              onClick={() => {
                this.play(choice.rock);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.paper].icon}
              color={optionsMap[choice.paper].color}
              onClick={() => {
                this.play(choice.paper);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.scissors].icon}
              color={optionsMap[choice.scissors].color}
              onClick={() => {
                this.play(choice.scissors);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.lizard].icon}
              color={optionsMap[choice.lizard].color}
              onClick={() => {
                this.play(choice.lizard);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.spock].icon}
              color={optionsMap[choice.spock].color}
              onClick={() => {
                this.play(choice.spock);
              }}
            />
          </div>
        ) : (
          <div>
            <GameOption
              Icon={optionsMap[userSelection].icon}
              color={optionsMap[userSelection].color}
              onClick={() => {}}
            />
            {isTimerOn ? (
              <div>{timer}</div>
            ) : (
              <div>
                <button onClick={this.restart}>Wanna play again?</button>
                <div className="winnertext">{winnerText}</div>
                <GameOption
                  Icon={optionsMap[randomSelection].icon}
                  color={optionsMap[randomSelection].color}
                  onClick={() => {}}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
