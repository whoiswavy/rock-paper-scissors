let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let gameWinner = '';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  const resultDiv = document.getElementById('result');
  const scoreDiv = document.getElementById('score');

  if (playerSelection == computerSelection) {
    roundWinner = 'tie';
    resultDiv.textContent = "You Drew!";
  }
  if (
    ((playerSelection == 'Rock') && (computerSelection == 'Paper')) ||
    ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) ||
    ((playerSelection == 'Paper') && (computerSelection == 'Scissors'))
  ) {
    computerScore++;
    roundWinner = 'player';
    resultDiv.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
  }
  if (
    ((playerSelection == 'Paper') && (computerSelection == 'Rock')) ||
    ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) ||
    ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))
  ) {
    playerScore++;
    roundWinner = 'computer';
    resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore === 5) {
    gameWinner = 'player';
    resultDiv.textContent = 'Congratulations! You won the game!';
    disableButtons();
  }
  if (computerScore === 5) {
    gameWinner = 'computer';
    resultDiv.textContent = 'Sorry! Computer won the game!';
    disableButtons();
  }
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function() {
  const playerSelection = 'Rock';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', function() {
  const playerSelection = 'Paper';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', function() {
  const playerSelection = 'Scissors';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});