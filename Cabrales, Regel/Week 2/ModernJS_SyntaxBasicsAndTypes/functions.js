//get reference from ul
const ul = document.querySelector('.people');

const people = ['regel', 'louisa', 'lester', 'john', 'cabrales'];

let html = '';

people.forEach(person => {
    // create html template
    html += `<li style="color: #ff0099">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;