const tabsContainer = document.querySelector('.tabs');
const tabsButton = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');

tabsContainer.addEventListener('click',(e)=>{
const clickedTab = e.target;
const targetId = clickedTab.dataset.tab;
console.log(targetId);


tabsButton.forEach((btn)=>{btn.classList.remove('active')});
tabsContent.forEach((content)=>{content.classList.add('hidden')});

clickedTab.classList.add('active');
const contentTab = document.querySelector(`#${targetId}`);
contentTab.classList.remove('hidden');
})