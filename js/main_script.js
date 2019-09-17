const container = document.querySelector("#container");

// add the following:

// a <div> with class "content" and text "This is the glorious text-content!"
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

// a <div> with a black border and pink background color with the following 
// elements inside of it: 
//   an <h1> that says “I’m in a div”
//   a <p> that says “ME TOO!”
const content2 = document.createElement("div");
content2.style.border = "1px solid black";
content2.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

content2.appendChild(h1);
content2.appendChild(p2);
container.appendChild(content2);