const div = document.querySelector("div");
const h1 = document.createElement("h1");
div.appendChild(h1);
h1.textContent = "About Me";

const body = document.querySelector("body");
const h3 = document.createElement("h3");
body.appendChild(h3);
h3.textContent =
  "Hi, my name is Ontaria Woods, and I am a Software Engineer in the making!!";

document.getElementById("selfie").addEventListener("click", () => {
  alert("Submitted!");
});

/*const p = document.createElement("p");
body.append(p);
p.textContent = <img src="Ontaria.png" />;*/
