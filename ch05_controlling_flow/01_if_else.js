const country = "Korea";
let temperature = 20;
if (country === "United States" || country === "Liberia") {
  temperature = temperature + "F";
} else {
  temperature = ((temperature - 32) * 5) / 9 + "C";
}

console.log(`Temperature is ${temperature}`);
