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
    showResults('Round Won!');
  
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerScore += 1;
    showResults('Round lost!');
  
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
  if (message === 'Round Won!') {
    result.classList.add('round-win')
    result.classList.remove('round-lost')
  } else if (message === 'Round lost!') {
    result.classList.add('round-lost')
    result.classList.remove('round-win')
  } else {
    result.classList.remove('round-win')
    result.classList.remove('round-lost')
  }

} //Update the results in the html file

function showSelections(playerSelection, computerSelection) {
  const playerSelectionImg = document.querySelector('.playerSelection')
  const compSelectionImg = document.querySelector('.compSelection')
  if (playerSelection === 'rock') {
    playerSelectionImg.src = './images/rock.jpg'
  } else if (playerSelection === 'paper') {
    playerSelectionImg.src = './images/paper.jpg'
  } else {
    playerSelectionImg.src = './images/scissors.jpg'
  }
  if (computerSelection === 'rock') {
    compSelectionImg.src = './images/rock.jpg'
  } else if (computerSelection === 'paper') {
    compSelectionImg.src = './images/paper.jpg'
  } else {
    compSelectionImg.src = './images/scissors.jpg'
  }
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