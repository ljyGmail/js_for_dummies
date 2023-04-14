const firstObject = { prop1: "test", prop2: "test2" };
const secondObject = { prop1: "test", prop2: "test2" };

console.log(`firstObject == secondObject: ${firstObject == secondObject}`);
console.log(
  `firstObject.prop1 == secondObject.prop1: ${
    firstObject.prop1 === secondObject.prop1
  }`
);

const thirdObject = secondObject;
thirdObject.prop1 = "orange";

console.log(
  `After setting prop1 in thirdObject: ${
    secondObject.prop1 === thirdObject.prop1
  }`
);

thirdObject.prop3 = "claw hammer";
console.log(
  `After adding prop3 in thirdObject: ${secondObject.prop3}, ${thirdObject.prop3}`
);

console.log(`prop3 in firstObject: ${firstObject.prop3}`);

console.log(`secondObject === thirdObject: ${secondObject === thirdObject}`);

const fourthObject = { ...secondObject };

console.log(`fourthObject === secondObject: ${fourthObject === secondObject}`);
