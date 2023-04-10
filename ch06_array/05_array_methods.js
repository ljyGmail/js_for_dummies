const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];

console.log(`Original array: ${ingredients}`);

// Pushing and popping
console.log(ingredients.pop());
console.log(`After popping: ${ingredients}`);

console.log(ingredients.push("chili flakes")); // returns the new length of the array
console.log(`After pushing: ${ingredients}`);

// Shifting and unshifting
console.log(ingredients.shift());
console.log(`After shifting: ${ingredients}`);

console.log(ingredients.unshift("eggs"));
console.log(`After unshifting: ${ingredients}`);

// Slicing an array
console.log(`slice(3, 6) of the array is: ${ingredients.slice(3, 6)}`);

// Splicing an array
const produce = ingredients.splice(3, 3);
console.log(`Produce is ${produce}`);
console.log(`After splicing: ${ingredients}`);
