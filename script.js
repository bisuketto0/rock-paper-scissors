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


function playRound(playerSelection) {
  
  computerSelection = getComputerChoice();

  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    showResults('Player Wins!');
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    showResults('Player Loses!');
  
  } else {
    showResults("It's a Draw!");
  }
} //Compare player and computer choice and check who won

function showResults(message) {
  const results = document.querySelector('.results')
  const result = document.querySelector('.result')
  result.textContent = message
}