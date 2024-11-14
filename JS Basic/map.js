// const arr = [1,2,3,4,5,6,7,8,9,10]

// let newarr = arr.map((num)=> num+10);

// console.log(newarr)



// const arr = [1,2,3,4,5,6,7,8,9,10]

// let newArr = arr
// .map((num)=> num*10)
// .map((num)=> num+1)
// .filter((num)=> num>=40)

// console.log(newArr)


twoSum = function(nums, target) {
    let newArr = []
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                newArr.push(i,j);
                return newArr;
            }
        }
    }
};

let nums = [3,2,4];

console.log(twoSum(nums,6));