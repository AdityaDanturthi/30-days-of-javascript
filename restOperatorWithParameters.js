//  Rest opertor with function parameters: It essentially allows a function to accept indefinite number of arguments 

// original function 
const sum = (function () {
    return function sum(x,y,z) {
        const args =[x,y,z];
        return args.reduce((a, b) => a + b,0);
    };
}) ();

console.log(sum(1,2,3));

// Above function using the rest operator
const sum1 = (function () {
    return function sum1(...args) {
        return args.reduce((a, b) => a+b, 0);
    };
}) ();

console.log(sum(1,2,3));
