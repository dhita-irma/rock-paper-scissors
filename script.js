const hands = ["ROCK", "PAPER", "SCISSORS"];

// Get computer choice, return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

// Play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ["TIE", "It's a tie!", "Both player get one point."];
  } else {
    switch (`${playerSelection} vs ${computerSelection}`) {
      case "ROCK vs SCISSORS":
      case "PAPER vs ROCK":
      case "SCISSORS vs PAPER":
        return ["WIN", "You Win!", "You get one point."];
      case "ROCK vs PAPER":
      case "PAPER vs SCISSORS":
      case "SCISSORS vs ROCK":
        return ["LOSE", "You Lose!", "Computer gets one point."];
    }
  }
}

// Turn text to icon 
function convertIcon(weapon) {
  switch (weapon) {
    case "ROCK":
      return "✊";
    case "PAPER":
      return "✋";
    case "SCISSORS":
      return "✌️";
  }
}

// GAME PLAY
const weaponsBtn = document.querySelectorAll('.btn');
const playerWeapon = document.getElementById('player-weapon');
const computerWeapon = document.getElementById('computer-weapon');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const explanation = document.getElementById('explanation')

let playerScoreNum = 0;
let computerScoreNum = 0;

weaponsBtn.forEach((button) => {
  button.addEventListener('click', () => {
    // Get selections and display
    const playerSelection = button.id;
    const computerSelection = getComputerChoice()
    playerWeapon.textContent = button.textContent;
    computerWeapon.textContent = convertIcon(computerSelection);

    // Play round and display result
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult[1];
    explanation.textContent = roundResult[2];

    // Calculate score 
    if (roundResult[0] === "WIN") {
      playerScoreNum++;
    } else if (roundResult[0] === "LOSE") {
      computerScoreNum++;
    } else if (roundResult[0] === "TIE") {
      playerScoreNum++;
      computerScoreNum++;
    }

    // Display Score 
    playerScore.textContent = `Player: ${playerScoreNum.toString()}`;
    computerScore.textContent = `Computer: ${computerScoreNum.toString()}`;
  })
});
