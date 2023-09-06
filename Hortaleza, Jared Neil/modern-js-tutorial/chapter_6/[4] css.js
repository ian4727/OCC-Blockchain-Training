const title = document.querySelector("h1");

// overwrites the style
// title.setAttribute("style", "margin: 50px;");

console.log(title.style);
// get specific style
console.log(title.style.color);

// added margin
title.style.margin = "50px";
// overwrite
title.style.color = "crimson";
title.style.fontSize = "60px";
// remove margin
title.style.margin = "";
