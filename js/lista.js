var lista_tare = {'tare': []}  
onload = function(){
    if(localStorage.getItem('tarefas') != null){
        let lista = document.getElementById('tarefas')
        let itens = localStorage.getItem('tarefas')
        itens = JSON.parse(itens)
        if (itens != null){
            for(var item of itens.tare){
                lista.innerHTML += `<li>${item}</li>`
            }
        }
    }
}
function mostraButton() {
    document.getElementById('botoes').style.display = 'none'
    document.getElementById('add').style.display = 'block'
}


function adicionaItem(){
    let tarefa = document.getElementById('nova_tarefa').value
    if(localStorage.getItem('tarefas') == null){
        lista_tare.tare.push(tarefa)
        localStorage.setItem('tarefas', JSON.stringify(lista_tare))
        //console.log(lista_tare)
    }
    else{
        let lista_tare = JSON.parse(localStorage.getItem('tarefas'))
        lista_tare.tare.push(tarefa)
        localStorage.setItem('tarefas', JSON.stringify(lista_tare))
        //console.log(lista_tare)
    }
    let lista = document.getElementById('tarefas')
    lista.innerHTML += `<li>${tarefa}</li>`
}

function apaga(){
    localStorage.clear()
    let lista = document.getElementById('tarefas')
    lista.innerHTML = ''
}