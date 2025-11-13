const manyResolve = () => {
    return new Promise((resolve, reject) => {
        console.log(name)
        resolve("Hello")
        reject("Error")
    })
}

manyResolve()
.then(greeting => console.log("Say " + greeting + " to our guest"))
.catch(err =>  console.log("I made an Error: " + err))