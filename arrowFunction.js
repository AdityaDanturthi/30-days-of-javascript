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
