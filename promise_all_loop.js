let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url))

Promise.all(requests)
.then(responses => {responses
    .map(response => console.log(`${response.url}: ${response.status}`))
    
    return Promise.all(responses.map(r => r.json()))
})
.then(results => results.map(res => console.log(res)))
