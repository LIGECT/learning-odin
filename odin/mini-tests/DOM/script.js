const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: red";
container.appendChild(p);

const h3 = document.createElement("h3");
container.appendChild(h3);
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue";

const div = document.createElement("div");
div.style.cssText = "border: 2px solid black; background-color: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

container.appendChild(div);
