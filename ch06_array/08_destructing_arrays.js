const person = ["Russell C. Guy", "3447 Twin House Lane", "Neosho", "MO"];
// let personName = person[0];
// let address = person[1];
// let city = person[2];
// let state = person[3];

let [personName, address, city, state] = person;
console.log(
  `personName: ${personName}, address: ${address}, city: ${city}, state: ${state}`
);
