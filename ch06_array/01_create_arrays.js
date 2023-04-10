// const colors = ["red", "green", "blue"];
// console.log(colors);

// Using the Array() constructor
// new Array();
// const myArray = new Array();
// const myArray = new Array("January", "February", "March");

// Using array literal notation
const myArray = ["eggs", "bacon", "toast"];

// Using the split function
// let customerData = "Barb Seibert,3739 Sheila Lane,Goldfield,NV,89013";
// let customerData = "Barb Seibert, Esq.,3739 Sheila Lane,Goldfield,NV,89013";
let customerData =
  "'Barb Seibert, Esq.','3739 Sheila Lane','Goldfield', 'NV','89013'";
const customerDataArray = customerData.split("','");
console.log(customerDataArray);
