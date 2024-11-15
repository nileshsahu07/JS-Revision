// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({userName : "Nilesh", age : 18})
//         }else{
//             reject('Error:- something went wrong')
//         }
//     }, 1000);
// });

// async function myFun(){
//     try{
//         const response = await myPromise
//         return response.userName
//     }catch(error){
//         console.log(error)
//     }
// }

// myFun()


//how to return data in async await =>
// let finalData;
// async function apiFun(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         finalData = data;
//     } catch (error) {
//         console.log("Something went wrong")
//     }
// }
// apiFun().then(()=>console.log(finalData))
// // console.log(finalData); //it threw error


//how to return data in async await 2nd way =>
// async function apiFun(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         return await response.json()
//     } catch (error) {
//         console.log("Something went wrong")
//     }
// }
// apiFun().then((data)=>console.log(data))



//access api data for display in a card =>
// async function apiFun(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         displayCard(data);
//     } catch (error) {
//         console.log("Something went wrong")
//     }
// }

// function displayCard(data){
//     console.log(data.login)
//     // document.getElementsByTagName('h1').innerHTML = data.login  // for example only
// }

// apiFun()



//another example =>
async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        return data; // This resolves with the data
    } catch (error) {
        console.log("Something went wrong");
    }
}

async function main() {
    const data = await fetchData(); // Await the fetched data
    console.log(data); // Now you can access the data here
}

main();
