let obj = {
    then(resolve, reject){
        resolve("Hey from thenable")
    }
}

Promise.resolve(obj).then(message => {
    console.log(message)
    return 'Still working like all other thens'
})
.then(message2 => {
    setTimeout(() => console.log(message2), 3000)
})