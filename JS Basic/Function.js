
// function myfn(num1,num2){
//     console.log(num1+num2)
// }

// // myfn(2,4)

// let result = myfn(2,4)
// console.log(result) //undefined


// function myfn2(num1,num2){
//     return num1+num2;
//     console.log("Nilesh")
// }

// let result2 = myfn2(4,5) // function ko agar return karenge to only use call se output nhi aayega fir use variable me dalker ya direct console bhi karna padega
// console.log(result2);

// function myName(name){
//     return `${name} logged in`;
// }

// console.log(myName("Nilesh"))
// console.log(myName()) //undefined

function myName(name = "same"){ //default value bhi de sakte hai agar argument nhi de to ye warna argument de de to override same
    // if(name===undefined){
    //     console.log("Please enter a name")
    //     return
    // }
    //or
    if(!name){
        console.log("Please enter a name")
        return
    }
    return `${name} logged in`;
}

// console.log(myName("Nilesh"))
console.log(myName()) //undefined

