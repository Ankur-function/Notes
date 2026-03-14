// Step 1 :- What all i need to do

/**
 * 1) generate random number
 * 2) take input from the box when user clicks submit button.
 * 3) all the user inputs should display on Previous Guesses fileds
 * 4) decrement of guess remaining by 1 for each submit button.
 * 5) when user input matches with random number then user wins.
 */

// Step 2 :- My Approach
/**
 * 1) generate random number
 * 2) take user input when he clicks on submit button
 * 3) validate user input.
 * 4) show user inputs history on previous guesses place.
 */

// gather all elements you need to work upon.
const randomNumber = (Math.random()*100+1).toFixed(2);
// console.log(randomNumber);
const guessField = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
const previousGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const lastPara = document.querySelector('.resultParas');

let maxTry = 10;
let canPlay = true;
let prevNumbers = [];
const p = document.createElement('p');

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    validateUserInput(guessField.value)
});

function validateUserInput(userInput){
if (userInput<1 || userInput>100 || isNaN(userInput)) {
    alert('Please put valid number here')
}else{
    prevNumbers.push(userInput);
    if (prevNumbers.length>10) {
        endGame();
    }
    showPreviousInputs(userInput);

   testUserInput(userInput);
   updateGuessField();
   showRemaining();
}
}

function testUserInput(userInput){
   if (userInput === randomNumber) {
    displayMessage('congrates your guess is right. You Won')
   }else if(userInput<randomNumber){
    displayMessage( 'your guess is too low')
   }else{
    displayMessage( 'your guess is too high')
   }
}

function updateGuessField(){
   guessField.value=''
   maxTry--;
}

function showPreviousInputs(userInput){
    previousGuesses.innerHTML += ` ${userInput}`
}

function showRemaining(){
  remaining.innerHTML = maxTry;
}

function displayMessage(message){
 lowOrHi.innerHTML = message;
}
function endGame(){
    guessField.value='';
    canPlay= false;
    prevNumbers = [];
    guessField.setAttribute('disabled','');
    p.innerHTML = `<h2>Game is over, Want to start again?</h2>`
    lastPara.appendChild(p);
}