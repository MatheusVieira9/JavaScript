var contar = document.getElementById('contar')
contar.addEventListener('click', contador)

function contador(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resposta = document.getElementById('resposta')
    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    resposta.innerHTML = 'OK'
}