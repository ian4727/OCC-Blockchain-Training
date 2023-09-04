let age = 25;

// loose comparison (diff types can still be equal)

console.log(age == 25); // true
console.log(age == "25"); // true
console.log(age != 25); // false
console.log(age != "25"); // false

// strict comparison (diff types cannot be equal)

console.log(age === 25); // true
console.log(age === "25"); // false
console.log(age !== 25); // false
console.log(age !== "25"); // true
