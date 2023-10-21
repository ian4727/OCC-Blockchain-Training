// list of paragraphs
const paras = document.querySelectorAll("p");

// loop through each paragraph
paras.forEach((para) => {
    // if it includes success or error, add classlist
    /* 
    textContent - gets all text
    innertext - only gets visible text
    */
   if (para.textContent.includes("success")) para.classList.add("success");
   if (para.textContent.includes("error")) para.classList.add("error");
});

// toggle classes
const title = document.querySelector(".title");

// if not in classlist, added automatically
title.classList.toggle('test');
// turn off/remove
title.classList.toggle('test');
