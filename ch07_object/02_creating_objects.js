// Making objects using literal notation
// const person = { eyes: 2, feet: 2, eyeColor: "brown" };

const person = {};
person.hair = "black";
person.hand = 2;
person.fullName = { firstName: "Lamont", lastName: "Rudnick" };

// Making objects using a constructor function
function Cat(name, type) {
  this.name = name;
  this.type = type;
}
const ourCat = new Cat("Murray", "domestic short hair"); // the same as code below

// const ourCat = {};
// ourCat.name = "Murray";
// ourCat.type = "domestic short hair";

// Making objects with class
class Cat {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const ourDog = new Pet("Chauncey", "AmStaff");

// Making objects with Object.create()
const computer = { memory: "16GB", HD: "8TB" };

const laptop = Object.create(computer);
