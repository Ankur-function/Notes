const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = document.querySelector('#height');// this will only give the Element and not the input value so to get value we must do '.value' on Element.
    const heightInputValue = parseInt(height.value); 
    const weight = document.querySelector('#weight');
    const weightInputValue = parseInt(weight.value)
    const result = document.querySelector('#result');

    if ((!heightInputValue || heightInputValue == 0) || (!weightInputValue || weightInputValue == 0)) {
        result.innerHTML = 'Give valid height or weight'
    }else{
    const bmi = ((weightInputValue/((heightInputValue*heightInputValue)/1000)).toFixed(2));
         result.innerHTML = `<span>${bmi}</span>`
    }
})