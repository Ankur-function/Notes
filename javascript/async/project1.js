// generate a random color when user presses start and stop it when user presses stop.

let operateInterval;

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color +=  hex[Math.floor(Math.random()*16)];
    }
    return color;
};

const startChangingColor = function(){

    if (!operateInterval) {
   operateInterval = setInterval(changeBGColor,2000);
        
    }

function changeBGColor() {
    
document.body.style.backgroundColor = randomColor();
}
}
const stopChangingColor = function(){
    clearInterval(operateInterval);
    operateInterval=null;
}

document.querySelector("#start").addEventListener('click',()=>{

startChangingColor();
});

document.querySelector("#stop").addEventListener('click',()=>{
stopChangingColor()
})
console.log(randomColor());

