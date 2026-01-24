let getData = (url) => {
    let controller = new AbortController()
    let signal = controller.signal
    fetch(url,{signal})
    .then(message => message.json())
    .then(data => console.log(data))
    
    setTimeout(() => {
        controller.abort()
    }, 10);
}

getData('https://jsonplaceholder.typicode.com/posts/1')

// let controller = new AbortController()
// let signal = controller.signal
// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', signal)
//     let result = await response.json()
    
//     setTimeout(() => {
//         controller.abort()
//         console.log('TimeOut')
//     }, 1000);

//     console.log(result)
// }

// getData()