//diffrence between slice and splice =>
// let myArr = [0,1,2,3,4,5,6];
// console.log(myArr)

// let myArr2 = myArr.slice(1,3);
// console.log(myArr2)
// console.log(myArr) //  isse original array me kuch bhi changes nhi ho rha 


// let myArr3 = myArr.splice(1,3);
// console.log(myArr3)
// console.log(myArr)//  isse original array me bhi changes ho rha hai


let arr = [1,2,3,4,5,6];

let arr2 = [7,8,9,0];

arr3  = arr.concat(arr2);

console.log(arr3)

arr4 = [...arr, ...arr2];

console.log(arr4)

arr.push(arr2);

console.log(arr)

let arr5 = [1,2,3,[4,5,6],7,8,[9,0]];

console.log(arr5.flat(Infinity));

console.log(Array.from("Nilesh"))




