// set form input
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
  body.style.background = "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
}

// set event lisentner for color 1
color1.addEventListener("input", setGradient);

// set event lisentner for color 2
color2.addEventListener("input", setGradient);