// Conditionals
let num = 1

// if
if(num == 1){
    console.log(`Num = ${num}!`)
}

// if else
let number = -1
if(number > 0){
    console.log(`${number} is positive!`)
} else {
    console.log(`${number} is negative!`)
}

// if else if else
let num = 0 

if(num > 0) {
    console.log(`${num} is positive!`)
} else if(num < 0) {
    console.log(`${num} is negative!`)
} else {
    console.log(`${num} is zero!`)
}

// Switch case
let num1 = parseInt(prompt('Please first number:'))
let num2 = parseInt(prompt('Please second number:'))
let selection = parseInt(prompt('Please select from one of the following options:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n'))

switch(selection){
    case 1:
        console.log(`Addition = ${num1+num2}`)
        break
    case 2:
        console.log(`Subtraction = ${num1-num2}`)
        break
    case 3:
        console.log(`Multiplication = ${num1*num2}`)
        break
    case 4:
        if(num2 > 0){
        console.log(`Division = ${num1/num2}`)
        } else {
            console.log('Division is not possible because the denominator is 0!')
        }
        break
    default:
        console.log('No a valid selection. Please try again!')

Exercises: Level 1

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = parseInt(prompt('Please input your age:'))
if(age >= 18){
    console.log('You are old enough to drive!')
}
else {
    let diff = 18 - age
    console.log(`You can drive in ${diff} year(s)!`)
}
        
/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using:
- if else
- ternary operator */

// Using if else
let a = 1
let b = 2

if(a > b){
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

// Using ternary operator
a > b
? console.log('a is greater than b')
: console.log('a is less than b')
