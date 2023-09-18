// get a reference to the ul
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

// making html per index
people.forEach((person) => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

// set html
ul.innerHTML = html;
