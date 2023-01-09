const hands = ["ROCK", "PAPER", "SCISSORS"];

// Get computer choice, return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

// Play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Compare playerSelection vs computerSelection
  console.log(`You: ${playerSelection} vs Computer: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    switch (`${playerSelection} vs ${computerSelection}`) {
      case "ROCK vs SCISSORS":
        return "You won! Rock beats Scissors";
      case "ROCK vs PAPER":
        return "You lose! Paper beats Rock.";
      case "PAPER vs ROCK":
        return "You won! Paper beats Rock.";
      case "PAPER vs SCISSORS":
        return "You lose! Scissors beats Paper";
      case "SCISSORS vs PAPER":
        return "You won! Scissors beats Paper";
      case "SCISSORS vs ROCK":
        return "You lose! Rock beats Scissors";
    }
  }
}

// A game consist of 5 rounds
function game() {
  let playerSelection;
  let computerSelection;

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Prompt player for selection
    while (!hands.includes(playerSelection)) {
      playerSelection = prompt().toUpperCase();
    }

    // Get computer selection
    computerSelection = getComputerChoice();

    // Play a round
    console.log(`Round ${i + 1}`)
    console.log(playRound(playerSelection, computerSelection));

    // Reset selections 
    playerSelection = "";
    computerSelection = "";


  }
}

game();
