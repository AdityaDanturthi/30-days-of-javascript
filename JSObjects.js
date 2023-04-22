//JSON example
var dog = {
    "name": "dog",
    "legs": 4,
    "tail": 1,
    "friends": ["dog1", "dog2", 'dog3', 'dog4']
};

// Accessing object properties with dot notation
var nameValue = dog.name;
var friendsValue = dog.friends;

console.log(nameValue);
console.log(friendsValue);

// Accessing object properties with bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);

// Accessing object properties with variables
var accObj = "the drink";
var drinkValue = testObj[accObj];
console.log(drinkValue);
