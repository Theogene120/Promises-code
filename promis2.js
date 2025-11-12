const addition = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a)
        }, 2000);
    }) 
}

addition(10)
.then(num1 => {
    console.log("First number is " + num1)
    return num1 * 3;
})
.then(mult1 => {
    console.log("Multiplication 1 is " + mult1)
    return mult1 + 15
})
.then(sum1 => {
    console.log("Sum 1 is " + sum1)
})
.catch(err => console.log("Error: " + err))