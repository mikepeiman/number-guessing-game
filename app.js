/*
Game function:
- player must guess a number between a min and max value
- player gets a set number of guesses
- player get notification of remaining guess
- player gets notification of correct answer on loss
- player may click to play again
*/

// Game values
let min = 33,
    max = 77,
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
