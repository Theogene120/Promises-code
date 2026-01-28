// 'https://api.github.com/users/iliakan'

//https://jsonplaceholder.typicode.com/users

Promise.resolve()
.then(() => console.log(1));

queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();