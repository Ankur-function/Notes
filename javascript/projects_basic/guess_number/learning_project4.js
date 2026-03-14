let randomNumber = parseInt(Math.random()*100+1);

//step 1 :- fetch all requirements
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi   = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) { // is user allowed to play game or not
    submitButton.addEventListener('click',(e)=>{// why can't we use submit method here
        e.preventDefault();
        validateGuess(parseInt(userInput.value));
    })
}


function validateGuess(userInput){ // checking user has put a valid number or not
    if (userInput <= 0 || userInput>100 || isNaN(userInput)) {
        alert('Please enter a valid number')
    }else {
        prevGuess.push(userInput);// if number is valid then first put in to an array so that we can show in history.
        if (numGuess>10) {// checking if user has used all his chances.
            updateGuess(userInput);
            endGame();
        }else{
            updateGuess(userInput);
          checkGuess(userInput);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        printMessage('Congrats, you guessed it right');
        endGame();
    }else if(guess<randomNumber){
      printMessage('Number is too low');
    }else{
        printMessage('Number is too high');
    }
}

function updateGuess(guess){
     userInput.value='';
     guessSlot.innerHTML += ` ${guess},`; // concatinating here
     numGuess++;
     remaining.innerHTML = 11-numGuess;
}

function printMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled',''); // so that user can't add anymore numbers now.
    p.classList.add('button');
    p.innerHTML=`<h2 id='newGame'>Start new game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        userInput.value='';
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML='';
        remaining.innerHTML = 11-numGuess;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}







