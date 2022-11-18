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

const h3 = document.querySelector("h6");
h3.innerText = "Contact list";
// h3.innerHTML = "<h1>Contact list 2</h6>"
// h3.textContent = "Contact list 3"
// background
/*
h3.style.background = "red";
h3.style.fontSize = "20px";
h3.style.padding = "0 10px";
*/

// const ul = document.querySelector(".contact_list > ul")
// ul.children[0].innerHTML = "HTML"
// ul.lastElementChild.innerText = "CSS"
// ul.children[1].innerHTML = "JavaScript"
// ul.children[2].innerHTML = "React"

// const li = document.querySelectorAll("li")

// li.forEach((x)=>{
//   x.style.background = "blue"
// })

// Javascript Events
const btn = document.querySelector(".toggle");
/*
btn.addEventListener("click", ((e)=>{
  const ul = document.querySelector(".contact_list > ul")
 if(ul.style.display === "block"){
  ul.style.display = "none"
 }
 else{
  ul.style.display = "block"
 }
}))
*/

// Form validation
const form = document.querySelector("form");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.querySelector(".msg");
console.log(msg)
function onSubmit(e) {
  e.preventDefault();
  if (nameField.value === "" || email.value === "") {
    // alert("Fields are mandatory")
    msg.style.display = "block";
    msg.style.color = "red";
    msg.textContent = "All fields are mandatory";
  } else {
    // console.log(nameField.value);
    // console.log(email.value)
    let ulElement = document.getElementById("contact_ul");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameField.value} | ${email.value}`)
    );
    console.log(ulElement.appendChild(li))
    nameField.value = ""
    email.value = ""
  }
}

form.addEventListener("submit", onSubmit);
