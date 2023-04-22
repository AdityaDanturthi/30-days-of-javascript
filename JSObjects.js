// JS Object example
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

// Deleting properties from an object
 delete dog.tail;
 console.log(dog.tail);
 
// Using objects for lookup
function phoneticLookup(val) {
    var result;

    var lookup = {
        "alpha": "a",
        "beta": "b"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("alpha"));

// Checking objects for properties
function checkObj(checkProp) {
    if (dog.hasOwnProperty(checkProp)) {
        return dog[checkProp];
    } else {
        return "Property not found!";
    }
}

console.log(checkObj("tail")); // Property not found!
console.log(checkObj("name")); // Happy Dog

// Manipulating complex objects
var myMusic = [
    {
        "artist": "artist1",
        "title": "title1",
        "release year": 2023,
        "formats": [
            "CD",
            "LP",
            "8T"
        ],
        "released": true
    }
];

// Accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log("Second tree:", secondTree)

// Updating an element within the object using a function
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Copy of the original collection before modifying 
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

//Profile lookup

var contacts= [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Violin"]
    },
    {
        "firstName": "Michael",
        "lastName": "Scott",
        "number": "unknown",
        "likes": ["Dunder Mifflin"]
    }
];

function lookup(fname, prop) {
    for(var i=0; i<contacts.length;i++){
        if (contacts[i].firstName == fname) {
            return contacts[i][prop] || "Property not found!";
        }
    }
    return "Not found!";
}

var data = lookup("Michael", "likes");
console.log(data);

// Generating a random in a given range
function randomNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) - myMin;
}

var randnum = randomNumber(0,2);
console.log(randnum);