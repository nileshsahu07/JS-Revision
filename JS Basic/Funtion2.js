// function myfn(num1){
//     return num1;
// }

// console.log(myfn(2,3,3,4,5,))

// function myfn(...num1){
//     return num1;
// }

// console.log(myfn(2,3,3,4,5,))

// function myfn(val1,val2,...num1){
//         return num1;
// }
    
// console.log(myfn(2,3,3,4,5,))

let user = {
    name:"Nilesh",
    age:18,
}

function myfn(anyObj){
    return `${anyObj.name}  ${anyObj.age}`;
}

// console.log(myfn(user)) //or
console.log(myfn({
    name:"Nilesh",
    age:18
}))


const arr = [1,2,3,4,5];

function myarrfn(anyArr){
    return anyArr[2];
}

// console.log(myarrfn(arr)) //or
console.log(myarrfn([6,5,4,9,7]))