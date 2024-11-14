
//Premetive =>
// let myName = "Nilesh";

// let myAnotherName = myName;

// myAnotherName = "Kushal";

// console.log(myName);
// console.log(myAnotherName);

//Non permitive =>
let userOne = {
    email:"Nilesh@gmail.com",
    pass:1234,
}

let userTwo = userOne;

userTwo.email = "NileshSahu@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)

