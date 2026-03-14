const form = document.querySelector('form');
// console.log(form);

// const height = parseInt(document.querySelector('#height').value);// this will give '' value bcoz script run ho gyi immediately

form.addEventListener('submit',(e)=>{
 e.preventDefault(); // so that this from doesn't actually submit on server. to prevent it's default behaviour

const height = parseInt(document.querySelector('#height').value);//hame values click hone pe chahiye so Listner ke andar dalna hoga.
const weight = parseInt(document.querySelector('#weight').value);
let result = document.querySelector('#result');

if (height ==='' || height <0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
}else if (weight ==='' || weight <0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
}else{
    const bmi = ((weight/((height*height)/1000)).toFixed(2));
    //show the result
    result.innerHTML = `<span>${bmi}</span>`
}
})


