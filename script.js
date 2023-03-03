function getPlayerChoice() {
  return prompt('Chose: Rock, Paper or Scissors').toLowerCase();
}
//Get player's choice by asking them to choose between rock, paper or scissors.

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

function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  for (i = 1; i <= 5; i++) {
    const matchResult = playRound()
    console.log('ROUND: ' + i)
    if (matchResult === 'PlayerWins') {
      console.log('Congratulations! You won round ' + i)
      ++playerPoints;
    
    } else if (matchResult === 'PlayerLoses') {
      console.log('Better luck next time! You lost round ' + i)
      ++computerPoints;
    
    } else {
      console.log('Round ' + i + ' was a tie!')
    }
  }
  if (playerPoints > computerPoints) {
    return `Player won the game! The score was: ${playerPoints} X ${computerPoints}`;
  
  } else if (playerPoints < computerPoints) {
    return `Player lost the game! The score was: ${playerPoints} X ${computerPoints}`;
  
  } else {
    return `It was a tie! The score was: ${playerPoints} X ${computerPoints}`;
  }
}