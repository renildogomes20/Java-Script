const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("curso")]
const cursosC2=[...document.getElementsByClassName("curso")]

const cursoEspecial=document.getElementsByClassName("curso")[0]

cursosC2.map((el)=>{
    el.classList.add("destaque")
})

console.log(cursosTodos)