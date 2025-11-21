const promise = (a,b) => {
    return new Promise((resolve, reject) =>{
        if(b === 0){
            reject("NO REAL SOLUTION")
        }
        resolve(`${a} / ${b} = ${a/b}`)
    })
}
promise(5,0)
.then(res => console.log(res))
.catch(err => {
    console.log("Error: " + err)
    return "0 on denominator is Infinity, Do you have something do with infinity or you can make other choice?"
})
.then (res2 => console.log(res2))