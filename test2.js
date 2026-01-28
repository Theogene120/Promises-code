// 'https://api.github.com/users/iliakan'

//https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(result => {
    let ans = []
    for(let i = 0; i < 3; i++){
        ans.push(result[i].address)
    }

    console.log(ans)
})