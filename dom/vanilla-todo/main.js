// getting DOM nodes/elements
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const todos = [];

// handling todo creation
todoForm.addEventListener("submit", (e) => {
  // prevent default submission behavior
  e.preventDefault();

  const formData = new FormData(todoForm);
  const description = formData.get("description");

  todos.push(description);
  renderTodoList();

  // clear the form
  todoForm.reset();
});

function renderTodoList() {
  let listHTML = "";

  for (let i = 0; i < todos.length; i++) {
    listHTML += `
			<li>${todos[i]}
				<button onclick="deleteTodo(${i})">🗑️</button>
			</li>
		`;
  }

  todoList.innerHTML = listHTML;
}

function deleteTodo(index) {
  // remove todo from the Array
  todos.splice(index, 1);

  // re-render the list
  renderTodoList();
}
