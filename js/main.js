// let backtop = document.getElementById("backtop");

// function toggleBacktop() {
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     backtop.style.opacity = 1;
//   } else {
//     backtop.style.opacity = 0;
//   }
// }

// window.addEventListener("scroll", function () {
//   toggleBacktop();
// });

function display() {
  let catalog = document.getElementById("navbar-catalog");
  catalog.classList.toggle("display");
}

let numInput = document.getElementById("numInput");
let loginDiv = document.getElementById("modalLogin");
let regNum =/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
function closeModal() {
  loginDiv.style.display = "none";
}

function openModal() {
  loginDiv.style.display = "flex";
}

function checkInput() {
  if (regNum.test(numInput.value)==true) {
    closeModal();
  } else if (numInput.value == "") {
    alert("Please fill out this field");
  } else {
    alert("Wrong number!");
  }
}
