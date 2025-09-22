const heading = document.querySelector("#mainHeading");
const fruitList = document.querySelector("#fruits");
const button = document.querySelector("#changeBtn");

console.log(heading);       // Logs <h1> element
console.log(fruitList);     // Logs <ul> element with children
console.log(fruitList.children); // HTMLCollection of <li>s

button.addEventListener("click", () => {
  heading.innerText = "The DOM is alive!";
  fruitList.children[0].innerText = "Mango"; // changes first li
  fruitList.appendChild(document.createElement("li")).innerText = "Orange"; // adds new li
});

console.log(document.body);        // show all children of body
console.log(document.body.childNodes); // includes text nodes
console.dir(fruitList);            // shows element as object with properties

