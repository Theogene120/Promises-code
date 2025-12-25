function message() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I run after after 5 seconds')
        }, 5000);
    })
}

async function result() {
    
    let res = await message()
    console.log(res)
}

result()