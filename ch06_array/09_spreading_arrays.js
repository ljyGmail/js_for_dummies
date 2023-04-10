const firstArray = ["a", "b", "c"];
const secondArray = [...firstArray, "d"];
console.log(`firstArray: ${firstArray}`);
console.log(`secondArray: ${secondArray}`);

const fruits = ["apple", "orange", "banana"];
const fruitsCopy = fruits;
console.log(fruitsCopy.push("watermelon"));
console.log(`fruits is ${fruits}`);
console.log(`fruitsCopy is ${fruitsCopy}`);

const fruitsShallowCopy = [...fruits];
fruitsShallowCopy.push("one");
console.log(`fruits is ${fruits}`);
console.log(`fruitsShallowCopy is ${fruitsShallowCopy}`);
