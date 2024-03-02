const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const CURRENT_USER_KEY = "currentUser";
const CURRENT_USER = localStorage.getItem(CURRENT_USER_KEY);
const TODOS_KEY = `${CURRENT_USER}_todos`;

let todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newToDoObj.text;
  button.innerText = "✔️";
  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  if ("" === newTodo) {
    alert("할 일을 입력해주세요.");
  } else {
    const newToDoObj = {
      text: newTodo,
      id: Date.now(),
    };
    todos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos != null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
