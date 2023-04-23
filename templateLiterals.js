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
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-list", "no-dup-keys"]
};

function makelist(arr) {
    const resultDisplayArray = [];
    for (let  i=0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`); 
    }

    return resultDisplayArray;
}

const resultDisplayArray = makelist(result.success);
console.log(resultDisplayArray); 

// Converted above function into an arrow function
const resultDispArray = (list) => {
    const resArray = [];
    for(let i=0; i<list.length; i++) {
        resArray.push(`<li class="text-warning">${list[i]}</li>`);
    }
    return resArray;
};

console.log(resultDispArray(result.skipped));

// Concise object literal declarations using simple fields
const createPerson = (name1, age1, gender1) => {
    return {
        name: name1,
        age: age1,
        gender: gender1
    };
};

console.log(createPerson("Person1", 25, "Male"));

// making the above code concise
const createPerson2 = (name2, age2, gender2) => ({name2, age2, gender2});
console.log(createPerson2("Person2", 25, "Male"));