let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let gameWinner = '';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  const choice = ['Pierre', 'Papier', 'Ciseaux'];
  const randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  const resultDiv = document.getElementById('result');
  const scoreDiv = document.getElementById('score');

  if (playerSelection == computerSelection) {
    roundWinner = 'tie';
    resultDiv.textContent = "C'est une égalité!";
  }
  if (
    ((playerSelection == 'Pierre') && (computerSelection == 'Papier')) ||
    ((playerSelection == 'Ciseaux') && (computerSelection == 'Pierre')) ||
    ((playerSelection == 'Papier') && (computerSelection == 'Ciseaux'))
  ) {
    computerScore++;
    roundWinner = 'player';
    resultDiv.textContent = `Tu as perdu! ${computerSelection} a battu ${playerSelection}`;
  }
  if (
    ((playerSelection == 'Papier') && (computerSelection == 'Pierre')) ||
    ((playerSelection == 'Pierre') && (computerSelection == 'Ciseaux')) ||
    ((playerSelection == 'Ciseaux') && (computerSelection == 'Papier'))
  ) {
    playerScore++;
    roundWinner = 'computer';
    resultDiv.textContent = `Tu gagnes! ${playerSelection} a battu ${computerSelection}`;
  }

  scoreDiv.textContent = `Joueur: ${playerScore} - Ordinateur: ${computerScore}`;

  if (playerScore === 5) {
    gameWinner = 'player';
    resultDiv.textContent = "Félicitations! Tu as gagné la partie!";
    disableButtons();
  }
  if (computerScore === 5) {
    gameWinner = 'computer';
    resultDiv.textContent = "Désolé! L'ordinateur a remporté la partie!";
    disableButtons();
  }
}

function disableButtons() {
  PierreButton.disabled = true;
  PapierButton.disabled = true;
  CiseauxButton.disabled = true;
}

const PierreButton = document.getElementById('rock');
const PapierButton = document.getElementById('paper');
const CiseauxButton = document.getElementById('scissors');

PierreButton.addEventListener('click', function() {
  const playerSelection = 'Pierre';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

PapierButton.addEventListener('click', function() {
  const playerSelection = 'Papier';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

CiseauxButton.addEventListener('click', function() {
  const playerSelection = 'Ciseaux';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});