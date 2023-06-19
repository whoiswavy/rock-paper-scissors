function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomElement = choice[Math.floor(Math.random() * choice.length)]
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "You Drew!"
    } else if (((playerSelection == 'Rock') && (computerSelection == 'Paper')) || ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) || ((playerSelection == 'Paper') && (computerSelection == 'Scissors'))) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (((playerSelection == 'Paper') && (computerSelection == 'Rock')) || ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) || ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
        return `You Win! ${computerSelection} beats ${playerSelection}`
    }
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));