const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const totalTasks = document.querySelector('#totalTasks')

let allTasks=[]
let indexCount=0
addBtn.addEventListener('click',()=>{
    const inputValue = taskInput.value;
    allTasks.push(inputValue);
    const newli = document.createElement('li');
    newli.innerHTML = inputValue;
    indexCount++;
    taskList.appendChild(newli);
    const delButton = document.createElement('button');
    delButton.innerHTML = 'Delete me';
    newli.appendChild(delButton);
    delButton.addEventListener('click',()=>{
     const children = Array.from(taskList.children);
     const newliIndex = children.indexOf(newli);
     console.log(newliIndex);
      allTasks.splice(newliIndex,1);
      newli.remove();
      console.log(allTasks);
      
      totalTasks.innerHTML = `Total Tasks: ${allTasks.length}`
    })
    totalTasks.innerHTML = `Total Tasks: ${allTasks.length}`
    taskInput.value='';
})