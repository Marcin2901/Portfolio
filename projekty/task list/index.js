const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const form = document.getElementById('form');



function getTaskAray() {
      if(localStorage.getItem('tasks')) {
            return JSON.parse(localStorage.getItem('tasks'))
      } else {
            return []
      }
}

const taskArray = getTaskAray();

form.addEventListener('submit', (e) => {
      e.preventDefault();

      taskArray.push(taskInput.value);
      localStorage.setItem('tasks', JSON.stringify(taskArray))
      taskInput.value = "";
      renderList();
})

function renderList() {
      taskList.innerHTML = "";
      for(let task of taskArray) {
            const li = document.createElement('li')
            li.textContent = task;
            li.classList.add('itemList');
            taskList.appendChild(li);
      }
}

renderList();
