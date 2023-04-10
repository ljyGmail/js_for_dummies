function squareIt(num) {
  return num * num;
}

let threeSquared = squareIt(3);
console.log(`squareIt(3) is: ${threeSquared}`);

function doMath(value, mathToDo) {
  let result = mathToDo(value);
  return result;
}

const circumference = doMath(4, function (radius) {
  return 2 * Math.PI * radius;
});

console.log(`Circumference of circle with radius of 4 is ${circumference}`);

// Reducing an array
let prices = [4.99, 3.98, 54.99];
// let total = 0;
// total = prices.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue;
// });

// let total = prices.reduce(function (previouseValue, currentValue) {
//   return previouseValue + currentValue;
// }, 0);

let total = prices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(`Total is ${total}`);

// Filter arrays
const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];

const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);

console.log(`animalsStartingWithA is ${animalsStartingWithA}`);
