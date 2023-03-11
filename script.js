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
    console.log('PlayerWins');
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    console.log('PlayerLoses');
  
  } else {
    console.log('Draw');
  }
} //Compare player and computer choice and check who won