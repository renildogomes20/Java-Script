let num = [5, 8, 9, 5, 2]
num.push(7)
num.sort()
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(10)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

