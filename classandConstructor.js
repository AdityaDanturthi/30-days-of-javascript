class spaceShuttle  {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

let planet = new spaceShuttle('Mars');
console.log(planet.targetPlanet);

// example 1
class vegetable {
    constructor(name1){
        this.name1 = name1;
    }
}

let carrot = new vegetable('Carrot');
console.log(carrot.name1);

// Getter and Setter
class Book {
    constructor(author){
        this.author = author;
    }
    //getter
    get writer(){
        return this._author; // _ before a vairable means it is private variable within the scope of where it was declared
    }

    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

// Getter and Setter example
class thermostat{
    constructor (temp){
        this._temp = 5/9 * (temp - 32);
    }
    //getter 
    get temperature(){
        return this._temp;
    }
    //setter
    set temperature(updatedTemp){
        this._temp = updatedTemp;
    }
}

let thermos = new thermostat(25);
let temp = thermos.temperature;
console.log("Initial temperature:", temp)
thermos.temperature = 75;
updatedTemp = thermos.temperature
console.log("Updated temperature:", updatedTemp);

