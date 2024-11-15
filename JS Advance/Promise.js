// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({userName : "Nilesh", age : 18})
//         }else{
//             reject('Error:- something went wrong')
//         }
//     }, 1000);
// })

// myPromise.then((user)=>{
//     // console.log(user)
//     return user.userName; // return value ese normally to variable ke threw jati hai but isme return value next then me jati hai 
// }).then((userName)=>{
//     console.log(userName)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise is resolve and reject")
// })

//fetch data and console =>
// fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("Something went wrong")
// })


//return data in a function for display in a card =>
// fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     // console.log(data)
//     displayCard(data)
// }).catch((error)=>{
//     console.log("Something went wrong")
// })

// function displayCard(data){
//     console.log(data.login);
// }




