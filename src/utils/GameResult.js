const choice = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
  lizard: "lizard",
  spock: "spock",
};

const GameResult = (playerChoice, computerChoice) => {
  if (!playerChoice.trim() || !computerChoice.trim()) {
    throw new Error("Selec a valid choice");
  }
  if (playerChoice === computerChoice) {
    return "Draw";
  }
  switch (playerChoice) {
    case choice.rock:
      if (computerChoice === choice.scissors) {
        return "YOU WON)))";
      } else if (computerChoice === choice.lizard) {
        return "YOU WON)))";
      } else {
        return "YOU LOST(((";
      }
    case choice.paper:
      if (computerChoice === choice.rock) {
        return "YOU WON)))";
      } else if (computerChoice === choice.spock) {
        return "YOU WON)))";
      } else {
        return "YOU LOST(((";
      }
    case choice.scissors:
      if (computerChoice === choice.paper) {
        return "YOU WON)))";
      } else if (computerChoice === choice.lizard) {
        return "YOU WON)))";
      } else {
        return "YOU LOST(((";
      }
    case choice.lizard:
      if (computerChoice === choice.spock) {
        return "YOU WON)))";
      } else if (computerChoice === choice.paper) {
        return "YOU WON)))";
      } else {
        return "YOU LOST(((";
      }
    case choice.spock:
      if (computerChoice === choice.rock) {
        return "YOU WON)))";
      } else if (computerChoice === choice.scissors) {
        return "YOU WON)))";
      } else {
        return "YOU LOST(((";
      }
    default:
      throw new Error("wrong choices ...");
  }
};

export default GameResult;
