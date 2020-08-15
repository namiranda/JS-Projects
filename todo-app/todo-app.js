const newTodo = document.querySelector("#new");
const todoSection = document.querySelector("section");
let todos = []; 

function createTodo(){
    console.log("new todo");
    let todo = newTodo.value;
    console.log(todo);
    todos.push('<div><input type="checkbox" name="" id="">' + todo + ' <button>remove</button></div>');
    console.log(todos);
    console.log(todos.length);
    todoSection.innerHTML += todos[todos.length-1];
    newTodo.value = "";
}
newTodo.addEventListener("change", createTodo);  
