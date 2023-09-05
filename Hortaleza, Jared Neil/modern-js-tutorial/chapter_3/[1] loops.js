// for loops

/* 
    i = 0 - initialization variable (starting value)
    i < 5 - condition
    i++ - increment
*/
for (let i = 0; i < 5; i++) {
    console.log("in loop: ", i);
}

console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

// for loop goes for the length of the array
for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// while and do while loops

let i = 0;

/* 
    condition only
*/

while (i < 5) {
    console.log(`in loop: ${i}`);
    i++;
}

while (i < names.length) {
    console.log(names[i]);
    i++;
}

// do while runs at least once

do {
    console.log(`in loop: ${i}`);
    i++;
} while (i < 5);