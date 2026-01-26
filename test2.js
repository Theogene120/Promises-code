// 'https://api.github.com/users/iliakan'

let response = await fetch('https://api.github.com/users/theogene120')
let result = await response.json()
console.log(result)