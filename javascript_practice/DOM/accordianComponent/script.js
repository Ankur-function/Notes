const itemsContainer = document.querySelector('.accordion');

itemsContainer.addEventListener('click',(e)=>{
const question = e.target.closest('.question');
if(!question) return;
const currentItem = question.closest('.item');
const currentAnswer = currentItem.querySelector('.answer');
const allAnswers = document.querySelectorAll('.answer');

allAnswers.forEach((answer)=>{
    if (answer != currentAnswer) {
        answer.classList.remove('show');
    }
});
currentAnswer.classList.toggle('show');
});
