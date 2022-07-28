const valueSomething = document.querySelector("#value");

let counterValue = 0;

const buttonDecrease = document.querySelector('[data-action="decrement"]');
const buttonIncrease = document.querySelector('[data-action="increment"]');

const buttonUpFunction = () => {
  counterValue -= 1;
  valueSomething.textContent = counterValue;
};

const buttonDownFunction = () => {
  counterValue += 1;
  valueSomething.textContent = counterValue;
};

buttonDecrease.addEventListener("click", buttonUpFunction);
buttonIncrease.addEventListener("click", buttonDownFunction);
