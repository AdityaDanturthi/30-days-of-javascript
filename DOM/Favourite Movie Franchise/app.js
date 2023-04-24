// DOM Manipulation

// Creating an element
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding element
ul.append(li)

// modifying the text
li.innerText = 'X-men';

// Modifying attributes & Classes
li.setAttribute('class', 'list-items')