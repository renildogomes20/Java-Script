/* Variaráveis */
var ini = document.querySelector('input#ini')
var fim = document.querySelector('input#fim')
var pass = document.querySelector('input#pass')
var res = document.querySelector('div#res')
function Contar() {
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var passo = Number(pass.value)
    if (passo <=0) {
        alert("Passo inválido! Passo deve ser maior que zero!")
        return
    }
    if (pass.value==='') {
        alert('Campo vazio!')
        return
    }
    
    res.innerHTML = `<p>Contando: </p>`
    if (n1>n2) {
        for(var c=n1; c>=n2; c-=passo) {
            res.innerHTML += c+` &#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    }else {
        for (var c=n1; c<=n2; c+=passo) {
            res.innerHTML += c+` &#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    }

    
    if (ini.value ==='') {
        alert('Campo vazio!')
        return
    }
    if(fim.value==='') {
        alert('Campo vazio!')
        return
    }
    
}
