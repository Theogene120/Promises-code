async function Data(){
  let response = await fetch('https://api.github.com/users/iliakan')
  let data = await response.json()
  console.log(data)
}

Data()