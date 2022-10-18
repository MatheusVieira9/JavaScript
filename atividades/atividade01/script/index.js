let now = new Date()
var hora_now = now.getHours()
var minuto_now = now.getMinutes()
var segundos_now = now.getSeconds()

let corpo = document.body
let resposta = document.querySelector('div.texto_resposta')
let imagem = document.getElementById('imagem_resposta')
let verificar = document.querySelector('input#verificar')
var tempo = true

verificar.addEventListener('click', horas)

function texto_resposta() {
    resposta.innerHTML=`<p>Agora são ${hora_now}:${minuto_now}:${segundos_now}</p>`
    console.log(`${hora_now}:${minuto_now}:${segundos_now}`)
    setTimeout('texto_resposta()', 500)
}
function cedo(){
    corpo.style.backgroundImage = 'linear-gradient(180deg, #f7cb81, #D85D42)'
    corpo.style.backgroundAttachment = 'fixed'
    imagem.innerHTML = '<img src="images/manhã.jpg" alt="Imagem de tarde" class="imagem_img"></img>'
}
function tarde(){
    corpo.style.backgroundImage = 'linear-gradient(180deg, #0077F0, #ffffff)'
    corpo.style.backgroundAttachment = 'fixed'
    imagem.innerHTML = '<img src="images/tarde.jpg" alt="Imagem de tarde" class="imagem_img"></img>'
}
function por_sol(){
    corpo.style.backgroundImage = 'linear-gradient(180deg, #0077F0, #D85D42)'
    corpo.style.backgroundAttachment= 'fixed'
    imagem.innerHTML = '<img src="images/por_sol.jpg" alt="Imagem de tarde" class="imagem_img"></img>'
}
function noite(){
    corpo.style.backgroundImage = 'linear-gradient(180deg, #18181C, #0077F0)'
    corpo.style.backgroundAttachment= 'fixed'
    imagem.innerHTML='<img src="images/noite.jpg" alt="Imagem de tarde" class="imagem_img"></img>'
}

function horas(){
    texto_resposta()

    if(hora_now >= 4 && hora_now < 7){
        console.log('manhã')
        cedo()
    }
    else if(hora_now >= 16 && hora_now < 18 ){
        console.log('Por do sol')
        por_sol()
    }
    else if(hora_now < 4 || hora_now >= 18){
        console.log('noite')
        noite()
    }
    else{
        console.log('tarde')
        tarde()
    }
}