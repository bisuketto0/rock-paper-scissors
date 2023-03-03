function getPlayerChoice() {
  return prompt('Chose: Rock, Paper or Scissors').toLowerCase();
}
//Get players choice by asking them to choose between rock, paper or scissors.

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