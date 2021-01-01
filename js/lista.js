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
    if(tarefa != null && tarefa != ''){
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
    else {
        alert('ERRO! VALOR DO CAMPO NÃO PODE SER VAZIO, VERIFIQUE O VALOR DIGITADO :(')
    }
}

function apaga(){
    localStorage.clear()
    let lista = document.getElementById('tarefas')
    lista.innerHTML = ''
}

function editar(){
    let dados = localStorage.getItem('tarefas')
    dados = JSON.parse(dados)
    if(dados != null){
        document.getElementById('edit').style.display ='block'
        document.getElementById('botoes').style.display = 'none'
        let lista = document.getElementById('tarefas')
        lista.innerHTML = ''
        dados.tare.forEach((element) => {
            lista.innerHTML += `<input type="checkbox" name='valor' clicado='off' onClick="teste_box(this)" value='${element}'><li>${element}</li>`
        });

    }
    else {
        alert('ERRO! Não há nenhuma tarefa para editar.. :(')
    }
}
function apaga_parte(){
    let valor = document.getElementById('tarefas').children
    let novas_tarefas = []
    let tem_selecao = false
    for(var item of valor){
        if (item.getAttribute('clicado') == 'on'){
            tem_selecao = true
        }
    }
    if(tem_selecao){
        for(var element of valor){
            if(element.getAttribute('clicado') == 'off'){
                novas_tarefas.push(`${element.getAttribute('value')}`)
                }
            }
        lista_tare = {'tare': novas_tarefas} 
        localStorage.setItem('tarefas', JSON.stringify(lista_tare))
        voltar()
    }
    else{
        alert('ERRO! VOCÊ NAO SELECIOU NADA PARA APAGAR :(')
    }
}

function all_delete(){
    let dados =localStorage.getItem('tarefas')
    let chek = document.getElementById('all').getAttribute('clicado')
    if(dados != null && chek == 'on'){
        localStorage.clear();
        document.getElementById('tarefas').innerHTML = '';
        setTimeout(element => {
            alert('Suas tarefas foram apagadas com sucesso :)')
        }, 100
        )
        voltar()
    }
    else{
        alert('ERRO! VOCÊ TEM QUE CLICAR NA CAIXINHA AO LADO PARA CONFIRMAR SUA DECISÃO')
    }
}

function teste_box(element){
    elemento = element
    let clicado = elemento.getAttribute('clicado')
    if (clicado == 'off'){
        elemento.setAttribute('clicado', 'on')
    }
    else {
        elemento.setAttribute('clicado', 'off')
    }
}

function voltar(){
    document.getElementById('edit').style.display = 'none'
    document.getElementById('botoes').style.display = 'block'
    let lista = document.getElementById('tarefas')
    if(localStorage.getItem('tarefas') != null){
        lista.innerHTML = ''
        let itens = localStorage.getItem('tarefas')
        itens = JSON.parse(itens)
        if (itens != null){
            for(var item of itens.tare){
                lista.innerHTML += `<li>${item}</li>`
            }
        }
    }
}