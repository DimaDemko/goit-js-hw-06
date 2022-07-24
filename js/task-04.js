let counterValue = 0;

const buttonDecrease = document.querySelector("[data-action='decrement']");
const buttonIncrease = document.querySelector('[data-action="increment"]');

buttonDecrease.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

buttonIncrease.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
