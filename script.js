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
    showResults('Player Won the Round!');
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerScore += 1;
    showResults('Player Lost the Round!');
  
  } else {
    showResults("It's a Draw!");
  }
  showScore(playerScore, computerScore);
  showGame(playerScore, computerScore);
  showSelections(playerSelection, computerSelection);
} //Compare player and computer choice and check who won

function showResults(message) {
  const result = document.querySelector('.result')
  result.innerHTML = message
} //Update the results in the html file

function showSelections(playerSelection, computerSelection) {
  const playerSelectionDiv = document.querySelector('.playerSelection')
  const compSelectionDiv = document.querySelector('.compSelection')
  playerSelectionDiv.textContent = playerSelection
  compSelectionDiv.textContent = computerSelection
}

function showScore(playerScore, computerScore) {
  const playerScoreDiv = document.querySelector('.playerScore')
  const compScoreDiv = document.querySelector('.compScore')
  playerScoreDiv.textContent = playerScore
  compScoreDiv.textContent = computerScore
} //Update the score in the html file

function showGame(playerScore, computerScore) {
  const game = document.querySelector('.game')
  if (playerScore === 5) {
    game.textContent = 'Player won the game! Restart the page to play again.'
    disableButtons()

  } else if (computerScore === 5) {
    game.textContent = 'Computer won the game! Restart the page to play again.'
    disableButtons()

  } else {
    game.textContent = 'First to 5 wins!'
  }
}//Check who won the game

function disableButtons() {
  buttons.forEach((button) => button.disabled = true)
}