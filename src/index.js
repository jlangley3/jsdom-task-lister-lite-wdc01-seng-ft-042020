document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("#create-task-form")
    form.addEventListener("submit", handleSubmit)
});

function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    let li = document.createElement("li")
    let ul = document.querySelector("#tasks")
    li.innerHTML = document.querySelector("#new-task-description").value
    ul.appendChild(li)

}