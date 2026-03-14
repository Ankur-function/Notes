// 1st saare buttons ko select karo
// 2 fir body ko select karo kyu ki body ka color change karna hai button ke click pe

const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);

// ab yha buttons hame NodeList dega to uspe forEach to laga hi sakte hai na directly that's why
buttons.forEach((ele)=>(console.log(ele.addEventListener('click',(e)=>{
if (e.target.id == 'grey') {
    body.style.backgroundColor = e.target.id;
}
if (e.target.id == 'green') {
    body.style.backgroundColor = e.target.id;
}
if (e.target.id == 'orange') {
    body.style.backgroundColor = e.target.id;
}
if (e.target.id == 'white') {
    body.style.backgroundColor = e.target.id;
}
}))));
