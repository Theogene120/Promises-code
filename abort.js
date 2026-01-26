let getData = (url) => {
    let controller = new AbortController()
    let signal = controller.signal

    fetch(url, {signal})
    .then(response => response.json())
    .then(result => console.log(result))

    setTimeout(() => {
        controller.abort()
    }, 10);
}
getData('https://jsonplaceholder.typicode.com/posts/1')