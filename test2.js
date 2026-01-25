class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    // after 1 second, call resolve with num * 2
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}
let obj = new Thenable(2)
async function f() {
  let result = await obj;
  console.log(result);
}

f();