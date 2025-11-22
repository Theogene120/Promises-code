Promise.all(
    [
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 3000)),
        new Promise(resolve => setTimeout(() => resolve(3), 5000))
    ]
)
.then(ans => console.log(ans))
