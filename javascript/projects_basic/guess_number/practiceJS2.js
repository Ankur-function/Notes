const form = document.querySelector('form')
const newEle = document.createElement('h2');
const guessesList = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const userInput = document.querySelector('#guessField');


const targetNumber = Math.floor((Math.random()*100)) + 1;
let gameOver = false;

const randomNumber = (input) => {
    if (input == targetNumber) {
        return 'Congrats you have won'
    }else if (input<targetNumber) {
        return 'Your guess is too low'
    }else{
        return 'Your guess is too high'
    }
}

const validateUserInput = (input) => {
if(typeof(input) == "number" && input>0 && input<=100){
    return true
}else{
return false
}
}

const allNumbers = [];
const handleGuessList = (userInput) => {

allNumbers.push(userInput);
guessesList.innerHTML = allNumbers.join(', ');
lastResult.innerHTML = 10 - allNumbers.length;
if (allNumbers.length>=10) {
    gameOver=true;
    newEle.innerHTML =  'Game over want to start again?'
}
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
     if (gameOver) return;
    const input = parseInt(userInput.value);
   const result = validateUserInput(input);
   if (result == false) {
      newEle.innerHTML = 'Please enter a valid number';
   }else{
  const data = randomNumber(input);
        newEle.innerHTML = data;
        handleGuessList(input);
        userInput.value=''
   }
      document.body.appendChild(newEle);
    
})