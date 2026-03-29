const info = document.querySelector('.info');
const remaining = document.querySelector('#remaining');
const tweetBox = document.querySelector('#tweetBox');
const h2 = document.createElement('h2');
const currentCount = document.querySelector('#currentCount');


tweetBox.addEventListener('input',(e)=>{
let counter=tweetBox.value.length;
remaining.innerHTML = `${100 - counter} characters remaining`
currentCount.innerHTML = `${counter}/100`
if (counter>=80) {
    remaining.style.color="red";
    currentCount.style.color="red";
}else{
    remaining.style.color="green"
}
if (counter==100) {
    console.log(info);
    tweetBox.readOnly=true;
    h2.style.color="red";
    h2.innerHTML="Character limit exceeded";
    info.appendChild(h2);
}

})
