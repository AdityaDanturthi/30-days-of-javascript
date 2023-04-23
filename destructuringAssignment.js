// Destructuring assignment to assign variables from objects
let values = {x: 1.2, y: 4.6, z: 8.9};

let x = values.x; // x = 1.2
let y= values.y; // y = 4.6
let z = values.z; // z = 8.9

// Destructuring assignment: example 1
const {x : a, y : b, z : c} = values // a = 1.2, b = 4.6, c = 8.9

// example 2
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    const { tomorrow : TempOfTomorrow } = avgTemperatures;
    return TempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79

// Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log("Tomorrow's max:", getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring assignment to assign variables from arrays
 const [i, k] = [1, 2, 3, 4, 5, 6];

 console.log("i:",i); // 1
 console.log("k:", k); // 2

 let d= 6, l = 8;

 (() => {
    "use strict";
    [d , l] = [l, d];
 }) ();

 console.log("l:", l); //6
 console.log("d:",d) // 8

