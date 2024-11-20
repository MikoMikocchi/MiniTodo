const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

class TodoApp {
  constructor() {
    this.todos = [];
    this.totalTodos = 0;
    this.init();
  }

  init() {
    btn.addEventListener("click", () => this.addTodo());
    result.addEventListener("click", (e) => this.handleTodoClick(e));
  }

  addTodo() {
    const value = input.value.trim();
    if (value === "") return;
    this.todos.push(value);
    input.value = "";
    this.render();
  }

  handleTodoClick(e) {
    const target = e.target;
    if (target.tagName === "LI") {
      target.classList.toggle("li-active");
    } else if (target.tagName === "BUTTON") {
      this.removeTodo(target.parentElement);
    }
  }

  removeTodo(li) {
    const todoText = li.childNodes[0].textContent.trim(); // Получаем текст только из li
    const index = this.todos.indexOf(todoText);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.render();
    }
  }

  render() {
    result.innerHTML = "";
    this.todos.forEach((todo) => {
      const li = this.createTodoElement(todo);
      result.appendChild(li);
    });
    this.totalTodos = this.todos.length;
    total.textContent = this.totalTodos;
  }

  createTodoElement(value) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    if (this.totalTodos < 10) {
      li.className = "li";
      li.textContent = value;
      btn.className = "btn";
      btn.textContent = "-";
      li.appendChild(btn);
      return li;
    } else {
      alert("Can't add more than 10 elements");
      return;
    }
  }
}

// Initialization
const todoApp = new TodoApp();
