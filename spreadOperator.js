// Spread operator
const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let arr2;
(function() {
arr2 =[...arr1];
arr1[0] = "potato";
}) ();

console.log(JSON.stringify(arr1));
console.log(JSON.stringify(arr2));