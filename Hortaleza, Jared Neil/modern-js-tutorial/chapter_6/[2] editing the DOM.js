const para = document.querySelector("p");

// get text of the paragraph
// console.log(para.innerText);
// para.innerText = "ninjas are awesome!";
// para.innerText += "ninjas are awesome!";

const paras = document.querySelectorAll("p");

paras.forEach((para) => {
    console.log(para.innerText);
    para.innerText += " new text";
});

const content = document.querySelector(".content");

// editing a div
console.log(content.innerHTML);
content.innerHTML = `<h2> This is a new h2! </h2>`;

const people = ["mario", "luigi", "yoshi"];

// adding a p tag per person
people.forEach((person) => {
    content.innerHTML += `<p>${person}</p>`;
});
