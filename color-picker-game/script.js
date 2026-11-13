var slider_r = document.getElementById("r");
var slider_g = document.getElementById("g");
var slider_b = document.getElementById("b");
var results = document.getElementById("results");
var guess = document.getElementById("guess");

var target_r = 0;
var target_g = 0;
var target_b = 0;
var target = document.getElementById("target");

var again = document.getElementById("again");
var submit = document.getElementById("submit");

function randint (a, b) {
  return Math.round((Math.random()*(b-a))+a);
}
function randColor () {
  target_r = randint(0, 255);
  target_g = randint(0, 255);
  target_b = randint(0, 255);
}
function setColor (elem, r, g, b) {
  elem.style.backgroundColor = `rgb(${target_r}, ${g}, ${b})`;
  elem.style.color = `rgb(${255-r}, ${255-g}, ${255-b})`;
}
function colorAccuracy () {
  let r_percentage = 1 - (Math.abs(target_r - slider_r.value) / 255);
  let g_percentage = 1 - (Math.abs(target_g - slider_g.value) / 255);
  let b_percentage = 1 - (Math.abs(target_b - slider_b.value) / 255);
  let total_percentage = ((r_percentage + g_percentage + b_percentage) / 3);
  let output = ""
  output += "Total: " + Math.round(total_percentage*100) + "%\n";
  output += "Red: " + Math.round(r_percentage*100) + "%\n";
  output += "Green: " + Math.round(g_percentage*100) + "%\n";
  output += "Blue: " + Math.round(b_percentage*100) + "%\n";
  results.innerText = output;
}

submit.onclick = function () {
  colorAccuracy();
  setColor(guess, slider_r.value, slider_g.value, slider_b.value);
}
again.onclick = function () {
  randColor();
  setColor(target, target_r, target_g, target_b);
  results.innerText = "";
};
