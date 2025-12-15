let getData = async(url, trials) => {
    let count = 0;
    try{
        let message = await fetch(url)
        if(message.status !== 200){
            throw new Error('I can see you bro')
        }
    }catch{
        if(count <= trials){
            console.log("Retrying")
            count++
            getData()
        }
        console.log('Welcome Back!')
    }
}

getData('https://jsonplaceholder.typicode.com/posts/1', 5)