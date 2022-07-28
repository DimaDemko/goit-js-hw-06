const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener("input", (event) => {
  const number = event.target.value;
  text.style.fontSize = `${number}px`;
});
