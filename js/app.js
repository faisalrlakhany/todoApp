

const item = document.getElementById("item")
const todoBox = document.getElementById("todo-box")



item.addEventListener("keyup" , function (event) {
    
    if (event.key == "Enter") {
        
       addTodo(this.value);
        this.value = ""
        
    }

    
    
} )

const addTodo = (item) => {

    todoBox.innerHTML += `
    
      <li>
                ${item}
                <i class="fas fa-times"></i>
      </li>

    `

    todoBox.addEventListener("click" , function (event) {
        


        if (event.target.tagName == "I") {
            
            event.target.parentElement.remove();
            return;
        }


        if (event.target.tagName == "LI") {
            event.target.classList.toggle("done")
        }




    })
    


    

}

