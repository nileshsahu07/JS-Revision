let arr = [1,2,3,4,5,6];

// const arr2 = arr.filter((value,index)=>{
//     return value%2==0;
// })

// const arr3 = arr.filter((value,index)=>{
//     return value%2 != 0;
// })

// const newArray = [...arr2,...arr3];

// console.log(newArray);

// second way  =>

const newArray = [
    ...arr.filter(num => num % 2 == 0),
    ...arr.filter(num => num % 2 !== 0)
]

console.log(newArray)