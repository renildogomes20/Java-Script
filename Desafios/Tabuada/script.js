var num = document.querySelector('input#valor')
var tab = document.getElementById('seltab') 
function tabuada() {
    var valor = Number(num.value)
    tab.innerHTML = " "
    if (num.value === '') {
        alert('Campo vazio!')
        return
    }
    for(var c=1; c<=12; c++) {
        var item = document.createElement('option')
        item.text = `${valor} x ${c} = ${valor*c}`
        item.value= `tab${c}`
        tab.appendChild(item)
    }

} 