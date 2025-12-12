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