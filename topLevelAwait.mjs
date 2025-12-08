// this can not work wheneever await are not used inside the module
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

console.log(user);