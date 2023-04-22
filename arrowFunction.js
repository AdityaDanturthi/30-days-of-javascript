// Anonymous function
const magic = function() {
    return new Date();
};

// Anonymous function converted into an arrow function (variable name is different because they are const)

const magic1 = () => new Date();

// Arrow function with parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1,2], [3,4,5]));

// Conveting the above function into an arrow function
const myConcat1 = (a1, a2) => a1.concat(a2);
console.log(myConcat1(JSON.stringify([1,2,3,4,5], [6,7,8,9,10])));

// Higher order arrow functions (val = 1 sets the default value of val to 1 incase it doesn't get passed in the function)
const increment = (num, val = 1) => num + val
console.log("5+2:", increment(5,2));
console.log("5+1:", increment(5));