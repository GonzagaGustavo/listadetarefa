const input = document.getElementById("input")
const lista = document.getElementById("lista")
const tarefas = []

function add() {
    if(input.value != "")
    tarefas.push(input.value)
    input.value = ""
    render()
}
function render() {
    lista.innerHTML = null
    tarefas.forEach(function (tarefa) {
        const li  = document.createElement("li")
        li.innerText = tarefa
        lista.appendChild(li)
        const button = document.createElement("button")
        button.innerHTML = "X"
        button.addEventListener("click", function() {
            const index = tarefas.indexOf(tarefa)
            tarefas.splice(index, 1)
            render()
        })
        li.appendChild(button)
    })
}