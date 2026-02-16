let a1 = 0;
let a2 = 1;
console.log(a1+', '+a2)


for (let c = 3; c <=13; c++) {
    let a3 = proximofib (a1, a2)
    /*let a3 = a1 + a2
    a1 = a2
    a2 = a3*/
    console.log(', '+a3)
}    

function proximofib (x1, x2) {
        let x3 = x1 + x2
        x1 = x2
        x2 = x3
        return x3
     
}