const myArray = ["salad", "coca cola", "fruit", "meat"];
console.log(`Before modifying: ${myArray}`);
myArray[1] = "sandwich";
console.log(`After modifying: ${myArray}`);
myArray[4] = "burrito";
console.log(`After appending: ${myArray}`);
myArray[1000] = "sushi";
console.log(`The length of myArray is ${myArray.length}`);

// Deleting Array Elements
myArray.length = 501;
console.log(`After deleting elements, the length is: ${myArray.length}`);
delete myArray[3];
console.log(`After deleting the fourth element, myArray is: ${myArray}`);
