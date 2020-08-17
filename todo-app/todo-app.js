const newTodo = document.querySelector("#new");
const todoSection = document.querySelector("section");
const counterDisplay = document.querySelector("#counter");
const filterCheckbox = document.querySelector("#filter");

let todoCheckbox;
let todoList;
let btnRemove;

let todos = [];
let counter = 0;

function createTodo() {
    let todo = newTodo.value;
    todos.push('<div class="todo"><input type="checkbox" class="todos" name="" id="">' + todo + ' <button class="remove">remove</button></div>');
    todoSection.innerHTML += todos[todos.length - 1];
    newTodo.value = "";
    counter++;
    updateDisplayCounter();

    todoList = document.querySelectorAll(".todo") //divs
    btnRemove = document.querySelectorAll(".remove"); //buttons
    todoCheckbox = document.querySelectorAll(".todos"); //checkboxes 

    todoCheckbox.forEach((checkbox, index) => {
        checkbox.addEventListener("change", function() {

            todoList[index].classList.toggle("done");
            if (checkbox.checked) {
                counter--;
            } else counter++;
            updateDisplayCounter();
        })
    });

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

function hideDone() {
    let done = document.querySelectorAll(".done");

    done.forEach(todoDiv => {
        todoDiv.classList.toggle("hidden");
    });
}

newTodo.addEventListener("change", createTodo);
filterCheckbox.addEventListener("click", hideDone);