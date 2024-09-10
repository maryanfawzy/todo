
const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('user-todo');
const add = document.querySelector("add");
const clear = document.getElementById("clearall")

form.addEventListener('submit', function(e) {
  e.preventDefault();
  todoMaker(input.value);
  input.value = '';
})

const todoMaker = function(text) {
  const todo = document.createElement('li');
  todo.textContent = text;
  todoList.appendChild(todo);
}
clear.addEventListener('click', function() {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  });
add.addEventListener("click",(e)=>{
    e.preventDefault()
    addNew(input.value);
    input.value= ""
})
const addNew = function(t){
    const addnewone = document.createElement("li");
    todoList.appendChild(addnewone);
}



button.addEventListener('click', function() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});











// while(toDoList.firstChild){
//     toDoList.removeChild(toDoList.firstChild)
//  }

