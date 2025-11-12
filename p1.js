function test(){
    console.log("Start")
    setTimeout(() => console.log("In the middle"), 2000)
    console.log("End")
    setInterval(() => console.log("Hey! You're still here 😋"), 5000)
    setInterval(() => console.log("In the middle"), 2000)
}

test()