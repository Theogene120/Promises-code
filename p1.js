// function test(){
//     console.log("Start")
//     setTimeout(() => console.log("In the middle"), 2000)
//     console.log("End")
//     setInterval(() => console.log("Hey! You're still here 😋"), 5000)
//     setInterval(() => console.log("In the middle"), 2000)
// }

// test()

let promise = () => {
    return new Promise((resolve, reject) => {
        resolve("ok")
    })
}
promise().then(ans => {
    //console.log(ans)
    throw new Error("whoops!")
})
.catch(err => console.log(err))