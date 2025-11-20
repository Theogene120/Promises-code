let promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1) , 1000)
    })
}
promise().then(res1 => {
    console.log(res1) //1
    return new Promise(resolve => setTimeout(() => resolve(res1 * 3), 2000))
})
.then(res2 => {
    console.log(res2)//3
    return new Promise(resolve => setTimeout(() => resolve(res2 * 2), 2000))
})
.then(res3 => {
    console.log(res3)//6
})