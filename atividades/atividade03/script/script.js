let contar = document.getElementById('contar')
contar.addEventListener('click', contador)


function contador(){
    let ini = document.getElementById('inicio').value;
    let fi = document.getElementById('fim').value;
    let pass = document.getElementById('passo').value;
    let res = document.getElementById('resposta');
    let status = document.getElementById('status');
    
   
    if (ini.length == 0 || fi.length == 0 || pass.length == 0){
        window.alert('Por favor verifique se todos os campos necessários para o calculo estão preenchidos');
    } else {
        status.innerHTML = 'Contando:';
        let i = Number(ini)
        let f = Number(fi)
        let p = Number(pass)
        
        if (i > f){
            for(let c = i; c >= f; c -= p){
            
                if ((f + p) > c){
                    res.innerHTML += ` ${c} &#x1F3C1`
                } else {
                    res.innerHTML += `${c} &#x1F449 `
                }
            }
        } else {
            for(let c = i; c <= f; c += p){
        
                if ((f - p) < c){
                    res.innerHTML += ` ${c} &#x1F3C1`
                } else {
                    res.innerHTML += `${c} &#x1F449 `
                }
            }
        }
    }
}