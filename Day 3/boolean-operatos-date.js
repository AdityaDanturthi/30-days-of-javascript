// Boolean
let isLightOn = true
let isLightOff = false

// Undefined
let temp 
console.log(temp) 

let empty = null
console.log(empty)

// Operators
let name ='Aditya' // assignment operator

//Arithmetic Operators
let numOne = 1
let numTwo = 2
let addition = numOne + numTwo
let subtraction = numTwo - numOne
let division = numOne/numTwo
let multiplication = numOne * numTwo

// Ternary operator
isLightOn
? console.log("The light is on")
: console.log("The light is off")

alert('This is an alert!')

let number = prompt('Please input a number:', 'optional text')
console.log(number)

// Date Object
const now = new Date()
console.log(now)

// Extracting year from date object
console.log(now.getFullYear())

// Extracting month from date object
console.log(now.getMonth())

// Extracting date from date object
console.log(now.getDate())

// Extracting day from date object
console.log(now.getDay())

// Extracting hours from date object
console.log(now.getHours())

// Extracting minutes from date object
console.log(now.getMinutes())

// Extracting seconds from date object
console.log(now.getSeconds())

// Extracting time from date object
console.log(now.getTime())

// Converting time into a readable format
const year = now.getFullYear()
const month = now.getMonth() + 1 
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

// Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base= prompt('Please input the base of the triangle:')
let height= prompt('Please input the height of the triangle:')
console.log("The area of the triangle is:", 0.5*base*height)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10

let m = (y2-y1)/(x2-x1)
console.log(`The slope between point (2, 2) and point (6,10) is: ${m}`)

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Please input number of hours work per week:')
let rate = prompt('Please input your hourly rate:')

let weeklypay = hours*rate
console.log(`Weekly earnings: ${weeklypay}`)

// If the length of your name is greater than 7 say, your name is longer than 7 characters else say your name is less than 7 characters.
let name = prompt('Please input your name:')

name.length > 6
 ? console.log('Your name is greater than 7 characters!')
 : console.log('Your name is less than 7 characters!')

/* Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()

console.log(`${year}-${month}-${date} ${hours}:${minutes}`) //YYYY-MM-DD HH:mm
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) //DD-MM-YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) //DD/MM/YYYY HH:mm
