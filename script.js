function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomElement = choice[Math.floor(Math.random() * choice.length)]
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));