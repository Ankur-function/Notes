const clock = document.querySelector('#clock');
// this should be digital clock and it should change every second.
// console.log(date);

setInterval(()=>{
const date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000);// function, time in milliseconds

