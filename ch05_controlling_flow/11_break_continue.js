let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}
