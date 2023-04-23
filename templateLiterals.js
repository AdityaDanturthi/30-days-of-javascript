// Strings using template literals

// example 1
const person = {
    name: "person1",
    age: 25
}

// Template string with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`

console.log(greeting);

// example 2
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: [ "no-var", "var-on-top", "linebreak"],
    skipped: ["id-list", "no-dup-keys"]
};

function makelist(arr) {
    const resultDisplayArray = [];
    for (var  i=0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`); 
    }

    return resultDisplayArray;
}

const resultDisplayArray = makelist(result.success);
console.log(resultDisplayArray);