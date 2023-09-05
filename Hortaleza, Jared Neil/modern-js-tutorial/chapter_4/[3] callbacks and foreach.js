// callbacks & foreach

/* 
    PASSING A FUNCTION AS AN ARGUMENT
*/

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc((value) => {
    // do something
    console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// first parameter is the index value, second is the index
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

// array methods
// this will loop once per index in the array
people.forEach(logPerson);
