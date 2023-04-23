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

