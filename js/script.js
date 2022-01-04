let body = document.body;
let toggle_btn = document.getElementById("toggle-btn");

toggle_btn.addEventListener("click", themeSwitch);

function themeSwitch() {
  body.classList.toggle("body-light");
}
