document.addEventListener("DOMContentLoaded", () => {
    const form= document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    form.addEventListener("submit", (event) =>
     {
        event.preventDefault();
        const todotext = input.value.trim();
        if (todotext!==""){
            addTodoItem(todotext);
            input.value= "";
            input.focus();
        }
     });

   
    function addTodoItem(todotext) {
        const todoItem = document.createElement("li");
        todoItem.className= "todo-item";
        const span= document.createElement("span");
        span.textContent = todotext;


        span.addEventListener("click", () => {
            todoItem.classList.toggle("completed");
        });

        const delbtn = document.createElement("button");
        delbtn.innerHTML = "&times;";
        delbtn.title="delete task";

        delbtn.addEventListener("click", () => {
            todoList.removeChild(todoItem);
        });
        todoItem.appendChild(span);
        todoItem.appendChild(delbtn);
        todoList.appendChild(todoItem);
    }
});