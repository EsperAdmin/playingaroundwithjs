// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

body.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue";

body.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.classList.add("colorDiv");
newDiv.style["background-color"] = "pink";

body.appendChild(newDiv);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

newDiv.appendChild(h1);

const p2 = document.createElement("p")
p2.textContent = "ME TOO!";

newDiv.appendChild(p2);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", (e) => {
    e.target.style.background = "blue";
});

console.log(document.querySelectorAll("div"));
