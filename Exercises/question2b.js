let getData = (url) => {
    let controller = new AbortController()
    let signal = controller.signal
    fetch(url,{signal})
    .then(message => message.json())
    .then(data => console.log(data))
    .catch(() => console.log("I can see you bro!"))
    
    setTimeout(() => {
        controller.abort()
    }, 1000);
}

getData('https://jsonplaceholder.typicode.com/posts/1')