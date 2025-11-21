function showCircle(a,b,c) {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});