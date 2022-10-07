var now = new Date()
var hora = now.getHours()
var minuto = now.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos`)
if (hora < 12 && hora >= 4){
    console.log('Bom dia')
}else if (hora >= 12 && hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}