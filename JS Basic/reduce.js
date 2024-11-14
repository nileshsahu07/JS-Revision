const arr = [1,2,3,4,5];

//With Function =>
// const SumWithInitial = arr.reduce(function(accumulator,currentValue){
//     console.log(`Acc:- ${accumulator}  Curr:- ${currentValue}`)
//     return accumulator + currentValue
// },0)

// console.log(SumWithInitial)



//WIth arrow fun =>
// const initialValue = 0;

// const SumWithInitial = arr.reduce((accumulator,currentValue)=>accumulator + currentValue, initialValue)

// console.log(SumWithInitial)



const shoppingCart = [
    {
        course: "JS",
        price: 499
    },
    {
        course: "Java",
        price: 599
    },
    {
        course: "DSA",
        price: 699
    },
    {
        course: "C++",
        price: 399
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price, 0);

console.log(priceToPay)