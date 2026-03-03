

const item = document.getElementById("item")
const todoBox = document.getElementById("todo-box")



item.addEventListener("keyup", function (event) {

    if (event.key == "Enter") {

        if (item.value === "") {

            Swal.fire({
                title: "Warning",
                text: "Please write something before adding a todo!",
                icon: "error"
            });

            return
        }

        addTodo(this.value);
        saveTodo();
        this.value = ""

    }
})



const saveTodo = ()=>{
    const todo = document.querySelectorAll("#todo-box li")
    console.log(todo);
    const todoData = [];
    todo.forEach((todo)=>{
        todoData.push(todo.innerText);
        
    })
    
    console.log(todoData);
    localStorage.setItem("todos" , JSON.stringify(todoData))
    

}   


const addTodo = (item) => {

    todoBox.innerHTML += `
    
      <li>
                ${item}
                <i class="fas fa-times"></i>
      </li>

    `
    todoBox.addEventListener("click", function (event) {


        if (event.target.tagName == "I") {

            event.target.parentElement.remove();
            saveTodo()
            return;
        }

        if (event.target.tagName == "LI") {
            event.target.classList.toggle("done")
            saveTodo()
        }
    })
}

// code for getdata from localstorage


(
    function (){
        const lsTodoData = JSON.parse(localStorage.getItem("todos"))

        
        console.log(lsTodoData);
        
        if (lsTodoData === null) {
           return;
        }else
        {
            lsTodoData.forEach((todo)=>{
                addTodo(todo)
            })
        }


    }
)
()