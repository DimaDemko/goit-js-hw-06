const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  if (event.target.value.length === Number(input.dataset.length)) {
    input.className = "invalid";
  } else {
    input.className = "valid";
  }
}
