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
