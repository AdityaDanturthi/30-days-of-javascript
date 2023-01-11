// Non-primitive data types
let nums = [2,2,3]
nums[0] = 1
console.log(nums)

let n = [1,2,3]
console.log(n == nums) //false

let user = {
    name: 'Aditya',
    role: 'Data Scientist'
}

let numbers = nums
console.log(numbers == nums) //true
