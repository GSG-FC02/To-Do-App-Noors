// selectors 
const toDoinput = document.querySelector(".todo-input");
const toDobutton = document.querySelector(".todo-button");
const toDolist = document.querySelector(".todo-lists")

// Events listener
toDobutton.addEventListener("click", addTodo);
toDolist.addEventListener("click" , checkNdelete) ;

// function 
function addTodo(e){
    if (toDoinput.value.length >0){
        e.preventDefault();
    //div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // li 
    const NewTodo = document.createElement("li")
    NewTodo.innerText = toDoinput.value
    // the value we need to put inside the list 
    NewTodo.classList.add("todo-item");
    todoDiv.appendChild(NewTodo);
    saveTodolocally(toDoinput.value)
    // check button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Deleted button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // uppend to list 
    toDolist.appendChild(todoDiv);
    // clear to do input value 
    toDoinput.value = " "
    }
    
}

function checkNdelete(e) {
    // console.log(e.target)
    const item = e.target;
    //delete 
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove()   
    }
    // checkmark 
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        // toggle : checks the selected elements for visibility
        todo.classList.toggle("completed");}
}
function saveTodolocally(todo){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    // saving
    localStorage.setItem("todos" , JSON.stringify(todos))
}