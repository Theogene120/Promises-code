class thenable {
    constructor(number){
        this.number = number
    }
    then(resolve, reject){
        console.log("Please wait a moment.......")
        setTimeout(() => resolve(this.number * 2), 2000)
    }
}

// Create an instance of class

let obj = new thenable(5)

Promise.resolve(obj).then(result => console.log(result))