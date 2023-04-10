const pet = "tiger";

let greeting;
if (pet === "cat") {
  greeting = "Good Kitty";
} else if (pet === "dog") {
  greeting = "Who's a god boy or girl?";
} else if (pet === "parrot") {
  greeting = "Wanna cracker?";
} else {
  greeting = "Hi";
}

console.log(`Greeting: ${greeting}`);
