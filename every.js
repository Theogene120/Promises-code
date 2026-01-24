let div = (nom, den, checkDeno) => {
    if(checkDeno(den)) return nom / den
    return 'Denominator must be defferent from zero'
}

let check = (n) => n !== 0

console.log(div(100, 5, check))