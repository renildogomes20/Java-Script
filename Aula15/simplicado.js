let num = [5, 8, 9, 2, 7]

num.sort()

for(let c=0; c < num.length; c++) {
    console.log(`Valor ${num[c]} na posição ${c}`)
}

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}