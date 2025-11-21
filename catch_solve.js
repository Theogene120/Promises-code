const promise = () => {
    return new Promise((resolve, reject) => {
        reject("Something went wrong")
    })
}
promise()
.catch(err => {
    console.log("Handling Error: " + err)
    return 'Use the defalt password: ' + 12345
})
.then(ans => console.log(ans))