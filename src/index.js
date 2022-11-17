// console.log(window)
// console.log(window.document)
// console.log(window.location)
// DOM Manipulation

// Single selection
// console.log(document.getElementById("list"))
// console.log(document.querySelector("li"));

// double selection
// console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByTagName("li"))
/*
const nodeList = document.querySelectorAll(".item");

nodeList.forEach((node) => {
  console.log(node);
});
*/

const h3 = document.querySelector("h6")
// h3.innerText = "Contact list"
// h3.innerHTML = "<h1>Contact list 2</h6>"
// h3.textContent = "Contact list 3"
// background

h3.style.background = "red"
h3.style.fontSize = "20px"
h3.style.padding = "0 10px"
