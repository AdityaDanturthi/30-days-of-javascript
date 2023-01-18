// Strings
let space = '' //emoty string
let name = 'Aditya'
let language = "JavaScript"
console.log(name+' '+`is proficient in`+' '+language+'!')

// String concatenation
let strconcat = name+' '+`is proficient in`+' '+language+'!'
console.log(strconcat)

// String Methods
console.log('Length of name:',name.length)

firstLetter = name[0]
console.log('First letter of name:',firstLetter)

lastIndex = name.length-1
console.log('Last letter of name:',name[lastIndex])

upperName = name.toUpperCase()
console.log('Name in uppercase:',upperName)

lowerName = name.toLowerCase()
console.log('Name in lowercase:',lowerName)

console.log('Substr of name:',name.substr(0,3)) //substr(): It takes two arguments, the starting index and number of characters to slice.
console.log('Substring of name:',name.substring(0,3)) //substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

namewithextraspaces = ' Aditya '
console.log(name.trim())

console.log(name.split(''))
console.log(name.includes('Adi'))

let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python'))
