function getPlayerChoice() {
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      return button.classList.value
    })
  })
}
//Get player's choice by listening to the buttons they clicked.

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1
  if (randomChoice === 1) {
    return 'rock';
  } else if (randomChoice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
//Get computer's choice by randomly choosing between rock, paper and scissors.

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return 'PlayerWins';
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    return 'PlayerLoses';
  
  } else {
    return 'Draw';
  }
}
//Compare player and computer choice and check who won
