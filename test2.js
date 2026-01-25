class Wait {
  async wait() {
    return await Promise.resolve(1)
  }
}
let obj = new Wait
obj.wait().then(res => console.log(res))