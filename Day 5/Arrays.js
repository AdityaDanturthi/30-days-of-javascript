// Creating an array

const arr = Array() // Creating an empty array using an array constructor
console.log(arr)

const arr1 = [] // Creating an empty array using an square brackets
console.log(arr1)

// Creating an array with values
let skills = ['Python', 'JS', 'HTML', 'CSS', 'SQL', 'Power BI', 'Tableau']

console.log('Skills: ', skills)
console.log('Length of skills:', skills.length)

let arr1 = ['Aditya', 25, {skills: ['Python', 'JS', 'HTML', 'CSS', 'SQL', 'Power BI', 'Tableau']}] // array containing different data types
console.log(arr1)

// Creating an array is using split
let js = 'JavaScript'
const charsinJS = js.split('')
console.log('Characters in JS:', charsinJS)

let companieslst = 'Amazon, Google, Facebook, Apple'
const ITCompanies = companieslst.split(',')
console.log('Companies:', ITCompanies)

// Accessing elements in an array by index
fruits = ['Apple', 'Orange', ' Pineapple', 'Watermelon']
console.log('First fruit in the list:',fruits[0])

lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log('First fruit in the list:', lastFruit)

// Modifying an element in an array 
fruits[1] = 'Mango'
console.log(fruits[1])

lastindex = fruits.length-1 
console.log('Last fruit:', fruits[lastindex])
fruits[lastindex] = 'Banana'
console.log('Last fruit:', fruits[lastindex])

// Methods to manipulate arrays

// Array constructor
const arr = Array()
console.log(arr)

const arrayOfSizeEight = Array(8)
console.log(arrayOfSizeEight)

// creating static values with fill()
const arr1 = Array(8).fill(1)
console.log(arr1)

// Concatenating arrays using concat()
const arr123 = Array(1,2,3) // using array constructor
const arr456 = Array(4,5,6) // using array constructor

const numbers = arr123.concat(arr456)
console.log(numbers)

const arr1 = [1,2,3] // direct declaration
const arr2 = [4,5,6] // direct declaration

const arr12 = arr1.concat(arr2)
console.log(arr12)

// Length of the array
console.log(arr12.length)

// Getting index of an element in the array
console.log(arr12.indexOf(6))

// Checking if an element exists in an array using if else
console.log(arr12.indexOf(7))

elementToSearch = 7
if(arr12.indexOf(elementToSearch) == -1){
    console.log('Element does not exist in the array!')
} else {
    console.log('Element exists at '+ arr12.indexOf(elementToSearch) +' position in the array!')
}

// Checking if an element exists in an array using ternary operator
arr12.indexOf(elementToSearch) == -1 ? console.log('Element does not exist in the array!') : console.log('Element exists at '+ arr12.indexOf(elementToSearch) +' position in the array!')

// Exercises: Level 1

//Declare an empty array;
arr = []
console.log(typeof arr)

// Declare an array with more than 5 elements
arr = [1,2,3,4,5,6]
console.log(arr)

// Find the length of your array
console.log('Length:',arr.length)

// Get the first item, the middle item and the last item of the array
console.log('First element:',arr[0])

middleIndex = Math.round((arr.length)/2)
console.log('Middle element:',arr[middleIndex])

lastIndex = arr.length - 1 
console.log('Last element:',arr[lastIndex])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedArray = [ 1,2,3,4,5,6, 
    {skills: ['Python', 'HTML', 'CSS', 'JS', 'Power BI', 'Tableau', 'Pandas']},
    true
    ]

console.log(mixedArray)
console.log(mixedArray.length)

// Declare an array with name ITCompanies and assign Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
ITCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(ITCompanies)

// Print the number of companies in the array
console.log('Number of companies:',ITCompanies.length)

// Print the first company, middle and last company
console.log('First company:',ITCompanies[0])

middleIndex1 = Math.round(ITCompanies.length -1)/2
console.log('Middle company:',ITCompanies[middleIndex1])

lastIndex1 = ITCompanies.length - 1
console.log('Last company:',ITCompanies[lastIndex1])

// Print out each company
for( i = 0; i < ITCompanies.length; i++){
    console.log(ITCompanies[i])
}

// Change each company name to uppercase one by one and print them out
for( i = 0; i < ITCompanies.length; i++){
    console.log(ITCompanies[i].toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
sentence = ITCompanies.slice(0,ITCompanies.length-1).join(', ') +" and "+ ITCompanies.slice(-1) +" are IT companies!"
console.log(sentence)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
ITCompanies.includes('Docker') ? console.log('Company is in the list!') : console.log('Company not found!')
