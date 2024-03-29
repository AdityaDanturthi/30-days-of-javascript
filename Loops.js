// Iterate with while loop
var myArray = [];

var i = 0;

while(i < 5) {
    myArray.push(i);
    i++;
}

i= 0; 

console.log(myArray)

while(i < 5) {
    console.log(myArray[i]);
    i++;
}

// Iterate with For loop
var myArray1 = [];
for(var j=0; j < 5; j++) {
    myArray1.push(j);
}

console.log(myArray1);

for(var j=0; j < 5; j++) {
    console.log(myArray1[j]);
}

var evenArray = [];
for( var e=0; e<11; e += 2) {
    evenArray.push(e);
}

console.log("Even array:",evenArray);

// Iterating through an array using for loop and array.length
var total = 0;
for (var k=0; k<evenArray.length; k++) {
    total += evenArray[k];
}
console.log("Total:", total);

// Nested for loop
function multiplyAll(arr) {
    var product = 1;

    for (var l=0; l < arr.length; l++) {
        for (var m=0; m < arr[l].length; m++) {
            product *= arr[l][m];
        }
    }
    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log("Product:",product);
