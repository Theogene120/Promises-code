// main.js

let para = document.getElementById("result");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn")
let removeNumbers = (str) => {
    return str.split('').filter(v => v == ' ' ? ' ': isNaN(v)).join('')

}
btn.addEventListener('click', () => {
    let string = inp.value
    para.textContent = removeNumbers(string)
})