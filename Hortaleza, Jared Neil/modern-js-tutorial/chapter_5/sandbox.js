// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;

// only scoreOne is changed (primitive)
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// pointers, pointing to the object
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
// both reflect the change (reference)
console.log(userOne, userTwo);
