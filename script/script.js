function conferir(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio == 0 || fim == 0 || passo == 0){
        alert('[ERRO] não pode caixa vazio ou com numero zero')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML =`Contando...`
        if(i<f){
            for( let x = i ; x <= f ; x += p){
                res.innerHTML += ` ${x} \u{1F603}`
            }
        }else{
            for( let x = i ; x >= f ; x -= p){
                res.innerHTML += ` ${x} \u{1F603}`
            }
        }
    }

}
