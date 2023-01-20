const hands = ["ROCK", "PAPER", "SCISSORS"];

// Get computer choice, return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

// Play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else {
    switch (`${playerSelection} vs ${computerSelection}`) {
      case "ROCK vs SCISSORS":
      case "PAPER vs ROCK":
      case "SCISSORS vs PAPER":
        return "WON";
      case "ROCK vs PAPER":
      case "PAPER vs SCISSORS":
      case "SCISSORS vs ROCK":
        return "LOSE";
    }
  }
}

