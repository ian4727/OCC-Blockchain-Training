// common string methods

let email = "jared@jared.com";

// last instance of the string in the quotes
let result = email.lastIndexOf("d");
console.log(result);

// solo out from index 0 to 5, but cannot switch out the indexes
result = email.slice(0, 5);
console.log(result);
result = email.slice(10, 5);
console.log(result);

// substr is deprecated
// substr starts from index 4 and moves forward 10 to take until index 14
result = email.substr(4, 10);
console.log(result);

// solo out from index 4 to 10, just like slice, but can switch out the indexes
result = email.substring(0, 10);
console.log(result);
result = email.substring(10, 0);
console.log(result);

// replace first occurence of string with another string
result = email.replace('j', 'w');
console.log(result);
result = email.replace('jared', 'wombo');
console.log(result);
