// // querySelector
// const para = document.querySelector('div.error');
// const para = document.querySelector('p');
// const error = document.querySelectorAll('.error');
// const paras = document.querySelectorAll('p');

// // get an element by ID 
// const title = document.getElementById('page-title');

// // get elements by their class name
// const errors = document.getElementsByClassName('error');

// // get elements by their tag name 
// const paras = document.getElementsByTagName('p');

// // changing text of p
// para.innerText = "Ninjas are awesome!";

// // adding text to each p
// paras.forEach(p => {
//     console.log(p.innerText);
//     p.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>';

// const people = ['regel', 'louisa', 'lester'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// // changing link href and text
// const link = document.querySelector('a');
// link.setAttribute('href', 'www.netninja.com');
// link.innerText = 'The Net Ninja Website';

// // setting style attribute of p tags
// const msg = document.querySelector('p');
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

// // setting style margin and font size of title
// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');
// title.style.margin = '50px';
// title.style.fontSize = '60px';
// title.style.margin = '';

// // changing class of p tags
// const content = document.querySelector('p');
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// let result8 = email.includes('@');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    const text = p.textContent;
    if(text.includes('error')){
        p.classList.add('error');
    } 
    if (text.includes('success')){
        p.classList.add('success');
    }
});

// toggle method
const title = document.querySelector('.title');
// adds test class
title.classList.toggle('test');
// removes test class if it already has that class
title.classList.toggle('test');

