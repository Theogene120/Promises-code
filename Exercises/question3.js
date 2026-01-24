async function getData(url, count) {
    try{
        let response = await fetch(url)

        if(!response.ok){
            throw new Error('Fail to fetch 1')
        }
        let data = await response.json()
        console.log("Success: ", data)
        return data
    }catch{
        if(count > 0){
            console.log('Retring....')
            getData(url, count - 1)
        }else{
            throw new Error('Fail to fetch 2')
        }
    }
}
getData('https://jsonplaceholder.typicode.com/posts/1', 5)