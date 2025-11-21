const checkAge = (age) => {
    if(age < 18){
        throw new Error("You're too young")
    }else {
        return "You're Adult, You can vote"
    }
}
try {
    console.log(checkAge(26))
}
catch(err) {
    console.log("Error: " + err.message)
}

