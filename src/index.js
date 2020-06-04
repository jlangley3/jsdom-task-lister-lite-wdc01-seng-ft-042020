document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("#create-task-form")
    form.addEventListener("submit", handleSubmit)

});

function handleSubmit(event) {

    // prevent Reloading

    event.preventDefault()

    // create basic nodes that will be used

    let li = document.createElement("li")
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    // let doneBtn = document.createElement("button");
    // find task list element

    let ul = document.querySelector("#tasks")


    // add new stuff
    li.innerHTML = document.querySelector("#new-task-description").value
    deleteBtn.innerText = "X"
    editBtn.innerText = "Edit"
        // doneBtn.innerText = "Done"


    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    // li.appendChild(doneBtn);

    deleteBtn.addEventListener("click", handleDelete)
    editBtn.addEventListener("click", handleEdit)
    li.addEventListener("click", handleDone)


    ul.appendChild(li)
    event.target.reset()
}

function handleDelete(event) {
    // debugger;
    event.target.parentElement.remove();
}

function handleEdit(event) {
    // debugger;

    // creating nodes

    let form = document.createElement('form');
    let inputText = document.createElement('input')
    let submitBtn = document.createElement('input')
    let li = event.target.parentElement;

    // add attributes

    form.id = "edit-field";
    form.action = "#";
    form.method = "POST";

    inputText.type = "text";
    inputText.id = "editing";
    inputText.value = event.target.parentNode.firstChild.textContent;

    submitBtn.type = "submit";
    submitBtn.value = "Edit Task";

    // manipulate DOM

    form.appendChild(inputText);
    form.appendChild(submitBtn);

    li.innerHTML = "";
    li.appendChild(form);
    form.addEventListener("submit", editSubmit)

}

function editSubmit(event) {
    event.preventDefault()
    let li = event.target.parentElement
    li.innerHTML = event.target.children[0].value
    event.target.remove()
}

function handleDone(event) {
    if (event.target.classList.contains("done")) {
        event.target.classname = "";
        event.target.style.textDecoration = "none"
    } else {
        event.target.style.textDecoration = "line-through";
        event.target.classname = "done";
    }


}