const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.classList.value)
  })
}) //Play round every time the players chooses between R, P and S


function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1
  if (randomChoice === 1) {
    return 'rock';
  } else if (randomChoice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
} //Get computer's choice by randomly choosing between rock, paper and scissors.

let playerScore = 0;
let computerScore = 0;  

function playRound(playerSelection) {

  computerSelection = getComputerChoice();

  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerScore += 1;
    showResults(`Player: <b>${playerSelection}</b><br> Computer: <b>${computerSelection}</b><br> <b>${playerSelection}</b> beats <b>${computerSelection}</b><br> Player WINS!`);
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerScore += 1;
    showResults(`Player: <b>${playerSelection}</b><br> Computer: <b>${computerSelection}</b><br> <b>${computerSelection}</b> beats <b>${playerSelection}</b><br> Player LOSES!`);
  
  } else {
    showResults(`<b>${playerSelection}</b> and <b>${computerSelection}</b> are the same! It's a DRAW.`);
  }
  showScore(playerScore, computerScore);
} //Compare player and computer choice and check who won

function showResults(message) {
  const result = document.querySelector('.result')
  result.innerHTML = message
}

function showScore(playerScore, computerScore) {
  const score = document.querySelector('.score')
  score.innerHTML = `The score is Player <b>${playerScore}</b> X <b>${computerScore}</b> Computer`
}