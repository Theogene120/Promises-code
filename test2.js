// 'https://api.github.com/users/iliakan'

//https://jsonplaceholder.typicode.com/users

function asyncCounter() {
  const result = [];

  function delay(number) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(number);
        result.push(number);
        resolve();
      }, 1000);
    });
  }

  return delay(1)
    .then(() => delay(2))
    .then(() => delay(3))
    .then(() => delay(4))
    .then(() => delay(5))
    .then(() => result);
}

asyncCounter().then(arr => console.log("Final:", arr));
