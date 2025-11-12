const div = (a,b) => {
    return new Promise((resolved, reject) =>{
        if(b === 0)
            reject('Imposible calculation!')
        else
            resolved(a/b)
    })
}

div(10,9)
.then(answer => console.log("The answer is: " + answer))
.catch(err => console.log("Error: " + err))