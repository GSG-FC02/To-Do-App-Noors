// selectors 
const toDoinput = document.querySelector(".todo-input");
const toDobutton = document.querySelector(".todo-button");
const toDolist = document.querySelector(".todo-lists")

// Events listener
toDobutton.addEventListener("click", addTodo , true);
toDolist.addEventListener("click" , checkNdelete) ;
document.addEventListener("DOMContentLoaded", getTodos);

// function 
function addTodo(e){
    e.preventDefault();
    if(toDoinput.value){
        //div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        // li 
        const NewTodo = document.createElement("li")
        NewTodo.textContent = toDoinput.value
    
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
      toDoinput.value = null;
    }
    
}

function checkNdelete(e) {
    // console.log(e.target)
    const item = e.target;
    //delete 
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
        removelocal(todo);  
    }
    // checkmark 
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        // toggle : checks the selected elements for visibility
        todo.classList.toggle("completed");
       }
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
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function getTodos(){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(
        function(todo){
        //div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // li 
        const NewTodo = document.createElement("li");
        NewTodo.textContent = todo;
    
        // the value we need to put inside the list 
        NewTodo.classList.add("todo-item");
        todoDiv.appendChild(NewTodo);
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
    });

}

function removelocal(todo){
    // todo here is a div
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    };
    // console.log(todo)  => access to class "todo"
    // console.log(todo.children[0].innerText) => access to the text inside li
    // console.log(todos.indexOf(todo.children[0].innerText)) => to get the index of the text inside the li
    const todoIndex = todo.children[0].innerText;
    // (from what positon u wanna remove the element , How many element you wanna remove)
    todos.splice(todos.indexOf(todoIndex) , 1);
    // method converts a JavaScript object or value to a JSON string
    localStorage.setItem("todos" , JSON.stringify(todos)); 

}