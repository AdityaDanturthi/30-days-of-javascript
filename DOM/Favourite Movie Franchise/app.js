// DOM Manipulation

// Creating an element
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding element
ul.append(li)

// Modifying the text
li.innerText = 'X-men';

// Modifying attributes & Classes
li.setAttribute('class', 'list-items');

// Getting the attrubute of an element
const titleAttr = document.querySelector('h1');
console.log(titleAttr.getAttribute('id')); //main-heading

const liAttr = document.querySelector('li');
console.log(liAttr.getAttribute('class')); //list-items