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
  let catalog=document.getElementById("navbar-catalog");
  catalog.classList.toggle("display");
}