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