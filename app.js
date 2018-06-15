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
      UIguessesRemaining = document.querySelector('#remaining-guesses')

// assign UI min and max
UImin.textContent = min;
UImax.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function() {
  let guess = parseInt(UIguessInput.value)
  // guessesRemainingMessage(`You have ${guessesRemaining-1} guesses left.`, 'grey')


  

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
  gameOver(true, `${winNum} is correct! Good guess - you win! :)`)
  // change submit button to offer "play again"
  
  } else {
    //  guess incorrect
    guessesRemaining -= 1
    // check if game continues
    if(guessesRemaining === 0) {
      gameOver(false, `Awww, you lost! The winning number was ${winNum}`)
    } else {
      // Game continues, guess incorrect
      // border color
      UIguessInput.style.borderColor = 'red'
      UIguessInput.value = ''
      UIguessInput.focus()
      setMessage(`${guess} is incorrect, ${guessesRemaining} guesses left, try again`, 'red')
    }
  }
})

// set error message function
function setMessage(msg, color) {
  UImessage.style.color = color
  UImessage.textContent = msg
}
// function guessesRemainingMessage(msg, color) {
//   UIguessesRemaining.style.color = color
//   UIguessesRemaining.textContent = msg
// }

function gameOver(won, msg) {
  let color
  won === true ? color = 'green' : color = 'red'

  UIguessInput.disabled = true
  UIguessInput.style.borderColor = color
  UImessage.style.color = color
  setMessage(msg, color)

}