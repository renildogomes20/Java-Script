const objs=document.getElementById("div")

let num=[10, 20, 30, 40, 50]

for(o of objs) {
    console.log(o.innerHTML="Curso")
}

for(o in objs) {
    //console.log(objs[o].innerHTML)
    console.log(o.innerHTML)
}

/*for(let i=0; i<num.length; i++) {
    console.log(num[i])
}*/