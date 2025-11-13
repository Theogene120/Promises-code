const manyResolve = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello")
        resolve("welcome to my Youtube channel")
    })
}

manyResolve()
.then(greeting => console.log("Say " + greeting + " to our guest"))

// Only first resolve will be returned by then