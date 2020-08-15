const newTodo = document.querySelector("#new");
const todoSection = document.querySelector("section");
const counterDisplay = document.querySelector("#counter");
let todoCheckbox;

let todos = []; 
let counter = 0;

function createTodo(){
    console.log("new todo");
    let todo = newTodo.value;
    console.log(todo);
    todos.push('<div><input type="checkbox" class="todos" name="" id="">' + todo + ' <button>remove</button></div>');
    console.log(todos);
    console.log(todos.length);
    todoSection.innerHTML += todos[todos.length-1];
    newTodo.value = "";
    counter++;
    updateDisplayCounter();
    todoCheckbox = document.querySelectorAll(".todos");
    todoCheckbox.forEach(checkbox => {
        checkbox.addEventListener("change", function(){

            if(checkbox.checked){
                counter--;
            }else counter++;
            updateDisplayCounter();
        })
    });
}

function updateDisplayCounter(){
    counterDisplay.textContent = counter;
}

newTodo.addEventListener("change", createTodo);


