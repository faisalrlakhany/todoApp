

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
        this.value = ""

    }



})

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
            return;
        }


        if (event.target.tagName == "LI") {
            event.target.classList.toggle("done")
        }




    })





}

