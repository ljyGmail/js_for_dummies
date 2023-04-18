console.log(`String(10): ${String(10)}`);

// custom function
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(`addNumbers(2, 4): ${addNumbers(2, 4)}`);

// Using Top-level functions
console.log(Boolean("abc"));
console.log(Boolean(""));

// Using methods of built-in objects

// Passing by value
const favoriteFood = "tacos";

makeDinner(favoriteFood);

function makeDinner(whatToMake) {
  console.log(`I see you want ${whatToMake}`);
  whatToMake = "salad";
  console.log(`I've decided to make ${whatToMake} instead.`);
}

console.log(`value of favoriteFood after passing to function: ${favoriteFood}`);

// Passing by reference
const user = { username: "funguy37", password: "123456" };

const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password id now ${user.password}`);

function login(userCredentials) {
  if (userCredentials.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. You password has been reset to a random string.`;
  }
  return "Logged In";
}
