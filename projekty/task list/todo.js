const todoList = document.getElementById('todoList');
const todoName = document.getElementById('todoName');
const todoDescription = document.getElementById('description')
const todoForm = document.getElementById('todoForm');


const getTodoList = () => {
      if(localStorage.getItem('todoList')) {
            return  JSON.parse(localStorage.getItem('todoList'))
      } else {
            return []
      }
}
const todoArray = getTodoList()


todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const todo = {
            name: todoName.value,
            description: todoDescription.value,
            done: false
      }

      todoArray.push(todo);
      localStorage.setItem('todoList', JSON.stringify(todoArray))

      todoName.value = "";
      todoDescription.value = "";
      renderList();
})

function renderList() {
      const divList = Array.from(todoList.getElementsByClassName('todo-wrap'));
  

      divList.forEach((div) => {
            const button = div.getElementsByTagName('button')[0];
            button.removeEventListener('click', changeStatus)
      })

      todoList.innerHTML = "";
     

      
            todoArray.forEach((todo, index) => {
                  const div = document.createElement('div')
                  div.classList.add('todo-wrap')
                  const button = document.createElement('button')
                  button.dataset.taskId = index;

                  if(todo.done) {
                        button.textContent = 'done'
                        button.classList.add('btn-done')
                  } else {
                        button.textContent = 'finish'
                  
                  }
                  div.innerHTML =`
                        <div>
                              <h3>${todo.name}</h5>
                              <p>${todo.description}</p>
                        </div>
                  `;
                  div.appendChild(button)
                  div.classList.add('todoItem');
                  todoList.appendChild(div);

                  button.addEventListener('click', changeStatus)

            }
      )
}

const changeStatus = (event) => {
      const todo = todoArray[event.target.dataset.taskId]
      todo.done = !todo.done
      renderList()
      localStorage.setItem('todoList', JSON.stringify(todoArray))
}

renderList()


