function toggle() {
  let extraDiv = document.getElementById("extra");
  let button = document.getElementsByClassName("button")[0];

  if (button.textContent == 'More') {
    extraDiv.style.display = 'block'
    button.textContent = 'Less';
  } else {
    extraDiv.style.display = 'none';
    button.textContent = 'More';
  }
}