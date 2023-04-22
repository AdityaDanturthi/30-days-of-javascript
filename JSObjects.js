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
var testObj1 = {
    1: "Value of 1",
    2: "Value of 2",
    3: "Value of 3",
    4: "Value of 4",
}

// Accessing object properties with variable: example 1
var accObj1 = 2;
var valueOf2 = testObj1[accObj1];
console.log(valueOf2);

// Accessing object properties with variable: example 2
var accObj = "the drink";
var drinkValue = testObj[accObj];
console.log(drinkValue);

// Updating object properties
dog.name = "Happy Dog";
console.log(dog.name);

// Adding new properties to an object
dog['bark'] = 'woof-woof';

console.log(dog.bark);