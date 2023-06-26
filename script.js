let playerScore = 0
let computerScore = 0
let roundWinner = '';
let gameWinner = '';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
      
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomElement = choice[Math.floor(Math.random() * choice.length)]
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        roundWinner = 'tie'
        return "You Drew!"
    }
    if (
        ((playerSelection == 'Rock') && (computerSelection == 'Paper')) || ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) || ((playerSelection == 'Paper') && (computerSelection == 'Scissors'))
    ) {
        playerScore++
        roundWinner = 'player'
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    } 
    if (
        ((playerSelection == 'Paper') && (computerSelection == 'Rock')) || ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) || ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))
    ) {
        computerScore++
        roundWinner = 'computer'
        return `You Win! ${computerSelection} beats ${playerSelection}`
    }
  }

  
  const playerSelection = capitalizeFirstLetter(prompt('Please select rock, paper, or scissors: '));
  const computerSelection = getComputerChoice();

  function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore === 3) {
        return 'You won the game!';
    }
    if (computerScore === 3) {
        return 'Computer won the game!';
    }
  }

  console.log(game())