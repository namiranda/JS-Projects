const newTodo = document.querySelector("#new");
const todoSection = document.querySelector("section");
const counterDisplay = document.querySelector("#counter");
let todoCheckbox;

let todos = [];
let counter = 0;

function createTodo() {
    let todo = newTodo.value;
    todos.push('<div class="todo"><input type="checkbox" class="todos" name="" id="">' + todo + ' <button class="remove">remove</button></div>');
    console.log(todos);
    console.log(todos.length);
    todoSection.innerHTML += todos[todos.length - 1];
    newTodo.value = "";
    counter++;
    updateDisplayCounter();

    todoCheckbox = document.querySelectorAll(".todos");
    todoCheckbox.forEach(checkbox => {
        checkbox.addEventListener("change", function() {

            if (checkbox.checked) {
                counter--;
            } else counter++;
            updateDisplayCounter();
        })
    });

    let todoList = document.querySelectorAll(".todo")
    let btnRemove = document.querySelectorAll(".remove");
    console.log("bot: " + btnRemove.length);
    btnRemove.forEach((button, index) => {
        button.addEventListener("click", function() {

            todoSection.removeChild(todoList[index]);
            if (!todoCheckbox[index].checked) //Si no esta selecionado, restar al counter
                counter--;
            updateDisplayCounter();
            todos.splice(index, 1);

        })
    });
}

function updateDisplayCounter() {
    counterDisplay.textContent = counter;
}

newTodo.addEventListener("change", createTodo);