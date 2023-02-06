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
