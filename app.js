/*
Game function:
- player must guess a number between a min and max value
- player gets a set number of guesses
- player get notification of remaining guess
- player gets notification of correct answer on loss
- player may click to play again
*/

// Game values
let min = 1,
    max = 10,
    winNum = 7,
    guessesRemaining = 3

// UI elements
const UIgame = document.querySelector('#game'),
      UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message')

// assign UI min and max
UImin.textContent = min;
UImax.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function() {
  let guess = parseInt(UIguessInput.value)
  

  // validate guess (between min-max range)
  if(isNaN(guess) || guess < min || guess > max) {
    console.log('Not a valid guess. Guess within range')
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } else {
    
  }

  // check if won
  if(guess === winNum) {
  // disable input
  UIguessInput.disabled = true
  // inform player of win
    setMessage(`${winNum} is correct! Good guess - you win! :)`, 'green')
  // make border green
  UIguessInput.style.borderColor = 'green'
  // change submit button to offer "play again"
  } else {

  }
})

// set error message function
function setMessage(msg, color) {
  UImessage.style.color = color
  UImessage.textContent = msg
}
