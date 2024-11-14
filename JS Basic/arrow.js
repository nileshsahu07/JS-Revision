// let userName = {
//     name : "Nilesh",
//     lastName: "Pancholi",

//     show : function(){
//         // console.log(`Hello ${name} ${Pancholi}`)  // without this error name is not defined
//         console.log(`Hello ${this.name} ${this.lastName}`)  
//         console.log(this)
//     }
// }

// userName.show();
// userName.name = "Kushal";
// userName.show()

// console.log(this)





// function chai(){
//     let username = "Nilesh";
//     // console.log(this)  // isme kuch values
//     console.log(this.username) // undefined
// }
// chai();




// const chai = ()=>{
//     let userName = "Nilesh";
//     // console.log(this)  // isme blank object
//     console.log(this.username) // undefined
// }
// chai()



// let c = (a,b) =>{
//     return a+b;
// }

// console.log(c(2,2));


let c = (a,b) => a+b;
let d = (a,b) => (a+b);
let name = (a,b) => ({userName:"Nilesh"});


console.log(c(2,2));
console.log(d(3,2));
console.log(name());