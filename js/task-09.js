function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const text = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  text.textContent = `${newColor}`;
  body.style.backgroundColor = `${newColor}`;
});
