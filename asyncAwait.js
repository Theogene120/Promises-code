// async greet = (name) => 'hello ' + name
// greet.then()

async function greet(name) {
    return 'hello ' + name 
}

function delay() {
  return new Promise(res => setTimeout(res, 2000));
}

async function run() {
  console.log("Start");
  await delay(); 
  console.log("After 2 seconds");
}

run();