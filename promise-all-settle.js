// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// let requests = urls.map(url => fetch(url))

// Promise.allSettled(requests)
// .then(responses => {
//     responses.map((response, num) => {
//         if(response.status == 'fulfilled'){
//             console.log(`${urls[num]}: ${response.value.status}`)
//         }else{
//             console.log(`${urls[num]}: ${response.reason}`)
//         }
//     })
// })

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

let requests = urls.map(url => fetch(url))

Promise.allSettled(requests)
.then(responses => responses.map(response => {
    if(response.status == 'fulfilled'){
        console.log(`status: fulfilled, value: ${response.value.status}`)
    }else{
        console.log(`status: rejected, reason: ${response.reason}`)
    }
}))