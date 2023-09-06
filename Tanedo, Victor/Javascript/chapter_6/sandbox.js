// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(p => {
//     console.log(p);
// });

// get an element by ID
// const title = document.getElementById('page-title');

// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

//gets elements based on tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// const para = document.querySelector('p');

// para.innerText = 'ninjas are awesome';
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     console.log(p.innerText);
//     p.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML += '<h2>This is a new h2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(p => {
//     content.innerHTML += `<p>${p}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://www.fb.com/');
// link.innerText = "Facebook";

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');
// //title.setAttribute('style', 'margin: 50px');

// console.log(title.style)
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';

// title.style.fontSize = '60px';
// title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    para.innerText.split(' ').forEach(p => {
        if(p == 'success')
            para.classList.add('success');
        else if(p == 'error')
            para.classList.add('error');
    });
});

const title = document.querySelector('.title');
title.classList.toggle('test');