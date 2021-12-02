const input = document.getElementById("input")
const lista = document.getElementById("lista")
const tarefa = []

function add() {
    if (input.value != "")
    tarefa.push(input.value)
    input.value = ""
    render()
}
function render() {
    lista.innerHTML = null
    tarefa.forEach(i => {
        const li = document.createElement("li")
        li.innerText = i
        lista.appendChild(li)
    })
}
removeTask = function( itemId ){

    for( i = 0 ; i < ul.children.length ; i++){

        if(ul.children[i].getAttribute("index") == itemId ){

            ul.children[i].remove();

        }
    }
}

createItemEl = function(itemValue, itemId){

    let li = document.createElement("li");

    li.setAttribute("index", itemId);

    li.appendChild(document.createTextNode(itemValue));

    return li;
}

createRemoveTaskBtn = function(itemId){
    let btn =  document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")"); 
    btn.innerHTML ="X";
    return btn;
}
