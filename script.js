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

weaponsBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice()

    playerWeapon.textContent = button.textContent;
    computerWeapon.textContent = convertIcon(computerSelection);
    
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(`${playerSelection} vs ${computerSelection}`);
    console.log(roundResult);
  })
});
