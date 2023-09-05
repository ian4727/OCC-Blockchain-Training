// querying the DOM (document object model)
// use a CSS selector, this gets the first occurence
const para = document.querySelector("body > h1");
console.log(para);

// get all occurences, outputs a nodelist
// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");

// a nodelist is like an array with less functions
// paras.forEach((para) => {
//     console.log(para);
// });

// get element by ID
const title = document.getElementById("page-title");
console.log(title);

// get element by classname
const errors = document.getElementsByClassName(".error");

// htmlcollections cannot be foreach'd, but can be indexed
console.log(errors);

// get elements by tag name
const paras = document.getElementsByTagName("p");
console.log(paras);
