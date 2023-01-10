const hands = ["ROCK", "PAPER", "SCISSORS"];

// Get computer choice, return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

// Play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Compare playerSelection vs computerSelection
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

// A game consist of 5 rounds
function game() {
  let playerSelection;
  let computerSelection;
  let result;

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Prompt player for selection
    while (!hands.includes(playerSelection)) {
      playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors':").toUpperCase();
    }

    // Get computer selection
    computerSelection = getComputerChoice();

    // Play a round
    console.log(`ROUND ${i + 1}`);
    console.log(`You: ${playerSelection} vs Computer: ${computerSelection}`);
    result = playRound(playerSelection, computerSelection);

    // Calculate score
    if (result === "WON") {
      playerScore++;
      console.log("You Won!");
    } else if (result === "LOSE") {
      computerScore++;
      console.log("You Lose!");
    } else if (result === "TIE") {
      playerScore++;
      computerScore++;
      console.log("It's a tie!");
    }

    // Reset selections and result
    playerSelection = "";
    computerSelection = "";
    result = "";
  }

  // Declare the winner
  console.log(`Your score: ${playerScore} Computer's score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won this game.");
  } else {
    console.log("Computer won this game! ");
  }
}

game();
