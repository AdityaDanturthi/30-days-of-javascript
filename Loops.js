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