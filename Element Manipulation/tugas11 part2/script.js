let judul = document.querySelector("p");
judul.innerHTML = "My To Do List";

let list = document.getElementById("list");
list.innerHTML = `
<div class="row">
  <div class="col-8">
    <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         Tugas Baru
        </label>
    </div>
    </div>
<div class="col-auto">
<div class="btn"><i class="bi bi-trash"></i></div>
  </div>
</div>`;

let container = document.querySelector(".container");
container.style.margin = "135px auto";
container.style.maxWidth = "550px";
container.style.background = "#fff";
container.style.borderRadius = "7px";
container.style.padding = "30px ";

document.body.style.backgroundImage = "linear-gradient(to right,grey,lightgreen,lightblue,lightyellow)";

const title = document.getElementsByTagName("h1")[0];
title.setAttribute("names", "faissal");

const setPlace = document.querySelector("#input input").setAttribute("placeholder", "Masukan tugas baru");

const classlist = document.querySelector(".row");
