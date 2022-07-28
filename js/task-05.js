const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function enterText(event) {
  if (event.target.value == "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.target.value;
  }
}

input.addEventListener("input", enterText);
