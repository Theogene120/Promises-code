async function f() {
  return 1 + ". Theos";
}

console.log(typeof f())
console.log(f())

(async () => {
    let data = fetch('url.com')
    return data.json()
})()
