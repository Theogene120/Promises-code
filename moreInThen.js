const moreInThen = () => {
    return new Promise((resolve, reject) =>{
        //console.log(name)
        setTimeout(() => {
            resolve("Done!")
            reject("Some place is not fullfilled")
        }, 2000)
        
    })
    
}
moreInThen()
.finally(() => console.log("always I run"))
.then(
    result => console.log("Operation " + result + " Successful"),
    error => console.log('The occured error is called: ' + error)
)
