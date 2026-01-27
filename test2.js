// 'https://api.github.com/users/iliakan'

let fetchData = () => {
    let controller = new AbortController()
    let signal = controller.signal
    fetch('https://api.github.com/users/iliakan', {signal})
    .then(response => response.json())
    .then(res => console.log(res))

    setTimeout(() => {
        controller.abort()
    }, 10);
}

fetchData()