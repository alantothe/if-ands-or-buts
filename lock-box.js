
// && = both can be tru and || only one can be true


const prompt = require('prompt-sync')({sigint: true});

let pinCode = "1234"

let input = prompt (" Enter Pin:")

let success = input === pinCode

if (success === true) {
    console.log("success!")
}
else if  (success === false) {
    console.log("error")
}
