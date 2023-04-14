// A constructor for vehicles
function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
  };
}

const Automobile = new Vehicle(55);

Automobile.wheels = 4;
Automobile.engine = "electric";

const Truck = Object.create(Automobile);

Automobile.doors = 4;
console.log(`Truck.hasOwnProperty('doors'): ${Truck.hasOwnProperty("doors")}`);

Truck.doors = 2;
console.log(
  `Truck.hasOwnProperty('doors') after change the value of doors: ${Truck.hasOwnProperty(
    "doors"
  )}`
);

Truck.maxHaul = "1 ton";
console.log(
  `Truck.hasOwnProperty('doors') after adding a property: ${Truck.hasOwnProperty(
    "maxHaul"
  )}`
);

// Deleting Object Properties
delete Truck.doors; // a property can only be deleted if it's an own property
// after deleting an own property of an object,
// JavaScript looks up the prototype chain to see whether any of the object' ancestors has that property
console.log(`After doors property: ${Truck.doors}`);
