//DOM Selection

// getElementById -> element
const judul = document.getElementById("judul");
judul.style.color = "white";
judul.style.backgroundColor = "blue";
judul.innerHTML = "faissal";

//getElementsBytagName -> HTMLcolection
const p = document.getElementsByTagName("p");
// p[2].style.color = "blue";
p[0].style.backgroundColor = "blue";
p[1].style.backgroundColor = "violet";
p[2].style.backgroundColor = "orange";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "grey";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "28px";
h1.style.color = "white";

// getElementsByclassName;
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari javascript";
p1.style.color = "purple";

const table = document.getElementsByTagName("li");
table.forEach(function (item) {
  console.log(item);
  item.style.backgroundColor = "black";
});

// querySelector -> element
const changeLink = document.querySelector("section#a a");
changeLink.style.color = "red";

const check = document.querySelector("a");
const p3 = document.querySelector("section#a .p3");
p3.style.color = "purple";
p3.style.textAlign = "center";

const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "lightblue";
}

const sectionA = document.querySelector("section#a ");
const getP = sectionA.querySelectorAll("p")[1];

const p2 = document.querySelector("#a .p2");
p2.style.color = "blue";

const addTarget = document.querySelector("#a a");
addTarget.setAttribute("target", "_blank");

const Li2 = document.querySelector("#b ul");
const addColorLi2 = Li2.querySelectorAll("li")[1];
addColorLi2.style.backgroundColor = "green";
