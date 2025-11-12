function div(n, d, checkDeno){

    if(checkDeno(d)) return n/d
    else return "Denominator d should be postive"
}

let check = (n) => n !== 0


console.log(div(20,6,check))

function greet(name, callback){
    console.log("Hello " + name)
    callback()
}
let saybye = () => console.log("Good Bye")

greet('Theogene', saybye)