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

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let check = parseInt(prompt('Enter a number to check if it even or odd: '))

// if else
if(check%2 == 0){
    console.log(`${check} is an even number!`)
} else {
    console.log(`${check} is an odd number!`)
}

// ternary operator
check%2 == 0 ? console.log(`${check} is an even number!`) : console.log(`${check} is an odd number!`) 

/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D */

        let score = parseInt(prompt('Please input the sutdent\'s score: '))
if(score >= 80 && score <= 100){
    console.log('Grade: A')
} else if(score >= 70 && score <= 79) {
    console.log('Grade: B')
} else if(score >= 60 && score <= 69) {
    console.log('Grade: C')
} else if(score >= 50 && score <= 59) {
    console.log('Grade: D')
}
