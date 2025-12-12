let number = () => {
    let n = setInterval(() => console.log(2), 2000)
    setTimeout(() => {
        clearInterval(n)
    }, 5000);
}
number()