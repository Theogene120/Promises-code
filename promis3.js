const div = (a,b) =>{
    return new Promise((resolve, reject) => {
        if(b === 0) reject("Impossible calculation!")
        else resolve(a/b)
    })
}

div(10, 0)
.then(result => {
    console.log("Result is " + result)
    return result * 2
})
.catch(err => {
    console.log("Error: " + err)
    return 1
})
.then(newValue => {
    console.log("New value is: " + newValue)
    return newValue + 5
})
.then(final => {
    console.log("Final value is "+ final)
})
.catch(err => {
console.error("Another error:", err);
});
