const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(input.dataset.length)) {
    addGreenColor();
  } else {
    addRedColor();
  }
});

function addRedColor() {
  input.classList.remove("valid");
  input.classList.add("invalid");
}

function addGreenColor() {
  input.classList.remove("invalid");
  input.classList.add("valid");
}
