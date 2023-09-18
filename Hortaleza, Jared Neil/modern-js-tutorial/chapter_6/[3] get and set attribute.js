// setting/getting attributes

const link = document.querySelector("a");

link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerText = "The Net Ninja Website";
console.log(link.getAttribute("href"));

const msg = document.querySelector("p");

msg.setAttribute("class", "success");
console.log(msg.getAttribute("class"));

// applying style
msg.setAttribute("style", "color: green;");
