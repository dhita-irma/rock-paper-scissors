// Create function getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    const hands = ['Rock', 'Paper', 'Scissors'];
    return hands[Math.floor(Math.random()*hands.length)];
}

console.log(getComputerChoice());
