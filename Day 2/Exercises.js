//Exercises: Level 3
// Use match() to count the number of all because in the following 
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let count = (sentence.match(/because/g)).length
console.log('\'because\' is present '+count+' times in the sentence!')
